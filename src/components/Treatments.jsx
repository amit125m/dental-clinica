import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { treatments } from '../data/treatments'
import { waLink } from '../data/clinic'

export default function Treatments() {
  return (
    <section id="treatments" className="bg-ivory py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Signature Treatments</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-navy text-balance">
            Featured Treatments
          </h2>
          <div className="divider-gold mt-6" />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden shadow-premium aspect-[4/5]">
                <img
                  src={t.image}
                  alt={t.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-ivory">{t.title}</h3>
                  <p className="mt-2 text-sm text-ivory/75 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {t.desc}
                  </p>
                  <a
                    href={waLink(`Hello DENTAL CLINICa, I'd like to learn more about ${t.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-light hover:text-ivory transition-colors"
                  >
                    Learn More
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
