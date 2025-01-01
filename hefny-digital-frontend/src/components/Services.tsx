"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe, ArrowRight } from "lucide-react";

const Services = () => {
  const t = useTranslations("services");
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: t("webDev.title"),
      description: t("webDev.description"),
      icon: Code,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverColor: "bg-blue-200",
    },
    {
      title: t("mobileDev.title"),
      description: t("mobileDev.description"),
      icon: Smartphone,
      color: "bg-green-100",
      iconColor: "text-green-600",
      hoverColor: "bg-green-200",
    },
    {
      title: t("ecommerce.title"),
      description: t("ecommerce.description"),
      icon: Globe,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverColor: "bg-purple-200",
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
                <service.icon
                  className={`h-12 w-12 ${service.iconColor} mb-4`}
                />
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
                <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-md">
                  {t("learnMore")}
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
