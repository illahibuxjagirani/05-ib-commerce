'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
    {Name: 'Home', href: '/'},
    {Name: 'Men', href: '/Men'},
    {Name: 'Women', href: '/Women'},
    {Name: 'Teens', href: '/Teens'},
]

function Navbar() {
    let pathName = usePathname()
  return (
    <header className='mb-8 border-b'>
        <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
            <Link href={'/'}>
            <h1 className='text-2xl font-bold'><span className='italic text-4xl text-slate-900'>IB</span><span className='text-primary'>Commerce</span></h1>
            </Link>

            <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                {
                    links.map((link, idx) => ( 
                       <div key={idx}>
                            {pathName === link.href ? (
                                <Link href={link.href} className='
                                text-lg
                                font-semibold text-primary
                                '>{link.Name}</Link>
                            ):(
                                <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>
                                    {link.Name}
                                </Link>
                            )}
                       </div>
                    ))
                }
            </nav>

        </div>
        

    </header>
  )
}

export default Navbar