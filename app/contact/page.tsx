import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactUs from "@/components/contact-us"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <ContactUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
