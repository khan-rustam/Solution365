"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  PenTool,
  Briefcase,
  Globe,
  Gamepad2,
  Gift,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("digital-marketing");

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

  const services = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: <Globe className="h-6 w-6" />,
      description:
        "Strategic digital marketing solutions to amplify your online presence and drive measurable results. We create data-driven strategies that connect with your target audience.",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Professional team working on digital marketing
      items: [
        {
          name: "Search Engine Optimization (SEO)",
          description:
            "Boost your organic rankings with our proven SEO strategies. We optimize your website's technical foundation, content, and backlink profile.",
        },
        {
          name: "Social Media Marketing",
          description:
            "Build meaningful connections on social platforms. We create engaging content and manage paid campaigns that drive engagement.",
        },
        {
          name: "Email Marketing",
          description:
            "Convert subscribers into customers with targeted email campaigns. Our automated workflows nurture leads through the sales funnel.",
        },
      ],
    },
    {
      id: "it-tech",
      title: "IT & Tech Consultancy",
      icon: <Code className="h-6 w-6" />,
      description:
        "Modern technology solutions that streamline operations and drive growth. We help businesses leverage the right tech stack.",
      image:
        "https://images.unsplash.com/photo-1586863065451-6a82fa7e81b9?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Team discussing tech solutions
      items: [
        {
          name: "Web Development",
          description:
            "Custom websites built with modern frameworks. We create responsive, fast-loading sites optimized for conversions.",
        },
        {
          name: "Mobile Apps",
          description:
            "Native and cross-platform mobile applications. We develop user-friendly apps that solve real business problems.",
        },
        {
          name: "Cloud Solutions",
          description:
            "Secure and scalable cloud infrastructure. We help migrate and manage your applications in the cloud.",
        },
      ],
    },
    {
      id: "branding",
      title: "Branding & Identity",
      icon: <Briefcase className="h-6 w-6" />,
      description:
        "Strategic brand development that helps you stand out. We craft memorable brand experiences that resonate with your audience.",
      image:
        "https://images.unsplash.com/photo-1627577741083-506d0b15a56a?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Creative team brainstorming brand ideas
      items: [
        {
          name: "Brand Strategy",
          description:
            "Define your unique market position. We develop comprehensive brand guidelines and messaging frameworks.",
        },
        {
          name: "Visual Identity",
          description:
            "Create a distinctive visual language. From logos to color palettes, we design cohesive brand elements.",
        },
        {
          name: "Brand Collateral",
          description:
            "Professional marketing materials that reinforce your brand. We design everything from business cards to presentations.",
        },
      ],
    },
    {
      id: "creative",
      title: "Creative Services",
      icon: <PenTool className="h-6 w-6" />,
      description:
        "Eye-catching creative solutions that capture attention. Our design team brings ideas to life with precision and flair.",
      image:
        "https://images.unsplash.com/photo-1598476793884-0e7afd57b92e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Designer working on creative project
      items: [
        {
          name: "Graphic Design",
          description:
            "Stunning visuals that communicate your message. We create graphics for print and digital media.",
        },
        {
          name: "Content Creation",
          description:
            "Engaging content that tells your story. From blogs to videos, we produce content that connects.",
        },
        {
          name: "Motion Graphics",
          description:
            "Dynamic animations that bring concepts to life. We create engaging motion graphics for various platforms.",
        },
      ],
    },
    {
      id: "game-dev",
      title: "Game Development",
      icon: <Gamepad2 className="h-6 w-6" />,
      description:
        "Immersive gaming experiences across platforms. We combine creativity with technical expertise to build engaging games.",
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Game development team at work
      items: [
        {
          name: "Mobile Games",
          description:
            "Addictive mobile gaming experiences. We develop games optimized for iOS and Android platforms.",
        },
        {
          name: "AR/VR Games",
          description:
            "Cutting-edge immersive experiences. We create innovative AR/VR applications that push boundaries.",
        },
        {
          name: "Game Testing",
          description:
            "Comprehensive quality assurance. We ensure smooth gameplay across all target platforms.",
        },
      ],
    },
    {
      id: "corporate-events",
      title: "Corporate Events",
      icon: <Calendar className="h-6 w-6" />,
      description:
        "Memorable corporate experiences and gifting solutions. We handle everything from planning to execution.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Corporate event setup
      items: [
        {
          name: "Event Management",
          description:
            "Seamless event execution from start to finish. We organize conferences, launches, and team events.",
        },
        {
          name: "Corporate Gifting",
          description:
            "Thoughtful gifting programs that strengthen relationships. We source and customize corporate gifts.",
        },
        {
          name: "Brand Activations",
          description:
            "Engaging brand experiences that leave lasting impressions. We create interactive brand moments.",
        },
      ],
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Solutions369, we offer a comprehensive range of digital
              services designed to help your business thrive in the digital
              landscape. From strategic marketing to creative development, we
              provide end-to-end solutions tailored to your unique needs.
            </p>
          </motion.div>

          <Tabs
            defaultValue="digital-marketing"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8 px-1 gap-2 grid grid-cols-2 md:grid-cols-6 overflow-x-auto md:overflow-x-visible hide-scrollbar">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex items-center gap-2 min-w-max px-3 py-2 rounded-lg data-[state=active]:bg-[#28ade1] data-[state=active]:text-white whitespace-nowrap"
                >
                  <span className="block md:hidden">{service.icon}</span>
                  <span>{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-[#28ade1]/10 rounded-full text-[#28ade1]">
                          {service.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-lg text-gray-700 mb-6">
                        {service.description}
                      </p>
                    </div>
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-8 text-center">
                      What We Offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {service.items.map((item, index) => (
                        <div
                          key={index}
                          className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#28ade1] hover:to-[#f62c28] transition-all duration-300 group overflow-hidden"
                        >
                          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#28ade1_0%,transparent_70%),radial-gradient(circle_at_80%_80%,#f62c28_0%,transparent_70%)] pointer-events-none"></div>
                          <h4 className="text-xl font-bold mb-3 text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
