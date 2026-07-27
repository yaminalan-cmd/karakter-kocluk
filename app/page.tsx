import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import Success from "@/components/Success";
import Books from "@/components/Books";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-slate-950 text-white">
        <Hero />
        <Features />
        <About />
        <Services />
        <Success />
        <Books />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}