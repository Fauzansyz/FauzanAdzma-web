import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Vite, React, Tailwind CSS, and shadcn/ui.",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/Fauzansyz/",
    demo: "https://portfolio.vercel.app",
  },
  {
    title: "LoginUI",
    description:
      "Simple yet clean login app page with kotlin and material 3 and modern UI.",
    tech: ["Kotlin", "xml", "material 3"],
    github: "https://github.com/username/todo-app",
  },
  {
    title: "Dashboard UI",
    description:
      "Responsive dashboard layout with reusable components.",
    tech: ["React", "shadcn/ui", "Tailwind"],
    github: "https://github.com/username/dashboard-ui",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-8 py-24"
    >
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">
          Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          Beberapa project yang pernah gue bangun — fokus ke clean code,
          performa, dan UX.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex h-full flex-col transition hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-lg">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>

                {project.demo && (
                  <Button
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
