"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Briefcase, Globe } from "lucide-react"

export default function ServicesSection() {
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

  const services = [
    {
      icon: <Globe className="h-12 w-12 text-[#28ade1]" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to boost your online presence and drive growth.",
      items: ["SEO", "SEM", "Social Media", "Email Marketing", "Influencer Marketing"],
    },
    {
      icon: <Code className="h-12 w-12 text-[#f62c28]" />,
      title: "IT & Tech Consultancy",
      description: "Expert technology solutions to streamline your business operations and enhance efficiency.",
      items: ["Web Development", "App Development", "UI/UX Design", "Software Solutions", "Hosting Services"],
    },
    {
      icon: <Briefcase className="h-12 w-12 text-[#28ade1]" />,
      title: "Branding & Advertising",
      description: "Comprehensive branding strategies to establish a strong market presence and identity.",
      items: ["Brand Identity", "Logo Design", "Marketing Collateral", "Advertising Campaigns", "Brand Strategy"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">Comprehensive digital solutions tailored to your business needs</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="text-[#f62c28]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.3334 4L6.00002 11.3333L2.66669 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/services">
              <Button className="bg-[#28ade1] hover:bg-[#28ade1]/90">View All Services</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
