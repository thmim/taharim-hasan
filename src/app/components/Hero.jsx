"use client";

import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const skills =
  ["React.js", "Next.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Vercel", "Netlify"];

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer",
      "Frontend Developer",
      "React & Next.js Developer",
      "Full Stack Developer",
      "Backend Developer",
      "Problem Solver",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className="relative py-5 mt-24 flex items-center justify-center overflow-hidden">

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
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
            Available for Work
          </span>
        </motion.div>


        {/* Name */}
        <h1 className="text-5xl md:text-7xl py-3 font-bold text-white mb-2">
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Taharim Hasan Mim
          </span>
        </h1>

        {/* Typing Designation */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-3">
          {text}
          <Cursor cursorStyle="|" />
        </h2>
        {/* Accent under designation */}
        {/* <div className="relative mx-auto w-[350px] h-1 mb-8">
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="absolute inset-0 bg-green-300 rounded-full"
  />
  <div className="absolute inset-0 blur-md bg-linear-to-r from-purple-400 via-cyan-400 to-purple-400 opacity-70"></div>
</div> */}

        {/* Short Intro */}
        <p className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-5">
          I build modern,responsive, and high-performance web applications with <span className="text-lime-300">MERN Stack</span> experties.
          
        </p>
        {/* Tech stack */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {
            skills.map((skill, index) => (
              <span
                key={skill}
                className="px-2 py-1 mb-5 rounded-3xl bg-white/5 border hover:border-lime-300 text-gray-200 text-sm font-medium"
              >
                {skill}
              </span>
            ))
          }



        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 rounded-full bg-linear-to-r from-green-400 to-lime-500 text-black font-medium shadow-lg"
          >
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-lime-400 hover:text-black hover:border-white transition"
          >
            View My Projects
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center pb-5 justify-center gap-6">
          <motion.a
            whileHover={{ y: -4 }}
            href="https://www.linkedin.com/in/th-mim10/"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 text-xl"
          >
            <FaLinkedinIn />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com/thmim"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 text-xl"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="mailto:mdtaharimmim1010@gmail.com"
            className="text-gray-400 hover:text-red-400 text-xl"
          >
            <MdEmail />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
