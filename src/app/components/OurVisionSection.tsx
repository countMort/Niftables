import ExpansionPanelGroup from "./ExpansionPanelGroup";

export default function OurVisionSection() {
  return (
    <section className="flex flex-wrap">
      <h2 className="text-gradient w-[43.75rem]">
        <span className="text-white">
          Our vision is to support the innovation of AI blockchain projects
        </span>{" "}
        while prioritizing communities and democratizing profits
      </h2>
      <div className="mt-[7.1875rem] ml-auto w-[34.5rem]">
        <ExpansionPanelGroup></ExpansionPanelGroup>
      </div>
    </section>
  )
}
