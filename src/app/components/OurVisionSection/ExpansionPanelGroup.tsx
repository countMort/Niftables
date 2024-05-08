import { useState } from "react"
import ExpansionPanel from "./ExpansionPanel"
import { ourVisionPanels } from "@/app/app.params"

export default function ExpansionPanelGroup() {
  const [activeIndex, setActiveIndex] = useState(0)
  const toggleActiveIndex = (index: number) => {
    if (activeIndex === index) {
      // setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="space-y-4 sm:space-y-[1.875rem]">
      {ourVisionPanels.map((panel, index) => (
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
