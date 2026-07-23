export default function Hero() {
  return (

    // Background putih lembut (Slate White)
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center font-sans text-[#475569]">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] rounded-[100%] blur-3xl opacity-80 -z-10"></div>

      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center relative z-10 w-full max-w-5xl gap-10">

        {/* --- KOLOM TEKS (Di Mobile posisinya di atas) --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left z-20">

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Hi I'm <span className="text-gray-900">Jan</span>
          </h1>

          {/* Menggunakan font-serif dan italic untuk style jabatan */}
          <h2 className="text-4xl md:text-5xl font-serif italic text-gray-800 mt-1 md:mt-2">
            Software Developer
          </h2>

        

        {/* --- KOLOM GAMBAR (Di Mobile posisinya di tengah) --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center relative mt-[-4rem] md:mt-0 z-10">

          {/* GAMBAR DENGAN EFEK FADE OUT (Masking) */}
          {/* Trik [-webkit-mask-image:...] ini yang bikin bagian bawah foto memudar secara transparan */}
          <img
            src="https://res.cloudinary.com/duwfnftsl/image/upload/v1784808421/1000315526-removebg-preview_zurbcq.png"
            alt="Fauzan Profile"
            className="w-72 md:w-96 h-auto object-cover drop-shadow-xl [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          />

        </div>

          {/* Badge "Available for opportunities" (Hanya muncul di Mobile biar mirip screenshot) */}
          <div className="flex md:hidden items-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2 mt-8 shadow-sm">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-800">Available for new opportunities</span>
          </div>

          <p className="hidden md:block text-[#475569] mt-6 max-w-md leading-relaxed">
            I'm a developer focusing on Kotlin, React JS, Next.js, and building robust web and mobile applications.
          </p>
        </div>
      
        <div className="w-full md:hidden flex flex-col items-center mt-[-2rem] z-20 space-y-4 px-6">

          <p className="text-lg font-medium text-gray-800 mb-2">Software Developer</p>

          {/* Tombol Outline (Download CV) */}
          <button className="w-full max-w-sm border-2 border-gray-800 text-gray-800 font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download CV
          </button>

          {/* Tombol Solid (Get in touch) */}
          <button className="w-full max-w-sm bg-gray-900 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            Get in touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Experienced in building & shipping applications.
          </p>

        </div>

      </main>
    </div>
      )
}
