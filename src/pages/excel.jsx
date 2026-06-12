import React from 'react';
import { motion } from 'framer-motion';

const CollegeFests = () => {
  const images = [
    { src: "/assets/excel1.jpeg", label: "excelsiour award 🚀" },
    { src: "/assets/excel2.jpeg", label: "fest 💃" },
    { src: "/assets/excel3.jpeg", label: "Ratanavali 🎤" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10 font-sans selection:bg-cyan-500">
      
      {/* 1. Sticky Emojis/Stickers (Floating) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 text-4xl animate-bounce shadow-cyan-500/50">✨</div>
        <div className="absolute bottom-1/4 right-5 text-4xl animate-pulse">🎸</div>
        <div className="absolute top-1/2 right-10 text-3xl animate-spin-slow text-cyan-400">🔥</div>
      </div>

      {/* 2. Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-cyan-400 tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
          The Fest Saga 🥳
        </h1>
        <p className="text-zinc-500 mt-2 uppercase tracking-[0.3em] text-xs">Excelsior • Ratnavali • Junoon</p>
      </header>

      {/* 3. High-Height Images Section (Row) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="relative h-[500px] md:h-[650px] overflow-hidden rounded-[2rem] border-2 border-zinc-900 hover:border-cyan-500 transition-all duration-500 shadow-2xl"
          >
            <img 
              src={img.src} 
              alt={img.label} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => { e.target.src=`https://via.placeholder.com/600x1200/000000/00ffff?text=${img.label}` }}
            />
            {/* Overlay Label */}
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-cyan-500/50 px-6 py-2 rounded-full">
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">{img.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. Detailed Content Section (At the Bottom) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-zinc-900/30 border border-zinc-800 p-10 rounded-[3rem] text-center relative"
      >
        {/* Floating Stickers on Content Box */}
        <div className="absolute -top-6 -left-6 bg-cyan-500 text-black p-3 rounded-xl rotate-[-15deg] font-bold shadow-lg">MEMORIES ✨</div>
        <div className="absolute -bottom-6 -right-6 bg-white text-black p-3 rounded-xl rotate-[15deg] font-bold shadow-lg">BEST DAYS 🌈</div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-6 uppercase tracking-widest italic">Humari College Life Ki Shaan</h3>
        
        

        {/* Extra Tag Stickers */}
        <div className="flex justify-center gap-4 mt-8">
          <span className="px-4 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-cyan-500 text-xs font-bold uppercase">#SquadGoals</span>
          <span className="px-4 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-400 text-xs font-bold uppercase">#CampusVibes</span>
          <span className="px-4 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-cyan-500 text-xs font-bold uppercase">#Unforgettable</span>
        </div>
      </motion.div>

      <footer className="mt-20 mb-10 text-center text-zinc-700 text-[10px] tracking-[0.5em] uppercase">
        Designed for a special friend • 2026
      </footer>

    </div>
  );
};

export default CollegeFests;