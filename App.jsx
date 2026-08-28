import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Treatments from './components/Treatments'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import AppointmentCTA from './components/AppointmentCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="font-body bg-ivory text-navy antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Treatments />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
