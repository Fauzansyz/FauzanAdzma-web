export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-2 md:px-1 py-24">
      <h2 className="text-3xl font-bold text-center">About me</h2>

      <div className="mt-6 px-5 md:px-2 space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <p>
          I like building projects from scratch, starting with determining the architecture until the project is successful  <b>deployed</b>
        </p>

        <p>
          And for me, a structured project is better and more expensive than a project that is running but is not organized.
        </p>

        <p>
          Gue suka hal-hal yang rapi, jelas, dan gak ribet — baik di
          kode maupun di UI. Sekarang lagi fokus ngembangin skill di
          React, Tailwind, dan ekosistem modern web.</p>

        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          consistency is the key, because everything starts with determination and the will to do it.
        </p>
      </div>
    </section>
  )
}
