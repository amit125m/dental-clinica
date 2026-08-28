import { Facebook, Instagram, Youtube, MapPin, Phone, Clock } from 'lucide-react'
import { clinic } from '../data/clinic'
import { services } from '../data/services'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-ivory/70 pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-xl font-semibold text-ivory">
            DENTAL <span className="text-gold-light">CLINICa</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Premium, patient-focused dental care in the heart of New Delhi —
            where advanced technology meets genuine comfort.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="h-9 w-9 rounded-full border border-ivory/15 flex items-center justify-center hover:border-gold hover:text-gold-light transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory tracking-wide">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold-light transition-colors duration-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory tracking-wide">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-gold-light transition-colors duration-300">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory tracking-wide">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} className="shrink-0 mt-0.5 text-gold-light" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="shrink-0 mt-0.5 text-gold-light" />
              <a href={`tel:${clinic.phoneTel}`} className="hover:text-gold-light transition-colors duration-300">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock size={16} className="shrink-0 mt-0.5 text-gold-light" />
              <span>{clinic.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-ivory/10 container-px mx-auto max-w-7xl text-center text-xs text-ivory/40">
        © {year} DENTAL CLINICa. All rights reserved.
      </div>
    </footer>
  )
}
