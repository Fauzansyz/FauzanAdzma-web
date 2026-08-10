import { motion } from "framer-motion"
import { Github, Mail, Instagram, ArrowUp, Heart, Sparkles, Code2 } from "lucide-react"

export interface FooterProps {
  onScrollToHome?: () => void;
  onScrollToAbout?: () => void;
  onScrollToSkills?: () => void;
  onScrollToJourney?: () => void;
  onScrollToProjects?: () => void;
  onScrollToContact?: () => void;
}

export default function Footer({
  onScrollToHome,
  onScrollToAbout,
  onScrollToSkills,
  onScrollToJourney,
  onScrollToProjects,
  onScrollToContact,
}: FooterProps) {
  const scrollToTop = () => {
    if (onScrollToHome) {
      onScrollToHome()
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="w-full bg-[#F8FAFC] pt-12 pb-16 px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 text-slate-100 p-8 sm:p-10 md:p-12 shadow-2xl border border-slate-800"
        >
          {/* Subtle Background Glow Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Upper Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-10 border-b border-slate-800">
            {/* Col 1: Brand & Info (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-blue-500/20">
                  FA
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white tracking-tight leading-none">
                    Fauzan Adzma
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Software &amp; Web Developer
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Passionate about building scalable mobile and web applications with clean architecture, modern aesthetics, and seamless user experiences.
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-full px-3.5 py-1.5 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium">Available for new opportunities</span>
              </div>
            </div>

            {/* Col 2: Quick Navigation Links (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {onScrollToHome && (
                  <li>
                    <button
                      onClick={onScrollToHome}
                      className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                      Home
                    </button>
                  </li>
                )}
                {onScrollToAbout && (
                  <li>
                    <button
                      onClick={onScrollToAbout}
                      className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                      About Me
                    </button>
                  </li>
                )}
                {onScrollToSkills && (
                  <li>
                    <button
                      onClick={onScrollToSkills}
                      className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                      Skills &amp; Tech Stack
                    </button>
                  </li>
                )}
                {onScrollToJourney && (
                  <li>
                    <button
                      onClick={onScrollToJourney}
                      className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                      Journey
                    </button>
                  </li>
                )}
                {onScrollToProjects && (
                  <li>
                    <button
                      onClick={onScrollToProjects}
                      className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                      Projects
                    </button>
                  </li>
                )}
                {onScrollToContact && (
                  <li>
                    <button
                      onClick={onScrollToContact}
                      className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                      Contact
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Col 3: Social & Connect (4 cols) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Social &amp; Connect
              </h4>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com/Fauzansyz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <span>GitHub (@Fauzansyz)</span>
                </a>

                <a
                  href="mailto:fauzanadzma2@gmail.com"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">fauzanadzma2@gmail.com</span>
                </a>

                <a
                  href="https://www.instagram.com/coding_ngin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>Instagram (@coding_ngin)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Lower Sub-Footer Bar */}
          <div className="relative z-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-200">Fauzan Adzma</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Built with care</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
              <span>&amp; continuous learning</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg shadow-blue-600/20 transition-all cursor-pointer border border-blue-400/30"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
