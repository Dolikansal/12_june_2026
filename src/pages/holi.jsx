import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HoliSpecial = () => {
  const [index, setIndex] = useState(0);

  const holiMemories = [
    {
      id: 1,
      img: "./assets/holi1.jpeg",
      title: "Pehli Holi!",
      accent: "#ec4899", // Pink
      secondary: "#f472b6",
      content: "Pheli holi kasturba ki vibe hi alag thi , full of fun thi and especially vo dance stage pe chad k or kichad me dubana pipe me nhelana , everything was super fun and memorable!"
    },
    {
      id: 2,
      img: "./assets/holi2.jpeg",
      title: "Gulaal Gang",
      accent: "#facc15", // Yellow
      secondary: "#fde047",
      content: "itna aad kbaad karke khe dena ki ji ham to hai meera bhawan k hai , kya ajib hi pagalpan hai yaar , kya mast vibe hoti h holi ki or asthetic holi ka hamara sapna to sapna hi rhe gya ...."
    },
    {
      id: 3,
      img: "./assets/holi3.jpeg",
      title: "world War",
      accent: "#22d3ee", // Cyan
      secondary: "#67e8f9",
      content: "or bhai ise kaise bhul sakte hai , kya jabardast seen tha yamuna ka , frash pe leta leta k gasita tha...or rang bhi to lpeta tha itna 😂😂"
    }
  ];

  const nextMemory = () => setIndex((prev) => (prev + 1) % holiMemories.length);

  return (
    <div className="min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden relative font-sans">
      
      {/* 🎨 Background "Liquid" Splashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={`splash-${index}`}
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 2.5, opacity: 0.6, rotate: 0 }}
            exit={{ scale: 5, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ backgroundColor: holiMemories[index].accent }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
          />
          <motion.div
            key={`splash-2-${index}`}
            initial={{ scale: 0, opacity: 0, rotate: 45 }}
            animate={{ scale: 2, opacity: 0.4, rotate: 20 }}
            exit={{ scale: 4, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
            style={{ backgroundColor: holiMemories[index].secondary }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px]"
          />
        </AnimatePresence>
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-5xl px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Photo Frame */}
        <div className="relative group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ x: -100, opacity: 0, rotate: -5 }}
                    animate={{ x: 0, opacity: 1, rotate: -2 }}
                    exit={{ x: 100, opacity: 0, rotate: 5 }}
                    className="relative z-10 w-72 h-[400px] md:w-[400px] md:h-[500px] bg-white p-4 shadow-[20px_20px_60px_rgba(0,0,0,0.5)] rounded-sm"
                >
                    <div className="w-full h-[85%] overflow-hidden bg-slate-200">
                        <img 
                            src={holiMemories[index].img} 
                            alt="Memory" 
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="h-[15%] flex items-center justify-center">
                        <span className="font-['Permanent_Marker',cursive] text-2xl text-slate-800 tracking-wider">
                           Holi 2024 ✨
                        </span>
                    </div>
                    
                    {/* Decorative Tape */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/20 backdrop-blur-md -rotate-2 border border-white/30" />
                </motion.div>
            </AnimatePresence>
            
            {/* Background decorative square */}
            <motion.div 
                animate={{ rotate: index * 45 }}
                className="absolute inset-0 border-4 border-dashed border-white/20 -m-6 rounded-3xl" 
            />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`text-${index}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                >
                    <h2 
                      className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
                      style={{ 
                        color: 'transparent',
                        WebkitTextStroke: `2px ${holiMemories[index].accent}`,
                        textShadow: `4px 4px ${holiMemories[index].accent}`
                      }}
                    >
                        {holiMemories[index].title}
                    </h2>
                    
                    <div className="mt-6 bg-white/5 backdrop-blur-xl border-l-4 p-8 rounded-r-2xl shadow-2xl max-w-md"
                         style={{ borderColor: holiMemories[index].accent }}>
                        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed font-serif italic">
                           "{holiMemories[index].content}"
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Futuristic Button */}
            <button 
                onClick={nextMemory}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 rounded-full mt-4 hover:bg-white hover:text-black"
                style={{ borderColor: holiMemories[index].accent }}
            >
                <span className="relative z-10 uppercase tracking-widest text-sm">Next Rang 🎨</span>
                <motion.div 
                    layoutId="btnBg"
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: holiMemories[index].accent }}
                />
            </button>
        </div>
      </div>

      {/* Floating Particles/Gulaal */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                animate={{ 
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3 + i, repeat: Infinity }}
                className="absolute w-2 h-2 rounded-full"
                style={{ 
                    backgroundColor: holiMemories[index].accent,
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`,
                    filter: 'blur(2px)'
                }}
            />
        ))}
      </div>

    </div>
  );
};

export default HoliSpecial;