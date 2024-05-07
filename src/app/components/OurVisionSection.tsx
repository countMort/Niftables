import Image from "next/image"
import ExpansionPanelGroup from "./ExpansionPanelGroup"
import creon_stone_img from "@/assets/CREON 1.png"

export default function OurVisionSection() {
  return (
    <section className="relative flex flex-wrap">
      <h2 className="text-gradient w-[43.75rem]">
        <span className="text-white">
          Our vision is to support the innovation of AI blockchain projects
        </span>{" "}
        while prioritizing communities and democratizing profits
      </h2>
      <div className="mt-[7.1875rem] ml-auto w-[34.5rem]">
        <ExpansionPanelGroup />
      </div>
      <div className="absolute bottom-0 left-[7.4375rem] w-[52.25rem] z-[-1]">
        <div className="relative">
          <Image src={creon_stone_img} alt="Creon Stone" />
          <div className="absolute bg-gradient-to-t bottom-0 top-[27.375rem] left-0 right-0 from-black to-black/0"></div>
        </div>
      </div>
    </section>
  )
}
