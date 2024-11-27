'use client';

import { useEffect, useState } from 'react';


const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="h-auto flex flex-col justify-between text-center px-6 relative z-10 bg-gradient-to-b from-indigo-900 via-blue-700 to-teal-500 text-white overflow-hidden pb-8 pt-8">
      {/* Main Hero Content */}
      <div
        className={`transition-all transform mt-20 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
        }`}
      >
        <h1 className="text-4xl md:text-6xl md:max-w-2xl md:mx-auto font-extrabold leading-tight tracking-tight mb-6">
          Experience the Future of Banking
        </h1>
        <p className="text-xl md:text-2xl mb-8 px-4">
          Empowering millions to manage their finances effortlessly with security and style.
        </p>
       
      </div>

      {/* Features Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10 md:mt-0 px-2">
        <FeatureCard
          icon="🏦"
          title="Banking Made Simple"
          description="Intuitive tools to help you budget, save, and invest smarter."
        />
        <FeatureCard
          icon="📊"
          title="Real-Time Analytics"
          description="Stay updated with live financial tracking and insights."
        />
        <FeatureCard
          icon="🔒"
          title="State-of-the-Art Security"
          description="Bank with confidence knowing your data is protected."
        />
      </div>

      {/* Statistics Section */}
      <div className="relative mt-20 md:mt-24 px-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Customers Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard number="5M+" description="Happy Customers Worldwide" />
          <StatCard number="10M+" description="Daily Transactions Processed" />
          <StatCard number="99.9%" description="Uptime and Reliability" />
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-200">{description}</p>
  </div>
);

// Statistic Card Component
const StatCard = ({
  number,
  description,
}: {
  number: string;
  description: string;
}) => (
  <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition-all">
    <h3 className="text-4xl font-extrabold text-teal-300">{number}</h3>
    <p className="text-sm text-gray-200 mt-2">{description}</p>
  </div>
);

export default HeroSection;
