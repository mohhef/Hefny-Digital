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

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section with Curve */}
      <section className="relative bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] text-white">
        <div className="container mx-auto px-4 py-40 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            PRICING
          </h1>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-black-600 uppercase mb-4">
              OUR PRICING
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              PRICING PACKAGES FOR EVERY BUDGET
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Lump Sum Plan */}
            <Card className="relative bg-white shadow-lg rounded-2xl">
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold mb-2">LUMP SUM</h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  <Feature text="Design And Development" included />
                  <Feature text="$25/mo Hosting" included />
                  <Feature text="$100 fee Per Page after 5" included />
                  <Feature text="+$50/mo Unlimited Edits Add-on" included />
                  <Feature text="+$250 To Add A Blog" included />
                  <Feature text="24/7 Support" included={false} />
                  <Feature text="Lifetime Updates" included={false} />
                </ul>
                <div className="text-3xl font-bold mb-1">$3800</div>
                <div className="text-sm text-gray-600">+$25/mo Hosting</div>
              </CardContent>
              <CardFooter className="p-6">
                <Link
                  href="book-strategy-call"
                  className="w-full bg-indigo-500 inline-block px-8 py-4 text-lg text-center font-semibold text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-xl"
                >
                  GET STARTED
                </Link>
              </CardFooter>
            </Card>

            {/* Monthly Plan */}
            <Card className="relative bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] text-white shadow-2xl rounded-2xl scale-105 z-10">
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold mb-2">MONTHLY</h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  <Feature text="Design And Development" included light />
                  <Feature text="Includes Hosting" included light />
                  <Feature text="$100 fee Per Page After 5" included light />
                  <Feature text="+$250 To Add A Blog" included light />
                  <Feature text="Unlimited Edits" included light />
                  <Feature text="24/7 Support" included light />
                  <Feature text="Lifetime Updates" included light />
                </ul>
                <div className="text-3xl font-bold mb-1">$175</div>
                <div className="text-sm text-gray-300">Per Month</div>
              </CardContent>
              <CardFooter className="p-6">
                <Link
                  href="book-strategy-call"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 inline-block px-8 py-4 text-lg text-center font-semibold text-white rounded-md shadow-lg transition-colors duration-200 hover:shadow-xl"
                >
                  GET STARTED
                </Link>
              </CardFooter>
            </Card>

            {/* Ecommerce Plan */}
            <Card className="relative bg-white shadow-lg rounded-2xl">
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold mb-2">ECOMMERCE</h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  <Feature text="Custom Shopify Store" included />
                  <Feature text="Configure Any And All Apps" included />
                  <Feature text="Integrated Shipping" included />
                  <Feature text="Shopify Tutorial Walkthrough" included />
                  <Feature text="Fully Editable In Shopify CMS" included />
                  <Feature text="+$50/mo Unlimited Edits" included={false} />
                  <Feature text="24/7 Support" included={false} />
                </ul>
                <div className="text-3xl font-bold mb-1">$8k</div>
                <div className="text-sm text-gray-600">Starting</div>
              </CardContent>
              <CardFooter className="p-6">
                <Link
                  href="/book-strategy-call"
                  className="w-full bg-indigo-500 inline-block px-8 py-4 text-lg text-center font-semibold text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-xl"
                >
                  GET STARTED
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
