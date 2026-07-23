import { Mail, Github, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import TextType from "./TextType"

export default function ContactSection({ref}:any){
  return (
    <motion.div
      ref={ref}
    initial={{ opacity: 0, y: 100, filter:"blur(20px)" }}
    whileInView={{ opacity: 1, y: 0, filter:"blur(0px)" }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    >
    <section className="mx-auto max-w-3xl px-9 py-22">
      <h2 className="text-3xl font-bold">
      <TextType
      text={["Contact"]}
      typingSpeed={75}
        pauseDuration={1500}
        loop={false}
        showCursor={false}
        startOnVisible={true}
      />
      </h2>

      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        If you have any questions or would like to collaborate, please contact us on social media below.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={() => window.open('mailto:fauzanadzma2@gmail.com')}
          className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-gray-50 transition"
        >
          <Mail size={18} />
          Email Me
        </button>

        <button
          onClick={() => window.open("https://github.com/Fauzansyz")}
          className="flex items-center justify-center gap-2 rounded-xl
                               border border-gray-700 px-5 py-3 transition"
        >
          <Github size={18} />
          GitHub
        </button>

        <button
          onClick={() => window.open("https://www.instagram.com/coding_ngin")}
          className="flex items-center justify-center gap-2 rounded-xl
                               border border-gray-900 px-5 py-3 transition"
        >
          <Instagram size={18} />
          Instagram
        </button>
      </div>

      {/* Footer note */}
      <p className="mt-10 text-sm text-zinc-500">
        The fastest response is usually via email
      </p>
    </section>
    </motion.div>
  )
}
