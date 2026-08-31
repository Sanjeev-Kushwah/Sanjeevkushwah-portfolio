import { education, certifications } from '../data'
import { SectionHeading } from './About'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-10 md:py-14 max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="Background" title="Education & Certifications" />

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3.5">
            <GraduationCap className="w-5 h-5 text-brand" />
            <h3 className="font-bold text-base text-light-text dark:text-dark-text">Education</h3>
          </div>
          {education.map((e) => (
            <div key={e.degree} className="p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-brand/10 text-brand text-xs font-semibold">
                {e.period}
              </span>
              <h4 className="mt-2 text-base font-bold text-light-text dark:text-dark-text">{e.degree}</h4>
              <p className="mt-1 text-xs text-light-muted dark:text-dark-muted font-medium">{e.institution}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3.5">
            <Award className="w-5 h-5 text-brand" />
            <h3 className="font-bold text-base text-light-text dark:text-dark-text">Certifications</h3>
          </div>
          {certifications.map((c) => (
            <div key={c.title} className="p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs">
              <h4 className="text-base font-bold text-light-text dark:text-dark-text">{c.title}</h4>
              <p className="mt-1 text-xs text-brand font-semibold">{c.issuer}</p>
              <p className="mt-1 text-xs text-light-muted dark:text-dark-muted">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
