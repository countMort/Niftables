"use client"
import Header from "./components/Header/Header"
import HeadingSection from "./components/HeadingSection"
import CreonPassSection from "./components/CreonPassSection"
import ProfitingThroughSection from "./components/ProfitingThroughSection"
import OurVisionSection from "./components/OurVisionSection/OurVisionSection"
import ComingSoonSection from "./components/ComingSoonSection/ComingSoonSection"
import RoadMapSection from "./components/RoadMapSection/RoadMapSection"
import Footer from "./components/Footer"
import { useEffect } from "react"
import RoadMapImage from "./components/RoadMapSection/RoadMapImage"

export default function Home() {
  useEffect(() => {
    const width = document.documentElement.scrollWidth
    if (width > 640) {
      document.documentElement.style.fontSize = (width / 1920) * 16 + "px"
    }
    window.onresize = () => {
      const width = document.documentElement.scrollWidth
      if (width > 640) {
        document.documentElement.style.fontSize = (width / 1920) * 16 + "px"
      }
    }
  }, [])
  return (
    <>
      <Header />
      <main className="max-sm:space-y-32">
        <HeadingSection />
        <CreonPassSection />
        <ProfitingThroughSection />
        <OurVisionSection />
        <ComingSoonSection />
        <RoadMapSection />
      </main>
      <RoadMapImage />
      <Footer />
    </>
  )
}
