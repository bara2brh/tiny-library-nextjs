
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center h-screen mt-6 md:mt-0 md:gap-20  ">
      <div className="space-y-6 mx-5 md:max-w-150">
        <h1 className="text-[50px]  font-bold leading-15">Find your next favourite book</h1>
        <p className="text-[23px] max-w-150" >A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
        <Link href={'/books'} className='border-2 px-3 py-2 text-l uppercase font-semibold'>Browse Books</Link>
      </div>
       <Image className=' flex-1 md:flex-0 mt-8 px-3 py-7 md:w-100 md:h-100' src={'/hero-image.png'} width={1024} height={1024} alt='hero home page image' />


    </main>
  );
}
