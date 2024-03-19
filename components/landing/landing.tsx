
import { Navbar } from "@/components/navbar";
import LandingLayout from './layout';
import HeroSection from './hero-section';
import { Footer } from './footer';
import OurProducts from "./our-products";
import Benefits from "./benefits-degla";
import WhatWeDo from "./what-we-do";
import SnackCreation from "./snack-creation";
import NutritionalFacts from "./nutritional-facts";

export const Landing = () => {
  const navLinks = [
    { name: 'Home', href: '/', current: true },
    
  ];

  return (
    <LandingLayout>

      <Navbar links={navLinks} />

      <HeroSection />
      <OurProducts />
      <Benefits />
      <NutritionalFacts />

      <WhatWeDo />
      <SnackCreation />
      <Footer />
    </LandingLayout>
  );
}
