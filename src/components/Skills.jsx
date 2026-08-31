import { skillGroups } from '../data'
import { SectionHeading } from './About'
import { Code2, Server, Database, Wrench, CheckCircle2 } from 'lucide-react'

const icons = [Code2, Server, Database, Wrench, CheckCircle2]

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-14 bg-light-card/50 dark:bg-dark-card/30 border-y border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Skills" title="Core Technical Skills" />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={group.title}
                className="group p-5 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-brand/40 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <span className="shrink-0 w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="font-bold text-sm md:text-base text-light-text dark:text-dark-text">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text border border-light-border dark:border-dark-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
