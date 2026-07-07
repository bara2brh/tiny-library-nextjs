'use client'
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/app/components/navLink'
import { usePathname } from 'next/navigation'
import type { ReactElement } from 'react';
export default function Navbar(): ReactElement {
    const pathName = usePathname()
   
    return <div className='bg-white flex flex-row justify-between px-4'>
        <Link href={'/'}><Image  loading="eager" src="/tinylibrary-logo.png" width={200} height={200} 
        alt='tiny-library website logo'
         className='w-20 h-auto'  /></Link>
        <ul className='flex items-center gap-1.5'>
            
        <NavLink href='/books' isActive={pathName=='/books'}>BOOKS</NavLink>
        <NavLink href='/about' isActive={pathName=='/about'}>ABOUT</NavLink>
        </ul>

    </div>

}