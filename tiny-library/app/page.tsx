
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col justify-center h-screen mt-6 ">
      <div className="space-y-6 flex-1 mx-5">
        <h1 className="text-[50px] font-bold leading-15">Find your next favourite book</h1>
        <p className="text-[23px]" >A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
        <Link href={'/books'} className='border-2 px-3 py-2 text-l uppercase font-semibold'>Browse Books</Link>
        <Image className='mt-8' src={'/hero-image.png'} width={1798} height={1799} alt='hero home page image' />
      </div>

    </main>
  );
}
