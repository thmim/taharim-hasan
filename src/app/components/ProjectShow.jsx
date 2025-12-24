"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../projectsData";

// const projects = [
//   {
//     slug: "edugenix",
//     title: "EduGenix – E-Learning Platform",
//     description:
//       "A full-featured online learning platform where teacher can published courses and student can purchase course with authentication.",
//     tech: ["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "Firebase", "JWT", "Tailwind"],
//     image: "/edugenix.png",
//   },
//   {
//     slug: "hotella",
//     title: "Hotella – Hotel Booking System",
//     description:
//       "Real-time hotel booking experience with filters, availability checking, secure reservations, cancellation and update booking features.",
//     tech: ["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "Firebase", "Tailwind"],
//     image: "/hotel-booking.png",
//   },
//   {
//     slug: "freelance",
//     title: "MoneyMachine – Task Manager",
//     description:
//       "A productivity-focused task management system for freelancers. Where users can post there task and freelancers can bids for task and earn.",
//     tech: ["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "Firebase", "Tailwind"],
//     image: "/freelance-marketplace.png",
//   },
// ];

export default function ProjectShow() {
  
  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-400/10 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Selected <span className="text-green-400">Projects</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A collection of real-world projects focused on performance,
            scalability, and clean user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              {/* Glow Border on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-r from-green-400/20 to-transparent blur-xl" />
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-7 relative z-10">
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-white/15 text-gray-300
                 group-hover:border-green-400/40 group-hover:text-green-400 transition"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* CTA */}
                <Link href={`/projects/${project.id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 
                             bg-green-400/90 text-black font-medium hover:bg-green-400 transition"
                >
                  View Project
                  <ArrowUpRight size={18} />
                </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
