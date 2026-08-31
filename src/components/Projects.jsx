import { projects } from '../data'
import { SectionHeading } from './About'
import { FolderGit2, Github, ExternalLink } from 'lucide-react'

export default function Projects({ limit }) {
  const displayProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section id="projects" className="py-10 md:py-14 bg-light-card/50 dark:bg-dark-card/30 border-y border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Projects" title="Featured Backend Projects" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {displayProjects.map((p) => (
            <article
              key={p.title}
              className="group p-6 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-brand/40 transition-all duration-200 hover:-translate-y-1 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-light-border/60 dark:border-dark-border/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                      <FolderGit2 className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text">{p.title}</h3>
                  </div>

                  <a
                    href="https://github.com/Sanjeev-Kushwah"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.title} repository`}
                    className="p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-brand hover:bg-brand/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <ul className="mt-4 space-y-2">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-light-text dark:text-dark-text leading-relaxed">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-light-border/40 dark:border-dark-border/40 flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text border border-light-border dark:border-dark-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
