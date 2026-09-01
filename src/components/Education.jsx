import { useState } from 'react'
import { education, certifications } from '../data'
import { SectionHeading } from './About'
import { GraduationCap, Award, ExternalLink, X, Eye } from 'lucide-react'

export default function Education() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section id="education" className="py-10 md:py-14 max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="Background" title="Education & Certifications" />

      <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
        {/* Education Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-brand" />
            <h3 className="font-bold text-base text-light-text dark:text-dark-text">Education</h3>
          </div>

          {education.map((e) => (
            <div
              key={e.degree}
              className="p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs hover:border-brand/40 transition-all duration-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-light-border/60 dark:border-dark-border/60 pb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-brand/10 text-brand text-xs font-semibold">
                  {e.period}
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-xs font-bold">
                    {e.grade}
                  </span>
                  <span className="text-[11px] font-medium text-light-muted dark:text-dark-muted">
                    • {e.status}
                  </span>
                </div>
              </div>

              <h4 className="mt-3 text-base font-bold text-light-text dark:text-dark-text">{e.degree}</h4>
              <p className="text-xs font-medium text-brand mt-0.5">{e.field}</p>
              <p className="mt-1 text-xs text-light-muted dark:text-dark-muted font-medium">{e.institution}</p>

              <p className="mt-3 text-xs text-light-text dark:text-dark-text leading-relaxed border-t border-light-border/40 dark:border-dark-border/40 pt-2.5">
                {e.details}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-brand" />
            <h3 className="font-bold text-base text-light-text dark:text-dark-text">Certifications</h3>
          </div>

          {certifications.map((c) => (
            <div
              key={c.title}
              className="p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs hover:border-brand/40 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-light-text dark:text-dark-text">{c.title}</h4>
                  <p className="mt-0.5 text-xs text-brand font-semibold">{c.issuer}</p>
                </div>
                {c.credentialId && (
                  <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[10px] font-mono font-semibold shrink-0">
                    ID: {c.credentialId.slice(0, 10)}...
                  </span>
                )}
              </div>

              <p className="mt-2.5 text-xs text-light-muted dark:text-dark-muted leading-relaxed">{c.detail}</p>

              {/* Certificate Image Preview */}
              {c.image && (
                <div className="mt-4 pt-3 border-t border-light-border/40 dark:border-dark-border/40">
                  <div
                    onClick={() => setActiveCertificate(c.image)}
                    className="relative group cursor-pointer overflow-hidden rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg"
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-36 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold">
                      <Eye className="w-4 h-4" /> Click to View Certificate
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      {activeCertificate && (
        <div
          onClick={() => setActiveCertificate(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border"
          >
            <div className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border">
              <p className="text-sm font-bold text-light-text dark:text-dark-text">
                Alpha – Data Structures & Algorithms with Java (Apna College)
              </p>
              <button
                onClick={() => setActiveCertificate(null)}
                className="p-1.5 rounded-lg text-light-muted hover:text-brand dark:text-dark-muted dark:hover:text-brand transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-black/10 flex justify-center">
              <img
                src={activeCertificate}
                alt="Certificate of Completion"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
