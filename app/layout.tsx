import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EVERYDATE",
  description: "EVERYDATE is an innovative brand specializing in date-based snacks. The name 'EVERYDATE' reflects our commitment to offering superior quality products for every day of the year. Our snacks are designed for those who seek both health and flavor in their daily routine. Each product in our range is meticulously crafted to ensure freshness and exquisite taste, using the finest dates selected for their quality and natural flavor. Whether it’s for a tasty break, an energy boost, or a healthy sweet treat, EVERYDATE is the ideal choice. We pride ourselves on offering a variety of delicious and nutritious options that cater to the needs of each moment of the day, emphasizing our motto: a date for every date, a new taste discovery every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
