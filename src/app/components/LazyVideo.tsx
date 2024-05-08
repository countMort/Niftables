import Image from "next/image"
import { ReactEventHandler, useEffect, useRef, useState } from "react"
import { LazyVideoProps } from "../app.types"

export default function LazyVideo({
  video,
  image,
  alt,
  children,
}: LazyVideoProps) {
  const [isStarted, setIsStarted] = useState(false)
  const myRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    myRef.current?.load()
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
        className={`w-full ${isStarted ? "invisible" : ""}`}
        src={image}
        alt={alt}
      />
      <video
        ref={myRef}
        className={`absolute top-0 w-full h-full ${!isStarted ? "z-[-2]" : ""}`}
        src={video}
        loop
        muted
        onLoadedMetadata={checkState}
        onLoadedData={checkState}
        onPlay={checkState}
      />
      {children}
    </>
  )
}
