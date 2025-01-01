import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params; // No need to use `await` here
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar locale={locale} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
