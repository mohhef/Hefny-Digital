"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const About = () => {
  const t = useTranslations("about");

  const founders = [
    {
      name: "Mohamed Hefny",
      role: t("mohamed.role"),
      bio: t("mohamed.bio"),
      linkedin: "https://www.linkedin.com/in/mohamed-hefny-5617b994/",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Amr Hefny",
      role: t("amr.role"),
      bio: t("amr.bio"),
      linkedin: "https://www.linkedin.com/in/amr-hefny00/",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("title")}
        </motion.h2>
        <div className="mb-16">
          <p className="text-xl text-gray-600 text-center mb-8">
            {t("description")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover md:w-48"
                    src={founder.image}
                    alt={founder.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                    {founder.role}
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold text-gray-900">
                    {founder.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{founder.bio}</p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    {t("viewLinkedIn")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
