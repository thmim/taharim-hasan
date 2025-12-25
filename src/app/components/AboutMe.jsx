"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Code2, Globe, Zap } from "lucide-react";
import Image from "next/image";
const stats = [
  { icon: <Code2 size={20} />, label: 'Learning Experience', value: '1+ Years' },
  { icon: <Briefcase size={20} />, label: 'Completed Projects', value: '10+' },
  { icon: <Globe size={20} />, label: 'Available for', value: 'Remote / Onesite' },
];

export default function AboutMe() {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    
    <section id="about" className="bg-transparent mt-10 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Heading */}
        <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             variants={fadeInUp}
             className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
            <div className="h-1 w-20 bg-lime-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* left side - image */}
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100 
                } 
              }
            }}
            className="relative"
          >
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -left-6 w-16 h-16 bg-linear-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center z-10"
            >
              <Zap className="text-purple-400" size={24} />
            </motion.div>

            {/* Main image container */}
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-2 bg-linear-to-r from-purple-600 via-transparent to-cyan-600 rounded-3xl opacity-70 group-hover:opacity-100 blur transition duration-500 animate-pulse"></div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 bg-linear-to-br from-gray-900 to-black backdrop-blur-sm">
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10"></div>
                <Image 
                  src="/myportfolioimg.jpg" 
                  alt="Md Taharim Hasan Mim - Full Stack Developer"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 to-transparent z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm text-gray-300">Currently coding something amazing</p>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
            </div>
          </motion.div>

          {/* Right Side - Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Crafting Digital Experiences with{" "}
                <span className="text-transparent bg-clip-text g-linear-to-r from-green-400 to-lime-500">
                  Passion & Precision
                </span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I’m a passionate <span className="font-semibold text-lime-300">MERN Stack Developer</span> from Bangladesh, 
                  specializing in building modern web applications with the MERN stack and Next.js. My journey began with 
                  curiosity about how digital experiences come to life, evolving into a deep commitment to creating 
                  solutions that are both technically robust and visually compelling.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  What drives me is the challenge of transforming complex problems into <span className="font-semibold text-lime-300">elegant, 
                  user-centric solutions</span>. Whether it’s architecting scalable backends or crafting pixel-perfect 
                  interfaces, I believe in code that not only works but tells a story of thoughtful design and 
                  engineering excellence.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  Beyond coding, I’m constantly exploring emerging technologies, contributing to open-source projects, 
                  and embracing the mindset of a lifelong learner. Every project is an opportunity to push boundaries 
                  and create something memorable.
                </p>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center text-center">
                        <div className="text-green-300 mb-2 bg-green-400/10 p-2 rounded-full">{stat.icon}</div>
                        <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Download Resume Button */}
            {/* if i want to add download functionality then add my resume file in the public folder and add the name of this file in href */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/18GQwiYpKGa0FE_T2mbRKO_1AWSwQW3_T/view?usp=drive_link"
              target="blank"
              // download="Md_Taharim_Hasan_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-green-400 to-lime-500 text-black font-bold shadow-lg hover:shadow-green-400/25 transition"
            >
              Download Resume <Download size={20} />
            </motion.a>
            <p className="text-gray-400 text-sm mt-4 max-w-md">
                Passionate about creating impactful digital solutions. Let’s build something amazing together!
              </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10 pt-5 border-t border-white/10"
        >
          <p className="text-gray-400 italic text-lg">
            "Code is like humor. When you have to explain it, it’s bad." — Cory House
          </p>
          <p className="text-gray-500 text-sm mt-2">(But I'll make sure it’s always clean and understandable)</p>
        </motion.div>
      </div>
    </section>
  );
}