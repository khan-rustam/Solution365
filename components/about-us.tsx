"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Award, Target, Users, Zap, Shield } from "lucide-react";

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const coreValues = [
    {
      icon: <Users className="h-10 w-10 text-[#28ade1]" />,
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and goals, ensuring that every strategy and solution is tailored to deliver maximum value and satisfaction.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#f62c28]" />,
      title: "Innovation & Creativity",
      description:
        "We embrace cutting-edge technologies and creative thinking to develop unique solutions that help our clients stand out in competitive markets.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#28ade1]" />,
      title: "Integrity & Transparency",
      description:
        "We maintain the highest ethical standards in all our dealings, providing honest feedback and transparent reporting on all projects.",
    },
    {
      icon: <Award className="h-10 w-10 text-[#f62c28]" />,
      title: "Excellence in Execution",
      description:
        "We are committed to delivering exceptional quality in everything we do, from strategy development to implementation and beyond.",
    },
    {
      icon: <Target className="h-10 w-10 text-[#28ade1]" />,
      title: "Data-Driven Strategies",
      description:
        "We base our decisions and recommendations on solid data and analytics, ensuring measurable results and continuous improvement.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#e0f7fa] via-white to-[#fce4ec] overflow-hidden">
      {/* Decorative SVG shape at the top */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill="#28ade1" fillOpacity="0.08" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V32Z" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#28ade1] to-[#f62c28] bg-clip-text text-transparent drop-shadow-lg"
            >
              About Solutions369
            </motion.h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8 rounded-full animate-pulse"></div>
            <blockquote className="mx-auto max-w-2xl italic text-xl md:text-2xl text-[#28ade1] bg-white/70 rounded-xl shadow-lg px-6 py-4 border-l-4 border-[#f62c28] mb-8">
              "Empowering brands with creativity, technology, and heart."
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Solutions369 is a customized, solution-oriented, and tech-savvy
                digital marketing agency based in Jaipur, Rajasthan. Founded
                with a vision to bridge the gap between technology and
                marketing, we have evolved into a full-service agency that
                delivers comprehensive digital solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team consists of passionate professionals who bring diverse
                expertise in digital marketing, IT consultancy, branding,
                creative services, and game development. We blend creativity
                with strategic thinking to deliver impactful results for
                businesses of all sizes.
              </p>
              <p className="text-lg text-gray-700">
                At Solutions369, we believe in building long-term partnerships
                with our clients, understanding their unique challenges, and
                crafting tailored solutions that drive growth and success.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
                alt="Business team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#28ade1]"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                To empower businesses with innovative digital solutions that
                drive growth, enhance brand visibility, and create meaningful
                connections with their audience. We strive to be a catalyst for
                digital transformation, helping organizations navigate the
                complex digital landscape with confidence and achieve
                sustainable success.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#f62c28]"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To be the leading digital marketing agency known for creativity,
                innovation, and delivering exceptional results that transform
                businesses and set new industry standards. We envision a future
                where every business, regardless of size, can harness the power
                of digital technologies to reach their full potential.
              </p>
            </motion.div>
          </div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-10 text-center"
          >
            Our Core Values
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white p-8 pt-16 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden text-center hover:shadow-2xl"
              >
                <div className="absolute top-1 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#28ade1] to-[#f62c28] shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl">{value.icon}</span>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gradient-to-r from-[#28ade1]/10 to-[#f62c28]/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Our Approach
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                At Solutions369, we follow a systematic approach to ensure the
                success of every project:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                  <h4 className="font-bold mb-2">Discovery</h4>
                  <p className="text-sm text-gray-600">
                    Understanding your business, goals, and challenges
                  </p>
                </div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                  <h4 className="font-bold mb-2">Strategy</h4>
                  <p className="text-sm text-gray-600">
                    Developing a tailored plan to achieve your objectives
                  </p>
                </div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                  <h4 className="font-bold mb-2">Execution</h4>
                  <p className="text-sm text-gray-600">
                    Implementing solutions with precision and creativity
                  </p>
                </div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                  <h4 className="font-bold mb-2">Optimization</h4>
                  <p className="text-sm text-gray-600">
                    Continuous monitoring and improvement for optimal results
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
