"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { InlineWidget } from "react-calendly";

export default function ScheduleMeeting() {
  const t = useTranslations("bookingCalendar");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)]">
      <Navbar />
      <div className="container mx-auto p-4 max-w-5xl">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-primary"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {t("scheduleFreeConsultation")}
        </motion.h1>

        <motion.div
          className="bg-white shadow-xl rounded-lg p-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key="step2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t("selectDateAndTime")}
              </h2>
              <InlineWidget
                url="https://calendly.com/mohhef"
                styles={{ height: "950px" }}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
