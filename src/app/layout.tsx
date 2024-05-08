import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NIFTABLES",
  description: "Morteza Gholami's Assignment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="text-[5px] sm:text-[5px] md:text-[6px] lg:text-[8px] xl:text-[10px] 2xl-text-[12px]"
    >
      <body className="relative text-white bg-black leading-[130%] font-sato text-[1.125rem]">
        {children}
      </body>
    </html>
  )
}
