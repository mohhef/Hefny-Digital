"use client";

import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ScheduleMeeting() {
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ service, email, phone, description });
    alert("Meeting scheduled successfully!");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div>
      <Navbar bookingPage={true} />
      <div className="container mx-auto p-4 max-w-5xl">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-primary"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Schedule Your Free Consultation
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
                Select a Date and Time
              </h2>
              <InlineWidget
                url="https://calendly.com/mohhef"
                styles={{ height: "950px" }}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
