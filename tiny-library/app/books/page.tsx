export const dynamic = "force-dynamic"; 
import Link from 'next/link'
import BookCategories from '../components/bookCategories'
import { Suspense } from "react";
import BooksGrid from '../components/booksGrid'
export default function Books() {
    return <>
    <BookCategories/>
   <Suspense fallback={<div>Loading...</div>}>
      <BooksGrid />
    </Suspense>
    </>
}