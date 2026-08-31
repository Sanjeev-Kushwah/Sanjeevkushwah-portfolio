import { profile } from '../data'
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-10 md:py-14 max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="About" title="Professional Summary" />

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 md:p-8 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs">
          <p className="text-base leading-relaxed text-light-text dark:text-dark-text">
            {profile.summary}
          </p>
        </div>

        <div className="space-y-3">
          <ContactRow icon={MapPin} label="Location" value={profile.location} />
          <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
          <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow icon={Linkedin} label="LinkedIn" value="sanjeev-kushwah" href={profile.linkedin} />
          <ContactRow icon={Github} label="GitHub" value="Sanjeev-Kushwah" href={profile.github} />
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-brand/40 transition-colors">
      <span className="shrink-0 w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
        <Icon className="w-4 h-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-medium text-light-muted dark:text-dark-muted">{label}</p>
        <p className="text-xs font-semibold text-light-text dark:text-dark-text truncate">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">{content}</a>
  ) : content
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-wider uppercase text-brand">{eyebrow}</p>
      <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-light-text dark:text-dark-text">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-sm text-light-muted dark:text-dark-muted max-w-2xl">{subtitle}</p>}
      <div className="mt-3 h-1 w-12 rounded-full bg-brand" />
    </div>
  )
}
