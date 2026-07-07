'use client'
import BookCard from "./bookCard"
import { getBooks } from '@/app/utils/books'
import { useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react';
import Form from 'next/form'


export default function BooksGrid() {

    const searchParams = useSearchParams()
    const category = searchParams.get("category") ?? undefined;
    const search = searchParams.get("search") ?? undefined;

    const books = getBooks(category, search);
    const booksData = books.map(
        (book) => <BookCard
            key={book.id}
            id={book.id}
            image={book.image}
            title={book.name}
            author={book.author}
            category={book.category}
            likes={book.likes} />)
    return <div className="flex flex-col">
        <div className="py-3 px-15">
            <div className="rounded-2xl flex gap-4 py-1 px-3 border border-gray-300">
                <Search color="#bfc3c9" />
                <Form action='/books'>
                    <input autoComplete="off" className="border-none focus:outline-hidden" type="text" name="search" placeholder="Search for any book ..." />
                </Form>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 p-3">
            {booksData}
        </div>
    </div>
}
