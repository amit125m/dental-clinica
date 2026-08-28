import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { clinic, waLink, bookingMessage } from '../data/clinic'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAndGo = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-premium py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-xl md:text-2xl font-semibold tracking-wide"
        >
          <span className={scrolled ? 'text-navy' : 'text-navy'}>DENTAL</span>{' '}
          <span className="text-gold-deep">CLINICa</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-navy/80 hover:text-gold-deep transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={waLink(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-navy text-ivory px-6 py-2.5 text-sm font-medium tracking-wide shadow-premium hover:bg-navy-light hover:shadow-gold transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-navy p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-ivory/98 backdrop-blur-md border-t border-gold/20"
          >
            <ul className="container-px py-6 flex flex-col gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeAndGo}
                    className="text-base font-medium text-navy/90"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={waLink(bookingMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAndGo}
                  className="inline-flex items-center rounded-full bg-navy text-ivory px-6 py-2.5 text-sm font-medium tracking-wide"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
