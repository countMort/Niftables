import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NIFTABLES",
  description: "Morteza Gholami's Assignment",
}

// 0.6 * 16px

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ fontSize: "9.6px" }}>
      <body className="relative text-white bg-black leading-[130%] font-sato text-[1.125rem]">
        {children}
      </body>
    </html>
  )
}
