
export default function Hero({ onScrollClick }: { onScrollClick: () => void }) {
  return (

    // Background putih lembut (Slate White)
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center font-sans bg-[#F8FAFC] text-[#475569]">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] rounded-[100%] blur-3xl opacity-80 -z-10"></div>

      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center relative z-10 w-full max-w-5xl gap-10">

        <div className="w-full md:w-1/2 relative flex justify-center items-end mt-16 md:mt-0">

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6 w-[120vw] md:w-[150%] bg-black py-4 z-0 shadow-2xl overflow-hidden flex md:right-15">

            {/* Konten teks yang berjalan (animate-marquee) */}
            <div className="flex whitespace-nowrap animate-marquee text-white font-bold text-sm md:text-lg tracking-[0.2em] uppercase">

              {/* Kelompok Teks 1 */}
              <div className="flex items-center space-x-6 px-4">
                <span>Android</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>Rust</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>React JS</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>Next.js</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>Laravel</span>
                <span className="text-[#818CF8]">â€¢</span>
              </div>

              {/* Kelompok Teks 2 (Duplikat persis kelompok 1 supaya looping nyambung) */}
              <div className="flex items-center space-x-6 px-4">
                <span>Android</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>Rust</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>React JS</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>Next.js</span>
                <span className="text-[#818CF8]">â€¢</span>
                <span>Laravel</span>
                <span className="text-[#818CF8]">â€¢</span>
              </div>

            </div>
          </div>
        </div>

          {/* --- KOLOM TEKS (Di Mobile posisinya di atas) --- */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left z-20">

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Hi I'm <span className="text-gray-900">Fauzan </span>
            </h1>

            {/* Menggunakan font-serif dan italic untuk style jabatan */}
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-800 mt-1 md:mt-2">
              Software Developer & Web Developer
            </h2>



            {/* --- KOLOM GAMBAR (Di Mobile posisinya di tengah) --- */}
            <div className="w-full md:w-1/2 relative flex justify-center items-end order-1 md:order-2 z-20">
              <img
                src="https://res.cloudinary.com/duwfnftsl/image/upload/v1784817270/1000315526-removebg-preview_wugikv.png"
                alt="Fauzan Profile" className="w-72 z-20 mt-[-2rem] md:w-96 h-auto object-cover drop-shadow-xl [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
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
            <button onClick={onScrollClick} className="w-full max-w-sm bg-gray-900 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition">
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
