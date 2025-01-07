import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] text-white">
        <div className="container mx-auto px-4 py-40 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            ABOUT US
          </h1>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-2/3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-semibold tracking-widest text-white uppercase">
                  HEFNY DIGITAL
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  WE MAKE WEBSITES WITH PURPOSE & INTENT
                </h3>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-white drop-shadow-sm">
                  At Hefny Digital, we specialize in creating purposeful and
                  impactful websites for businesses that want to make a lasting
                  impression online. Our approach combines modern design
                  principles with robust functionality to deliver websites that
                  not only look great but also drive results.
                </p>
                <p className="text-white drop-shadow-sm">
                  What sets us apart is our commitment to understanding each
                  client's unique needs. We've found that many businesses
                  struggle with either outdated websites that don't reflect
                  their current brand or expensive solutions that don't deliver
                  the expected value. That's where we come in – offering
                  professional, custom web development solutions that align with
                  your business goals and budget.
                </p>
                <p className="text-white drop-shadow-sm">
                  Since our establishment, we've been helping businesses
                  transform their online presence with websites that are
                  beautiful, functional, and purpose-built for success. Our team
                  brings together technical expertise and creative vision to
                  create digital experiences that truly represent your brand and
                  connect with your audience.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/book-strategy-call"
                  className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-xl"
                >
                  Build Your Digital Presence Today
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/3">
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Digital agency workspace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <h2 className="text-black font-semibold mb-4 tracking-wider">
              OUR WORKING PROCESS
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              WE TAKE CARE OF EVERYTHING
            </h3>
            <p className="text-black text-lg">
              After a contract is signed we send a small questionnaire about
              your business and what you offer, then we expand on that content
              and write the entire site's content for you, create the design,
              get approval, then we build. Generally takes 2-3 weeks from start
              to finish.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] rounded-2xl p-8 transition-transform hover:-translate-y-1">
              <div className="mb-8">
                <span className="text-blue-400 font-semibold tracking-wider">
                  STEP 1
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">
                COMPLETE QUESTIONNAIRE
              </h4>
              <p className="text-gray-300">
                We send you an email with less than 10 questions about you
                business, services, what sets you apart, etc and we do all the
                rest.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] rounded-2xl p-8 transition-transform hover:-translate-y-1">
              <div className="mb-8">
                <span className="text-blue-400 font-semibold tracking-wider">
                  STEP 2
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">DESIGN APPROVAL</h4>
              <p className="text-gray-300">
                We then do a video screen share showing you the first draft and
                make any changes you want to make sure you're 100% satisfied.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)] rounded-2xl p-8 transition-transform hover:-translate-y-1">
              <div className="mb-8">
                <span className="text-blue-400 font-semibold tracking-wider">
                  STEP 3
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4">DEVELOPMENT</h4>
              <p className="text-gray-300">
                Once approved, we can start coding the site out and setting
                everything up. We will send a demo link to view before we launch
                and go live.
              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </main>
  );
}
