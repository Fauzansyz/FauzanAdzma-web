import { motion } from "framer-motion"
import TextType from "./TextType"
import { S_A } from "@/constant/string"
export default function AboutSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <article className="mx-auto max-w-3xl px-2 md:px-1 py-24 prose-zinc prose-headings:text-3xl prose-headings:font-bold lg:prose-xl prose-headings:text-center">
          <h2>
            <TextType
              text={["About Me"]}
              typingSpeed={75}
              pauseDuration={1500}
              loop={false}
              showCursor={false}
              startOnVisible={true}
            />
          </h2>

          <div className="mt-6 px-5 md:px-2 space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p className="text-center">
              {S_A.a_fp} <b>{S_A.t_b}</b>
            </p>

            <p className="text-center">
              {S_A.a_sp}
            </p>

            <p className="text-center">{S_A.a_tp}</p>

            <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
              &quot;{S_A.a_qt}&quot;
            </blockquote>
          </div>
        </article>
      </motion.div>
    </>
  )
}
