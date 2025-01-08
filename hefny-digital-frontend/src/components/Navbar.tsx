"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ bookingPage = false }: { bookingPage?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("nav");
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkBackgroundColor = () => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const element = document.elementFromPoint(x, y);
        if (element) {
          const bgColor = window.getComputedStyle(element).backgroundColor;
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const brightness =
              (parseInt(rgb[0]) * 299 +
                parseInt(rgb[1]) * 587 +
                parseInt(rgb[2]) * 114) /
              1000;
            setIsDarkBackground(brightness < 128);
          }
        }
      }
    };

    checkBackgroundColor();
    window.addEventListener("scroll", checkBackgroundColor);
    return () => window.removeEventListener("scroll", checkBackgroundColor);
  }, []);

  return (
    <nav
      className={`${
        isOpen
          ? "fixed w-full z-50 bg-white shadow-md"
          : bookingPage
          ? "w-full z-50 transition-all duration-300 "
          : isScrolled
          ? "fixed w-full z-50 transition-all duration-300 bg-white shadow-md"
          : "fixed w-full z-50 transition-all duration-30 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/home" className="flex items-center">
              <div ref={logoRef} className="relative w-[120px] h-[120px]">
                <Image
                  src="/HDSLogo.svg"
                  alt="HDS Logo"
                  layout="fill"
                  className={`transition-all duration-300 ${
                    isDarkBackground && !bookingPage
                      ? "logo-light"
                      : "logo-dark"
                  }`}
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-2">
            {!bookingPage && (
              <div>
                <NavLink
                  href="/#services"
                  isScrolled={isScrolled}
                  bookingPage={bookingPage}
                >
                  {t("services")}
                </NavLink>
                <NavLink
                  href="/#portfolio"
                  isScrolled={isScrolled}
                  bookingPage={bookingPage}
                >
                  {t("portfolio")}
                </NavLink>
                <NavLink
                  href="/about"
                  isScrolled={isScrolled}
                  bookingPage={bookingPage}
                >
                  {t("about")}
                </NavLink>
                <NavLink
                  href="/pricing"
                  isScrolled={isScrolled}
                  bookingPage={bookingPage}
                >
                  {t("pricing")}
                </NavLink>
                <NavLink
                  href="/contact"
                  isScrolled={isScrolled}
                  bookingPage={bookingPage}
                >
                  {t("contact")}
                </NavLink>
              </div>
            )}
            {!bookingPage && (
              <Button
                variant="outline"
                asChild
                className={`border-2 ${
                  isScrolled || bookingPage
                    ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    : "border-white text-black hover:bg-white hover:text-blue-600"
                }`}
              >
                {/* @ts-expect-error idk*/}
                <Link href="/book-strategy-call">{t("bookFreeCall")}</Link>
              </Button>
            )}
            {!bookingPage && (
              <Button
                variant="outline"
                asChild
                className="border-white hover:bg-white hover:text-gray-300"
              >
               {/* @ts-expect-error idk */} 
                <Link href={"/login"}>{t("login")}</Link>
              </Button>
            )}
            {!bookingPage && <LanguageSwitcher />}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled || bookingPage ? "text-blue-600" : "text-white"
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
            {!bookingPage && (
              <div>
                <MobileNavLink href="#services">{t("services")}</MobileNavLink>
                <MobileNavLink href="#portfolio">
                  {t("portfolio")}
                </MobileNavLink>
                <MobileNavLink href="/about">{t("about")}</MobileNavLink>
                <MobileNavLink href="/pricing ">{t("pricing")}</MobileNavLink>
                <MobileNavLink href="/contact">{t("contact")}</MobileNavLink>
              </div>
            )}
            {!bookingPage && (
              <Button
                asChild
                className={`border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white`}
              >
                <MobileNavLink href="/book-strategy-call">
                  {t("bookFreeCall")}
                </MobileNavLink>
              </Button>
            )}
            {!bookingPage && (
              <Button
                variant="outline"
                asChild
                className="w-full border-white hover:bg-white hover:text-gray-800"
              >
                <MobileNavLink href="/login">Login</MobileNavLink>
              </Button>
            )}
          </div>
          {!bookingPage && (
            <div className="px-4 py-3 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  isScrolled,
  bookingPage,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  bookingPage: boolean;
}) => (
  <Link
    // @ts-expect-error idk
    href={href}
    className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md
      ${
        isScrolled || bookingPage
          ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          : "text-white hover:text-blue-200 hover:bg-white/10"
      }
    `}
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
    // @ts-expect-error idk
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
