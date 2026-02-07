import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Github } from "lucide-react"

type HeroSection = {
  onScroll: () => void
}

export default function Hero({ onScroll }: HeroSection) {

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <div className="max-w-3xl flex gap-4 justify-center">

          <Badge className="mb-4">Web Developer</Badge>
          <Badge className="mb-4">Mobile Developer</Badge>

        </div>

        <h1 className="mb-6 text-4xl font-[var(--font-oswald)] tracking-tight sm:text-5xl font-semibold">
          Hi, I'm Fauzan Adzma
        </h1>

        <p className="mb-8 text-muted-foreground">
          My focus In android and web application development
        </p>

        <div className="flex justify-center gap-4">
          <Button onClick={onScroll} size="lg">View projects</Button>
          <Button variant="outline" size="lg">
            <a href="https://github.com/Fauzansyz" target="_blank" >
              <Github className="mr-2 h-2 w-2" />

            </a>
            GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
