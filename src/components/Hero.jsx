import { MapPin, Phone, Mail, Linkedin, Github, FileText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 dark:bg-brand/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand/10 dark:bg-brand/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column: Content */}
        <div className="md:col-span-7 space-y-5 animate-fade-in">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Backend Java & Spring Boot Developer
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-light-text dark:text-dark-text leading-none">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-bold text-brand">
              {profile.role}
            </p>
          </div>

          {/* Short Concise Description */}
          <p className="text-base md:text-lg text-light-muted dark:text-dark-muted leading-relaxed max-w-2xl">
            Specializing in Java 8+, Spring Boot, RESTful APIs, Spring Data JPA/Hibernate, and MySQL relational database integrations to deliver scalable, reliable backend solutions.
          </p>

          {/* Location & Quick Contact Info */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-light-muted dark:text-dark-muted font-medium pt-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand shrink-0" /> {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-brand transition-colors">
              <Phone className="w-4 h-4 text-brand shrink-0" /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-brand transition-colors">
              <Mail className="w-4 h-4 text-brand shrink-0" /> {profile.email}
            </a>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-white font-medium text-sm shadow-md hover:bg-brand-600 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/resume.pdf"
              download="Sanjeev_Kushwah_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand/10 border border-brand/30 text-brand font-medium text-sm hover:bg-brand hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-medium text-sm hover:border-brand/50 hover:text-brand dark:hover:text-brand transition-all duration-200"
            >
              Contact Me
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-brand hover:border-brand/50 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-brand hover:border-brand/50 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="md:col-span-5 flex justify-center md:justify-end pt-2 md:pt-0">
          <div className="relative group">
            {/* Subtle glow border */}
            <div className="absolute inset-0 -m-2 bg-gradient-to-tr from-brand to-brand-400 rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
            
            {/* Image frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full ring-4 ring-light-card dark:ring-dark-card border border-brand/20 bg-light-card dark:bg-dark-card overflow-hidden shadow-xl">
              <img
                src="/profile.png"
                alt={profile.name}
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Compact Floating Tech Badge */}
            <div className="absolute -bottom-3 -left-4 px-3.5 py-1.5 rounded-xl bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur border border-light-border dark:border-dark-border shadow-lg">
              <p className="text-[11px] font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wider">Experience</p>
              <p className="text-xs font-bold text-brand">Bajaj General Insurance Intern</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
