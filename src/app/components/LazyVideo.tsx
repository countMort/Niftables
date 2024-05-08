import Image from "next/image"
import { useEffect, useRef, useState } from "react"
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
    let interval = setInterval(() => {
      const ready = myRef.current?.readyState === 4
      if (ready) {
        clearInterval(interval)
        myRef.current?.play()
        setIsStarted(true)
      }
    }, 500)
  }, [])
  return (
    <>
      <Image
        className={`w-full ${isStarted ? "invisible" : ""}`}
        src={image}
        alt={alt}
      />
      <video
        ref={myRef}
        className={`absolute top-0 w-full ${!isStarted ? "z-[-2]" : ""}`}
        src={video}
        loop
        muted
      />
      {children}
    </>
  )
}
