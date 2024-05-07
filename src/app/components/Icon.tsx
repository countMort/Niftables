import Image from "next/image"
import background_img from "@/assets/pent-surround.svg"
import base_img from "@/assets/pent-base.svg"
import base_active_img from "@/assets/pent-base_active.svg"
import border_img from "@/assets/pent-border.svg"
import border_active_img from "@/assets/pent-border-active.svg"

export default function ({ isActive = false, icon = "" }) {
  return (
    <div className="relative shrink-0">
      <Image
        className="w-[6.25rem]"
        src={background_img}
        alt="background"
      ></Image>
      <Image
        className="absolute center w-[4.25rem] z-0"
        src={isActive ? border_active_img : border_img}
        alt="border image"
      />
      <Image
        className="absolute center w-14 z-10"
        src={isActive ? base_active_img : base_img}
        alt="base image"
      />
      <Image
        className="absolute center w-[1.625rem] z-20"
        src={icon}
        alt="icon image"
      />
    </div>
  )
}
