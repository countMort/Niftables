import Image from "next/image"
import logo_img from "@/assets/Logo.svg"
import Link from "next/link"
import LinkWithBadge from "./LinkWithBadge"

export default function Header() {
  return (
    <header className="fixed z-50 px-[3.125rem] py-[1.875rem] w-full">
      <nav className="flex justify-between">
        <Link href="/">
          <Image src={logo_img} alt="CREON" className="w-[8.75rem]" />
        </Link>
        <ul className="flex space-x-8 font-bold my-auto items-center">
          <LinkWithBadge badge="">Creon Pass</LinkWithBadge>
          <LinkWithBadge>Token</LinkWithBadge>
          <LinkWithBadge>Al Revenue.co</LinkWithBadge>
          <LinkWithBadge>Al Launchpad</LinkWithBadge>
          <li>
            <a href="#" className="hover:text-gray-200 py-[0.75rem] px-[1.875rem] block border rounded-md">
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
