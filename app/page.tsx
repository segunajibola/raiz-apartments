import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Apartments from '@/components/Apartments'
import Amenities from '@/components/Amenities'
import Location from '@/components/Location'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <About />
      <Apartments />
      <Amenities />
      <Location />
      <Booking />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
