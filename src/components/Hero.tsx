import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Download, Github, Mail, Instagram, Sparkles } from "lucide-react"

function HeroPhoto() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative cursor-pointer group flex justify-center items-center max-w-full"
    >
      {/* Background Animated Glowing Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/25 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-500" />
      
      {/* Rotating Orbit Ring */}
      <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border border-blue-400/30 animate-[spin_25s_linear_infinite] pointer-events-none" />

      {/* Floating Tech Chips around photo on Desktop */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-4 -left-4 z-30 bg-white/90 backdrop-blur-md border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-slate-800 pointer-events-none"
        style={{ transform: "translateZ(40px)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>Android Developer</span>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-1/3 -right-6 z-30 bg-white/90 backdrop-blur-md border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-slate-800 pointer-events-none"
        style={{ transform: "translateZ(50px)" }}
      >
        <span className="text-blue-500">⚛️</span>
        <span>React &amp; Next.js</span>
      </motion.div>

      <motion.div 
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute bottom-8 -left-4 z-30 bg-white/90 backdrop-blur-md border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-slate-800 pointer-events-none"
        style={{ transform: "translateZ(45px)" }}
      >
        <span className="text-purple-500">🔮</span>
        <span>Kotlin &amp; Rust</span>
      </motion.div>

      {/* Main Image */}
      <img
        src="https://res.cloudinary.com/duwfnftsl/image/upload/v1784817270/1000315526-removebg-preview_wugikv.png"
        alt="Fauzan Profile"
        className="w-64 sm:w-80 lg:w-[380px] h-auto object-cover drop-shadow-2xl z-20 transition-transform duration-300 group-hover:scale-105 [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] max-w-full"
        style={{ transform: "translateZ(30px)" }}
      />
    </motion.div>
  )
}

export default function Hero({ onScrollClick }: { onScrollClick: () => void }) {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center font-sans bg-[#F8FAFC] text-[#475569] py-12 md:py-20 w-full">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[400px] rounded-[100%] blur-3xl opacity-60 bg-blue-100/50 -z-10"></div>

      {/* --- DESKTOP DISPLAY (md and above, responsive to both landscape & vertical/portrait desktop monitors) --- */}
      <main className="hidden md:flex container mx-auto px-6 max-w-6xl flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10 w-full">
        {/* Left Column (Text & CTAs) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-6"
        >
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-700 tracking-wide">Available for new opportunities</span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800">Fauzan</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-slate-700 mt-2">
              Software Developer &amp; Web Developer
            </h2>
          </div>

          <p className="text-slate-600 text-base lg:text-lg max-w-lg leading-relaxed">
            I&apos;m a developer focusing on Kotlin, React JS, Next.js, and building robust, scalable web and mobile applications.
          </p>

          {/* CTA Buttons for Desktop */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button 
              onClick={onScrollClick} 
              className="group bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-lg shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="https://github.com/Fauzansyz" 
              target="_blank" 
              rel="noreferrer"
              className="border-2 border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Desktop Quick Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-200/80 w-full max-w-md text-slate-500 text-sm">
            <span className="font-medium text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Connect:
            </span>
            <a href="https://github.com/Fauzansyz" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="mailto:fauzanadzma2@gmail.com" className="hover:text-slate-900 transition flex items-center gap-1">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://www.instagram.com/coding_ngin" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition flex items-center gap-1">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </motion.div>

        {/* Right Column (Photo Showcase & Marquee Ribbon) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 relative flex justify-center items-center py-6 overflow-hidden"
        >
          {/* Angled Marquee Ribbon behind photo on Desktop */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6 w-[110%] max-w-[500px] bg-slate-900 py-3 shadow-xl overflow-hidden flex z-0 rounded-lg">
            <div className="flex whitespace-nowrap animate-marquee text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              <div className="flex items-center space-x-6 px-4">
                <span>Android</span><span className="text-blue-400">•</span>
                <span>Rust</span><span className="text-blue-400">•</span>
                <span>React JS</span><span className="text-blue-400">•</span>
                <span>Next.js</span><span className="text-blue-400">•</span>
                <span>Laravel</span><span className="text-blue-400">•</span>
              </div>
              <div className="flex items-center space-x-6 px-4">
                <span>Android</span><span className="text-blue-400">•</span>
                <span>Rust</span><span className="text-blue-400">•</span>
                <span>React JS</span><span className="text-blue-400">•</span>
                <span>Next.js</span><span className="text-blue-400">•</span>
                <span>Laravel</span><span className="text-blue-400">•</span>
              </div>
            </div>
          </div>

          <HeroPhoto />
        </motion.div>
      </main>

      {/* --- MOBILE DISPLAY (strictly preserved mobile design < md) --- */}
      <main className="flex md:hidden container mx-auto px-4 py-12 flex-col items-center justify-center relative z-10 w-full max-w-5xl gap-10">
        <div className="w-full relative flex justify-center items-end mt-16">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6 w-[120vw] bg-black py-4 z-0 shadow-2xl overflow-hidden flex">
            <div className="flex whitespace-nowrap animate-marquee text-white font-bold text-sm tracking-[0.2em] uppercase">
              <div className="flex items-center space-x-6 px-4">
                <span>Android</span><span className="text-[#818CF8]">•</span>
                <span>Rust</span><span className="text-[#818CF8]">•</span>
                <span>React JS</span><span className="text-[#818CF8]">•</span>
                <span>Next.js</span><span className="text-[#818CF8]">•</span>
                <span>Laravel</span><span className="text-[#818CF8]">•</span>
              </div>
              <div className="flex items-center space-x-6 px-4">
                <span>Android</span><span className="text-[#818CF8]">•</span>
                <span>Rust</span><span className="text-[#818CF8]">•</span>
                <span>React JS</span><span className="text-[#818CF8]">•</span>
                <span>Next.js</span><span className="text-[#818CF8]">•</span>
                <span>Laravel</span><span className="text-[#818CF8]">•</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center text-center z-20">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Hi I&apos;m <span className="text-gray-900">Fauzan</span>
          </h1>

          <h2 className="text-4xl font-serif italic text-gray-800 mt-1">
            Software Developer &amp; Web Developer
          </h2>

          <div className="w-full relative flex justify-center items-end order-1 z-20">
            <HeroPhoto />
          </div>

          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2 mt-8 shadow-sm">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-800">Available for new opportunities</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-[-2rem] z-20 space-y-4 px-6">
          <p className="text-lg font-medium text-gray-800 mb-2">Software Developer</p>

          <a 
            href="https://github.com/Fauzansyz" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full max-w-sm border-2 border-gray-800 text-gray-800 font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download CV
          </a>

          <button onClick={onScrollClick} className="w-full max-w-sm bg-gray-900 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            Get in touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Experienced in building &amp; shipping applications.
          </p>
        </div>
      </main>
    </div>
  )
}


