import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BirthdayVibes = () => {
  const images = [
    "./assets/birthday.jpeg",
    "./assets/birthday2.jpeg", 
    "./assets/birthday1.jpeg",
    "./assets/birthday4.jpeg",
    "./assets/birthday3.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center overflow-hidden relative p-4">
      
      {/* --- CENTRAL IMAGE BOX --- */}
      <div className="relative z-10 w-64 h-70 md:w-80 md:h-112.5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 1.1, rotateY: 90 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="w-full h-full rounded-3xl overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_50px_rgba(34,211,238,0.3)]"
          >
            <img 
              src={images[currentIndex]} 
              alt="Birthday Queen" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating Ring around image */}
        <div className="absolute -inset-4 border border-dashed border-cyan-500/20 rounded-full animate-spin-slow pointer-events-none" />
      </div>

      {/* --- SURROUNDING CONTENT --- */}

      {/* TOP: Title */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-10 md:top-20 text-center"
      >
        <h6 className="text-2xl md:text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-cyan-500">
        THE BIRTHDAY QUEEN 
        </h6>
      </motion.div>

      {/* LEFT: Short Note */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-4 md:left-20 max-w-37.5 md:max-w-xs text-left hidden sm:block"
      >
        <p className="text-cyan-400 font-mono text-sm mb-2 uppercase tracking-widest">Happy Happy Happy birthday</p>
        <h3 className="text-2xl font-bold mb-2">Mera Cartoon</h3>
        <p className="text-slate-400 text-sm">Tu sirf meri dost nahi, mera wo sukoon hai jise main har bheed mein dhundti hoon. Aaj tera din hai, par gift mujhe mila hai—teri dosti ka! Happy Birthday, meri favourite one! ✨</p><br></br>
        <p className="text-slate-400 text-sm">thoda pagalpan , thoda janun , bhot sari notanki , bhot sari khushiya bagwan teri zindgi me hamesha bna k rkhe in short bole to merko .... mera shera , buri buri jaemon ! abhi to kitni sari chije baki h go hame sath me karni h bagwan terko vo sab karne k himaat de 😂😂</p>
      </motion.div>

      {/* RIGHT: Personality */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute right-4 md:right-20 max-w-37.5 md:max-w-xs text-right hidden sm:block"
      >
        <p className="text-cyan-400 font-mono text-sm mb-2 uppercase tracking-widest">Wishes Alert</p>
        <h3 className="text-2xl font-bold mb-2">Emergency</h3>
        <p className="text-slate-400 text-sm">Tere is birthday par bas yehi dua hai ki teri plate hamesha bhari rahe, tera phone hamesha charged rahe, tera laptop me battery rhe , terko khane ko achi achi chije milti rhe , acha pati mile , bache baat mane , tere phone ka recharge khatam na ho , terko chne , chole , na khane pde , tere phone pe full signal aaye or sabse jaruri  tera chehra hamesha yuhi khilta rahe! 😂🫂</p>
      </motion.div>

      {/* BOTTOM: Footer Message */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-5 md:bottom-10 text-center"
      >
        <p className="text-lg md:text-xl font-light italic text-slate-300 max-w-170">
          I know it seems stupid , but i dont know what will happen in future islea i want ki main tera ye birthday best bna sku , gise soch k tu hamehsa khush ho ske....
        </p>
        <div className="mt-4 flex gap-2 justify-center">
            {images.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'}`} />
            ))}
        </div>
      </motion.div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default BirthdayVibes;