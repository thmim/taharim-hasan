"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-999 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="w-4 h-4 bg-green-400 rounded-full"
            />
          ))}
        </div>
        <p className="mt-4 text-white/70 font-mono text-xs uppercase tracking-widest">
          Loading Data...
        </p>
      </div>
    </div>
  );
}