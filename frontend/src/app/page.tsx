/**
 * Home Page
 *
 * Composes the single-page Alvion Travel landing experience
 * in the intended scroll order.
 */

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Destinations from "@/components/sections/Destinations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Main landing page composition.
export default function Home() {
  return (
    <>
      {/* Persistent navigation */}
      <Navbar />

      {/* Primary content sections */}
      <main>
        {/* Hero section */}
        <Hero />
        {/* About section */}
        <About />
        {/* Services section */}
        <Services />
        <Destinations />
        {/* Why Choose Us section */}
        <WhyChooseUs />
        {/* Contact section */}
        <Contact />
      </main>

      {/* Footer section */}
      <Footer />
    </>
  );
}