import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export interface NavbarProps {
  onScrollToHome?: () => void;
  onScrollToAbout?: () => void;
  onScrollToSkills?: () => void;
  onScrollToJourney?: () => void;
  onScrollToProjects?: () => void;
  onScrollToContact?: () => void;
  onScrollClick?: () => void;
}

export default function Navbar({
  onScrollToHome,
  onScrollToAbout,
  onScrollToSkills,
  onScrollToJourney,
  onScrollToProjects,
  onScrollToContact,
  onScrollClick
}: NavbarProps) {
  const handleAbout = onScrollToAbout || onScrollClick
  const handleProjects = onScrollToProjects || onScrollClick
  const handleContact = onScrollToContact || onScrollClick

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4 md:px-6 pointer-events-none">
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="pointer-events-auto max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-4"
      >
        {/* Floating Brand Capsule (Left) */}
        <motion.div 
          whileHover={{ y: -3, scale: 1.03 }}
          onClick={onScrollToHome}
          className="bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-full px-3.5 sm:px-4 py-2 shadow-lg shadow-slate-900/5 flex items-center gap-2.5 cursor-pointer transition-all shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs shadow-md">
            FA
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-extrabold text-xs text-slate-900 tracking-tight leading-none">
              Fauzan Adzma
            </span>
            <span className="text-[10px] text-slate-500 font-medium leading-none mt-1">
              Developer
            </span>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block ml-1" />
        </motion.div>

        {/* Floating Links Island (Center Desktop) */}
        <motion.nav 
          whileHover={{ y: -2 }}
          className="hidden md:flex items-center space-x-1 sm:space-x-2 bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-full px-5 py-2 shadow-lg shadow-slate-900/5 text-xs font-semibold text-slate-600 uppercase tracking-wider"
        >
          {onScrollToHome && (
            <motion.button 
              whileHover={{ y: -2, scale: 1.05 }}
              onClick={onScrollToHome} 
              className="px-3 py-1 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition cursor-pointer"
            >
              Home
            </motion.button>
          )}
          <motion.button 
            whileHover={{ y: -2, scale: 1.05 }}
            onClick={handleAbout} 
            className="px-3 py-1 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition cursor-pointer"
          >
            About
          </motion.button>
          {onScrollToSkills && (
            <motion.button 
              whileHover={{ y: -2, scale: 1.05 }}
              onClick={onScrollToSkills} 
              className="px-3 py-1 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition cursor-pointer"
            >
              Skills
            </motion.button>
          )}
          {onScrollToJourney && (
            <motion.button 
              whileHover={{ y: -2, scale: 1.05 }}
              onClick={onScrollToJourney} 
              className="px-3 py-1 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition cursor-pointer"
            >
              Journey
            </motion.button>
          )}
          <motion.button 
            whileHover={{ y: -2, scale: 1.05 }}
            onClick={handleProjects} 
            className="px-3 py-1 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition cursor-pointer"
          >
            Projects
          </motion.button>
          <motion.button 
            whileHover={{ y: -2, scale: 1.05 }}
            onClick={handleContact} 
            className="px-3 py-1 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition cursor-pointer"
          >
            Contact
          </motion.button>
        </motion.nav>

        {/* Floating Mobile Links Bar */}
        <div className="flex md:hidden flex-1 items-center justify-evenly bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-full px-3 py-2 shadow-lg shadow-slate-900/5 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
          <button onClick={onScrollToHome} className="hover:text-blue-600 py-1">Home</button>
          <button onClick={handleAbout} className="hover:text-blue-600 py-1">About</button>
          <button onClick={handleProjects} className="hover:text-blue-600 py-1">Projects</button>
          <button onClick={handleContact} className="hover:text-blue-600 py-1">Contact</button>
        </div>

        {/* Floating Action Button (Right Desktop) */}
        <motion.button 
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContact}
          className="hidden md:flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-slate-900/15 transition-all cursor-pointer border border-slate-800 shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span>Let&apos;s Talk</span>
        </motion.button>
      </motion.div>
    </header>
  )
}


