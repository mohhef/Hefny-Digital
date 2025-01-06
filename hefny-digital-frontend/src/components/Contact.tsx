"use client";

import { sendEmail } from "@/app/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Mail, MapPin, Phone, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const directionClass = isRTL ? "text-right" : "text-left";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    setIsSubmitting(false);

    console.log(result);
    if (result.success) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
      });
      event.currentTarget.reset();
    } else {
      console.log("hellloooo");
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const SocialIcon = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  return (
    <section className="bg-gradient-to-br from-purple-950 to-purple-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">{t("title")}</h1>
            <p className="text-lg text-gray-300">{t("subtitle")}</p>
          </div>

          <div className="flex gap-4">
            <SocialIcon href="https://x.com/HefnyDigital">
              <X className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/hefny-digital-solutions">
              <Linkedin className="w-5 h-5" />
            </SocialIcon>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t("phone")}</h3>
                <p className="text-gray-300">Mon - Fri</p>
                <p dir="ltr" className={directionClass}>
                  {/* Phone number is always LTR */}
                  +1 (514) 549 9903
                </p>
                <p dir="ltr" className={directionClass}>
                  {/* Phone number is always LTR */}
                  +1 514 553 4360
                </p>
                <p className="text-gray-300">
                  9am - 5:30pm GMT / 5am - 1:30pm EST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t("email")}</h3>
                <p className="text-gray-300">mohhef@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t("address")}</h3>
                <p dir="ltr" className={`text-gray-300 ${directionClass}`}>
                  1445 rue du fort, Montreal, Quebec
                </p>
                <p dir="ltr" className={`text-gray-300 ${directionClass}`}>
                  8668 french street, Vancouver, British Columbia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-lg flex flex-col justify-between h-full">
          <h2 className="text-3xl font-semibold mb-8">{t("dropMessage")}</h2>
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="name"
                placeholder={t("name")}
                value={formData.name}
                onChange={handleChange}
                className="bg-white border-purple-200 text-black placeholder:text-black-400 h-12"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder={t("emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                className="bg-white border-purple-200 text-black placeholder:text-black-400 h-12"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="tel"
                name="phone"
                placeholder={t("phoneNumber")}
                value={formData.phone}
                onChange={handleChange}
                className="bg-white border-purple-200 text-black placeholder:text-black-400 h-12"
                required
              />
              <Input
                type="text"
                name="company"
                placeholder={t("company")}
                value={formData.company}
                onChange={handleChange}
                className="bg-white border-purple-200 text-black placeholder:text-black-400 h-12"
              />
            </div>
            <Textarea
              name="message"
              placeholder={t("message")}
              value={formData.message}
              onChange={handleChange}
              className="bg-white border-purple-200 text-black placeholder:text-black-400 min-h-[200px]"
              required
            />
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-1 bg-white" />
              <label htmlFor="terms" className="text-sm text-gray-300">
                {t("terms")}
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("sending") : t("submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
