import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">CSA Next</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li> <Link href="/users">Users</Link></li>
            <li><Link href="/images">Images</Link></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
                <li><Link href="/images">Images</Link></li>
               
                

            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar
