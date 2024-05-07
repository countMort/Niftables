import { ComingSoonCard } from "./ComingSoonCard"
import { ComingSoonData } from "../../app.types"
import token_img from "@/assets/coming-soon-token.png"
import revenue_img from "@/assets/coming-soon-revenue.png"
import launchpad_img from "@/assets/coming-soon-launchpad.png"

export default function ComingSoonSection() {
  return (
    <section className="flex items-center">
      <div className="flex flex-wrap justify-between grow">
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

const comingSoonData: ComingSoonData[] = [
  {
    title: "Token",
    subtitle: "The Gateway token to the world of AI",
    description: `Set to debut in the latter half of 2024, the CREON token serves as the
        pioneering link between cutting-edge AI initiatives and blockchain
        technology. This innovative token provides NFT and token holders with
        unparalleled access to our Launchpad, AI tools, and exclusive pre-launch
        investment prospects.`,
    image: token_img,
  },
  {
    title: "revenue",
    subtitle: "Driving income and growth through decentralization",
    description: `CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.`,
    image: revenue_img,
  },
  {
    title: "launchpad",
    subtitle: "Driving the future of AI Innovation",
    description: `The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
    image: launchpad_img,
  },
]
