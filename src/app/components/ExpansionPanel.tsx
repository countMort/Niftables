import { ExpansionPanelProps } from "../app.types"
import Icon from "./Icon"
import flesh_down_img from "@/assets/flesh_down.svg"
import Image from "next/image"
import { useRef } from "react"

export default function ExpansionPanel({
  icon,
  isActive,
  title,
  onClick,
  children,
}: ExpansionPanelProps) {
  const sectionContainer = useRef<HTMLElement>(null)
  return (
    <div>
      <header className="flex pr-5 cursor-pointer" onClick={onClick}>
        <Icon icon={icon} isActive={isActive} />
        <button className="h3 ml-[1.875rem] flex items-center justify-between grow text-start">
          {title}
          <Image
            className={`size-4 transition-transform ${
              isActive ? "rotate-180" : ""
            } ml-5`}
            src={flesh_down_img}
            alt="flesh"
          ></Image>
        </button>
      </header>
      <section
        ref={sectionContainer}
        className={`mr-0 ml-[8.125rem] min-h-[unset] overflow-hidden transition-[height]`}
        style={
          isActive
            ? { height: sectionContainer.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{children}</p>
      </section>
    </div>
  )
}
