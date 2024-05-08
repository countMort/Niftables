import LazyVideo from "./LazyVideo"
import title_img from "@/assets/main-video-gradient 1.png"
import main_video from "@/assets/main-background-video.mp4"

export default function HeadingSection() {
  return (
    <section className="relative justify-center items-center mx-0">
      <LazyVideo image={title_img} video={main_video} alt="creon" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-blue-1 to-purple-1 mix-blend-soft-light" />
      <div className="absolute top-1/2 sm:top-[34.6875rem] inset-x-10 sm:inset-x-60">
        <h1>
          THE WORLD'S FIRST
          <br />
          PLATFORM FOR TOKENIZING
          <br />
          AI BLOCKCHAIN PROJECTS
        </h1>
        <h3 className="text-gradient border-gradient inline-flex border-y pb-3 pt-[0.4375rem] mt-10">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </h3>
      </div>
    </section>
  )
}
