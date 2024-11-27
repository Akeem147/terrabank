'use client'
import { useState } from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQProps[] = [
    { question: 'Is Terrabank secure?', answer: 'Yes, we use industry-leading encryption technology.' },
    { question: 'Can I transfer internationally?', answer: 'Absolutely! Our platform supports global transfers.' },
    { question: 'What are the fees?', answer: 'We offer transparent pricing with minimal fees.' },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQ key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ question, answer }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <button
        className="flex justify-between w-full text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-4 text-gray-700">{answer}</p>}
    </div>
  );
};

export default FAQSection;
