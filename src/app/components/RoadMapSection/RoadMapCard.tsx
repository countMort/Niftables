import Image from "next/image"
import { RoadMapProps } from "../../app.types"
import Gradient from "../Gradient"

export function RoadMapCard({ title, description, image }: RoadMapProps) {
  return (
    <article className="max-sm:relative flex rounded-md bg-gray-1/60">
      <div className="p-10">
        <h2 className="mb-[0.9375rem]">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="absolute sm:relative max-sm:left-0 max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:z-[-1] sm:shrink-0">
        <div className="relative sm:w-[28.3125rem] w-full h-full">
          <Image
            className="mix-blend-luminosity max-h-full"
            src={image}
            alt="token"
          />
          <Gradient className="from-blue-2 to-purple-2 mix-blend-overlay" />
        </div>
      </div>
    </article>
  )
}
