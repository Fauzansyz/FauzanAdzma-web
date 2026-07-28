import { Mail, Github, Instagram, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import TextType from "./TextType"


export default function ContactSection({ ref: propRef }: any) {
  return (
    <motion.div
      ref={propRef}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl px-6 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          <TextType
            text={["Get In Touch"]}
            typingSpeed={75}
            pauseDuration={1500}
            loop={false}
            showCursor={false}
            startOnVisible={true}
          />
        </h2>

        <p className="mt-3 text-slate-600 max-w-lg mx-auto text-base">
          If you have any questions, ideas, or would like to collaborate, feel free to reach out anytime!
        </p>
        <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
      </div>

      {/* Action Buttons / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {/* Email */}
        <motion.button
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open('mailto:fauzanadzma2@gmail.com')}
          className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-slate-900 text-white p-6 shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all cursor-pointer border border-slate-800"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mail size={22} />
          </div>
          <div className="text-center">
            <span className="font-bold text-center flex items-center gap-1 justify-center">
              Email Me</span>
            <span className="text-xs text-slate-400 block mt-0.5">fauzanadzma2@gmail.com</span>
          </div>
        </motion.button>

        {/* GitHub */}
        <motion.button
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open("https://github.com/Fauzansyz")}
          className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-slate-200/80 text-slate-900 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Github size={22} />
          </div>
          <div className="text-center">
            <span className="font-bold text-center flex items-center gap-1 justify-center">
              GitHub </span>
            <span className="text-xs text-slate-500 block mt-0.5">@Fauzansyz</span>
          </div>
        </motion.button>

        {/* Instagram */}
        <motion.button
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open("https://www.instagram.com/coding_ngin")}
          className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-slate-200/80 text-slate-900 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Instagram size={22} />
          </div>
          <div className="text-center">
            <span className="font-bold text-center flex items-center gap-1 justify-center">
              Instagram</span>
            <span className="text-xs text-slate-500 block mt-0.5">@coding_ngin</span>
          </div>
        </motion.button>
      </div>

      {/* Footer note */}
      <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
        <MessageSquare size={14} className="text-blue-500" />
        <span>The fastest response is usually via email</span>
      </div>
    </motion.div>
  )
}

