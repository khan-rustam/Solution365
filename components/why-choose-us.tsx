"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Lightbulb, TrendingUp, Shield, Link } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
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

  const reasons = [
    {
      icon: <Users className="h-10 w-10 text-[#28ade1]" />,
      title: "Expert Team",
      description:
        "Our team consists of specialists with years of industry experience and expertise in various digital domains.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#f62c28]" />,
      title: "Custom Strategy",
      description:
        "We develop tailored strategies based on your unique business needs, goals, and target audience.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#28ade1]" />,
      title: "Results-Driven",
      description:
        "We focus on measurable outcomes that contribute directly to your business growth and success.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#f62c28]" />,
      title: "Transparency",
      description:
        "We maintain complete transparency in our processes, pricing, and reporting throughout our partnership.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
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
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Your Success Is Our Priority
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                At Solutions369, we believe in building long-term partnerships
                with our clients. We take the time to understand your business,
                your goals, and your challenges to deliver solutions that drive
                real results.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our approach combines creativity with data-driven strategies to
                ensure that every campaign, website, or digital asset we create
                not only looks great but also performs exceptionally well.
              </p>
              <p className="text-lg text-gray-700">
                We stay ahead of industry trends and continuously refine our
                methodologies to provide you with the most effective digital
                solutions that give you a competitive edge in your market.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/choose-us.jpg"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white p-8 pt-16 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden text-center hover:shadow-2xl"
              >
                <div className="absolute top-1 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#28ade1] to-[#f62c28] shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl">{reason.icon}</span>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  {reason.title}
                </h4>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-[#28ade1] to-[#f62c28] p-10 rounded-xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Brand Presence?
            </h3>
            <p className="text-lg mb-8">
              Partner with Solutions369 and experience the difference our
              innovative approach can make for your business.
            </p>
            <a href="/contact">
              <button className="bg-white text-[#28ade1] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
                Get Started Today
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
