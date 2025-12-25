"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, CheckCircle2, ChevronLeft, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/projectsData";

export default function ProjectDetails() {
  const params = useParams();
  const id = params.id;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-white text-center py-32 font-mono text-2xl">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-10 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button - Top */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-300 transition-colors mb-12 group text-lg"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-5xl md:h-[400px] rounded-3xl overflow-hidden border border-white/10 mb-12"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1024}
            height={400}
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
        >
          {project.title}
        </motion.h1>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 text-gray-400 mb-10"
        >
          <Calendar size={22} className="text-lime-300" />
          <span className="font-medium text-lg">Timeline:</span>
          <span className="text-lg">{project.timeline}</span>
        </motion.div>

        {/* Live & GitHub Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-6 mb-16"
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-lime-300 text-black font-bold hover:border-green-300 transition text-lg"
          >
            Live Site <ExternalLink size={20} />
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition text-lg"
          >
            View Code <Github size={20} />
          </a>
        </motion.div>

        {/* Details Grid - Same as before but improved spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Side - Overview & Features */}
          <div className="md:col-span-2 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <CheckCircle2 size={24} className="text-lime-300 shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Side - Tech Stack & CTA */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-5 py-3 rounded-2xl bg-gray-900/70 border border-white/10 text-gray-200 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-linear-to-br from-green-400/10 to-transparent border border-green-400/30 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Interested in this project?</h3>
              <p className="text-gray-400 mb-8">
                Let’s discuss how I can build something similar for you.
              </p>
              <Link
                href="/#contact"
                className="w-full py-5 rounded-2xl bg-lime-300 text-black font-bold flex items-center justify-center gap-3 hover:bg-green-300 transition text-lg"
              >
                Get In Touch <Send size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}