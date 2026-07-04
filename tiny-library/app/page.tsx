
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex flex-col justify-center h-screen my-6 ">
      <div className="space-y-6 flex-1 mx-5">
        <h1 className="text-[50px] font-bold leading-15">Find your next favourite book</h1>
        <p className="text-[23px]" >A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
        <Image src={'/hero-image.png'} width={1798} height={1799} alt='hero home page image' />
      </div>

    </main>
  );
}
