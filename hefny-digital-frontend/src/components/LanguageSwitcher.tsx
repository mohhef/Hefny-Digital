"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

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
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}
