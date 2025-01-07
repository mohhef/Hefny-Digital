"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Flag,
  Gauge,
  LineChart,
  Maximize2,
  Smartphone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Modal from "./Modal";
const Services = () => {
  const t = useTranslations("services");
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "MOBILE FIRST DESIGN",
      description:
        "We start building your site for mobile devices first making sure the code is as lean and optimized with no bloated waste and makes the site even more responsive.",
      link: "Get Started",
      color: "bg-blue-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <Maximize2 className="w-8 h-8 text-white" />,
      title: "FULLY RESPONSIVE",
      description:
        "Your website will fit all mobile screens sizes, tablets, and desktop sizes so visitors can access your site from anywhere and see a beautiful site no matter the screen size.",
      link: "Get Started",
      color: "bg-indigo-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      title: "OPTIMIZED PAGE SPEED",
      description:
        "If your site takes more than 3 seconds to load you can lose up to 50% your traffic because it took too long. Our sites load 1 second or less ensuring everyone that visits your site reaches it.",
      link: "More About Page Speed",
      color: "bg-blue-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "SEO SERVICES",
      description:
        "We have an in-house SEO specialist who understands local SEO and how to rank in your local market with plenty of case studies to show results and monthly reports.",
      link: "More About SEO",
      color: "bg-indigo-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "GOOGLE PPC ADS",
      description:
        "We also offer Pay-Per-Click Google ads creation and management with our Google Ads expert who can create effective ad campaigns to maximize your ROI.",
      link: "More About Ads",
      color: "bg-blue-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <Flag className="w-8 h-8 text-white" />,
      title: "BASED ACROSS THREE COUNTRIES",
      description:
        "We are mostly based in Canada, UAE and Egypt. We have developers working around the clock.",
      link: "More About Us",
      color: "bg-indigo-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <motion.div
                className={`${service.color} p-6 h-full transition-colors duration-300`}
                animate={{
                  backgroundColor:
                    hoveredService === index
                      ? service.hoverColor
                      : service.color,
                }}
              >
                <div className="bg-[#001f3f] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.div
                  className="absolute bottom-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredService === index ? 1 : 0,
                    scale: hoveredService === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className={`h-6 w-6 ${service.iconColor}`} />
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-md"
                  onClick={() => setSelectedService(index)}
                >
                  {t("learnMore")}
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService !== null ? services[selectedService].title : ""}
        content={
          selectedService !== null ? services[selectedService].description : ""
        }
      />
    </section>
  );
};

export default Services;
