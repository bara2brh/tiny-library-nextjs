'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { bookCardProps } from '../types'
import { Heart } from 'lucide-react';
export default function BookCard({id,image,title,author,category,likes}:bookCardProps){
    return <Link href={`/books/${id}`}><div className="flex flex-col border border-gray-300 hover:shadow-xl rounded-lg ">
        <Image src={image} className='max-h-auto rounded-t-lg object-cover w-full ' alt='card image' width={1799} height={1799}></Image>
        <div className='p-2'>
        <h2 className='font-bold mt-2 truncate hover:text-orange-400'>{title}</h2>
        <h4 className='mt-2'>{author}</h4>
        <p className='text-sm w-max my-4 border border-gray-400 capitalize py-1 rounded-2xl px-2'>{category}</p>
        <div className='flex text-center items-center gap-1'>
            <Heart color='#99a1af' strokeWidth='2px' />
            <p className='text-sm text-gray-700'> {likes}</p>
        </div>
    </div>
    </div>
    </Link>
}