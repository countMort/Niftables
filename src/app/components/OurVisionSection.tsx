import Image from "next/image"
import ExpansionPanelGroup from "./ExpansionPanelGroup"
import creon_stone_img from "@/assets/CREON 1.svg"

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
        <ExpansionPanelGroup></ExpansionPanelGroup>
      </div>
      <Image className="absolute bottom-0 left-[7.4375rem] z-[-1] w-[52.25rem]" src={creon_stone_img} alt="Creon Stone" />
    </section>
  )
}
