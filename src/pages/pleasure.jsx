import React from 'react';
import { motion } from 'framer-motion';

const HeartMemoryPage = () => {
  // 25 Miniature Images ka data (Apne assets ke original paths yahan daal dena)
  // 25 Miniature Images ka manual data setup
  const memories = [
    { id: 1, src: './assets/achive3.jpeg', from: 'left' },
    { id: 2, src: './assets/beauty3.jpeg', from: 'top' },
    { id: 3, src: './assets/amritsar.jpeg', from: 'right' },
    { id: 4, src: './assets/birthday4.jpeg', from: 'bottom' },
    { id: 5, src: './assets/capture3.jpeg', from: 'left' },
    { id: 6, src: './assets/capture1.jpeg', from: 'top' },
    { id: 7, src: './assets/capture6.jpeg', from: 'right' },
    { id: 8, src: './assets/desc1.jpeg', from: 'bottom' },
    { id: 9, src: './assets/excel3.jpeg', from: 'left' },
    { id: 10, src: './assets/excelsior.jpeg', from: 'top' },
    { id: 11, src: './assets/firstmeet.jpeg', from: 'right' },
    { id: 12, src: './assets/geeta2.jpeg', from: 'bottom' },
    { id: 13, src: './assets/geetajyanti.jpeg', from: 'left' },
    { id: 14, src: './assets/group3.jpeg', from: 'top' },
    { id: 15, src: './assets/happy.jpeg', from: 'right' },
    { id: 16, src: './assets/Hero_home.jpeg', from: 'bottom' },
    { id: 17, src: './assets/holi2.jpeg', from: 'left' },
    { id: 18, src: './assets/homepage.jpeg', from: 'top' },
    { id: 19, src: './assets/hostel3.jpeg', from: 'right' },
    { id: 20, src: './assets/hostelmasti.jpeg', from: 'bottom' },
    { id: 21, src: './assets/ln1.jpeg', from: 'left' },
    { id: 22, src: './assets/movies1.jpeg', from: 'top' },
    { id: 23, src: './assets/sankalp.jpeg', from: 'right' },
    { id: 24, src: './assets/selfie.jpeg', from: 'bottom' },
    { id: 25, src: './assets/uiet1.jpeg', from: 'left' },
    { id: 25, src: './assets/vc1.jpeg', from: 'bottom' },
    { id: 25, src: './assets/weekend.jpeg', from: 'right' },
    { id: 25, src: './assets/uiet1.jpeg', from: 'top' },
  ];

  // Velocity aur scale ko ekdum smooth control karne ke liye function
  const getInitialPosition = (direction) => {
    switch (direction) {
      case 'top': return { y: -window.innerHeight, x: 0, opacity: 0, scale: 0.1 };
      case 'bottom': return { y: window.innerHeight, x: 0, opacity: 0, scale: 0.1 };
      case 'left': return { x: -window.innerWidth, y: 0, opacity: 0, scale: 0.1 };
      case 'right': return { x: window.innerWidth, y: 0, opacity: 0, scale: 0.1 };
      default: return { y: -1000, opacity: 0 };
    }
  };

  // 25 Images ko 7x7 Grid mein Heart Shape dene ke liye exact mathematical map
  const positionClasses = [
    // --- ROW 1 (Top Loops) ---
    "col-start-2 row-start-1", "col-start-3 row-start-1",
    "col-start-5 row-start-1", "col-start-6 row-start-1",

    // --- ROW 2 ---
    "col-start-1 row-start-2", "col-start-2 row-start-2", "col-start-3 row-start-2",
    "col-start-4 row-start-2", "col-start-5 row-start-2", "col-start-6 row-start-2", "col-start-7 row-start-2",

    // --- ROW 3 (Widest Part / Center) ---
    "col-start-1 row-start-3", "col-start-2 row-start-3", "col-start-3 row-start-3",
    "col-start-4 row-start-3", "col-start-5 row-start-3", "col-start-6 row-start-3", "col-start-7 row-start-3",

    // --- ROW 4 (Starting to Taper) ---
    "col-start-2 row-start-4", "col-start-3 row-start-4", "col-start-4 row-start-4",
    "col-start-5 row-start-4", "col-start-6 row-start-4",

    // --- ROW 5 ---
    "col-start-3 row-start-5", "col-start-4 row-start-5", "col-start-5 row-start-5",

    // --- ROW 6 (The Bottom Sharp V-Point) ---
    "col-start-4 row-start-6"
  ];

  return (
    <div className="h-screen w-full bg-[#030712] overflow-hidden flex flex-col items-center justify-center relative font-sans text-slate-100 selection:bg-cyan-500/30">
      
      {/* Background Cinematic Aura - Ultra Deep Aqua Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[700px] h-[340px] md:h-[700px] bg-cyan-950/15 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[350px] h-[180px] md:h-[350px] bg-blue-900/10 blur-[110px] rounded-full pointer-events-none z-0" />

      {/* Floating Modern Header */}
      <motion.div 
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-6 text-center z-10 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
          Our Safe Space ❤️
        </h1>
        <p className="text-cyan-400/60 font-mono tracking-[0.35em] text-[9px] md:text-xs uppercase mt-1">
          Har Ek Tukda Tumhi Se Juda Hai
        </p>
      </motion.div>

      {/* MATHEMATICAL HEART FRAME */}
      <div className="relative w-[360px] h-[360px] md:w-[520px] md:h-[520px] flex items-center justify-center z-10 mt-10">
        
        {/* 7x7 Grid Container */}
        <div className="grid grid-cols-7 grid-rows-6 gap-1.5 md:gap-2 w-full h-full p-2">
          {memories.map((img, index) => {
            const currentGridClass = positionClasses[index] || "hidden";

            return (
              <motion.div
                key={img.id}
                initial={getInitialPosition(img.from)}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.5,             // Speed kam kar di (Takes 2.2s to travel)
                  delay: index * 0.23,       // Ek-ek image ke aane ka delay badha diya for slow connection effect
                  type: 'spring',
                  stiffness: 30,             // Low stiffness = slow and heavy movement
                  damping: 12                // Smooth landing without heavy shaking
                }}
                whileHover={{ 
                  scale: 1.25, 
                  zIndex: 50,
                  borderColor: '#22d3ee',
                  boxShadow: '0 0 30px rgba(6,182,212,0.7)',
                  transition: { duration: 0.2 }
                }}
                className={`${currentGridClass} rounded-[6px] md:rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-950 aspect-square shadow-2xl cursor-pointer group transition-all duration-300`}
              >
                <img 
                  src={img.src} 
                  alt="Memory Frame" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[35%] group-hover:grayscale-0 brightness-[0.85] group-hover:brightness-100"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Center Dust Glow */}
        <div className="absolute inset-0 m-auto w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* Elegant Subtitle Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5 }} // Jab pura heart ban jaye tabhi quote show hoga
        className="absolute bottom-6 text-center max-w-[85%] z-10"
      >
        <p className="text-slate-400 italic text-xs md:text-sm tracking-wide font-mono">
          "You are the only person with whom my 'silence' is not awkward and my 'crazy' is completely normal." ✨
        </p>
      </motion.div>

    </div>
  );
};

export default HeartMemoryPage;