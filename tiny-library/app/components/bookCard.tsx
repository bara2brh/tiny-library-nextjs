'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { bookCardProps } from '../types'
import { Heart } from 'lucide-react';
export default function BookCard({id,title,category,likes}:bookCardProps){
    return <Link href={`/books/${id}`}><div className="flex flex-col border border-gray-400 rounded-xl p-2 m-2">
        <Image src='/hero-image-square.png' className='max-h-auto' alt='card image' width={1799} height={1799}></Image>
        <h2 className='font-bold mt-2 truncate hover:text-orange-400'>{title}</h2>
        <p className='text-sm w-max my-4 border border-gray-400 capitalize py-1 rounded-2xl px-2'>{category}</p>
        <div className='flex text-center items-center gap-1'>
            <Heart color='#99a1af' strokeWidth='2px' />
            <p className='text-sm text-gray-700'> {likes}</p>
        </div>
    </div>
    </Link>
}