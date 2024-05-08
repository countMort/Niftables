import Gradient from "../Gradient"
import LazyVideo from "../LazyVideo"
import road_map_img from "@/assets/roadmap.png"
import road_map_video from "@/assets/roadmap-video.mp4"

export default function RoadMapImage() {
  return (
    <div className="max-sm:hidden absolute bottom-0 z-[-1] w-full overflow-hidden">
      <LazyVideo image={road_map_img} video={road_map_video} alt="road map" />
      <Gradient />
      <Gradient className="from-black to-black/0" />
      <Gradient className="from-black/0 to-black" />
    </div>
  )
}
