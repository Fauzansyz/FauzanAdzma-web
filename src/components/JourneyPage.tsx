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
    desc: "Eksplor UI system, component reusable, dan performa. Pelan tapi jalan.",
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
      className="relative mx-auto max-w-3xl px-4 py-20"
    >
      {/* Header */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold">My Journey</h2>
        <p className="mt-2 text-muted-foreground">
          Pelan, konsisten, dan nyata.
        </p>
      </div>

      {/* Static line */}
      <div className="absolute left-6 top-32 h-[calc(100%-8rem)] w-px bg-zinc-200 dark:bg-zinc-800" />

      {/* Animated line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-6 top-32 w-px origin-top bg-zinc-900 dark:bg-zinc-100"
      />

      {/* Items */}
      <div className="space-y-14">
        {journeys.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative ml-14"
          >
            {/* Dot */}
            <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-100" />

            {/* Card */}
            <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-sm text-muted-foreground">
                {item.year}
              </span>
              <h3 className="mt-1 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
