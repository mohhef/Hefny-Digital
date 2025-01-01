"use client";

import { useTranslations } from "next-intl";
import { Code, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const t = useTranslations("services");

  const services = [
    {
      title: t("webDev.title"),
      description: t("webDev.description"),
      icon: Code,
    },
    {
      title: t("mobileDev.title"),
      description: t("mobileDev.description"),
      icon: Smartphone,
    },
    {
      title: t("ecommerce.title"),
      description: t("ecommerce.description"),
      icon: Globe,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
