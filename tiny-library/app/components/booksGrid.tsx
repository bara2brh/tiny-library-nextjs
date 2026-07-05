import BookCard from "./bookCard"
import { data } from "../data/data"
export default function BooksGrid() {
    const booksData = data.map(
        (book) => <BookCard key={book.id} id={book.id} title={book.name} category={book.category} likes={book.likes} />)
    return <div className="grid grid-cols-2">
    {booksData}
    </div>
}
