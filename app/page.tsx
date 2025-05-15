import Hero from "@/components/hero"
import AboutUsSection from "@/components/about-us-section"
import ServicesSection from "@/components/services-section"
import Industries from "@/components/industries"
import WhyChooseUs from "@/components/why-choose-us"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUsSection />
        <ServicesSection />
        <Industries />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
