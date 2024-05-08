import Image from "next/image"
import title_img from "@/assets/main-video-gradient 1.png"
import main_video from "@/assets/main-background-video.mp4"
import { ReactEventHandler, useEffect, useRef, useState } from "react"

export default function LazyVideo() {
  const [isStarted, setIsStarted] = useState(false)
  const myRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    myRef.current?.play()
  }, [])
  const checkState: ReactEventHandler<HTMLVideoElement> = (e) => {
    if (isStarted) return
    const video = e.target
    // @ts-ignore
    if (video.readyState === 4) setIsStarted(true)
  }
  return (
    <>
      <Image
        className={`w-full ${isStarted ? "hidden" : ""}`}
        src={title_img}
        alt="Creon"
      />
      <video
        ref={myRef}
        className={`w-full ${!isStarted ? "hidden" : ""}`}
        src={main_video}
        loop
        muted
        onLoadedMetadata={checkState}
        onPlay={checkState}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-blue-1 to-purple-1 mix-blend-soft-light" />
    </>
  )
}
