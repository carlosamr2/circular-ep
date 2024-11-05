import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { CarouselBanner } from '@/components/CarouselBanner'
import { Contact } from '@/components/Contact'
import "../styles/globals.css"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <Hero /> */}
        <CarouselBanner />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
