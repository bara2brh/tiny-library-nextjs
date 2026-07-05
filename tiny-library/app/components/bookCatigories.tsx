import Link from 'next/link'
import {data} from '@/app/data/data'
import NavLink from '@/app/components/navLink'

export default function BookCatigories(){
    const allCatigories = data.map((book)=>book.category)
    const catigoriesSet = Array.from(new Set(allCatigories))
    return <div className='gap-5 mx-1 my-4'>
        
        <ul className="flex uppercase whitespace-nowrap overflow-auto scrollbar-thin flex-nowrap ">
        <NavLink href='/'>ALL</NavLink>
        {catigoriesSet.map((catigory)=>{return <NavLink key={catigory} href={`/books/${catigory}`}>{catigory}</NavLink>})}
        </ul>
    </div>
}