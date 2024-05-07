import Image from "next/image"
import profiting_img from "@/assets/profiting-through.svg"
import Gradient from "./Gradient"

export default function ProfitingThrough() {
  return (
    <section className="flex flex-col">
      <h1>Profiting Through</h1>
      <h2 className="text-gradient inline-block self-end mb-[5.1875rem]">
        AI Innovation & Decentralization
      </h2>
      <div className="flex flex-wrap">
        <div className="relative w-[59.1875rem]">
          <Image src={profiting_img} alt="profiting through" />
          <Gradient />
        </div>
        <div className="flex-1 ml-10 px-[1.875rem] flex flex-col justify-center border-x border-gray-1">
          <h3>
            The dynamic community driven business model of the future.
          </h3>
          <p className="mt-[1.75rem]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  )
}
