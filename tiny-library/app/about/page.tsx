import Image from 'next/image'
import { Layers, Globe, Flag } from 'lucide-react';

export default function About() {
    return <div className='flex flex-col gap-3 p-6 md:px-30 '>
        <div className='flex flex-col gap-3 md:gap-20 md:flex-row md:self-center md:items-center md:justify-center md:max-w-250'>
        <Image src={'/hero-image-square.jpg'} className='max-h-auto object-cover w-full md:max-w-100 ' alt='about image' width={1000} height={600}></Image>
        <div className='flex flex-col gap-3'>
        <p className='uppercase text-gray-500 text-sm'>About Tiny Library</p>
        <h1 className='text-3xl font-bold'>Small shelf, big impact</h1>
        <p>Tiny Library started as a simple idea: make it easier for curious readers to actually find books
            they’ll love, not just scroll
            endless lists. Every title here is chosen with care, not algorithms.</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 m-5"></hr>
        <h1 className='flex gap-3 items-center text-2xl font-bold'><Layers /> Curated, not crowded</h1>
        <p>Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.</p>

        <h1 className='flex pt-4 gap-3 items-center text-2xl font-bold'><Globe /> Easy to browse</h1>
        <p>Clear categories and simple descriptions make it quick to choose what you actually want to read next.</p>

        <h1 className='flex gap-3 pt-4 items-center text-2xl font-bold'><Flag /> Readers first</h1>
        <p>Every part of Tiny Library is designed to help you spend less time searching and more time reading.</p>

        <Image  loading="eager" src="/tinylibrary-logo.png" width={200} height={200} 
                alt='tiny-library website logo'
                 className='items-center mx-auto' />

    </div>
}