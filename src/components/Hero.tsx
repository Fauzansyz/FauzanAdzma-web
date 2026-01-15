import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <Badge className="mb-4">Frontend Developer</Badge>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Membangun web yang cepat, rapi, dan masuk akal.
        </h1>

        <p className="mb-8 text-muted-foreground">
          Fokus di React, Tailwind, dan UX yang gak nyusahin user.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg">Lihat Project</Button>
          <Button variant="outline" size="lg">
            GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
