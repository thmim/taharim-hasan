"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Science (Honours) in Mathematics",
    institution: "National University",
    duration: "2023 - Present",
    description: "Currently pursuing a degree in Mathematics, focusing on analytical thinking and complex problem-solving.",
    icon: <BookOpen className="text-green-400" size={24} />,
    status: "Ongoing"
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Science Group",
    duration: "2019 - 2021",
    description: "Achieved GPA 5.00 out of 5.00. Developed a strong foundation in Physics, Chemistry, and Higher Mathematics.",
    icon: <School className="text-cyan-400" size={24} />,
    status: "Completed"
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Science Group",
    duration: "Completed in 2019",
    description: "Achieved GPA 5.00 out of 5.00. Started my journey into the world of science and technology.",
    icon: <GraduationCap className="text-purple-400" size={24} />,
    status: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" className="pt-24 pb-4 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Academic Background
          </motion.h2>
          <div className="h-1 w-20 bg-lime-300 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            A reflection of my academic journey and formal education.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot on the line */}
              <div className="absolute -left-[13px] top-0 w-6 h-6 bg-gray-900 border-2 border-lime-300 rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_rgba(74,222,128,0.5)]">
                 <div className="w-2 h-2 bg-lime-300 rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md hover:border-lime-400/40 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-gray-900 border border-white/5 text-lime-300">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
                        {edu.title}
                      </h3>
                      <p className="text-gray-400 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="px-4 py-1 rounded-full bg-green-400/10 text-lime-300 text-xs font-bold uppercase tracking-wider mb-1">
                      {edu.status}
                    </span>
                    <span className="text-sm text-gray-500 font-mono">{edu.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}