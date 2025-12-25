"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

/* ===== SKILLS GROUPS WITH BRAND COLORS ===== */
const frontend = [
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#AAAAAA" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "JWT", icon: <SiJsonwebtokens color="#FB015B" /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
  { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
];

/* ===== ORBIT COMPONENT ===== */
function Orbit({ skills, radius, duration, reverse = false, sizeMultiplier = 1 }) {
  const iconSize = 14 * sizeMultiplier;
  const containerSize = iconSize * 1.1;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      {/* Orbit Ring */}
      <div
        className="absolute rounded-full border border-dashed border-purple-500/40"
        style={{
          width: radius * 2,
          height: radius * 2
        }}
      />

      {skills.map((skill, index) => {
        const angle = (360 / skills.length) * index;

        return (
          <div
            key={skill.name}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px)`,
            }}
          >
            {/* Counter Rotation keeps icon upright */}
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ repeat: Infinity, duration, ease: "linear" }}
              whileHover={{ scale: 1.25 }}
              className="group relative
                         rounded-xl w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 bg-black/80 backdrop-blur-sm
                         flex items-center justify-center
                         shadow-lg hover:shadow-purple-500/30 transition-shadow"
              // style={{
              //   width: `${containerSize}px`,
              //   height: `${containerSize}px`,
              // }}
            >
              <div className="" style={{ fontSize: `${iconSize}px` }}>
                {skill.icon}
              </div>

              {/* Tooltip */}
              <span
                className="absolute top-full mt-2 px-2 py-1 text-xs
                           bg-black/90 text-white rounded opacity-0
                           group-hover:opacity-100 transition whitespace-nowrap
                           z-50 backdrop-blur-sm"
              >
                {skill.name}
              </span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

/*  main section */
export default function SkillsOrbit() {
  return (
    <section
      id="skills"
      className="relative max-w-5xl mx-auto pt-16 md:py-24 px-4 md:px-8 flex flex-col items-center overflow-hidden"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-9 md:mb-20 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-white">
          Skills & Expertise
        </h2>
        <div className="h-1 w-20 bg-lime-300 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 mb-4 text-base md:text-lg leading-relaxed px-4">
          I specialize in building modern, responsive web applications using cutting-edge technologies.
        </p>
      </motion.div>

      {/* Responsive Container */}
      <div className="relative w-full flex flex-col items-center justify-center">

        {/* Orbit Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-[280px] h-[280px] md:w-[520px] md:h-[520px] lg:w-[480px] lg:h-[480px]"
        >
          {/* Mobile: Single Orbit with all skills */}
          <div className="block md:hidden lg:hidden">
            <Orbit
              skills={[...frontend, ...backend, ...tools]}
              radius={100}
              duration={40}
              sizeMultiplier={1.2}
            />
          </div>
          {/* Tablet: Single Orbit with all skills */}
          <div className="md:block hidden lg:hidden">
            <Orbit
              skills={[...frontend, ...backend, ...tools]}
              radius={220}
              duration={40}
              sizeMultiplier={1.4}
            />
          </div>

          {/* Desktop: Three Orbits */}
          <div className="hidden lg:block">
            {/* Frontend */}
            <Orbit skills={frontend} sizeMultiplier={2.7} radius={130} duration={24} />
            {/* Backend */}
            <Orbit skills={backend} sizeMultiplier={2.7} radius={220} duration={36} reverse />
            {/* Tools */}
            <Orbit skills={tools} sizeMultiplier={2.7} radius={300} duration={48} />
          </div>

          {/* FIXED CENTER IMAGE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-28 h-28 rounded-full overflow-hidden
                       border-4 border-purple-500
                       shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <Image
                src="/myportfolioimg.jpg"
                alt="My Photo"
                width={130}
                height={130}
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}