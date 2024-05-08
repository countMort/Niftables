import { comingSoonData } from "@/app/app.params"
import { ComingSoonCard } from "./ComingSoonCard"

export default function ComingSoonSection() {
  return (
    <section className="flex items-center">
      <div className="flex flex-wrap sm:justify-between justify-around grow max-sm:gap-y-10">
        {comingSoonData.map((data, i) => (
          <ComingSoonCard
            key={"cm" + i}
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </section>
  )
}
