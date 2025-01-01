"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push(`/${newLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">
        {locale === "en" ? "Switch to Arabic" : "Switch to English"}
      </span>
    </button>
  );
}
