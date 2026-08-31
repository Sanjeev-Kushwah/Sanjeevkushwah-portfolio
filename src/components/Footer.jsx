import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-light-muted dark:text-dark-muted">
        <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-light-text dark:text-dark-text">{profile.name}</span>. All rights reserved.</p>
        <p className="inline-flex items-center gap-1.5">
          Designed & Built by <span className="text-brand font-medium">{profile.name}</span>
        </p>
      </div>
    </footer>
  )
}
