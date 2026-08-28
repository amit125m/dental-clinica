import Reveal from './Reveal'
import { gallery } from '../data/gallery'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Smile Transformations</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-navy text-balance">
            Our Gallery
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={i === 0 || i === 3 ? 'col-span-2 md:col-span-1' : ''}>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-shadow duration-300 aspect-square">
                <img
                  src={g.image}
                  alt={`${g.category} at DENTAL CLINICa`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300" />
                <span className="absolute bottom-4 left-4 text-ivory text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {g.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
