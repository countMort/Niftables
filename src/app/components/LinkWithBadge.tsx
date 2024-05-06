import Link from "next/link"
import { LinkWithBadgeProps } from "../app.types"

export default function LinkWithBadge({
  children,
  badge = "SOON",
}: LinkWithBadgeProps) {
  return (
    <li className="flex">
      <Link href="/" className="hover:text-gray-200 text-lg">
        {children}
      </Link>
      {badge && (
        <span className="pt-0.5 pb-px px-1 mb-auto ml-1 rounded-full text-purple-1 bg-black text-xs leading-[110%]">
          {badge}
        </span>
      )}
    </li>
  )
}
