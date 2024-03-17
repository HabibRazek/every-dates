import { Navbar } from "@/components/navbar";
import LandingLayout from './layout';
import HeroSection from './hero-section';
import { Footer } from './footer';
import { FAQ } from './faq';

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
      <FAQ />
      <Footer />
    </LandingLayout>
  );
}
