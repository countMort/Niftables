import { ExpansionPanelProps } from "../app.types"
import Icon from "./Icon"
import flesh_up_img from "@/assets/flesh_up.svg"
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
      <header className="flex pr-5">
        <Icon icon={icon} isActive={isActive} />
        <button
          className="h3 ml-[1.875rem] flex items-center justify-between grow text-start"
          onClick={() => onClick?.()}
        >
          {title}
          <Image
            className="size-4"
            src={isActive ? flesh_up_img : flesh_down_img}
            alt="flesh up"
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
        {children}
      </section>
    </div>
  )
}
