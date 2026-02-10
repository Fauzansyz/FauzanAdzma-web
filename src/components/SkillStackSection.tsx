import Row from './Row'
import RenderIcon from './RenderIcon'
import skillList from '../data/SkillStackList'

export default function SkillStackSection() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-12 w-full flex justify-center">
        <h2 className="text-3xl font-semibold tracking-tight font-[var(--font-fira)]">
          My stack
        </h2>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-6 md:hidden">
        <Row items={skillList.slice(0, 4)} cols={4} />
        <Row items={skillList.slice(4, 7)} cols={3} />
        <Row items={skillList.slice(7, 11)} cols={4} />
        <Row items={skillList.slice(11, 15)} cols={4} />


      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-wrap justify-center gap-6">
        {skillList.map((item, index) => (
          <RenderIcon
            key={index}
            Icon={item.Icon}
            color={item.color} />
        ))}
      </div>

    </section>

  )

}
