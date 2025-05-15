"use client"
import Hero from "@/components/hero"
import AboutUsSection from "@/components/about-us-section"
import ServicesSection from "@/components/services-section"
import Industries from "@/components/industries"
import WhyChooseUs from "@/components/why-choose-us"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import WhatsAppButton from "@/components/whatsapp-button"
import { useState, useEffect } from "react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900) // Simulate fast load
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex min-h-screen flex-col">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500">
          <span className="loader block w-16 h-16 border-4 border-[#28ade1] border-t-[#f62c28] rounded-full animate-spin"></span>
        </div>
      )}
      <WhatsAppButton />
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
    </div>
  )
}
