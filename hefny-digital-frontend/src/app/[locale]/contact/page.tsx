import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)]">
      <Navbar />
      <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold  text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Contact Us
        </h1>
      </section>
      <main className="flex-1 bg-gradient-to-b from-background to-background/95">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
