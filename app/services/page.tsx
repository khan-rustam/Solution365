import Header from "@/components/header"
import Footer from "@/components/footer"
import Services from "@/components/services"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 pt-20">
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
