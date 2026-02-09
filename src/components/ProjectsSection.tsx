import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { forwardRef } from "react"

const ProjectsSection = forwardRef<HTMLElement>(function Projects(_, ref) {

  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto max-w-6xl px-8 md:px-12 py-24"
    >
      {/* Header */}

      <div className="mb-12 md:text-center md:w-full">
        <h2 className="text-3xl font-[var(--font-fira)] font-bold tracking-tight">
          Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          Some of the projects I have built that focus on performance and presenting UI/UX for users
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
                      Download
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
})

export default ProjectsSection;
