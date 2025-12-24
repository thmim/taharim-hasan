"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Github, Linkedin, ArrowUp, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px linear-to-r from-transparent via-green-400/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand/Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 rounded-lg bg-green-400/10 text-green-400 border border-green-400/20">
                <Code2 size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">
                Taharim<span className="text-green-400">Portfolio</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              MERN Stack Developer passionate about building high-performance web applications and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Navigation</h4>
            <ul className="space-y-3">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-400/40"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Newsletter Idea */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Let's Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/thmim" className="p-3 rounded-xl bg-white/3 border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/th-mim10/" className="p-3 rounded-xl bg-white/3 border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/8801969018549" className="p-3 rounded-xl bg-white/3 border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all">
              <FaWhatsapp size={20} /> 
              </a>
            </div>
            <a 
              href="mailto:your-email@gmail.com" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={16} className="text-green-400" />
              mdtaharimmim1010@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} All Rights Reserved. Designed & Built by <span className="text-white font-medium italic">Taharim Hasan Mim</span>
          </p>
          
          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-4 rounded-full bg-white/3 border border-white/10 text-green-400 hover:bg-green-400 hover:text-black transition-all group"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}