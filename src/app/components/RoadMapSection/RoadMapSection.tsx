import { RoadMapData } from "../../app.types"
import road_map_1_img from "@/assets/road-map-1.png"
import road_map_2_img from "@/assets/road-map-2.png"
import road_map_3_img from "@/assets/road-map-3.png"
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

const roadMapData: RoadMapData[] = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    description: `The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.`,
    image: road_map_1_img,
  },
  {
    title: "AI Tools and Market",
    description: `AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.`,
    image: road_map_2_img,
  },
  {
    title: "AI, Crypto, and NFT Market",
    description: `Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.`,
    image: road_map_3_img,
  },
]
