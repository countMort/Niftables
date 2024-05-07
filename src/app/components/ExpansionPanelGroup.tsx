"use client"
import { useState } from "react"
import ExpansionPanel from "./ExpansionPanel"
import profitability_img from "@/assets/profitabality.svg"

export default function ExpansionPanelGroup() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const toggleActiveIndex = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <>
      {panels.map((panel, index) => (
        <ExpansionPanel
          key={"p" + index}
          icon={panel.img}
          title={panel.title}
          onClick={() => toggleActiveIndex(index)}
          isActive={activeIndex === index}
        >
          {panel.desc}
        </ExpansionPanel>
      ))}
    </>
  )
}

const panels = [
  {
    img: profitability_img,
    title: (
      <>
        Profitability and <br /> Growth
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
    and token holders early access and investment opportunities. Our
    community actively contributes to the growth and profitability of these
    projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
]
