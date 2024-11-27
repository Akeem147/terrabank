'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (email === 'ak@gmail.com' && password === 'paris123') {
        toast.success('Logged in successfully!', {
          icon: '✅',
        });

        const user = { email }; // Mock user data
        login(user); // Update authentication state
        router.push('/'); // Redirect to the homepage
      } else {
        toast.error('Incorrect login details', {
          icon: '🚫',
        });
      }
    } catch {
      toast.error('Something went wrong, please try again.', {
        icon: '🚫',
      });
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-indigo-950 via-blue-800 to-teal-600 text-white">
      <Toaster />
      <div className="flex flex-col items-center w-full md:max-w-lg lg:max-w-md justify-center gap-8 px-4">
        {/* Card Container */}
        <div className="w-full bg-gray-900/80 backdrop-blur-md rounded-lg shadow-lg p-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/logo.svg"
              alt="Terrabank Logo"
              className="mt-4"
              width={50}
              height={50}
            />
            <h2 className="text-2xl font-bold text-teal-400 mt-2">
              Welcome to Terrabank
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Sign in to access your account
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-gray-400 mt-4">
            Trouble logging in?{' '}
            <span className="text-teal-400 hover:underline cursor-pointer">
              Get help
            </span>
          </p>
        </div>

        {/* Footer Links */}
        <footer className="text-gray-300 text-sm flex gap-4">
          <p className="hover:underline cursor-pointer">Enroll</p>
          <p className="hover:underline cursor-pointer">Become a Member</p>
          <p className="hover:underline cursor-pointer">Legal</p>
        </footer>
      </div>
    </div>
  );
};

export default SignIn;
