import { ComingSoonData, RoadMapData } from "./app.types"
import road_map_1_img from "@/assets/road-map-1.png"
import road_map_2_img from "@/assets/road-map-2.png"
import road_map_3_img from "@/assets/road-map-3.png"
import profitability_img from "@/assets/profitability.svg"
import transparent_img from "@/assets/transparent.svg"
import launching_img from "@/assets/launching.svg"
import limitless_img from "@/assets/limitless.svg"
import token_img from "@/assets/coming-soon-token.png"
import revenue_img from "@/assets/coming-soon-revenue.png"
import launchpad_img from "@/assets/coming-soon-launchpad.png"

export const roadMapData: RoadMapData[] = [
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

export const ourVisionPanels = [
  {
    img: profitability_img,
    title: (
      <>
        Profitability and <br /> Growth
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of these
      projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    img: transparent_img,
    title: (
      <>
        Transparent & Fair <br /> Decentralized Earnings
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of these
      projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    img: launching_img,
    title: (
      <>
        Launching the <br /> future
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of these
      projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
  {
    img: limitless_img,
    title: (
      <>
        Limitless Possibilities of AI <br /> & Crypto
      </>
    ),
    desc: `At Creon, we handpick cutting-edge AI projects and offer our community
      and token holders early access and investment opportunities. Our
      community actively contributes to the growth and profitability of these
      projects, creating a dynamic ecosystem of innovation and shared success.`,
  },
]

export const comingSoonData: ComingSoonData[] = [
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
