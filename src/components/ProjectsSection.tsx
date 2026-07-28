import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FolderGit2 } from "lucide-react"
import { forwardRef } from "react"
import projectsList from "@/data/ProjectList"
import { motion } from "framer-motion"
import TextType from "./TextType"

const ProjectsSection = forwardRef<HTMLElement>(function Projects(_, ref) {
  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto max-w-6xl px-6 md:px-12 py-20"
    >
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          <TextType 
            text={["Projects"]}
            typingSpeed={75}
            pauseDuration={1500}
            loop={false}
            showCursor={false}
            startOnVisible={true}
          />
        </h2>
        <p className="mt-2 text-sm text-slate-500 font-medium max-w-md mx-auto">
          Some of the projects I have built focused on performance, architecture, and delivering great UI/UX.
        </p>
        <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            key={project.title}
            className="flex"
          >
            <div className="group relative w-full flex flex-col justify-between rounded-2xl bg-slate-900 border border-slate-800 text-white p-6 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <Badge 
                      key={t} 
                      variant="secondary"
                      className="bg-slate-800 text-blue-300 hover:bg-slate-700 border border-slate-700/60 text-xs px-2.5 py-1"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions: Responsive Flex Container */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3 items-center w-full">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full sm:flex-1 bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-100 hover:text-white flex items-center justify-center"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>

                {project.demo && (
                  <Button
                    size="sm"
                    asChild
                    className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo / Release
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
})

export default ProjectsSection;


