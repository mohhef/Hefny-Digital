import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/Portfolio";
import Services from "../../components/Services";

export default async function Home({}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
