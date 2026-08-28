import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import { clinic, waLink, generalMessage, directionsLink, mapsEmbedLink } from '../data/clinic'

const items = [
  { icon: MapPin, label: 'Address', value: clinic.address },
  { icon: Phone, label: 'Phone', value: clinic.phoneDisplay },
  { icon: MessageCircle, label: 'WhatsApp', value: clinic.whatsappDisplay },
  { icon: Clock, label: 'Hours', value: clinic.hours },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory-soft py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Visit Us</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-navy text-balance">
            Get in Touch
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-premium h-full min-h-[320px]">
              <iframe
                title="DENTAL CLINICa location map"
                src={mapsEmbedLink}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-white border border-navy/5 shadow-sm p-8">
              <div className="space-y-6">
                {items.map((it) => (
                  <div key={it.label} className="flex gap-4">
                    <div className="shrink-0 h-11 w-11 rounded-full bg-navy-gradient flex items-center justify-center text-gold-light">
                      <it.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs eyebrow">{it.label}</p>
                      <p className="mt-1 text-navy/80 leading-relaxed">{it.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${clinic.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-full bg-navy text-ivory px-5 py-2.5 text-sm font-medium hover:bg-navy-light transition-colors duration-300"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href={waLink(generalMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-navy px-5 py-2.5 text-sm font-semibold hover:brightness-105 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 text-navy px-5 py-2.5 text-sm font-medium hover:border-gold hover:bg-ivory-soft transition-colors duration-300"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
