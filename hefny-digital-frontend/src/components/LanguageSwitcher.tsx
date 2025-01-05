"use client";

import { Globe2 } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push(`/${newLocale}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={toggleLanguage}
      className={`
        inline-flex items-center gap-2 px-3 py-2 
        text-sm font-medium rounded-full shadow-sm 
        focus:outline-none focus:ring-2
        ${
          isScrolled
            ? "text-black bg-primary hover:bg-primary-dark focus:ring-gray-500"
            : "text-black  bg-primary hover:bg-primary-dark focus:ring-primary sm:text-white"
        }
        border
      `}
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe2 className="h-4 w-4" />
      <span className="font-semibold tracking-wide">
        {locale === "en" ? "AR" : "EN"}
      </span>
    </button>
  );
}
