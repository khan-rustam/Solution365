"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, PenTool, Briefcase, Globe, Gamepad2 } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("digital-marketing")

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
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: <Globe className="h-6 w-6" />,
      description:
        "Strategic digital marketing solutions to boost your online presence, drive targeted traffic, and increase conversions. We develop comprehensive strategies tailored to your business goals.",
      image: "/placeholder.svg?height=600&width=800",
      items: [
        {
          name: "Search Engine Optimization (SEO)",
          description:
            "Improve your website's visibility in search engine results with our data-driven SEO strategies. We focus on on-page optimization, technical SEO, and quality link building to drive organic traffic.",
        },
        {
          name: "Search Engine Marketing (SEM)",
          description:
            "Maximize your ROI with targeted pay-per-click campaigns across search engines. Our SEM experts create and optimize campaigns that deliver immediate results and valuable insights.",
        },
        {
          name: "Social Media Marketing (SMM)",
          description:
            "Build a strong social media presence with engaging content and strategic campaigns. We help you connect with your audience, build brand awareness, and drive engagement across all relevant platforms.",
        },
        {
          name: "Email Marketing",
          description:
            "Nurture leads and build customer loyalty with personalized email campaigns. Our email marketing strategies focus on segmentation, automation, and compelling content to drive conversions.",
        },
        {
          name: "Influencer Marketing",
          description:
            "Leverage the power of influencers to reach new audiences and build trust. We identify and collaborate with relevant influencers who align with your brand values and can authentically promote your products or services.",
        },
      ],
    },
    {
      id: "it-tech",
      title: "IT & Tech Consultancy",
      icon: <Code className="h-6 w-6" />,
      description:
        "Expert technology solutions to streamline your business operations, enhance efficiency, and drive digital transformation. Our IT consultancy services are designed to help you leverage technology for competitive advantage.",
      image: "/placeholder.svg?height=600&width=800",
      items: [
        {
          name: "Web Development & Design",
          description:
            "Create stunning, responsive websites that convert visitors into customers. Our web development team combines aesthetic design with technical expertise to deliver websites that look great and perform even better.",
        },
        {
          name: "Mobile App Development",
          description:
            "Build native and cross-platform mobile applications that engage users and solve real problems. We develop intuitive, feature-rich apps for iOS and Android platforms that align with your business objectives.",
        },
        {
          name: "UI/UX Design",
          description:
            "Enhance user satisfaction with intuitive interfaces and seamless experiences. Our UI/UX designers create user-centered designs that improve usability, accessibility, and overall user satisfaction.",
        },
        {
          name: "Custom Software Development",
          description:
            "Develop tailored software solutions that address your unique business challenges. We build scalable, secure, and maintainable software that automates processes and improves operational efficiency.",
        },
        {
          name: "Hosting & IT Infrastructure",
          description:
            "Set up reliable, secure, and scalable hosting solutions for your digital assets. We provide cloud hosting, server management, and IT infrastructure planning to ensure optimal performance and security.",
        },
      ],
    },
    {
      id: "branding",
      title: "Branding & Advertising",
      icon: <Briefcase className="h-6 w-6" />,
      description:
        "Comprehensive branding strategies to establish a strong market presence, build brand recognition, and create emotional connections with your audience. We help you define and communicate your unique value proposition.",
      image: "/placeholder.svg?height=600&width=800",
      items: [
        {
          name: "Brand Identity Development",
          description:
            "Create a distinctive brand identity that resonates with your target audience. We help you define your brand personality, values, and positioning to stand out in a competitive market.",
        },
        {
          name: "Logo & Visual Design",
          description:
            "Design memorable logos and visual elements that represent your brand essence. Our designers create visually appealing and meaningful brand assets that make a lasting impression.",
        },
        {
          name: "Marketing Collateral Design",
          description:
            "Develop consistent and professional marketing materials across all touchpoints. From brochures and business cards to presentations and packaging, we ensure your brand is represented consistently.",
        },
        {
          name: "Advertising Campaign Management",
          description:
            "Plan and execute effective advertising campaigns across multiple channels. We develop creative concepts, produce compelling ad content, and optimize campaign performance for maximum ROI.",
        },
        {
          name: "Brand Strategy Consulting",
          description:
            "Develop long-term brand strategies that align with your business goals. Our brand consultants provide insights and recommendations to build and maintain a strong brand presence in your industry.",
        },
      ],
    },
    {
      id: "creative",
      title: "Creative Services",
      icon: <PenTool className="h-6 w-6" />,
      description:
        "Innovative creative solutions to captivate your audience, communicate your message effectively, and enhance your brand's visual appeal. Our creative team brings your ideas to life with imagination and precision.",
      image: "/placeholder.svg?height=600&width=800",
      items: [
        {
          name: "Graphic Design",
          description:
            "Create visually stunning designs that communicate your message clearly. Our graphic designers combine artistic talent with strategic thinking to produce impactful visual content.",
        },
        {
          name: "Content Creation & Copywriting",
          description:
            "Develop engaging and persuasive content that resonates with your audience. Our content creators and copywriters craft compelling narratives that drive action and build brand authority.",
        },
        {
          name: "Photography & Videography",
          description:
            "Capture high-quality visual assets that showcase your products and services. Our photography and video production services help you tell your brand story through professional visual content.",
        },
        {
          name: "Animation & Motion Graphics",
          description:
            "Bring your ideas to life with dynamic animations and motion graphics. We create engaging animated content that simplifies complex concepts and captures audience attention.",
        },
        {
          name: "UI/UX Design",
          description:
            "Design intuitive and visually appealing user interfaces for digital products. Our UI/UX designers focus on creating seamless user experiences that enhance satisfaction and drive conversions.",
        },
      ],
    },
    {
      id: "game-dev",
      title: "Game Development",
      icon: <Gamepad2 className="h-6 w-6" />,
      description:
        "Cutting-edge game development services to create engaging and immersive gaming experiences across platforms. From concept to launch, we bring your game ideas to life with creativity and technical expertise.",
      image: "/placeholder.svg?height=600&width=800",
      items: [
        {
          name: "2D & 3D Game Development",
          description:
            "Create visually stunning and engaging games in both 2D and 3D environments. Our game developers use the latest technologies to build games that captivate players and deliver memorable experiences.",
        },
        {
          name: "AR/VR Game Experiences",
          description:
            "Develop immersive augmented and virtual reality games that push boundaries. We create innovative AR/VR experiences that transport players to new worlds and provide unique interactive opportunities.",
        },
        {
          name: "Mobile Game Development",
          description:
            "Build addictive and high-performing games for iOS and Android platforms. Our mobile game developers focus on creating games with intuitive controls, engaging gameplay, and monetization potential.",
        },
        {
          name: "Simulation Games",
          description:
            "Create realistic simulation games for entertainment or training purposes. We develop simulation games that replicate real-world scenarios with accuracy and attention to detail.",
        },
        {
          name: "Game Testing & Optimization",
          description:
            "Ensure your games are bug-free and perform optimally across devices. Our QA team conducts thorough testing to identify and resolve issues before launch, ensuring a smooth player experience.",
        },
      ],
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#28ade1] to-[#f62c28] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Solutions369, we offer a comprehensive range of digital services designed to help your business thrive
              in the digital landscape. From strategic marketing to creative development, we provide end-to-end
              solutions tailored to your unique needs.
            </p>
          </motion.div>

          <Tabs defaultValue="digital-marketing" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex items-center gap-2 data-[state=active]:bg-[#28ade1] data-[state=active]:text-white"
                >
                  {service.icon}
                  <span className="hidden md:inline">{service.title}</span>
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
                        <div className="p-3 bg-[#28ade1]/10 rounded-full text-[#28ade1]">{service.icon}</div>
                        <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                      </div>

                      <p className="text-lg text-gray-700 mb-6">{service.description}</p>
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
                    <h3 className="text-2xl font-bold mb-8 text-center">What We Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {service.items.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                          <h4 className="text-xl font-bold mb-3 text-gray-800">{item.name}</h4>
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
  )
}
