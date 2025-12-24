"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Code2, Globe } from "lucide-react";
import Image from "next/image";

// গুরুত্বপূর্ণ তথ্যগুলো এখানে সাজানো হয়েছে
const stats = [
  { icon: <Code2 size={20} />, label: 'Experience', value: '2+ Years' },
  { icon: <Briefcase size={20} />, label: 'Completed Projects', value: '15+' },
  { icon: <Globe size={20} />, label: 'Available for', value: 'Remote / Freelance' },
];

export default function AboutMe() {
  // অ্যানিমেশন ভেরিয়েন্ট
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    // id="about" ব্যবহার করা হয়েছে যাতে নেভিগেশন বার থেকে এখানে স্ক্রল করা যায়
    <section id="about" className="bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Heading */}
        <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             variants={fadeInUp}
             className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">About <span className="text-green-400">Me</span></h2>
            <div className="h-1 w-20 bg-green-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image Column */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             variants={{
                 hidden: { opacity: 0, x: -50 },
                 visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
             }}
             className="relative group mx-auto md:mx-0 max-w-[400px]"
          >
            {/* Decorative rotating background frame */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/30 to-cyan-500/30 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 ease-in-out -z-10 blur-sm"></div>
            
            {/* Image Container */}
            <div className="rounded-3xl overflow-hidden border-2 border-white/10 bg-gray-900/50 backdrop-blur-sm relative z-10 aspect-square">
              <Image 
                src="/myportfolioimg.jpg" 
                alt="Md Taharim Hasan Mim"
                width={400}
                height={300}
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Side - Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              A dedicated <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Full Stack Developer</span> based in Bangladesh.
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              My journey started with a curiosity about how things work on the web, which led me to master the MERN stack. I love creating scalable, robust backend systems and connecting them with beautiful, user-friendly frontend interfaces.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              When I'm not coding, I'm exploring new technologies, solving DSA problems, or focusing on continuous learning to stay ahead in this tech world.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center text-center">
                        <div className="text-green-400 mb-2 bg-green-400/10 p-2 rounded-full">{stat.icon}</div>
                        <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Download Resume Button */}
            {/* ⚠️ আপনার রেজুমে ফাইলটি public ফোল্ডারে রাখুন এবং নাম পরিবর্তন করুন */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/my-resume.pdf" // আপনার পিডিএফ ফাইলের পাথ
              download="Md_Taharim_Hasan_Resume.pdf" // ডাউনলোড হওয়ার সময় ফাইলের নাম যা দেখাবে
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-green-400 to-cyan-500 text-black font-bold shadow-lg hover:shadow-green-400/25 transition"
            >
              Download Resume <Download size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}