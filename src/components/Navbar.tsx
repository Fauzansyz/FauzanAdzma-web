export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto px-6 py-6 lg:px-16 flex justify-between items-center relative z-20">

        {/* Desktop Menu */}
        <div className="hidden flex space-x-8 text-xs font-semibold tracking-widest text-gray-500 uppercase">
          <a href="#home" className="text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#service" className="hover:text-red-500 transition">Service</a>
          <a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a>
        </div>
      </nav>
      </>
  )
}
