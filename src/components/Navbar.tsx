export default function Navbar({onScrollClick}:any) {
  return (
    <>
      <nav className="container mx-auto py-6 lg:px-16 flex items-center relative z-20">

        <div className="flex w-full justify-evenly space-x-5 text-xs font-semibold tracking-widest text-gray-500 uppercase items-center">
          <a onClick={onScrollClick} className="text-red-500">Home</a>
          <a onClick={onScrollClick} className="hover:text-red-500 transition">About</a>
          <a onClick={onScrollClick} className="hover:text-red-500 transition">Projects</a>
        </div>
      </nav>
      </>
  )
}
