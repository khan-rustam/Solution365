import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutUs from "@/components/about-us"
import WhatsAppButton from "@/components/whatsapp-button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <AboutUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
