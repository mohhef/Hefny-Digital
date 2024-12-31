"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Hefny Digital Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-blue-600">
                Hefny Digital
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <NavLink href="#services">{t("services")}</NavLink>
            <NavLink href="#portfolio">{t("portfolio")}</NavLink>
            <NavLink href="#about">{t("about")}</NavLink>
            <NavLink href="#contact">{t("contact")}</NavLink>
            <LanguageSwitcher />
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="#services">{t("services")}</MobileNavLink>
            <MobileNavLink href="#portfolio">{t("portfolio")}</MobileNavLink>
            <MobileNavLink href="#about">{t("about")}</MobileNavLink>
            <MobileNavLink href="#contact">{t("contact")}</MobileNavLink>
          </div>
          <div className="px-4 py-2">
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
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
  >
    {children}
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
    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
  >
    {children}
  </Link>
);

export default Navbar;
