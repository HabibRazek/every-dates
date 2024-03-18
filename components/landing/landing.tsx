
import { Navbar } from "@/components/navbar";
import LandingLayout from './layout';
import HeroSection from './hero-section';
import { Footer } from './footer';
import { FAQ } from './faq';
import OurProducts from "./our-products";
import Benefits from "./benefits-degla";
import WhatWeDo from "./what-we-do";
import SnackCreation from "./snack-creation";

export const Landing = () => {
  const navLinks = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <LandingLayout>

      <Navbar links={navLinks} />

      <HeroSection />
      <OurProducts />
      <Benefits />
      <WhatWeDo />
      <SnackCreation />
      <FAQ />
      <Footer />
    </LandingLayout>
  );
}
