import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <header className='absolute top-0 z-50 font-roboto w-full'>
      <nav className='bg-black text-white flex w-auto justify-between items-center px-14 py-4'>
        <Link href='/'>
          <Image src="/logoWhite.png" alt='logo' width={64} height={64}></Image>
        </Link>
        <div className='flex space-x-4 font-roboto font-base font-normal'>
          <Link href="/">
            <span>Services</span>
          </Link>
          <Link href="/">
            <span>Projects</span>
          </Link>
          <Link href="/">
            <span>About</span>
          </Link>
          <Link href="/">
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar