import { projects } from '../data'
import { SectionHeading } from './About'
import { FolderGit2, Github } from 'lucide-react'
import { motion } from 'motion/react'

export default function Projects({ limit }) {
  const displayProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section id="projects" className="py-10 md:py-14 bg-light-card/50 dark:bg-dark-card/30 border-y border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Projects" title="Featured Backend Projects" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {displayProjects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group p-6 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-brand/40 transition-colors duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-light-border/60 dark:border-dark-border/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                      <FolderGit2 className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text">{p.title}</h3>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    href="https://github.com/Sanjeev-Kushwah"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.title} repository`}
                    className="p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-brand hover:bg-brand/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
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
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text border border-light-border dark:border-dark-border"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
