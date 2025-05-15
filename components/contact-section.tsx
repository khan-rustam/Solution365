"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">We'd love to hear from you. Reach out to discuss your project.</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-white rounded-full shadow-sm text-[#f62c28]">
                  <MapPin className="h-8 w-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Our Location</h4>
              <p className="text-gray-600">
                S7, Amit Tower, Sector 5, Pratap Nagar, Sanganer, Jaipur, Rajasthan – 302029
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-white rounded-full shadow-sm text-[#28ade1]">
                  <Phone className="h-8 w-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Call Us</h4>
              <p className="text-gray-600">+91 83021-222333</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-white rounded-full shadow-sm text-[#f62c28]">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Email Us</h4>
              <p className="text-gray-600">mail.solution369@gmail.com</p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 rounded-full text-[#f62c28] hover:bg-[#f62c28] hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 rounded-full text-[#28ade1] hover:bg-[#28ade1] hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 rounded-full text-[#28ade1] hover:bg-[#28ade1] hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 mb-6">
              Our website is currently under development. For detailed inquiries, please connect with us through our
              social media platforms or contact us directly.
            </p>
            <Link href="/contact">
              <Button className="bg-[#28ade1] hover:bg-[#28ade1]/90 px-8 py-3">Contact Us</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
