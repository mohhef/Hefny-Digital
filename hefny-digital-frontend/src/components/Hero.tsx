"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="bg-blue-600 text-white pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-xl max-w-3xl">{t("description")}</p>
        <div className="mt-10">
          <Link
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 border border-transparent text-base font-medium rounded-md hover:bg-blue-50 transition duration-300"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
