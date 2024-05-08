import Image from "next/image"
import Gradient from "./Gradient"
import creon_img from "@/assets/creon-pass-nft.png"
import dark_shape from "@/assets/Dark shape.svg"
import styles from "../app.module.css"

export default function CreonPassSection() {
  return (
    <section
      className={`${styles.creon_pass} flex flex-wrap items-center mr-0`}
    >
      <div className="w-full sm:w-[43.75rem] max-sm:text-center">
        <h1>creon pass nft</h1>
        <hr className="border-gray-1 my-[1.875rem]" />
        <h3 className="text-gradient mb-10">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </h3>
        <ul className="space-y-2.5">
          <li>Pre-launch investment opportunities for upcoming AI projects</li>
          <li>Free and early access to Creon built AI projects</li>
          <li>Higher allocation limits on the Creon AI Launchpad</li>
          <li>Revenue share distribution from Creon built AI projects</li>
        </ul>
        <button className="gradient mt-[4.5rem] pt-4 pb-[1.125rem] pt-4 px-40 rounded-md">
          Buy Creon Pass
        </button>
      </div>
      <div className="relative size-[50.5rem] mr-[8.25rem] max-sm:hidden">
        <Image src={creon_img} alt="creon_img" />
        <Image
          src={dark_shape}
          alt="dark shape"
          className="absolute top-0 bottom-0 left-0 right-0"
        />
        <Gradient />
      </div>
    </section>
  )
}
