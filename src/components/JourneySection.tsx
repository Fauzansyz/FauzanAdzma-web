import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"
import TextType from "./TextType"
import { Sparkles, Calendar } from "lucide-react"

const journeys = [
  {
    year: "2023",
    title: "First Touch",
    desc: "Got to know HTML & CSS. At first I was confused, then after a while I got addicted. The first time I felt: 'oh, this could be something.'",
  },
  {
    year: "2024",
    title: "Learning the Logic",
    desc: "Learned basic logic, dove deep into program flow, and began building structured code patterns.",
  },
  {
    year: "2024",
    title: "Era of Deepening",
    desc: "Started diving into web backend and frontend architecture, and exploring mobile development.",
  },
  {
    year: "2024",
    title: "Mobile App Development",
    desc: "Began mastering native mobile application development using Kotlin and Android architecture.",
  },
  {
    year: "2025",
    title: "Building Real Projects",
    desc: "Built functional mobile applications designed for wide accessibility and high practical utility.",
  },
  {
    year: "Now",
    title: "Growing & Evolving",
    desc: "Studying advanced mobile application architecture, modern UI systems, and exploring low-level languages like Rust and C++.",
  },
]

export default function JourneySection({ ref: propRef }: any) {
  const localRef = useRef(null)
  const targetRef = propRef || localRef

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={targetRef}
      className="relative mx-auto max-w-5xl px-6 py-20"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          <TextType 
            text={["My Journey"]}
            typingSpeed={75}
            pauseDuration={1500}
            loop={false}
            showCursor={false}
            startOnVisible={true}
          />
        </h2>
        <p className="mt-2 text-sm text-slate-500 font-medium">
          Slowly but surely — growth through practice
        </p>
        <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
      </div>

      <div className="relative space-y-12 md:space-y-16">
        {/* Timeline line (static background) */}
        <div className="absolute left-5 md:left-1/2 top-0 h-full w-0.5 bg-slate-200 -translate-x-1/2" />

        {/* Timeline line (animated progress fill) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-5 md:left-1/2 top-0 w-0.5 origin-top bg-gradient-to-b from-blue-600 to-indigo-600 -translate-x-1/2 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        />

        {journeys.map((item, index) => {
          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-start md:items-center gap-8`}
            >
              {/* Timeline Center Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-5 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-md"
              />

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                    <Calendar className="w-3 h-3" /> {item.year}
                  </span>
                  {item.year === "Now" && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-emerald-500 animate-spin" /> Active Focus
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

