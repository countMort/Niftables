import Image from "next/image"
import logo_img from "@/assets/Logo.svg"
import Link from "next/link"
import LinkWithBadge from "./LinkWithBadge"

export default function Header() {
  return (
    <div className="fixed z-50 flex bg-transparent px-4 py-2 justify-between w-full">
      <Link href="/">
        <Image src={logo_img} alt="CREON" width={140} height={39}></Image>
      </Link>
      <ul className="flex space-x-8 font-bold">
        <LinkWithBadge badge="">Creon Pass</LinkWithBadge>
        <LinkWithBadge>Token</LinkWithBadge>
        <LinkWithBadge>Al Revenue.co</LinkWithBadge>
        <LinkWithBadge>Al Launchpad</LinkWithBadge>
        <li>
          <a href="#" className="hover:text-gray-200">
            Connect
          </a>
        </li>
      </ul>
    </div>
  )
}
