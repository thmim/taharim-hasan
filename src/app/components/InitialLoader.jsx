"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // after 2.5 sec the loader will be off
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 bg-[#050505] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 border-4 border-green-400/20 border-t-green-400 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-green-400 font-black text-xl">
              D
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white font-medium tracking-[10px] uppercase text-sm"
          >
            Setting up the <span className="text-green-400">Universe</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}