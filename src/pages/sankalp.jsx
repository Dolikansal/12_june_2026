import React from 'react';
import { motion } from 'framer-motion';

const SankalpPage = () => {
  const images = [
    { id: 1, url: "/assets/sankalp1.jpeg", label: "The Support", emoji: "🤝" },
    { id: 2, url: "/assets/sankalp2.jpeg", label: "The Vision", emoji: "🎯" },
    { id: 3, url: "/assets/desc1.jpeg", label: "The Promise", emoji: "♾️" }
  ];

  const floatingStickers = ["✨", "🛡️", "🔥", "🌸", "🧿", "💎", "🫂", "🚀"];

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center py-20 px-4">
      
      {/* 1. Background Animated Aura */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      {/* 2. Floating Emojis Burst (Random positions) */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingStickers.map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 + "vw" }}
            animate={{ 
              y: "-10vh", 
              rotate: 360,
              x: (Math.random() * 100) + (Math.random() > 0.5 ? 10 : -10) + "vw" 
            }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
            className="absolute text-4xl opacity-40 blur-[1px]"
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        
        {/* 3. Central Unity Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border-2 border-dashed border-white/10 rounded-full pointer-events-none"
          />
          <h2 className="text-cyan-500 font-mono tracking-[0.5em] text-sm mb-4 uppercase">Damaged Brain cells </h2>
          <h1 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter">
            SANKALP<span className="text-cyan-400">❤️</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-md mx-auto font-light leading-relaxed">
            sankalp ek chote se compition se leke hamara aim ban gya , and i wish ham sath me apna sankalp pura kar ske...
          </p>
        </motion.div>

        {/* 4. Three-Image Unity Grid (Unique Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {images.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -20 }}
              className="relative group"
            >
              {/* Sticker on each image corner */}
              <div className="absolute -top-6 -right-4 z-20 text-5xl group-hover:rotate-12 transition-transform duration-300">
                {item.emoji}
              </div>

              {/* Image Frame with Glowing Border */}
              <div className="relative h-[450px] rounded-[40px] overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-2xl">
                <img 
                  src={item.url} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.label}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                
                {/* Content inside image */}
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold text-white tracking-tight">{item.label}</h3>
                  <div className="h-1 w-0 group-hover:w-full bg-cyan-500 transition-all duration-500 mt-2" />
                </div>
              </div>

              {/* Unique Background Sticker for each card */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 text-6xl opacity-20 pointer-events-none group-hover:opacity-100 transition-opacity"
              >
                ⭐
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 5. Bottom "Unity" Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-pink-500 text-xl">♥</span>
            ))}
          </div>
          <p className="text-white font-mono text-sm tracking-widest opacity-60">
            In the world of copy cats , you are my same pinch ❤️
          </p>
        </motion.div>

      </div>

      {/* Side Decorative Text (Vertical) */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="text-white/10 font-black text-6xl uppercase origin-left -rotate-90 tracking-tighter">
          Teamwork makes the dream work
        </p>
      </div>
    </div>
  );
};

export default SankalpPage;