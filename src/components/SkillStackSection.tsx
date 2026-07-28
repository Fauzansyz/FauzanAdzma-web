import Row from './Row'
import TextType from './TextType'
import skillList from '../data/SkillStackList'
import { motion } from "framer-motion"

export default function SkillStackSection({ ref }: any) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <section className="mx-auto max-w-5xl py-12">
        <div className="mb-12 w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-[var(--font-fira)]">
            <TextType 
              text={["My Stack"]}
              typingSpeed={75}
              pauseDuration={1500}
              loop={false}
              showCursor={false}
              startOnVisible={true}
            />
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">Technologies and tools I work with daily</p>
        </div>

        {/* MOBILE (preserved exact Row layout) */}
        <div className="flex text-gray-900 flex-col gap-6 md:hidden">
          <Row items={skillList.slice(0, 4)} cols={4} />
          <Row items={skillList.slice(4, 7)} cols={3} />
          <Row items={skillList.slice(7, 11)} cols={4} />
          <Row items={skillList.slice(11, 15)} cols={4} />
        </div>

        {/* DESKTOP (Modern Interactive Grid, responsive to vertical & wide screens) */}
        <div className="hidden md:grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">

          {skillList.map((item, index) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon size={26} style={{ color: item.color === "currentColor" ? "#1e293b" : item.color }} />
                </div>
                <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {item.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </section>
    </motion.div>
  )
}

