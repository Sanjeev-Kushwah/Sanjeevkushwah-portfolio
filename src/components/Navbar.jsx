import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Sun, Moon, Menu, X, FileText } from 'lucide-react'

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = (event) => {
    const nextDark = !dark
    const applyTheme = () => {
      setDark(nextDark)
      if (nextDark) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
    }

    // Respect user prefers-reduced-motion setting
    if (typeof document === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      applyTheme()
      return
    }

    // Get exact button center position
    let x = window.innerWidth - 48
    let y = 32
    if (event && event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect()
      x = rect.left + rect.width / 2
      y = rect.top + rect.height / 2
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    ) + 20

    // Modern View Transitions API with liquid ripple clip-path
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        applyTheme()
      })

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]

        document.documentElement.animate(
          {
            clipPath: nextDark ? clipPath : clipPath.slice().reverse()
          },
          {
            duration: 650,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: nextDark
              ? '::view-transition-new(root)'
              : '::view-transition-old(root)'
          }
        )
      })
      return
    }

    // Fallback circular bubble overlay animation for browsers without startViewTransition
    const overlay = document.createElement('div')
    overlay.className = 'theme-bubble-overlay'
    overlay.style.backgroundColor = nextDark ? '#0b0f19' : '#ffffff'
    overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`
    document.body.appendChild(overlay)

    // Force reflow
    void overlay.offsetWidth

    overlay.style.clipPath = `circle(${endRadius}px at ${x}px ${y}px)`

    setTimeout(() => {
      applyTheme()
      overlay.style.opacity = '0'
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay)
        }
      }, 150)
    }, 600)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-200 ${
        scrolled
          ? 'bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-xs'
          : 'bg-light-bg/60 dark:bg-dark-bg/60 backdrop-blur-xs border-b border-light-border/40 dark:border-dark-border/40'
      }`}
    >
      <nav className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Sanjeev Kushwah Home">
          <img src="/logo.png" alt="Sanjeev Kushwah Logo" className="w-8 h-8 rounded-full ring-2 ring-brand/40 transition-transform group-hover:scale-105" />
          <span className="font-bold tracking-tight text-light-text dark:text-dark-text text-base md:text-lg">
            Sanjeev Kushwah
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand font-semibold'
                    : 'text-light-muted hover:text-brand dark:text-dark-muted dark:hover:text-brand'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            download="Sanjeev_Kushwah_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand/10 border border-brand/25 text-brand text-xs font-semibold hover:bg-brand hover:text-white transition-all duration-150"
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </a>

          {/* Theme Switcher */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-light-muted hover:text-brand dark:text-dark-muted dark:hover:text-brand transition-colors"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            download="Sanjeev_Kushwah_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand/10 border border-brand/20 text-brand text-xs font-semibold"
          >
            Resume
          </a>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-light-muted dark:text-dark-muted"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-light-text dark:text-dark-text"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 transition-colors ${
                  isActive ? 'text-brand font-semibold' : 'text-light-muted dark:text-dark-muted'
                }`
              }
            >
              Home
            </NavLink>
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-1 transition-colors ${
                    isActive ? 'text-brand font-semibold' : 'text-light-muted dark:text-dark-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
