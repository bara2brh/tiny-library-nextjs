import { DatabaseArrowDown } from "lucide-react";
import { DataType } from "../types";
import {data} from '@/app/data/data'

export function getBookDetails(bookId:number) {
        const bookDetails = data.filter((book)=>book.id===bookId)
        return bookDetails[0]
    }

export function getBooks(category:string|undefined){
    let filteredBooks = [...data]
    if(category){
        filteredBooks = data.filter((book)=>book.category==category)
    }
    return filteredBooks

}
