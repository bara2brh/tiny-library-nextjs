import Image from 'next/image';
import NavLink from '@/app/components/navLink'
import React, { ReactElement } from 'react';
export default function Navbar(): ReactElement {
    return <div className='bg-white flex flex-row justify-between px-4'>
        <Image src="/tinylibrary-logo.png" width={200} height={200} 
        alt='tiny-library website logo'
         className='w-[80px] h-auto'  />
        <ul className='flex items-center gap-1.5'>
            
        <NavLink href='/books' isActive={false}>BOOKS</NavLink>
        <NavLink href='/about' isActive={true}>ABOUT</NavLink>
        </ul>

    </div>

}