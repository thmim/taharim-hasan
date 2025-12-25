"use client";

import { motion } from "framer-motion";
import { Layers, Database, Layout, MonitorSmartphone } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Full Stack Development",
    subtitle: "MERN Stack Specialist",
    description: "Building robust, scalable web applications using MongoDB, Express, React,Next.js and Node.js with a focus on performance.",
    icon: <Layers size={32} />,
    color: "from-green-400 to-emerald-600",
  },
  {
    id: 2,
    title: "Backend Development",
    subtitle: "Secure & Scalable API",
    description: "Developing efficient server-side logic, RESTful APIs, and database management with JWT authentication.",
    icon: <Database size={32} />,
    color: "from-blue-400 to-indigo-600",
  },
  {
    id: 3,
    title: "Responsive Design",
    subtitle: "Mobile-First Approach",
    description: "Ensuring your website looks stunning on all devices—from mobile phones to large desktop screens using Tailwind CSS.",
    icon: <MonitorSmartphone size={32} />,
    color: "from-purple-400 to-pink-600",
  },
  {
    id: 4,
    title: "UI/UX Design",
    subtitle: "User-Centric Interfaces",
    description: "Creating intuitive and engaging user experiences through modern UI principles and interactive elements.",
    icon: <Layout size={32} />,
    color: "from-orange-400 to-red-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-24 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-400/5 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Services What I Offer
          </motion.h2>
          <div className="h-1.5 w-20 bg-lime-300 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-lime-400/40 transition-all duration-500 overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-500`}></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon Box */}
                <div className={`p-5 rounded-2xl bg-linear-to-br ${service.color} text-black shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-bold text-lime-300 uppercase tracking-widest mb-2">
                    {service.subtitle}
                  </h4>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative Arrow or Line */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                <span className="text-white/20 group-hover:text-lime-300 transition-colors text-xs font-mono">
                  0{index + 1}  
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}