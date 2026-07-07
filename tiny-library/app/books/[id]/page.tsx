'use client'

import { useParams } from 'next/navigation'
import {getBookDetails} from '@/app/utils/books'
import { Heart } from 'lucide-react';

import Image from 'next/image'

export default function BookDetails() {
    // get id from url params
    const { id } = useParams()
    
    const book = getBookDetails(Number(id))
    
    return <div className='flex flex-col gap-3 p-3'>
        <Image src={book.image} className='max-h-auto rounded-lg object-cover w-full ' alt='card image' width={1799} height={1799}></Image>
    <div className='flex text-center items-center gap-1'>
            <Heart color='#99a1af' strokeWidth='2px' />
            <p className='text-sm text-gray-700'> {book.likes}</p>
        </div>
    <h1>{book.name}</h1>
    <h4 className='mt-2'>{book.author}</h4>
    {/* just a lorem for designing purposes */}
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in magni, ipsam at accusantium labore assumenda earum perspiciatis maxime vel nesciunt non cum nobis, neque rerum, fugit aliquid tempore molestiae!</p>

    <p className='fixed bottom-5'>Added on: {book.dateAdded.slice(0,10)}</p>

    </div>
}