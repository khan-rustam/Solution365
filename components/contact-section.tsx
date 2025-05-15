"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Our Location",
      content: (
        <p className="text-gray-600">
          S7, Amit Tower, Sector 5, Pratap Nagar, Sanganer, Jaipur, Rajasthan –
          302029
        </p>
      ),
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      content: (
        <p className="text-gray-600">
          <a href="https://wa.me/918302122333" target="_blank">
            +91 83021-222333
          </a>
        </p>
      ),
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      content: (
        <p className="text-gray-600">
          <a
            href="mailto:info@solutions369.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@solutions369.in
          </a>{" "}
          <br />
          <a
            href="mailto:amit@solutions369.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            amit@solutions369.in{" "}
          </a>
        </p>
      ),
    },
  ];

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              We'd love to hear from you. Reach out to discuss your project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className="relative bg-white/70 backdrop-blur-lg p-8 pt-20 rounded-2xl shadow-xl border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden text-center hover:shadow-2xl"
              >
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#28ade1] to-[#f62c28] shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl">{info.icon}</span>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">
                  {info.title}
                </h4>
                {info.content}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/solutions369_?igsh=ampxcnQ2N3Y2b3A4"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-white/80 rounded-full text-[#f62c28] shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] hover:bg-[#f62c28] hover:text-white transition-all duration-300 group"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572878921069"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-white/80 rounded-full text-[#28ade1] shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] hover:bg-[#28ade1] hover:text-white transition-all duration-300 group"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/solutions369dotin/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-white/80 rounded-full text-[#28ade1] shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] hover:bg-[#28ade1] hover:text-white transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
