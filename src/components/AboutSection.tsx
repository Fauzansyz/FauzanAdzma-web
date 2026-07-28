import { motion } from "framer-motion"
import TextType from "./TextType"
import { S_A } from "@/constant/string"
import { Quote, Sparkles, CheckCircle2 } from "lucide-react"

export default function AboutSection({ ref }: any) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-6 md:px-12 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          <TextType
            text={["About Me"]}
            typingSpeed={75}
            pauseDuration={1500}
            loop={false}
            showCursor={false}
            startOnVisible={true}
          />
        </h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Column: Story & Philosophy */}
        <div className="md:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
          <p className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            {S_A.a_fp} <b className="text-slate-900 font-semibold">{S_A.t_b}</b>.
          </p>

          <p className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            {S_A.a_sp}
          </p>

          <p className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            {S_A.a_tp}
          </p>

          {/* Highlights pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
              <CheckCircle2 className="w-3.5 h-3.5" /> Clean Architecture
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              <CheckCircle2 className="w-3.5 h-3.5" /> Scalable Systems
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <CheckCircle2 className="w-3.5 h-3.5" /> Mobile &amp; Web Focus
            </span>
          </div>
        </div>

        {/* Right Column: Animated "Say" / Quote Card */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="md:col-span-5 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

          <div className="relative bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-800 flex flex-col justify-between space-y-6 overflow-hidden">
            <Quote className="w-12 h-12 text-blue-400/30 absolute top-6 right-6 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 tracking-wider uppercase bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
                <Sparkles className="w-3 h-3 text-blue-400" /> Philosophy
              </span>

              <blockquote className="text-lg md:text-xl font-serif italic text-slate-100 leading-snug">
                &quot;{S_A.a_qt}&quot;
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 relative z-10">
              <img
                src="https://res.cloudinary.com/duwfnftsl/image/upload/v1784817270/1000315526-removebg-preview_wugikv.png"
                alt="Fauzan Adzma"
                className="w-12 h-12 rounded-full object-cover bg-slate-800 border-2 border-blue-500/50"
              />
              <div>
                <h4 className="font-semibold text-slate-100 text-sm">Fauzan Adzma</h4>
                <p className="text-xs text-slate-400">Software Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

