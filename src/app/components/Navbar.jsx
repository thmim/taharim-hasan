"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Education", href: "#education" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full max-w-7xl top-0 md:top-6 left-1/2 z-50 -translate-x-1/2 px-4 md:px-0">
      {/* Main Container */}
      <div className="flex bg-black/20 md:bg-white/5 items-center justify-between rounded-none md:rounded-full px-6 md:px-10 py-4 backdrop-blur-lg border-b md:border border-white/15 shadow-lg">
        
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 text-white font-semibold text-lg">
          <span className="text-green-400">&lt;/&gt;</span>
          devripon
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link href={item.href} className="transition hover:text-green-400">
                {item.name}
              </Link>
              {/* Active/Hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block rounded-full bg-green-400 px-6 py-2 text-sm font-semibold text-black hover:bg-green-300 transition">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
          <ul className="flex flex-col gap-6 text-center text-gray-200">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-lg font-medium hover:text-green-400 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button className="w-full rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-black active:scale-95 transition">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}