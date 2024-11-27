"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gradient-to-r from-indigo-900 via-blue-700 to-teal-500 text-white py-10">
    <div className="container mx-auto px-6 text-start md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* About Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
        <Image
            src="/logo.svg"
            alt="Terrabank Logo"
            className=""
            width={30}
            height={30}
          />
          <h3 className="text-2xl font-bold">Terrabank</h3>
        </div>
        <p className="text-sm leading-relaxed">
          Experience modern banking solutions tailored to fit your financial
          needs. We redefine banking for you.
        </p>
      </div>
      {/* Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-3">
          {["Home", "About Us", "Services", "Contact", "FAQ"].map(
            (link, index) => (
              <li key={index}>
                <Link
                  className="hover:text-teal-300 hover:underline transition-all"
                  href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {/* Contact Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <p className="text-sm mb-3">123 Elite Way, San Francisco, CA, 94105</p>
        <p className="text-sm mb-3">Phone: +1 (555) 123-4567</p>
        <p className="text-sm">Email: support@terrabank.com</p>
      </div>
    </div>
    <div className="mt-8 border-t border-white/20 pt-4 text-sm text-center">
      © {new Date().getFullYear()} Terrabank. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
