export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto py-6 lg:px-16 flex justify-between items-center relative z-20">
          <a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-8 text-xs font-semibold justify-between tracking-widest text-gray-500 uppercase">
          <a href="#home" className="text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#service" className="hover:text-red-500 transition">Projects</a>
        </div>
      </nav>
      </>
  )
}
