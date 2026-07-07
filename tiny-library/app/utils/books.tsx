import { DataType } from "../types";
import {data} from '@/app/data/data'

export function getBookDetails(bookId:number) {
        const bookDetails = data.filter((book)=>book.id===bookId)
        return bookDetails[0]
    }

