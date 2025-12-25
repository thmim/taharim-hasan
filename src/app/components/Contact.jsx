"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageSquare } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <div className="h-1 w-20 bg-lime-300 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            I’d love to hear from you! Whether it’s about a potential project, collaboration, or just a friendly hello — feel free to reach out.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Details and Resume */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/2 border border-white/10 hover:border-lime-400/30 transition-all group">
              <div className="p-4 rounded-2xl bg-gray-900 text-lime-300 group-hover:bg-lime-300 group-hover:text-black transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                <p className="text-white text-lg font-medium">mdtaharimmim1010@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/2 border border-white/10 hover:border-lime-400/30 transition-all group">
              <div className="p-4 rounded-2xl bg-gray-900 text-lime-300 group-hover:bg-lime-300 group-hover:text-black transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Call Me</p>
                <p className="text-white text-lg font-medium">+880 1969018549</p>
              </div>
            </div>
            {/* location */}
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/2 border border-white/10 hover:border-lime-400/30 transition-all group">
              <div className="p-4 rounded-2xl bg-gray-900 text-lime-300 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                <p className="text-white font-medium">Jashore, Bangladesh</p>
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="flex justify-center items-center gap-6">
            <div className="pt-8">
              <Link 
                href={"https://drive.google.com/file/d/18GQwiYpKGa0FE_T2mbRKO_1AWSwQW3_T/view?usp=drive_link"}
                target="blank"
                className="flex items-center justify-between p-3 rounded-2xl bg-linear-to-r from-green-400 to-lime-600 text-black font-bold hover:shadow-[0_10px_30px_rgba(74,222,128,0.3)] transition-all active:scale-[0.98]"
              >
                <span className="text-lg px-1">Download Resume</span>
                <Download size={22} />
              </Link>
            </div>

            {/* Social Links */}
            <div className="">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Connect with me</p>
              <div className="flex gap-2 md:gap-4">
                {[
                  { icon: <Github size={20}/>, link: "https://github.com/thmim" },
                  { icon: <Linkedin size={20}/>, link: "https://www.linkedin.com/in/th-mim10/" },
                  { icon: <FaWhatsapp size={20}/>, link: "https://wa.me/8801969018549" },
                  
                ].map((social, i) => (
                  <a key={i} href={social.link} className="p-5 rounded-2xl bg-white/3 border border-white/10 text-white hover:bg-lime-300 hover:text-black hover:border-lime-300 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            </div>
          </motion.div>

          {/* Right Side: Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3rem] bg-white/2 border border-white/10 backdrop-blur-3xl relative"
          >
            {/* background glow for the form */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-400/5 blur-[120px] rounded-full"></div>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="32a97e63-1108-41e0-8ae4-f2a9d0ca7694" />

              <div className="space-y-2">
                <input 
                  type="text" name="name" required
                  className="w-full px-6 py-5 rounded-2xl bg-white/3 border border-white/10 text-white focus:border-green-400 outline-none transition-all placeholder:text-gray-600" 
                  placeholder="Full Name"
                />
              </div>

              <div className="space-y-2">
                <input 
                  type="email" name="email" required
                  className="w-full px-6 py-5 rounded-2xl bg-white/3 border border-white/10 text-white focus:border-green-400 outline-none transition-all placeholder:text-gray-600" 
                  placeholder="Email Address"
                />
              </div>

              <div className="space-y-2">
                <textarea 
                  name="message" required rows="4"
                  className="w-full px-6 py-5 rounded-2xl bg-white/3 border border-white/10 text-white focus:border-green-400 outline-none transition-all resize-none placeholder:text-gray-600" 
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-white text-black font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-green-400 transition-all duration-300"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}