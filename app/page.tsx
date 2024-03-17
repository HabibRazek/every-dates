import { Landing } from "@/components/landing/landing";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const navLinks = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <main className="w-full">
      <Landing />
    </main>
  );
}
