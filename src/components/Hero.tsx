import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { useTheme } from "next-themes"

type HeroSection = {
  onScroll: () => void
}
export default function Hero({ onScroll }: HeroSection) {
const { theme } = useTheme()
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4">
  <div className={`${theme=== "dark" ? "hero-gradient" : "hero-gradient-light"} absolute inset-0 p-20`}></div>

      <div className="relative z-10 max-w-3xl text-center">
        <div className="max-w-3xl flex gap-4 justify-center">

          <Badge className="mb-4">Web Developer</Badge>
          <Badge className="mb-4">Mobile Developer</Badge>

        </div>
        
        <h1 className="mb-6 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              Hi, I'm Fauzan Adzma
                  </h1>

        <p className="mb-8 leading-7 [&:not(:first-child)]:text-muted-foreground">
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
