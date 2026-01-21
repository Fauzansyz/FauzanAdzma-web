export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-4
                                sm:flex-row sm:items-center sm:justify-between md:px-8">
        {/* Left */}
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Fauzan adzma.
        </p>

        {/* Center */}
        <p className="text-sm text-zinc-500 italic text-center">
          Built with care. Still learning.
        </p>

        {/* Right */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <a
            href="https://github.com/Fauzansyz"
            target="_blank"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:fauzanadzma2@gmail.com"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
