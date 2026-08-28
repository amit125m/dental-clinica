import { Cpu, HeartPulse, ClipboardList, MessageSquareText, ScanLine, PhoneCall } from 'lucide-react'
import Reveal from './Reveal'

const points = [
  { icon: Cpu, title: 'Modern Technology', desc: 'Equipped with the latest dental instruments and diagnostics.' },
  { icon: HeartPulse, title: 'Gentle & Comfortable Care', desc: 'A calm, pain-conscious approach to every procedure.' },
  { icon: ClipboardList, title: 'Personalized Treatment Plans', desc: 'Care built around your specific needs and goals.' },
  { icon: MessageSquareText, title: 'Transparent Consultation', desc: 'Clear explanations and honest guidance, always.' },
  { icon: ScanLine, title: 'Advanced Digital Scanning', desc: 'Accurate imaging for confident diagnosis and planning.' },
  { icon: PhoneCall, title: 'Emergency Support', desc: 'Responsive care when you need it most.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory-soft py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-navy text-balance">
            Dental Care You Can Trust
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="flex gap-4 p-6 rounded-2xl hover:bg-white transition-colors duration-300">
                <div className="shrink-0 h-12 w-12 rounded-full border-2 border-gold flex items-center justify-center text-gold-deep">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">{p.title}</h3>
                  <p className="text-sm text-navy/60 mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
