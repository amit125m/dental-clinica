import { ArrowRight, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { waLink, bookingMessage } from '../data/clinic'

export default function AppointmentCTA() {
  return (
    <section className="relative bg-navy py-24 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px mx-auto max-w-4xl text-center relative">
        <Reveal>
          <span className="eyebrow text-gold-light">Start Your Journey</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-ivory text-balance leading-tight">
            Ready to Transform Your Smile?
          </h2>
          <p className="mt-5 text-ivory/70 max-w-xl mx-auto leading-relaxed">
            Book a consultation with DENTAL CLINICa today and take the first
            step toward a healthier, more confident smile.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={waLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient text-navy px-8 py-3.5 font-semibold shadow-gold hover:brightness-105 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/25 text-ivory px-8 py-3.5 font-medium hover:bg-ivory/10 transition-all duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
