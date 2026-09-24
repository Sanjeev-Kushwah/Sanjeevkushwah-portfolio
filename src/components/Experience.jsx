import { experience } from '../data'
import { SectionHeading } from './About'
import { Briefcase, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-14 max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="Experience" title="Professional Experience" />
      <div className="mt-8 relative">
        <div className="absolute left-3.5 md:left-4.5 top-2 bottom-2 w-px bg-light-border dark:bg-dark-border" />
        <div className="space-y-6">
          {experience.map((job) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 md:pl-12"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute left-1.5 md:left-2.5 top-2.5 w-4 h-4 rounded-full bg-brand ring-4 ring-light-bg dark:ring-dark-bg"
              />
              <div className="p-5 md:p-7 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs hover:border-brand/40 transition-colors duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-light-border/60 dark:border-dark-border/60 pb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-light-text dark:text-dark-text">{job.role}</h3>
                    <p className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm mt-0.5">
                      <Briefcase className="w-4 h-4" /> {job.company}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="px-2.5 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold">
                      {job.period}
                    </span>
                    <p className="inline-flex items-center gap-1 text-xs text-light-muted dark:text-dark-muted mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand" /> {job.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((pt, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-start gap-2.5 text-sm text-light-text dark:text-dark-text leading-relaxed"
                    >
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand" />
                      <span>{pt}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
