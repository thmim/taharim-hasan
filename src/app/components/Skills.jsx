// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiMongodb,
//   SiFirebase,
//   SiExpress,
//   SiJsonwebtokens,
//   SiVercel,
//   SiNetlify,
// } from "react-icons/si";

// /* ===== SKILLS GROUPS WITH BRAND COLORS ===== */
// const frontend = [
//   { name: "React", icon: <FaReact color="#61DAFB" /> },
//   { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
//   { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
//   { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
//   { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
// ];

// const backend = [
//   { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
//   { name: "Express.js", icon: <SiExpress color="#AAAAAA" /> },
//   { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
//   { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
//   { name: "JWT", icon: <SiJsonwebtokens color="#FB015B" /> },
// ];

// const tools = [
//   { name: "Git", icon: <FaGitAlt color="#F05032" /> },
//   { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
//   { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
//   { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
// ];

// /* ===== ORBIT COMPONENT ===== */
// function Orbit({ skills, radius, duration, reverse = false, sizeMultiplier = 1 }) {
//   const iconSize = 14 * sizeMultiplier;
//   const containerSize = iconSize * 1.1;

//   return (
//     <motion.div
//       className="absolute inset-0 flex items-center justify-center"
//       animate={{ rotate: reverse ? -360 : 360 }}
//       transition={{ repeat: Infinity, duration, ease: "linear" }}
//     >
//       {/* Orbit Ring */}
//       <div
//         className="absolute rounded-full border border-dashed border-purple-500/40"
//         style={{
//           width: radius * 2,
//           height: radius * 2
//         }}
//       />

//       {skills.map((skill, index) => {
//         const angle = (360 / skills.length) * index;

//         return (
//           <div
//             key={skill.name}
//             className="absolute"
//             style={{
//               transform: `rotate(${angle}deg) translateX(${radius}px)`,
//             }}
//           >
//             {/* Counter Rotation keeps icon upright */}
//             <motion.div
//               animate={{ rotate: reverse ? 360 : -360 }}
//               transition={{ repeat: Infinity, duration, ease: "linear" }}
//               whileHover={{ scale: 1.25 }}
//               className="group relative
//                          rounded-xl w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 bg-black/80 backdrop-blur-sm
//                          flex items-center justify-center
//                          shadow-lg hover:shadow-purple-500/30 transition-shadow"
//               // style={{
//               //   width: `${containerSize}px`,
//               //   height: `${containerSize}px`,
//               // }}
//             >
//               <div className="" style={{ fontSize: `${iconSize}px` }}>
//                 {skill.icon}
//               </div>

//               {/* Tooltip */}
//               <span
//                 className="absolute top-full mt-2 px-2 py-1 text-xs
//                            bg-black/90 text-white rounded opacity-0
//                            group-hover:opacity-100 transition whitespace-nowrap
//                            z-50 backdrop-blur-sm"
//               >
//                 {skill.name}
//               </span>
//             </motion.div>
//           </div>
//         );
//       })}
//     </motion.div>
//   );
// }

// /*  main section */
// export default function SkillsOrbit() {
//   return (
//     <section
//       id="skills"
//       className="relative max-w-5xl mx-auto pt-16 md:py-24 px-4 md:px-8 flex flex-col items-center overflow-hidden"
//     >
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center mb-9 md:mb-20 max-w-3xl mx-auto"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-white">
//           Skills & Expertise
//         </h2>
//         <div className="h-1 w-20 bg-lime-300 mx-auto rounded-full mb-6"></div>
//         <p className="text-gray-300 mb-4 text-base md:text-lg leading-relaxed px-4">
//           I specialize in building modern, responsive web applications using cutting-edge technologies.
//         </p>
//       </motion.div>

//       {/* Responsive Container */}
//       <div className="relative w-full flex flex-col items-center justify-center">

//         {/* Orbit Visualization */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative w-[280px] h-[280px] md:w-[520px] md:h-[520px] lg:w-[480px] lg:h-[480px]"
//         >
//           {/* Mobile: Single Orbit with all skills */}
//           <div className="block md:hidden lg:hidden">
//             <Orbit
//               skills={[...frontend, ...backend, ...tools]}
//               radius={100}
//               duration={40}
//               sizeMultiplier={1.2}
//             />
//           </div>
//           {/* Tablet: Single Orbit with all skills */}
//           <div className="md:block hidden lg:hidden">
//             <Orbit
//               skills={[...frontend, ...backend, ...tools]}
//               radius={220}
//               duration={40}
//               sizeMultiplier={1.4}
//             />
//           </div>

//           {/* Desktop: Three Orbits */}
//           <div className="hidden lg:block">
//             {/* Frontend */}
//             <Orbit skills={frontend} sizeMultiplier={2.7} radius={130} duration={24} />
//             {/* Backend */}
//             <Orbit skills={backend} sizeMultiplier={2.7} radius={220} duration={36} reverse />
//             {/* Tools */}
//             <Orbit skills={tools} sizeMultiplier={2.7} radius={300} duration={48} />
//           </div>

//           {/* FIXED CENTER IMAGE */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div
//               className="w-28 h-28 rounded-full overflow-hidden
//                        border-4 border-purple-500
//                        shadow-[0_0_40px_rgba(168,85,247,0.6)]"
//             >
//               <Image
//                 src="/myportfolioimg.jpg"
//                 alt="My Photo"
//                 width={130}
//                 height={130}
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const frontend = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#CBD5E1" },
  { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "SQL", icon: <FaDatabase />, color: "#F59E0B" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#FB015B" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
  { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
  { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
];

function Orbit({
  skills,
  radius,
  duration,
  reverse = false,
  iconSize = 22,
  tileSize = 52,
  ringColor = "rgba(168,85,247,0.35)",
}) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      <div
        className="absolute rounded-full border border-dashed"
        style={{
          width: radius * 2,
          height: radius * 2,
          borderColor: ringColor,
        }}
      />
      {skills.map((skill, index) => {
        const angle = (360 / skills.length) * index;
        return (
          <div
            key={skill.name}
            className="absolute"
            style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}
          >
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ repeat: Infinity, duration, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
              className="group relative flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all hover:border-white/30 hover:shadow-[0_0_28px_rgba(168,85,247,0.5)]"
              style={{ width: tileSize, height: tileSize }}
            >
              <div style={{ fontSize: iconSize, color: skill.color, lineHeight: 0 }}>
                {skill.icon}
              </div>
              <span className="pointer-events-none absolute top-full z-50 mt-2 whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-2 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                {skill.name}
              </span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function SkillsOrbit() {
  return (
    <section
      id="skills"
      className="relative mx-auto flex max-w-6xl flex-col items-center overflow-hidden px-4 py-12 md:py-16"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[250px] w-[250px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 max-w-3xl text-center md:mb-12"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-purple-300 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
          My Tech Stack
        </div>
        <h2 className="mb-3 bg-gradient-to-br from-white via-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
          Skills & Expertise
        </h2>
        <div className="h-1.5 w-20 bg-lime-300 mx-auto rounded-full"></div>
        <p className="px-4 text-sm leading-relaxed text-gray-300 md:text-base max-w-2xl mx-auto">
          Crafting modern, performant, full-stack web applications with a toolkit
          built for scale, speed, and delightful user experience.
        </p>
      </motion.div>

      {/* Orbit Section */}
      <div className="relative flex w-full flex-col items-center justify-center">
        {/* Adjusted sizes to perfectly wrap your outer radius (340px * 2 = 680px max) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative h-[310px] w-[310px] sm:h-[400px] sm:w-[400px] md:h-[540px] md:w-[540px] lg:h-[690px] lg:w-[690px]"
        >
          {/* Mobile: single orbit */}
          <div className="block md:hidden">
            <Orbit
              skills={[...frontend, ...backend, ...tools]}
              radius={130}
              duration={45}
              iconSize={18}
              tileSize={42}
            />
          </div>

          {/* Tablet: two orbits */}
          <div className="hidden md:block lg:hidden">
            <Orbit skills={frontend} radius={150} duration={30} iconSize={22} tileSize={52} />
            <Orbit
              skills={[...backend, ...tools]}
              radius={240}
              duration={45}
              reverse
              iconSize={22}
              tileSize={52}
              ringColor="rgba(34,211,238,0.3)"
            />
          </div>

          {/* Desktop: three orbits */}
          <div className="hidden lg:block">
            <Orbit
              skills={frontend}
              radius={130}
              duration={28}
              iconSize={20}
              tileSize={60}
              ringColor="rgba(168,85,247,0.4)"
            />
            <Orbit
              skills={backend}
              radius={220}
              duration={40}
              reverse
              iconSize={20}
              tileSize={60}
              ringColor="rgba(217,70,239,0.35)"
            />
            <Orbit
              skills={tools}
              radius={290}
              duration={55}
              iconSize={20}
              tileSize={60}
              ringColor="rgba(34,211,238,0.35)"
            />
          </div>

          {/* Center Display */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-purple-400/50 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-cyan-500 shadow-[0_0_45px_rgba(168,85,247,0.5)] md:h-36 md:w-36"
            >
              <div className="absolute inset-1 rounded-full bg-black/85 backdrop-blur" />
              <div className="relative text-center">
                <div className="bg-gradient-to-br from-white to-purple-200 bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl">
                  DEV
                </div>
                <div className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-purple-300 md:text-xs">
                  Full Stack
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Legend Element */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {[
            { label: "Frontend", color: "from-purple-500 to-fuchsia-500" },
            { label: "Backend", color: "from-fuchsia-500 to-pink-500" },
            { label: "Tools", color: "from-cyan-400 to-teal-400" },
          ].map((l) => (
            <div
              key={l.label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-gray-200 backdrop-blur"
            >
              <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${l.color}`} />
              {l.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}