import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'
import { reviews } from '../data/reviews'
import { clinic } from '../data/clinic'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-navy-gradient py-24 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow text-gold-light">Patient Testimonials</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ivory text-balance">
            Loved by Our Patients
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2 text-gold-light">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-ivory font-medium">{clinic.rating}/5</span>
            <span className="text-ivory/50">·</span>
            <span className="text-ivory/70">{clinic.reviewCount} Google Reviews</span>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.1}>
              <div className="h-full glass-dark rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300">
                <Quote size={22} className="text-gold-light/60" />
                <p className="mt-4 text-ivory/85 text-sm leading-relaxed">{r.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-navy text-xs font-semibold">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-ivory text-sm font-medium">{r.name}</p>
                    <div className="flex gap-0.5 text-gold-light">
                      {Array.from({ length: r.rating }).map((_, s) => (
                        <Star key={s} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-ivory/40">
          Testimonials reflect individual patient experiences and are shared with permission.
        </p>
      </div>
    </section>
  )
}
