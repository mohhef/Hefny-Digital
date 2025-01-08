import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[rgb(12,7,40)] to-[rgb(12,7,40)]">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-background to-background/95">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
