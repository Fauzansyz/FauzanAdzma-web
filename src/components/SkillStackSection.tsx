import Row from './Row'
import RenderIcon from './RenderIcon'
import TextType from './TextType'
import skillList from '../data/SkillStackList'
import { motion } from "framer-motion"

export default function SkillStackSection() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: 100, filter:"blur(20px)" }}
    whileInView={{ opacity: 1, y: 0, filter:"blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}>
    <section className="mx-auto max-w-4xl">
      <div className="mb-12 w-full flex justify-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 font-[var(--font-fira)]">
          <TextType 
          text={["My Stack"]}
          typingSpeed={75}
            pauseDuration={1500}
            loop={false}
            showCursor={false}
            startOnVisible={true}
          />
        </h2>
      </div>

      {/* MOBILE */}
      <div className="flex text-gray-900 flex-col gap-6 md:hidden">
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
    </motion.div>
</>
  )

}
