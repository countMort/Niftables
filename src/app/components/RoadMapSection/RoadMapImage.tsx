import Image from "next/image";
import Gradient from "../Gradient";
import road_map_img from "@/assets/roadmap.png"

export default function RoadMapImage() {
  return (
    <div className="max-sm:hidden absolute bottom-0 z-[-1] w-full">
      <Image src={road_map_img} alt="road map" className="w-full" />
      <Gradient />
      <Gradient className="from-black to-black/0" />
      <Gradient className="from-black/0 to-black" />
    </div>
  )
}
