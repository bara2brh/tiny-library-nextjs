import { DatabaseArrowDown, Search } from "lucide-react";
import { DataType } from "../types";
import {data} from '@/app/data/data'

export function getBookDetails(bookId:number) {
        const bookDetails = data.filter((book)=>book.id===bookId)
        return bookDetails[0]
    }

export function getBooks(category?:string,search?:string){
    let filteredBooks = [...data]
    if(category){
        filteredBooks = data.filter((book)=>book.category==category)
    }
    if(search){
        filteredBooks= data.filter((book)=>(book.name.toLowerCase().includes(search.toLowerCase())))
    }
    return filteredBooks

}
