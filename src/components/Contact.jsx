import { profile } from '../data'
import { SectionHeading } from './About'
import { MapPin, Phone, Mail, Linkedin, Github, Send } from 'lucide-react'
import { motion } from 'motion/react'

export default function Contact() {
  const items = [
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sanjeev-kushwah', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/Sanjeev-Kushwah', href: profile.github },
  ]

  return (
    <section id="contact" className="py-10 md:py-14 bg-light-card/50 dark:bg-dark-card/30 border-t border-light-border dark:border-dark-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <SectionHeading eyebrow="Contact" title="Let's Connect" />
        <p className="mt-4 text-sm md:text-base text-light-muted dark:text-dark-muted max-w-xl mx-auto">
          Seeking a Backend Developer role in Java & Spring Boot. Feel free to reach out via any channel below.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-3.5 text-left">
          {items.map((c, idx) => {
            const Icon = c.icon
            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3, scale: 1.015 }}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-brand/40 transition-colors duration-200 shadow-xs"
              >
                <span className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-light-muted dark:text-dark-muted">{c.label}</p>
                  <p className="text-xs font-semibold text-light-text dark:text-dark-text truncate">{c.value}</p>
                </div>
              </motion.div>
            )
            return c.href ? (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer">{inner}</a>
            ) : inner
          })}
        </div>

        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 inline-block"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-medium text-sm shadow-md hover:bg-brand-600 hover:shadow-lg transition-all duration-200"
          >
            <Send className="w-4 h-4" /> Send an Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
