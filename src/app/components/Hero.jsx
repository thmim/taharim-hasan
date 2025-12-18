"use client";

import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer",
      "Frontend Developer",
      "React & Next.js Developer",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 max-w-3xl"
      >
        {/* Welcome */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm inline-block px-4 py-1 uppercase rounded-full border border-gray-600 tracking-widest mb-4 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl py-3 font-bold text-white mb-4">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Md Taharim Hasan Mim
          </span>
        </h1>

        {/* Typing Designation */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-1">
          {text}
          <Cursor cursorStyle="|" />
        </h2>
        {/* Accent under designation */}
<div className="relative mx-auto w-72 h-1 mb-8">
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="absolute inset-0 bg-cyan-400 rounded-full"
  />
  <div className="absolute inset-0 blur-md bg-linear-to-r from-purple-400 via-cyan-400 to-purple-400 opacity-70"></div>
</div>

        {/* Short Intro */}
        <p className="text-gray-400 leading-relaxed mb-10">
          I build modern, responsive, and high-performance web applications using
          React, Next.js, Node.js, and MongoDB. Passionate about clean UI, smooth
          UX, and scalable architecture.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 text-white font-medium shadow-lg"
          >
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-white transition"
          >
            View My Projects
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
          <motion.a
            whileHover={{ y: -4 }}
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 text-xl"
          >
            <FaLinkedinIn />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 text-xl"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-red-400 text-xl"
          >
            <MdEmail />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
