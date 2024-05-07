import Image from "next/image"
import { RoadMapProps } from "../app.types"
import Gradient from "./Gradient"

export function RoadMapCard({ title, description, image }: RoadMapProps) {
  return (
    <article className="flex rounded-md bg-gray-1/60">
      <div className="p-10">
        <h2 className="mb-[0.9375rem]">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="relative w-[28.3125rem] shrink-0">
        <Image className="mix-blend-luminosity" src={image} alt="token" />
        <Gradient className="from-blue-2 to-purple-2 mix-blend-overlay" />
      </div>
    </article>
  )
}
