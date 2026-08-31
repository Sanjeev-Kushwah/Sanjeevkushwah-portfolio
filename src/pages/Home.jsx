import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Server, Database, Briefcase, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <Hero />

      {/* Quick Professional Snapshot */}
      <section className="py-8 max-w-7xl mx-auto px-6">
        <div className="p-6 md:p-8 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-brand">Quick Overview</span>
              <h2 className="text-xl md:text-2xl font-extrabold text-light-text dark:text-dark-text">
                Backend Developer specializing in Java & Spring Boot
              </h2>
              <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                Experienced in designing RESTful APIs, Spring Data JPA/Hibernate data persistence, MySQL schema architecture, input validation, and log analysis gained from hands-on work at Bajaj General Insurance.
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col gap-2.5 pt-2 md:pt-0">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text">
                <Server className="w-4 h-4 text-brand shrink-0" /> Spring Boot & REST APIs
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text">
                <Database className="w-4 h-4 text-brand shrink-0" /> MySQL & JPA / Hibernate
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text">
                <Briefcase className="w-4 h-4 text-brand shrink-0" /> Bajaj General Insurance Intern
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Featured Projects (limit 2 on homepage) */}
      <div>
        <Projects limit={2} />
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-8 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-medium text-sm shadow-md hover:bg-brand-600 transition-all hover:-translate-y-0.5"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
