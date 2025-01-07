import { Link } from "@/i18n/routing";

export default function Features() {
  const features = [
    {
      title: "100% SECURE",
      description:
        "Our sites are just static HTML and CSS code, meaning there's literally nothing that can be hacked.",
    },
    {
      title: "CUSTOM DESIGNED",
      description:
        "Our designs are made by an in-house design team, which allows us to make anything we want.",
    },
    {
      title: "100 PAGESPEED SCORES",
      description:
        "Our sites have zero bloat, zero waste, and built with purpose so we get perfect 98-100/100 speed scores with Google.",
    },
    {
      title: "MONEY BACK GUARANTEE",
      description:
        "If we can't design something you like, you get your money back and the contract is cancelled. We stand by our work.",
    },
    {
      title: "UNMATCHED SUPPORT",
      description:
        "Call or text us anytime, no phone trees or robots. When you call us you get me - the owner and developer.",
    },
    {
      title: "WE KNOW SEO",
      description:
        "No snake oil, no tricks, no lies. We explain very clearly what SEO is, how it works, and what we can do to get you ranking.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] border-[80px] border-gray-100 rounded-full" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            WHAT WE OFFER
          </h3>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            WEBSITES STARTING AT $0 DOWN AND $175 PER MONTH
          </h2>
          <p className="text-gray-600">
            We offer $0 down for a standard 5 page small business website. If
            you need more than that then we have to do custom pricing based on
            the scope of work, number of additional pages, and time involved.{" "}
            <span className="font-semibold">12 month minimum contract</span>.
            Includes design, development, hosting, unlimited edits, 24/7
            support, and lifetime updates.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/book-strategy-call"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
        >
          SCHEDULE A CALL
        </Link>
      </div>
    </section>
  );
}
