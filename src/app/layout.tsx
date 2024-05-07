import { Metadata } from "next";
import "./globals.css"


export const metadata: Metadata = {
  title: "NIFTABLES",
  description: "Morteza Gholami's Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{fontSize: '10.67px'}}>
      <body className="text-white bg-black leading-[130%] font-sato text-[1.125rem]">{children}</body>
    </html>
  )
}
