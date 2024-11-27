'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="relative bg-gradient-to-b from-indigo-900 via-blue-700 to-teal-500 text-white">
      <Navbar />
      <HeroSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
