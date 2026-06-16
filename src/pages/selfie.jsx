import React from 'react';
import { motion } from 'framer-motion';

const SelfieJoyPage = () => {
  // 3 Images ka setup (Selfie stick special)
  const moments = [
    { id: 1, img: "./assets/selfie1.jpeg", angle: -5, label: "The First Attempt" },
    { id: 2, img: "./assets/selfie3.jpeg", angle: 3, label: "Wide Angle Masti" },
    { id: 3, img: "./assets/selfie2.jpeg", angle: -2, label: "Perfect Frame" }
  ];

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] overflow-hidden py-20 flex flex-col items-center justify-center">
      
      {/* 1. Camera Viewfinder Overlays (Static Elements) */}
      <div className="fixed inset-10 border-2 border-white/5 pointer-events-none z-50">
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-500" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyan-500" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyan-500" />
      </div>

      {/* 2. Floating Fun Elements (Cute Stickers) */}
      <div className="absolute inset-0 pointer-events-none">
        {["📸", "🤳", "✨", "🍭", "🎀", "🐥", "🌈"].map((emoji, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3 + i, repeat: Infinity }}
            className="absolute text-5xl opacity-30"
            style={{ 
              top: `${Math.random() * 80}%`, 
              left: `${Math.random() * 90}%` 
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* 3. Header Section */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block bg-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 shadow-[0_0_15px_#ec4899]"
        >
          NEW GADGET UNLOCKED! 🔓
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black text-white italic leading-none tracking-tighter">
          CHOTI <span className="text-cyan-400">KHUSHIYAN</span>
        </h1>
        <p className="text-gray-400 mt-6 font-mono tracking-widest uppercase text-sm">
          // The Selfie Stick Chronicles
        </p>
      </div>

      {/* 4. Polaroid-Style Image Stack */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10 max-w-7xl px-10">
        {moments.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, rotate: 0, y: 100 }}
            whileInView={{ opacity: 1, rotate: item.angle, y: 0 }}
            whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-4 pb-12 shadow-2xl relative group"
          >
            {/* Tape Effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-cyan-500/30 backdrop-blur-sm z-20" />
            
            <div className="relative overflow-hidden w-[280px] h-[350px] bg-gray-200">
              <img 
                src={item.img} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                alt="Selfie Moment" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Caption in Handwriting Style */}
            <p className="absolute bottom-3 left-0 w-full text-center font-serif text-gray-800 text-xl italic font-bold">
              {item.label}
            </p>

            {/* Mini Cute Sticker on each Polaroid */}
            <motion.div 
              className="absolute -bottom-2 -right-2 text-4xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ⭐
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 5. Bottom Fun Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 text-center z-10"
      >
        <div className="flex items-center gap-3 justify-center text-pink-500 text-2xl mb-2">
          <span>📸</span>
          <div className="h-[2px] w-12 bg-pink-500"></div>
          <span>SMILE!</span>
        </div>
        <p className="text-gray-500 text-sm italic">
          "Ek selfie stick kya aayi, hum toh poore vlogger ban gaye!"
        </p>
      </motion.div>

    </div>
  );
};

export default SelfieJoyPage;