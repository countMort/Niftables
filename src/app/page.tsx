"use client"
import Header from "./components/Header/Header"
import HeadingSection from "./components/HeadingSection"
import CreonPassSection from "./components/CreonPassSection"
import ProfitingThroughSection from "./components/ProfitingThroughSection"
import OurVisionSection from "./components/OurVisionSection/OurVisionSection"
import ComingSoonSection from "./components/ComingSoonSection/ComingSoonSection"
import RoadMapSection from "./components/RoadMapSection/RoadMapSection"
import Image from "next/image"
import Gradient from "./components/Gradient"
import road_map_img from "@/assets/roadmap.png"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeadingSection />
        <CreonPassSection />
        <ProfitingThroughSection />
        <OurVisionSection />
        <ComingSoonSection />
        <RoadMapSection />
      </main>
      <div className="absolute bottom-0 z-[-1] w-full">
        <Image src={road_map_img} alt="road map" className="w-full" />
        <Gradient />
        <Gradient className="from-black to-black/0" />
        <Gradient className="from-black/0 to-black" />
      </div>
      <Footer />
    </>
  )
}
