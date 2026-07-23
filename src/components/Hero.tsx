export default function Hero() {
	return (			
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800">
    
      {/* --- HERO SECTION --- */}
      {/* flex-col untuk mobile, md:flex-row untuk desktop */}
      <main className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center min-h-[calc(100vh-100px)] relative z-10">
        
        {/* KOLOM KIRI (Teks) */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex flex-col justify-center">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[2px] bg-gray-50"></span>
            <span className="uppercase text-gray-50 tracking-[0.2em] text-xs font-bold">Hello</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-50 leading-tight mt-2">
            I'm <span className="text-[#ff2b4a]">Fauzan</span> Adzma
          </h1>
          
          <p className="text-gray-500 mt-6 max-w-md text-sm leading-relaxed">
            This is Jems Kemerun, visual designer, Photographer, Web Developer and Creative Director located in United States, looking for working around the globe.
          </p>
          
          <div className="mt-10">
            <button className="bg-[#ff2b4a] hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded shadow-lg shadow-red-500/30 transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Social Icons Placeholder */}
          <div className="flex space-x-6 mt-16 lg:mt-24 text-gray-400">
            <span className="cursor-pointer hover:text-red-500 transition">IG</span>
            <span className="cursor-pointer hover:text-red-500 transition">TW</span>
            <span className="cursor-pointer hover:text-red-500 transition">LI</span>
          </div>
        </div>

        {/* KOLOM KANAN (Gambar & Dekorasi) */}
        <div className="w-full md:w-1/2 relative mt-16 md:mt-0 flex justify-center items-end">          
          {/* Gambar Orang */}
          {/* Pastikan ganti '/path-to-your-image.png' dengan gambar asli yang sudah dipotong background-nya */}
          <img 
            src="https://res.cloudinary.com/duwfnftsl/image/upload/v1784808421/1000315526-removebg-preview_zurbcq.png" 
            alt="Fauzan adzma" 
            className="relative z-10 max-h-[90vh] object-contain drop-shadow-2xl"
          />

          {/* Teks Scroll Down (Vertikal di ujung kanan layar) */}
          <div className="hidden lg:flex absolute right-0 top-1/2 transform translate-x-16 rotate-90 origin-left items-center space-x-4 text-xs font-bold text-gray-400 tracking-widest uppercase">
            <span>Scroll Down</span>
            <span className="w-8 h-[2px] bg-gray-400"></span>
          </div>

        </div>
      </main>

    </div>
	)
}
