import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="container mx-auto px-6 py-6 lg:px-16 flex justify-between items-center relative z-20">
        {/* Logo Placeholder */}
        <div className="w-16 h-6 bg-gray-400"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-xs font-semibold tracking-widest text-gray-500 uppercase">
          <a href="#home" className="text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#service" className="hover:text-red-500 transition">Service</a>
          <a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a>
          <a href="#resume" className="hover:text-red-500 transition">Resume</a>
          <a href="#blog" className="hover:text-red-500 transition">Blog</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        {/* Language Switch */}
        <div className="hidden md:flex space-x-2 text-xs font-semibold text-gray-400 uppercase">
          <span className="hover:text-gray-800 cursor-pointer">Fra</span>
          <span className="hover:text-gray-800 cursor-pointer">Ger</span>
          <span className="text-red-500 cursor-pointer">Eng</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-30 py-4 flex flex-col items-center space-y-4">
          <a href="#home" className="text-red-500 font-semibold">HOME</a>
          <a href="#about" className="text-gray-600 font-semibold">ABOUT</a>
          {/* Tambahkan menu lain di sini */}
        </div>
        )}
      </>
  )
}
