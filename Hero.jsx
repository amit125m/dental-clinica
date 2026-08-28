import { motion } from 'framer-motion'
import { Star, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import { clinic, waLink, bookingMessage } from '../data/clinic'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ivory pt-32 pb-20 md:pt-44 md:pb-28"
    >
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="eyebrow">Premium Dental Care · New Delhi</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] text-navy text-balance">
            Your Smile Deserves
            <span className="block italic text-gold-deep">Exceptional Care.</span>
          </h1>

          <p className="mt-6 text-lg text-navy/70 max-w-xl leading-relaxed">
            Advanced dental technology, gentle personalised treatment and a
            calm, welcoming clinic — designed around your comfort, from your
            first consultation to your final reveal.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={waLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-navy text-ivory px-7 py-3.5 font-medium shadow-premium hover:bg-navy-light hover:shadow-gold transition-all duration-300"
            >
              Book an Appointment
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 text-navy px-7 py-3.5 font-medium hover:border-gold hover:bg-white/60 transition-all duration-300"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-navy/60">
            <ShieldCheck size={18} className="text-gold-deep" />
            No hidden costs · Transparent consultations
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-premium aspect-[4/5] max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
              alt="Dentist providing advanced dental care at DENTAL CLINICa"
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
          </div>

          {/* Floating rating card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-8 glass rounded-2xl px-5 py-4 shadow-premium hidden sm:flex items-center gap-3"
          >
            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-gold-gradient text-navy">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-navy leading-none">{clinic.rating} ★</p>
              <p className="text-xs text-navy/60 mt-1">Rating</p>
            </div>
          </motion.div>

          {/* Floating reviews card */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -right-4 bottom-24 glass rounded-2xl px-5 py-4 shadow-premium hidden sm:block"
          >
            <p className="font-display text-lg font-semibold text-navy leading-none">{clinic.reviewCount}+</p>
            <p className="text-xs text-navy/60 mt-1">Happy Reviews</p>
          </motion.div>

          {/* Floating advanced care card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute left-6 -bottom-6 glass-dark rounded-2xl px-5 py-4 shadow-premium"
          >
            <p className="text-ivory text-sm font-medium">Advanced Dental Care</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
