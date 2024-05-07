import { GradientProps } from "../app.types"

export default function Gradient({
  className = "blue-1 purple-1 mix-blend-soft-light",
}: GradientProps) {
  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t ${className}`}
    />
  )
}
