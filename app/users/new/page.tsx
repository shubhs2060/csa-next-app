'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = async() => {
 const router  = useRouter()
  return (
    <div>
        
      <button className='btn btn-primary' onClick={() => router.push("/users")}>Create</button>
      <h2>test</h2>
    </div>
  )
}

export default NewUserPage
