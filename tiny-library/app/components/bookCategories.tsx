'use client'
import Link from 'next/link'
import {data} from '@/app/data/data'
import NavLink from '@/app/components/navLink'
import { useSearchParams } from 'next/navigation'

export default function BookCategories(){
    const ActiveCategory = useSearchParams().get('category')
    const allCategories = data.map((book)=>book.category)
    const categoriesSet = Array.from(new Set(allCategories))
    return <div className='gap-5 mx-1 my-4'>
        
        <ul className="flex uppercase whitespace-nowrap overflow-auto scrollbar-none flex-nowrap ">
        <NavLink href='/books' isActive={!ActiveCategory}>ALL</NavLink>
        {categoriesSet.map((category)=>{return <NavLink key={category} href={`/books/?category=${category}`} isActive={category==ActiveCategory} >{category}</NavLink>})}
        </ul>
    </div>
}