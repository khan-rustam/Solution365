"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Zap } from "lucide-react"

export default function AboutUsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const coreValues = [
    {
      icon: <Users className="h-10 w-10 text-[#28ade1]" />,
      title: "Client-Centric Approach",
      description: "Your success is our priority, always",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#f62c28]" />,
      title: "Innovation & Creativity",
      description: "Constantly evolving with the latest trends and technologies",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Solutions369 is a customized, solution-oriented, and tech-savvy digital marketing agency. We blend
              creativity with strategic thinking to deliver impactful results for businesses of all sizes. Our team of
              experts is passionate about helping brands grow and thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#28ade1]">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with innovative digital solutions that drive growth, enhance brand visibility, and
                create meaningful connections with their audience.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f62c28]">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading digital marketing agency known for creativity, innovation, and delivering exceptional
                results that transform businesses and set new industry standards.
              </p>
            </motion.div>
          </div>

          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
            Our Core Values
          </motion.h3>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/about">
              <Button className="bg-[#28ade1] hover:bg-[#28ade1]/90">Learn More About Us</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
