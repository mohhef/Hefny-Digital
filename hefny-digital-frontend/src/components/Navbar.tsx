"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ locale }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${locale}`} className="flex items-center">
              <span
                className={`text-xl font-bold ${
                  isScrolled ? "text-blue-600" : "text-white"
                } transition-colors duration-300`}
              >
                HDS
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink href="#services" isScrolled={isScrolled}>
              {t("services")}
            </NavLink>
            <NavLink href="#portfolio" isScrolled={isScrolled}>
              {t("portfolio")}
            </NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>
              {t("about")}
            </NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>
              {t("contact")}
            </NavLink>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? "text-blue-600" : "text-white"
              } hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-5 w-5" />
              ) : (
                <Menu className="block h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#services">{t("services")}</MobileNavLink>
            <MobileNavLink href="#portfolio">{t("portfolio")}</MobileNavLink>
            <MobileNavLink href="#about">{t("about")}</MobileNavLink>
            <MobileNavLink href="#contact">{t("contact")}</MobileNavLink>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <Link
    href={href}
    className={`group inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-300
      ${
        isScrolled
          ? "text-gray-700 hover:text-blue-600"
          : "text-white hover:text-blue-200"
      }
    `}
  >
    {children}
    <ChevronDown
      className={`ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180 ${
        isScrolled ? "text-gray-400" : "text-white"
      }`}
    />
  </Link>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
