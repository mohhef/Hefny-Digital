"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)]">
      <Navbar />
      <section className="py-16 md:py-24 bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-2/3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-semibold tracking-widest text-white uppercase">
                  {"Hefny Digital"}
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  {t("tagline")}
                </h3>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-white drop-shadow-sm">
                  {t("description.part1")}
                </p>
                <p className="text-white drop-shadow-sm">
                  {t("description.part2")}
                </p>
                <p className="text-white drop-shadow-sm">
                  {t("description.part3")}
                </p>
              </div>

              <div className="pt-4">
                {/* @ts-expect-error idk */}
                <Link href="/book-strategy-call"
                  className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-xl"
                >
                  {t("ctaButton")}
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/3">
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <h2 className="text-black font-semibold mb-4 tracking-wider">
              {t("process.title")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              {t("process.subtitle")}
            </h3>
            <p className="text-black text-lg">{t("process.description")}</p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* @ts-expect-error idk */}
            {t.raw("process.steps").map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] rounded-2xl p-8 transition-transform hover:-translate-y-1"
              >
                <div className="mb-8">
                  <span className="text-blue-400 font-semibold tracking-wider">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </main>
  );
}
