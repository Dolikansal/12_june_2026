import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import wishImage from '/assets/wish.png';

const Wish = () => {
  const navigate = useNavigate();
  const [bgTexts, setBgTexts] = useState([]);

  // --- Dynamic Background Text Generator (Same as Home) ---
  useEffect(() => {
    const colors = [
      'white', // Electric Cyan (Aqua vibe, very visible)
      '#FF2D95', // Neon Pink (Pop effect ke liye)
      '#9D50FF', // Vivid Violet (Deep but bright)
      '#39FF14', // Neon Lime (Boht highlight hota hai)
      '#FFF01F'  // Cyber Yellow (Bright contrast)
    ];
    const interval = setInterval(() => {
      const newText = {
        id: Date.now(),
        top: Math.random() * 85 + "%",
        left: Math.random() * 85 + "%",
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * (1.5 - 0.8) + 0.8 + "rem"
      };
      setBgTexts((prev) => [...prev.slice(-12), newText]); 
    }, 2000); // 2 seconds delay for a calmer vibe
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* 1. Dynamic Background Text Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {bgTexts.map((txt) => (
            <motion.span
              key={txt.id}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 0.7, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 3 }} // Slow background transition
              className="absolute font-black uppercase italic select-none"
              style={{ top: txt.top, left: txt.left, color: txt.color, fontSize: txt.size ,textShadow: `0 0 10px ${txt.color}88`}}
            >
              Happy Birthday
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        
        {/* Top to Bottom Pop-up Text (Slowed Down) */}
        <motion.div
          initial={{ y: -800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 2, // 2 seconds for a grand entry
            type: "spring", 
            damping: 15, // Smooths the bounce
            stiffness: 40 
          }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
            HAPPY <span className="text-[#00F5FF] drop-shadow-[0_0_25px_rgba(0,245,255,1)]">
                BIRTHDAY MITR
            </span>
          </h1>
        </motion.div>

        {/* Bottom to Top Pop-up Image (Slowed Down) */}
        <motion.div
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 2, 
            type: "spring", 
            damping: 15, 
            stiffness: 40,
            delay: 0.2 // Text ke thoda sa baad start hoga
          }}
          className="relative group"
        >
          <div className="relative p-2 border-4 border-[#00F5FF]/50 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,245,255,0.3)] overflow-hidden">
            <img 
              src={wishImage} 
              alt="Birthday Boy" 
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-4xl transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          {/* Floating Decoration */}
          <motion.div 
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-5 -right-5 bg-[#00F5FF] text-black font-black py-3 px-8 rounded-full shadow-[0_10px_30px_rgba(0,245,255,0.5)] z-20"
          >
            Dushman Special 👑
          </motion.div>
        </motion.div>

        {/* Bottom Button to Next Page */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 1 }} // Sabse last mein aayega
          onClick={() => navigate('/description')}
          className="mt-10 px-12 py-5 bg-linear-to-r from-transparent to-[#00F5FF]/10 hover:from-[#00F5FF] hover:to-blue-600 hover:text-black border-2 border-[#00F5FF] text-[#00F5FF] font-black rounded-2xl transition-all duration-500 uppercase tracking-widest flex items-center gap-4 group"
        >
          Aage Dekho... 
          <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
        </motion.button>

      </div>
    </div>
  );
};

export default Wish;