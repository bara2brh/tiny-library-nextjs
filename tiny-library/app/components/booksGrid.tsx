import BookCard from "./bookCard"
import { data } from "../data/data"
export default function BooksGrid() {
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
