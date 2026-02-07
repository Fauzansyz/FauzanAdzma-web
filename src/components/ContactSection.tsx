import { Mail, Github, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-3xl px-9 py-22">
      <h2 className="text-3xl font-bold">Contact</h2>

      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        If you have any questions or would like to collaborate, please contact us on social media below.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="mailto:fauzanadzma2@gmail.com"
          className="inline-flex items-center justify-center gap-2 rounded-xl
                               bg-zinc-900 px-5 py-3 text-white transition
                               hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
        >
          <Mail size={18} />
          Email Me
        </a>

        <a
          href="https://github.com/Fauzansyz"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 rounded-xl
                               border border-zinc-300 px-5 py-3 transition
                               hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          <Github size={18} />
          GitHub
        </a>

        <a
          href="https://www.instagram.com/coding_ngin"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 rounded-xl
                               border border-zinc-300 px-5 py-3 transition
                               hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          <Instagram size={18} />
          Instagram
        </a>
      </div>

      {/* Footer note */}
      <p className="mt-10 text-sm text-zinc-500">
        The fastest response is usually via email
      </p>
    </section>
  )
}
