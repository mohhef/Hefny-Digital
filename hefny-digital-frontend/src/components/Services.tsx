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
      title: t("mobileFirstDesign.title"),
      description: t("mobileFirstDesign.description"),
      link: t("getStarted"),
      color: "bg-blue-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <Maximize2 className="w-8 h-8 text-white" />,
      title: t("fullyResponsive.title"),
      description: t("fullyResponsive.description"),
      link: t("getStarted"),
      color: "bg-indigo-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      title: t("optimizedPageSpeed.title"),
      description: t("optimizedPageSpeed.description"),
      link: t("moreAboutPageSpeed"),
      color: "bg-blue-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: t("seoServices.title"),
      description: t("seoServices.description"),
      link: t("moreAboutSEO"),
      color: "bg-indigo-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: t("googlePpcAds.title"),
      description: t("googlePpcAds.description"),
      link: t("moreAboutAds"),
      color: "bg-blue-100",
      iconColor: "text-grey-600",
      hoverColor: "bg-grey-200",
    },
    {
      icon: <Flag className="w-8 h-8 text-white" />,
      title: t("basedAcrossThreeCountries.title"),
      description: t("basedAcrossThreeCountries.description"),
      link: t("moreAboutUs"),
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
