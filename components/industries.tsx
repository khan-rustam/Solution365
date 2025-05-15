"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, ShoppingBag, Utensils, GraduationCap, HeartPulse, Home, Plane, Car, Factory } from "lucide-react"

export default function Industries() {
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

  const industries = [
    {
      icon: <Building2 className="h-10 w-10" />,
      name: "Corporate",
      description: "Strategic solutions for businesses of all sizes to enhance digital presence and drive growth.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10" />,
      name: "E-commerce",
      description: "Comprehensive e-commerce solutions to boost online sales and improve customer experience.",
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      name: "Food & Beverage",
      description: "Tailored digital strategies for restaurants, cafes, and food service businesses.",
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      name: "Education",
      description: "Innovative digital solutions for educational institutions to enhance learning experiences.",
    },
    {
      icon: <HeartPulse className="h-10 w-10" />,
      name: "Healthcare",
      description: "Specialized digital services for healthcare providers to improve patient engagement.",
    },
    {
      icon: <Home className="h-10 w-10" />,
      name: "Real Estate",
      description: "Digital marketing strategies for real estate businesses to attract potential buyers and tenants.",
    },
    {
      icon: <Plane className="h-10 w-10" />,
      name: "Travel & Tourism",
      description: "Engaging digital experiences for travel companies to inspire and convert travelers.",
    },
    {
      icon: <Car className="h-10 w-10" />,
      name: "Automotive",
      description: "Digital solutions for automotive businesses to showcase vehicles and drive customer interest.",
    },
    {
      icon: <Factory className="h-10 w-10" />,
      name: "Manufacturing",
      description: "Digital transformation strategies for manufacturing companies to optimize operations.",
    },
  ]

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">We deliver specialized solutions across diverse industry sectors</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm text-[#28ade1] group-hover:text-[#f62c28] transition-colors mt-1">
                    {industry.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-800">{industry.name}</h4>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
