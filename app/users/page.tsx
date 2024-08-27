import React from 'react'
import UserTable from '@/app/users/UserTable'
import Link from 'next/link'
interface Props {
  searchParams: { sortBy : string}
}
const User = ({searchParams: {sortBy}}: Props) => {
  return (
    <>
      <h1> Users Page</h1>
      <Link href="/users/new" className='btn'> New User</Link>
      <UserTable sortOrder={sortBy} />
    </>
  )
}

export default User
