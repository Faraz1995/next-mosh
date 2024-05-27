'use client'
import { useState } from 'react'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { options } from './api/auth/[...nextauth]/options'
import code from '@/public/images/code.png'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./components/HeavyComponent'))
export default function Home() {
  // const session = await getServerSession(options)
  const [isVisible, setVisible] = useState(false)
  return (
    <main className='relative h-screen'>
      {/* <p>hello {session && <span>{session.user!.name}</span>}</p>
      <Link href={'/users'}>users</Link> */}
      {/* <Image src={code} alt='code' /> */}
      <h1>home page</h1>
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }]
          const sorted = _.orderBy(users, ['name'])
          console.log(sorted)
          setVisible(true)
        }}
      >
        show
      </button>
      {isVisible && <HeavyComponent />}
      {/* <Image
        src={'https://bit.ly/react-cover'}
        alt='code'
        fill
        className='object-cover'
        sizes='(max-width:480) 100vw, (max-width: 768px) 50vw, 33vw'
      /> */}
    </main>
  )
}
