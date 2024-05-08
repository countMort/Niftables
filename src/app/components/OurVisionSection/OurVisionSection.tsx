import Image from "next/image"
import ExpansionPanelGroup from "./ExpansionPanelGroup"
import creon_stone_img from "@/assets/CREON 1.png"

export default function OurVisionSection() {
  return (
    <section className="relative flex flex-wrap">
      <h2 className="text-gradient w-1/2 sm:w-[43.75rem] max-sm:my-auto">
        <span className="text-white">
          Our vision is to support the innovation of AI blockchain projects
        </span>{" "}
        while prioritizing communities and democratizing profits
      </h2>
      <div className="sm:mt-[7.1875rem] ml-auto sm:w-[34.5rem] w-1/2">
        <ExpansionPanelGroup />
      </div>
      <Image
        src={creon_stone_img}
        alt="Creon Stone"
        className="absolute sm:bottom-0 bottom-1/2 max-sm:translate-y-1/2 sm:left-[7.4375rem] left-0 w-full sm:w-[52.25rem] z-[-1]"
      />
    </section>
  )
}
