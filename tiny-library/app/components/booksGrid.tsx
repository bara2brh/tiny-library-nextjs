'use client'
import BookCard from "./bookCard"
import { getBooks } from '@/app/utils/books'
import { useSearchParams } from 'next/navigation'


export default function BooksGrid() {

    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    
    const data = getBooks(category||undefined)
    const booksData = data.map(
        (book) => <BookCard
            key={book.id}
            id={book.id}
            image={book.image}
            title={book.name}
            author={book.author}
            category={book.category}
            likes={book.likes} />)
    return <div className="grid grid-cols-2 gap-3 p-3">
        {booksData}
    </div>
}
