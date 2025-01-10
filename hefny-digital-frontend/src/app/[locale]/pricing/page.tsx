import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations("pricing");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)]">
      <Navbar />
      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-black-600 uppercase mb-4">
              {t("title")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              {t("subtitle")}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Lump Sum Plan */}
            <Card className="relative text-white bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] shadow-lg rounded-2xl">
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {t("lumpSum.title")}
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  <Feature text={t("features.designAndDevelopment")} included />
                  <Feature text={t("features.hosting")} included />
                  <Feature text={t("features.additionalPageFee")} included />
                  <Feature text={t("features.unlimitedEditsAddon")} included />
                  <Feature text={t("features.addBlog")} included />
                  <Feature text={t("features.support")} included={false} />
                  <Feature
                    text={t("features.lifetimeUpdates")}
                    included={false}
                  />
                </ul>
                <div className="text-3xl font-bold mb-1">
                  {t("lumpSum.price")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("lumpSum.hosting")}
                </div>
              </CardContent>
              <CardFooter className="p-6">
                {/* @ts-expect-error idk */}
                <Link href="book-strategy-call"
                  className="w-full bg-indigo-500 inline-block px-8 py-4 text-lg text-center font-semibold text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-xl"
                >
                  {t("getStarted")}
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative bg-white shadow-2xl rounded-2xl scale-105 z-10">
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {t("monthly.title")}
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  <Feature
                    text={t("features.designAndDevelopment")}
                    included
                    light
                  />
                  <Feature
                    text={t("features.includesHosting")}
                    included
                    light
                  />
                  <Feature
                    text={t("features.additionalPageFee")}
                    included
                    light
                  />
                  <Feature text={t("features.addBlog")} included light />
                  <Feature text={t("features.unlimitedEdits")} included light />
                  <Feature text={t("features.support")} included light />
                  <Feature
                    text={t("features.lifetimeUpdates")}
                    included
                    light
                  />
                </ul>
                <div className="text-3xl font-bold mb-1">
                  {t("monthly.price")}
                </div>
                <div className="text-sm text-gray-500">
                  {t("monthly.perMonth")}
                </div>
              </CardContent>
              <CardFooter className="p-6">
                {/* @ts-expect-error idk */}
                <Link href="book-strategy-call"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 inline-block px-8 py-4 text-lg text-center font-semibold text-white rounded-md shadow-lg transition-colors duration-200 hover:shadow-xl"
                >
                  {t("getStarted")}
                </Link>
              </CardFooter>
            </Card>

            {/* Ecommerce Plan */}
            <Card className="relative bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] text-white shadow-lg rounded-2xl">
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {t("ecommerce.title")}
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  <Feature text={t("features.customShopify")} included />
                  <Feature text={t("features.configureApps")} included />
                  <Feature text={t("features.integratedShipping")} included />
                  <Feature text={t("features.shopifyTutorial")} included />
                  <Feature text={t("features.fullyEditable")} included />
                  <Feature
                    text={t("features.unlimitedEditsMonthly")}
                    included={false}
                  />
                  <Feature text={t("features.support")} included={false} />
                </ul>
                <div className="text-3xl font-bold mb-1">
                  {t("ecommerce.price")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("ecommerce.starting")}
                </div>
              </CardContent>
              <CardFooter className="p-6">
                {/* @ts-expect-error idk */}
                <Link href="/book-strategy-call"
                  className="w-full bg-indigo-500 inline-block px-8 py-4 text-lg text-center font-semibold text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-xl"
                >
                  {t("getStarted")}
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Feature({
  text,
  included,
  light = false,
}: {
  text: string;
  included: boolean;
  light?: boolean;
}) {
  return (
    <li className="flex items-center gap-3">
      {included ? (
        <Check
          className={`w-5 h-5 ${light ? "text-blue-400" : "text-blue-600"}`}
        />
      ) : (
        <X className={`w-5 h-5 ${light ? "text-gray-400" : "text-gray-400"}`} />
      )}
      <span className={included ? "opacity-100" : "opacity-60"}>{text}</span>
    </li>
  );
}
