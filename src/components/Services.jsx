import Reveal from './Reveal'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="bg-ivory-soft py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">What We Offer</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-navy text-balance">
            Comprehensive Dental Services
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl bg-white p-7 border border-navy/5 shadow-sm hover:shadow-premium hover:-translate-y-1.5 hover:border-gold/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-navy-gradient flex items-center justify-center text-gold-light group-hover:scale-110 transition-transform duration-300">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-navy/60 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
