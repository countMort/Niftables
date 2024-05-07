import { useState } from "react"
import ExpansionPanel from "./ExpansionPanel"
import profitability_img from "@/assets/profitability.svg"
import transparent_img from "@/assets/transparent.svg"
import launching_img from "@/assets/launching.svg"
import limitless_img from "@/assets/limitless.svg"

export default function ExpansionPanelGroup() {
  const [activeIndex, setActiveIndex] = useState(0)
  const toggleActiveIndex = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="space-y-[1.875rem]">
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
    </div>
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
  {
    img: transparent_img,
    title: (
      <>
        Transparent & Fair <br /> Decentralized Earnings
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
    and token holders early access and investment opportunities. Our
    community actively contributes to the growth and profitability of these
    projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    img: launching_img,
    title: (
      <>
        Launching the <br /> future
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
    and token holders early access and investment opportunities. Our
    community actively contributes to the growth and profitability of these
    projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    img: limitless_img,
    title: (
      <>
        Limitless Possibilities of AI <br /> & Crypto
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
    and token holders early access and investment opportunities. Our
    community actively contributes to the growth and profitability of these
    projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
]
