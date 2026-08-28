import { Cpu, HeartHandshake, Feather, UserCheck } from 'lucide-react'
import Reveal from './Reveal'

const features = [
  { icon: Cpu, title: 'Advanced Technology', desc: 'Digital scanning and modern equipment for precise, efficient care.' },
  { icon: HeartHandshake, title: 'Experienced Care', desc: 'A skilled team dedicated to long-term dental health and trust.' },
  { icon: Feather, title: 'Comfort First', desc: 'A calm, gentle approach designed to ease every visit.' },
  { icon: UserCheck, title: 'Personalized Treatment', desc: 'Care plans shaped around your goals, not a one-size template.' },
]

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden shadow-premium aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
              alt="Interior of DENTAL CLINICa treatment room"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">About DENTAL CLINICa</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-navy leading-tight text-balance">
              A modern dental clinic built around
              <span className="italic text-gold-deep"> your comfort.</span>
            </h2>
            <div className="divider-gold mt-6 mb-6" />
            <p className="text-navy/70 leading-relaxed max-w-xl">
              Located in Jamia Nagar, Okhla, DENTAL CLINICa brings together
              advanced dental technology and genuine, patient-focused care.
              Every treatment plan is built around you — thoughtfully
              explained, gently delivered, and designed to protect your smile
              for years to come.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.08 * i}>
                <div className="group rounded-2xl bg-white/70 border border-gold/15 p-5 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-navy mb-3">
                    <f.icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy">{f.title}</h3>
                  <p className="text-sm text-navy/60 mt-1.5 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
