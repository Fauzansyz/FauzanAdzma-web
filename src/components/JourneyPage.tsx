import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"

const journeys = [
  {
    year: "2023",
    title: "First Touch",
    desc: "Get to know HTML & CSS. At first I was confused, then after a while I got addicted.  The first time I felt: “oh, this could be something.”",
  },
  {
    year: "2024",
    title: "Learning the Logic",
    desc: "Learn basic logic and delve into program flow in depth and start to learn about the flow that I made",
  },
  {
    year: "2024",
    title: "Era of deepening ",
    desc: "Starting to dive into things like back end on the web and front end, and also delving a little into mobile dev.",
  },
  {
    year: "2024",
    title: "Delving into mobile app development",
    desc: " Start learning about mobile app development And "

  },
  {
    year: "2025",
    title: "Building Real Projects",
    desc: "Building a mobile application that can be used by all groups and has functions that are quite useful for users.",
  },
  {
    year: "Now",
    title: "Growing",
    desc: "Currently studying mobile/android application development architecture and learning other low-level languages",
  },
]

export default function JourneyPage() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-4xl px-4 py-24"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold">Journey</h2>
        <p className="mt-2 text-muted-foreground">
          Slowly but surely
        </p>
      </div>

      <div className="relative space-y-20">

        {/* Timeline line (static) */}
        <div className="absolute left-5 md:left-1/2 top-0 h-full w-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Timeline line (animated) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-5 md:left-1/2 top-0 w-px origin-top bg-zinc-900 dark:bg-zinc-100"
        />

        {journeys.map((item, index) => {
          const start = index / journeys.length
          const end = (index + 1) / journeys.length

          const glow = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]

          )

          const glowShadow = useTransform(
            glow,
            (v) => `0 0 ${v * 20}px rgba(24,24,27,0.6)`
          )

          return (
            <div
              key={index}
              className={`relative flex ${index % 2 === 0
                ? "md:flex-row-reverse"
                : "md:flex-row"
                } items-start gap-8`}
            >
              <motion.span
                className="absolute left-5 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
               h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-100"
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="ml-10 md:ml-0 md:w-[calc(50%-3rem)] rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-sm text-muted-foreground">
                  {item.year}
                </span>
                <h3 className="mt-1 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
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
