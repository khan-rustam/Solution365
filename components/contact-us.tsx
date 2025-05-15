"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function ContactUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question about our
              services, need a quote, or want to discuss your project, our team
              is ready to assist you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h3>
              <form
                onSubmit={handleSubmit}
                className="relative space-y-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 p-8 pt-16 group overflow-hidden"
              >
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#28ade1] to-[#f62c28] shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">✉️</span>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full peer bg-white/80 border-2 border-gray-200 focus:border-[#28ade1] focus:bg-white transition-all placeholder-transparent rounded-xl shadow-sm"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-base transition-all duration-200 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#28ade1] bg-white/80 px-1 rounded">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full peer bg-white/80 border-2 border-gray-200 focus:border-[#28ade1] focus:bg-white transition-all placeholder-transparent rounded-xl shadow-sm"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-base transition-all duration-200 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#28ade1] bg-white/80 px-1 rounded">
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full peer bg-white/80 border-2 border-gray-200 focus:border-[#28ade1] focus:bg-white transition-all placeholder-transparent rounded-xl shadow-sm"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-base transition-all duration-200 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#28ade1] bg-white/80 px-1 rounded">
                    Your Phone
                  </label>
                </div>
                <div className="relative">
                  <Textarea
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px] peer bg-white/80 border-2 border-gray-200 focus:border-[#28ade1] focus:bg-white transition-all placeholder-transparent rounded-xl shadow-sm"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-base transition-all duration-200 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#28ade1] bg-white/80 px-1 rounded">
                    Your Message
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#28ade1] to-[#f62c28] hover:from-[#f62c28] hover:to-[#28ade1] text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className="inline-block animate-pulse">🚀</span> Send
                  Message
                </Button>
              </form>

              <div className="relative mt-5 bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#28ade1] to-[#f62c28] shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl font-bold">⏰</span>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                <h4 className="font-bold mb-2">Business Hours</h4>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#f62c28] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        S7, Amit Tower, Sector 5, Pratap Nagar, Sanganer,
                        Jaipur, Rajasthan – 302029
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#f62c28] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">
                        <a href="https://wa.me/918302122333" target="_blank">
                          +91 83021-222333
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#f62c28] mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:amit@solutions369.in">amit@solutions369.in</a><br/>
                        <a href="mailto:info@solutions369.in">info@solutions369.in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/solutions369_?igsh=ampxcnQ2N3Y2b3A4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full text-[#f62c28] hover:bg-[#f62c28] hover:text-white transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61572878921069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full text-[#28ade1] hover:bg-[#28ade1] hover:text-white transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/solutions369dotin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full text-[#28ade1] hover:bg-[#28ade1] hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9033137229716!2d75.7967!3d26.8421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f5d60ea0a1%3A0x9c5b11768c5fad8e!2sPratap%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  title="Solutions369 Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
