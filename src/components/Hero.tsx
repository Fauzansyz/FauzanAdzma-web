export default function Hero() {
	return (			
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800">
      <main className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center min-h-[calc(100vh-100px)] relative z-10 pt-10 md:pt-0">
        
        {/* KOLOM KIRI (Teks & Overlap Basis) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1 relative">
          
          {/* Teks Sapaan */}
          <div className="flex items-center space-x-4 mb-4 z-20">
            <span className="w-8 h-[2px] bg-gray-400"></span>
            <span className={`uppercase tracking-[0.2em] text-xs font-bold text-gray-50`}>Hello</span>
          </div>
          
          {/* Teks Nama Utama (Overlap Area) */}
          {/* Di mobile, teks ini harus bisa terbaca meski sedikit tertutup */}
          <h1 className={`text-5xl lg:text-7xl font-extrabold leading-tight mt-2 z-10 text-gray-50`}>
            I'm <span className="text-[#ff2b4a]">Fauzan</span> Adzma
          </h1>
          
          {/* Deskripsi Teks */}
          <p className={`text-gray-50 mt-6 max-w-md text-sm leading-relaxed z-10`}>
            This is Jems Kemerun, visual designer, Photographer, Web Developer and Creative Director located in United States, looking for working around the globe.
          </p>
          
          {/* Tombol CV */}
          <div className="mt-10 z-10">
            <button className="bg-[#ff2b4a] hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded shadow-lg shadow-red-500/30 transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Social Icons (Desktop: Bawah, Mobile: Bawah) */}
          <div className="flex space-x-6 mt-16 lg:mt-24 text-gray-400 z-10">
            <span className="cursor-pointer hover:text-red-500 transition">IG</span>
            <span className="cursor-pointer hover:text-red-500 transition">TW</span>
            <span className="cursor-pointer hover:text-red-500 transition">LI</span>
          </div>
        </div>

        {/* KOLOM KANAN (Gambar Overlapping) */}
        {/* order-1 untuk mobile (pindah ke atas teks), order-2 untuk desktop */}
        <div className="w-full md:w-1/2 relative mt-[-2rem] md:mt-0 flex justify-center items-end order-1 md:order-2 z-20">
          
          {/* Elemen Brush Stroke di belakang (Aman) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
          
          {/* Gambar Orang */}
          {/* Gunakan mt-[-...rem] atau translate untuk efek overlap di mobile */}
          {/* relative z-20 untuk menaikkan z-index di depan teks nama */}
          <img 
            src="https://res.cloudinary.com/duwfnftsl/image/upload/v1784808421/1000315526-removebg-preview_zurbcq.png" 
            alt="Jems Kemerun Profile Overlap" 
            className="relative z-20 max-h-[60vh] md:max-h-[70vh] object-contain drop-shadow-2xl md:mt-0 mt-[-6rem]" 
          />

          {/* Teks Scroll Down (Desktop Only) */}
          <div className="hidden lg:flex absolute right-0 top-1/2 transform translate-x-16 rotate-90 origin-left items-center space-x-4 text-xs font-bold text-gray-400 tracking-widest uppercase">
            <span>Scroll Down</span>
            <span className="w-8 h-[2px] bg-gray-400"></span>
          </div>

        </div>
      </main>

    </div>
  	)
}
