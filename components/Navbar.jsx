"use client";

import { useState } from "react";
import { Press_Start_2P } from 'next/font/google';

const pressStart = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className={`text-black text-3xl font-extrabold`}>
            &lt;FL&gt;
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="/about" className={`text-black ${pressStart.className} hover:underline`}>
              About
            </a>
            <a href="/projects" className={`text-black ${pressStart.className} hover:underline`}>
              Projects
            </a>
            <a href="/contact" className={`text-black ${pressStart.className} hover:underline`}>
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >

              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md px-2 pt-2 pb-3 space-y-1">
          <a href="/about" className={`block text-black ${pressStart.className} hover:underline`}>
            About
          </a>
          <a href="#projects" className={`block text-black ${pressStart.className} hover:underline`}>
            Projects
          </a>
          <a href="#contact" className={`block text-black ${pressStart.className} hover:underline`}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
