"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Hourglass, Mail } from "lucide-react";

const Portfolio = () => {
  const t = useTranslations("portfolio");

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            {t("title")}
          </h2>
          <Hourglass className="w-16 h-16 mx-auto text-blue-500 mb-6" />
          <p className="text-xl text-gray-600 mb-8">{t("comingSoon")}</p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              {t("ctaButton")}
              <Mail className="ml-2 -mr-0 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
