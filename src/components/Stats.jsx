import { useReveal } from '../hooks/useReveal'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { target: 4.9, suffix: '/5', label: 'Google Rating' },
  { target: 281, suffix: '+', label: 'Reviews' },
  { target: 15, suffix: '+', label: 'Dental Services' },
  { target: 100, suffix: '%', label: 'Patient Focus' },
]

function StatItem({ target, suffix, label }) {
  const [ref, visible] = useReveal(0.4)
  const value = useCounter(target, visible)

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-semibold text-ivory">
        {value}
        <span className="text-gold-light">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-ivory/60 tracking-wide">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-navy-gradient py-14 md:py-16">
      <div className="container-px mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
