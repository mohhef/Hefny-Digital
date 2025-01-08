"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/routing";
import { Linkedin, Mail, MapPin, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#1E1B2C] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Hefny Digital</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <p dir="ltr" className="text-left">
                  {/* Phone number is always LTR */}
                  +1 (514) 549 9903
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <p>mohhef@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <p className="text-gray-300">Montreal, Canada</p>
              </div>
            </div>
            <div className="flex gap-4">
              {/* @ts-expect-error idk */}
              <Link href="https://x.com/HefnyDigital"
                className="bg-indigo-600 p-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </Link>
              {/* @ts-expect-error idk */}
              <Link href="https://www.linkedin.com/company/hefny-digital-solutions"
                className="bg-indigo-600 p-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t("nav.services")}</h3>
            <ul className="space-y-4">
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.webDevelopment")}
                </Link>
              </li>
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.seoServices")}
                </Link>
              </li>
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.digitalMarketing")}
                </Link>
              </li>
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.contentCreation")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t("nav.company")}</h3>
            <ul className="space-y-4">
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/#portfolio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                {/* @ts-expect-error idk */}
                <Link href="/pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Join Our Newsletter</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#2D2A3A] border-0 text-white placeholder:text-gray-400"
                />
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Stay updated with our latest news and updates
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hefny Digital. {t("rights")}
            </p>
            <div className="flex gap-6">
              {/* @ts-expect-error idk */}
              <Link href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              {/* @ts-expect-error idk */}
              <Link href="/sitemap"
                className="text-gray-400 hover:text-white text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
