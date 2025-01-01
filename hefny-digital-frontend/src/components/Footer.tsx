"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hefny Digital</h3>
            <p className="text-gray-300">{t("description")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white">
                  {t("nav.portfolio")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>
            <p className="text-gray-300">Email: mohhef@gmail.com</p>
            <p className="text-gray-300">Phone: +1 (514) 549 9903</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Hefny Digital. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
