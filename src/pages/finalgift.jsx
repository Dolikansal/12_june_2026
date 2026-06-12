import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalGift = () => {
  const [stage, setStage] = useState('emojis');
  const [count, setCount] = useState(3);

  const lifetimePoetry = [
    "I will be with you in 8 directions...Wherever you wander, I’ll be standing right by your side.. Or maybe....",
    "I will be your 7 colors of the rainbow.... Adding every shade of joy into your world.. Or maybe....",
    "I will be with you for 6 working days of a tiring week.... Being the sweet escape where you can just sit and rest. . Or maybe....",
    "I will be with you for 5 moments of the day... Morning, noon, afternoon, evening, and midnight. Or maybe....",
    "I will be with you for 4 seasons of the year... Through the summer heat, autumn leaves, winter chills, and spring blooms. Or maybe....",
    "I will be with you for 3 parts of time... Yesterday, Today, and Tomorrow. Or maybe....",
    "I will be there for 2 times... Whenever you need me, and even when you don't. Or maybe....",
    "I will just be there for 1 day... And that is Every Single Day. ❤️"
  ];
  useEffect(() => {
    // Stage 1: Emoji Rain for 8s
    if (stage === 'emojis') {
      const timer = setTimeout(() => setStage('countdown'), 8000);
      return () => clearTimeout(timer);
    }

    // Stage 2: SIMPLE COUNTDOWN (3-2-1)
    if (stage === 'countdown') {
      if (count > 0) {
        const timer = setTimeout(() => {
          setCount(count - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // Switch to Letter after countdown finishes
        const timer = setTimeout(() => setStage('letter'), 800);
        return () => clearTimeout(timer);
      }
    }
  }, [stage, count]);

  const wishContent = {
    title: "Meri Paapi gudiya ❤️",
    message: "Tu mujko thoda Haq jataya kar , Main na bhi puchu to bhi man ka haal bataya kar....Muje acha lagta h tera muskurana , tu muje dek k muskuraya kar....Main tera hath tham k chlugi , tu bhi pyar se mera sir shelaya kar....Main pyar se manaugi tujko , tu mujko nakhre dhikaya kar....Main go Ruth bhi jau to gle se lga kar manaya kar....Teri srarte ruh ko sukun deti h , tu mujko man bhar k sataya kar....",
    from: "Shetaani aatma 😈"
  };

  return (
    <div className="h-screen w-full bg-[#030712] overflow-hidden flex items-center justify-center relative font-sans text-slate-100">

      {/* 1. EMOJI RAIN */}
      <AnimatePresence>
        {stage === 'emojis' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 0 }}
                animate={{ y: window.innerHeight + 100, opacity: 1, rotate: 360 }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "linear" }}
                className="absolute text-4xl"
              >
                {['💙', '✨', '🎂', '🎉', '🧿'][i % 5]}
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex items-center justify-center">
              <p className="text-cyan-500 font-mono tracking-[0.5em] animate-pulse uppercase">Initiating Surprise...</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. SIMPLE & SMOOTH COUNTDOWN */}
      <AnimatePresence mode='wait'>
        {stage === 'countdown' && count > 0 && (
          <motion.div
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-black text-cyan-400 italic drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            {count}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. PREMIUM LARGE LETTER BOX */}
      <AnimatePresence>
        {stage === 'letter' && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center z-20"
          >
            <div className="relative w-[350px] md:w-[450px] h-64 bg-slate-900 border-2 border-cyan-500/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center">
              <div className="text-8xl md:text-9xl">📩</div>

              {/* THE LARGE POP-UP CARD */}
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -240, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1, type: "spring" }}
                className="absolute w-[380px] md:w-[500px] bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-8 rounded-2xl shadow-2xl border-b-8 border-cyan-600 text-slate-900 mt-80"
              >
                <div className="border-2 border-dashed border-cyan-200 p-3 rounded-xl">
                  <h3 className="font-black text-xl md:text-2xl text-cyan-800 mb-4">{wishContent.title}</h3>
                  <p className="text-md md:text-lg italic leading-relaxed text-slate-700 font-medium">
                    {wishContent.message.split('....').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index !== wishContent.message.split('....').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <p className="text-right mt-6 font-black text-lg md:text-xl text-cyan-600">— {wishContent.from}</p>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                onClick={() => setStage('cake')}
                className="absolute -bottom-36 bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-4 rounded-full font-black text-white shadow-[0_0_20px_cyan] hover:scale-105 transition-all uppercase tracking-widest"
              >
                View Final Present 🎁
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. AESTHETIC CAKE ANIMATION */}
      <AnimatePresence>
        {stage === 'cake' && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onAnimationComplete={() => setTimeout(() => setStage('final'), 5000)}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="relative"
            >
              <img
                src="/assets/cake.jpeg"
                alt="Aesthetic Cake"
                className="w-60 h-60 md:w-110 md:h-110 drop-shadow-[0_0_40px_rgba(34,211,238,0.7)] rounded-2xl"
              />
            </motion.div>
            <h2 className="mt-8 text-3xl md:text-4xl font-black text-white tracking-[0.2em] animate-pulse uppercase">
              Make a <span className="text-cyan-400">Wish</span>
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

         {/* 5. PERFECT FULL-SCREEN HALF-IMAGE & REALISTIC SELF-ROLLING ROYAL SCROLL */}
<AnimatePresence>
  {stage === 'final' && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen w-full flex bg-[#050302] overflow-hidden"
    >
      {/* 1. LEFT SIDE: 100% FULL-SCREEN CINEMATIC IMAGE FRAME */}
      <div className="relative hidden md:block w-[45%] lg:w-[50%] h-full bg-black border-r border-amber-900/20">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/assets/final.jpeg"
          alt="Final Present Portrait"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/60 to-transparent" />
      </div>

      {/* 2. RIGHT SIDE: THE ROYAL CHAMBER FOR THE TAAR PATRA */}
      <div className="flex-1 h-full flex flex-col justify-center items-center p-4 sm:p-8 lg:p-16 relative z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 via-[#0a0806] to-black">
        
        {/* Mobile Background Image Fallback */}
        <div className="absolute inset-0 block md:hidden opacity-25 pointer-events-none">
          <img src="/assets/final.jpeg" alt="Background Mobile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0a0806] to-black" />
        </div>

        {/* Ambient Floating Historical Gold Particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [-10, window.innerHeight + 10], 
                opacity: [0, 1, 0] 
              }}
              transition={{ duration: Math.random() * 4 + 5, repeat: Infinity, ease: "linear" }}
              className="absolute text-amber-500 text-sm"
              style={{ left: `${Math.random() * 100}%` }}
            >
              ✨
            </motion.div>
          ))}
        </div>

        {/* HYPER-REALISTIC TEXTURED VINTAGE LETTER (SELF-ROLLING TAAR PATRA) */}
        <motion.div
          initial={{ 
            opacity: 0, 
            scaleY: 0.05, // Starts tightly closed as a thin rod line
            clipPath: "inset(0% 0% 95% 0%)" // Reveals absolutely nothing at first
          }}
          animate={{ 
            opacity: 1, 
            scaleY: 1, // Sweeps open completely downward
            clipPath: "inset(0% 0% 0% 0%)" // Fully unmasks the scroll contents
          }}
          transition={{ 
            delay: 0.6, 
            duration: 1.8, 
            type: "spring", 
            stiffness: 40, // Emulates heavy paper scroll physics
            damping: 14 
          }}
          className="relative w-full max-w-xl bg-gradient-to-b from-[#f5ebd6] via-[#eddcb9] to-[#dfcca1] text-stone-900 px-6 py-8 sm:px-10 sm:py-12 rounded-sm shadow-[0_30px_70px_rgba(0,0,0,0.8),_inset_0_0_60px_rgba(139,92,26,0.4)] border-l border-r border-amber-900/30 transform origin-top"
        >
          {/* Top Wooden Scroll Roll Holder */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[104%] h-4 bg-gradient-to-b from-amber-950 via-amber-850 to-amber-950 rounded-full shadow-lg border-b border-amber-900/40">
            <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-2 h-5 bg-amber-600 rounded-xs border border-amber-950" />
            <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-2 h-5 bg-amber-600 rounded-xs border border-amber-950" />
          </div>

          {/* Bottom Wooden Scroll Roll Holder — This pulls down dynamically via CSS during unrolling */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[104%] h-4 bg-gradient-to-b from-amber-950 via-amber-850 to-amber-950 rounded-full shadow-lg border-t border-amber-900/40">
            <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-2 h-5 bg-amber-600 rounded-xs border border-amber-950" />
            <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-2 h-5 bg-amber-600 rounded-xs border border-amber-950" />
          </div>

          {/* Intricate Royal Border Frame */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="border-2 border-dashed border-amber-900/20 p-4 sm:p-6 rounded-xs h-full flex flex-col justify-between"
          >
            {/* Scroll Header Seal */}
            <div className="w-full text-center mb-6">
              <motion.div 
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="text-2xl mb-1 text-amber-900 inline-block drop-shadow-xs"
              >
                ⚜
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-[0.2em] text-amber-950 drop-shadow-xs uppercase">
                Us moment
              </h2>
              <p className="text-xs font-serif font-bold text-amber-800 tracking-widest mt-1 italic">
                — A little gift for {wishContent.title} —
              </p>
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-900/40 to-transparent mx-auto mt-2" />
            </div>

            {/* Vintage Letter Text Content Area */}
            <div className="space-y-4 font-serif text-center md:text-left my-auto px-1 max-h-[42vh] md:max-h-[48vh] overflow-y-auto pr-2 custom-scrollbar">
              {lifetimePoetry.map((line, idx) => {
                const match = line.match(/^\d+ \w+/);
                const countText = match ? match[0] : "";
                const mainPoetryText = countText ? line.substring(countText.length) : line;

                return (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + idx * 0.12, duration: 0.4 }}
                    className={`text-sm sm:text-base leading-relaxed font-semibold tracking-wide ${
                      idx === 7 
                        ? 'text-red-950 font-black text-base sm:text-lg border-t border-amber-900/20 pt-4 mt-6 text-center italic drop-shadow-xs' 
                        : 'text-stone-900/90'
                    }`}
                  >
                    {countText && (
                      <span className="text-amber-950 font-extrabold font-sans bg-amber-950/10 px-2 py-0.5 rounded border border-amber-900/20 mr-2 shadow-xs">
                        {countText}
                      </span>
                    )}
                    {mainPoetryText}
                  </motion.p>
                );
              })}
            </div>

            {/* Royal Document Action Footer */}
            <div className="mt-6 pt-4 border-t border-amber-950/10 flex flex-col sm:flex-row gap-4 items-center justify-between w-full">
              
              {/* Antique Sealed Royal Button */}
              <button
                onClick={() => window.location.href = '/pleasure'}
                className="relative z-30 focus:outline-none rounded-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-[#eddcb9] px-5 py-2 rounded-sm border border-amber-800/40 font-bold cursor-pointer shadow-lg select-none text-xs tracking-widest uppercase transition-all"
                >
                  Waiting... 📜
                </motion.div>
              </button>

              {/* Decorative Subtle Emojis */}
              <div className="flex gap-4 items-center justify-center">
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="text-2xl filter drop-shadow select-none cursor-default"
                >
                  🧿
                </motion.span>
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="text-2xl filter drop-shadow select-none cursor-default"
                >
                  ✨
                </motion.span>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default FinalGift;