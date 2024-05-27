import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'
interface Props {
  searchParams: { sortOrder: string }
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder)
  return (
    <div>
      <h1>users</h1>
      <Link href={'/users/new'} className='btn'>
        new user
      </Link>
      <Suspense fallback={<p>loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  )
}

export default UsersPage
