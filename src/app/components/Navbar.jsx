"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            
            // Update URL hash without scrolling
            if (history.pushState) {
              history.pushState(null, '', `#${id}`);
            } else {
              window.location.hash = `#${id}`;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
        threshold: 0,
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        observerRef.current?.observe(section);
      }
    });

    // Set initial active section based on URL hash
    const hash = window.location.hash.substring(1);
    if (hash && navItems.some(item => item.href === `#${hash}`)) {
      setActiveSection(hash);
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Function to handle smooth scroll and set active section
  const handleNavClick = (href, name) => {
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full max-w-7xl top-0 md:top-6 left-1/2 z-50 -translate-x-1/2 px-4 md:px-0">
      {/* Main Container */}
      <div className="flex bg-black/20 md:bg-white/5 items-center justify-between rounded-none md:rounded-full px-6 md:px-10 py-4 backdrop-blur-lg border-b md:border border-white/15 shadow-lg">
        
        {/* Logo */}
        <Link 
          href="#home" 
          className="flex gap-0.5 items-center text-2xl font-bold"
          onClick={() => handleNavClick("#home", "Home")}
        >
          <span className="text-lime-300">&lt;</span>
          <h2 className="text-white">Taharim</h2>
          <span className="text-lime-300">/&gt;</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <li key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`transition-all duration-300 ${
                    isActive 
                      ? "text-lime-300 font-semibold" 
                      : "hover:text-lime-300"
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Active/Hover underline */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-lime-300 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                
                {/* Active indicator dot for mobile */}
                {isActive && (
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-lime-300 rounded-full animate-pulse"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link 
          href={"https://drive.google.com/file/d/18GQwiYpKGa0FE_T2mbRKO_1AWSwQW3_T/view?usp=sharing"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden md:block rounded-full bg-lime-300 px-6 py-2 text-sm font-semibold text-black hover:bg-lime-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lime-300/30">
            Resume
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none hover:text-lime-300 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={`flex items-center justify-between text-lg font-medium py-3 px-4 rounded-xl transition-all ${
                      isActive
                        ? "bg-lime-500/20 text-lime-300 border border-lime-500/30"
                        : "text-gray-200 hover:text-lime-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></span>
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="mt-4">
              <Link 
                href="https://drive.google.com/file/d/18GQwiYpKGa0FE_T2mbRKO_1AWSwQW3_T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-black active:scale-95 hover:bg-lime-400 transition-all">
                  Resume
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Active section indicator for mobile (floating at bottom) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></div>
          <span className="text-sm text-lime-300 font-medium">
            {navItems.find(item => item.href === `#${activeSection}`)?.name || 'Home'}
          </span>
        </div>
      </div>
    </nav>
  );
}