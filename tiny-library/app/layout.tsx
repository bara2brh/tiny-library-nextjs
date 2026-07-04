import "./globals.css";
import Navbar from "./components/navbar";
import { Lato,Nunito_Sans } from 'next/font/google'


const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400",  "700", "900"],
  variable: "--font-lato",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["1000", "300", "400",  "700", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${nunitoSans.className} ${lato.variable} `}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
