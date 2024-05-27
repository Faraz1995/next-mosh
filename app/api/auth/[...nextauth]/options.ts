import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/prisma/client'
import bcrypt from 'bcrypt'

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'your email' },
        password: { label: 'password', type: 'password', placeholder: 'your password' }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        if (!user) return null

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        )
        if (passwordMatch) {
          return user
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  }
}
