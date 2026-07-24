export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto py-6 lg:px-16 flex items-center relative z-20">

        <div className="flex justify-between text-xs font-semibold tracking-widest text-gray-500 uppercase">
          
          <a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a>
          <a href="#home" className="text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#service" className="hover:text-red-500 transition">Projects</a>
        </div>
      </nav>
      </>
  )
}
