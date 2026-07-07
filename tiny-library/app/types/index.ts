import type {ReactNode} from 'react'
export type DataType = {
    id: number,
    name: string,
    author: string,
    likes: number,
    image: string,
    category: string,
    dateAdded: string,

}

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}

export type bookCardProps = {
    id:number,
    image:string,
    title:string,
    category:string,
    likes:number,
    author:string
}