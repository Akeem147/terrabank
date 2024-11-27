"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-transparent absolute top-0 left-0 right-0 z-20">
    {/* Logo Section */}
    <div className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="Terrabank Logo"
        className=""
        width={40}
        height={40}
      />
      <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
        Terrabank
      </div>
    </div>

    {/* Log In Button */}
    <Link
  href="/sign-in"
  className="px-6 py-2 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-blue-800 transition-all text-white"
>
  Log In
</Link>

  </nav>
);

export default Navbar;
