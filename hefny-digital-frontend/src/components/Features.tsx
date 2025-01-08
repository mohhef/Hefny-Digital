"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  const features = t.raw("items");

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] border-[80px] border-gray-100 rounded-full" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            {t("whatWeOffer")}
          </h3>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            {t("pricing")}
          </h2>
          <p className="text-gray-600">
            {t.rich("description", {
              bold: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* @ts-expect-error idk */}
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* @ts-expect-error idk */}
        <Link href="/book-strategy-call"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
        >
          {t("scheduleCall")}
        </Link>
      </div>
    </section>
  );
}
