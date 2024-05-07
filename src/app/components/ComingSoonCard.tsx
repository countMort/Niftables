import Image from "next/image"
import Gradient from "./Gradient"
import { ComingSoonCardProps } from "../app.types"

export function ComingSoonCard({
  image,
  title,
  subtitle,
  description,
}: ComingSoonCardProps) {
  return (
    <article className="relative w-[28.3125rem] py-[1.875rem] pr-[1.875rem] rounded-md bg-gray-1/60">
      <span className="absolute top-0 right-[1.875rem] -translate-y-1/2 py-[0.1875rem] px-1.5 rounded-full text-black font-bold bg-white text-xs leading-[110%]">
        Coming Soon
      </span>
      <header className="ml-[1.875rem]">
        <h2 className="mb-[0.9375rem]">{title}</h2>
        <h3 className="text-gradient h-[2.15em]">{subtitle}</h3>
      </header>
      <div className="relative w-full mt-[1.875rem] mb-7 rounded-e-lg overflow-hidden">
        <Image src={image} alt="token" />
        <Gradient className="from-blue-2 to-purple-2 mix-blend-color" />
      </div>
      <p className="ml-[1.875rem]">{description}</p>
    </article>
  )
}
