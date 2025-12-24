"use client";

import { motion } from "framer-motion";
import { Search, Layout, Code2, Ship } from "lucide-react";

const steps = [
  {
    icon: <Search className="text-purple-400" size={32} />,
    title: "Discovery & Strategy",
    description: "I start by deeply analyzing project requirements and business goals to define a clear roadmap for success.",
  },
  {
    icon: <Layout className="text-cyan-400" size={32} />,
    title: "Design & Architecture",
    description: "Before coding, I architect the database structure and create a visual blueprint to ensure a seamless user experience.",
  },
  {
    icon: <Code2 className="text-green-400" size={32} />,
    title: "Development",
    description: "Using modern stacks like MERN or Next.js, I build high-performance, scalable applications with clean, maintainable code.",
  },
  {
    icon: <Ship className="text-orange-400" size={32} />,
    title: "Quality & Delivery",
    description: "After rigorous testing and optimization, the project is deployed to a live environment ensuring stability and speed.",
  },
];

export default function WorkPlan() {
  return (
    <section className="pt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            My Strategic <span className="text-green-400">Approach</span>
          </motion.h2>
          <div className="h-1 w-20 bg-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I believe that a structured workflow is the foundation of every successful digital product.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-md hover:border-green-400/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Background Step Number Overlay */}
              {/* <div className="absolute -top-2 -right-2 text-8xl font-black text-white/3 group-hover:text-green-400/5 transition-colors pointer-events-none">
                0{index + 1}
              </div> */}

              {/* Icon Container */}
              <div className="flex gap-3">
              <div className="mb-6 relative h-16 z-10 inline-block p-4 rounded-2xl bg-gray-950 border border-white/5 shadow-xl">
                {step.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}