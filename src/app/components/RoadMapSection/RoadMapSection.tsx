import { roadMapData } from "@/app/app.params"
import { RoadMapCard } from "./RoadMapCard"

export default function RoadMapSection() {
  return (
    <section className="space-y-5">
      {roadMapData.map((data, i) => (
        <RoadMapCard
          key={"cm" + i}
          title={data.title}
          description={data.description}
          image={data.image}
        />
      ))}
    </section>
  )
}
