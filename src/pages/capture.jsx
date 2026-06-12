import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalWish = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/assets/capture1.jpeg", 
    "/assets/capture2.jpeg",
    "/assets/capture3.jpeg",
    "/assets/capture4.jpeg",
    "/assets/capture5.jpeg",
    "/assets/capture6.jpeg"
  ];

  const wishes = [
    "To the best Mitr and Dushman...",
    "Sharing a journey of laughter.",
    "Living a vision together.",
    "Always keep that smile on.",
    "Home away from home, forever.",
    "Lets celebrate the every moment 🚀"
  ];

  // Auto-slide logic: 3 seconds change
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden font-sans">
      
      {/* Background Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={images[index]} 
            alt="memory" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Aqua Gradient Overlay - For Dark Theme Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>

      {/* UI Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        
        {/* Heartbeat Icon */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-cyan-400 text-5xl mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        >
          💙
        </motion.div>

        {/* Dynamic Birthday Text */}
        <motion.div
          key={`text-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-sm">
            Building the memories together
          </h2>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
            {wishes[index]}
          </h1>
        </motion.div>

        {/* Final Big Button (Only shows up on last slide or always) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12"
        >
          <div className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-500 font-bold tracking-widest cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            HAPPY BIRTHDAY! 🎂
          </div>
        </motion.div>

        {/* Progress Dots */}
        <div className="absolute bottom-10 flex gap-3">
          {images.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-cyan-400' : 'w-3 bg-slate-700'}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden">
         <p className="text-slate-800 text-9xl font-black rotate-90 origin-left opacity-20 uppercase tracking-widest">
           Forever
         </p>
      </div>

    </div>
  );
};

export default FinalWish;