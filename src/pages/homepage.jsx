import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import heroImage from '/assets/Hero_home.jpeg';

const Home = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [bgTexts, setBgTexts] = useState([]);
  const navigate = useNavigate();
  const correctPassword = "sankalp";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const keys = [...alphabet, "C"];

  // --- Background "Happy Birthday" Generator ---
  useEffect(() => {
    const colors = ['#00F5FF', '#FF007F', '#7000FF', '#00FF95', '#FFFF00'];
    const interval = setInterval(() => {
      const newText = {
        id: Date.now(),
        top: Math.random() * 80 + "%",
        left: Math.random() * 80 + "%",
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * (2 - 1) + 1 + "rem"
      };
      setBgTexts((prev) => [...prev.slice(-10), newText]); // Keep last 10
    }, 1500); // 1.5s for more energy, change to 5000 for 5s
    return () => clearInterval(interval);
  }, []);

  const handleKeyClick = (key) => {
    setError(false);
    if (key === "C") setInput("");
    else if (input.length < 15) setInput((prev) => prev + key);
  };

  const checkPassword = () => {
    if (input.toLowerCase() === correctPassword) {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
      setTimeout(() => {
        navigate('/wish'); 
      }, 1500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] flex items-center justify-center p-6 overflow-hidden">
      
      {/* 1. Dynamic Background Text Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {bgTexts.map((txt) => (
            <motion.span
              key={txt.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 2 }}
              className="absolute font-black uppercase italic select-none"
              style={{ top: txt.top, left: txt.left, color: txt.color, fontSize: txt.size }}
            >
              Happy Birthday
            </motion.span>
          ))}
        </AnimatePresence>
        {/* Subtle Gradient Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-[#00F5FF]/5 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* 2. Left Side: Square Image with Neon Border */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 flex flex-col items-center"
        >
          <div className="relative p-2 border-2 border-[#00F5FF]/40 rounded-2xl shadow-[0_0_50px_rgba(0,245,255,0.3)]">
            <div className="w-64 h-64 md:w-85 md:h-85 rounded-[1.8rem] overflow-hidden bg-black">
              <img 
                src={heroImage} 
                alt="Birthday Surprise" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-[#00F5FF] text-black text-xs font-black px-4 py-2 rounded-lg shadow-xl border-2 border-black rotate-3">
              SURPRISE FOR YOU 🎁
            </div>
          </div>
          
          <div className="mt-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              HAPPY <span className="text-[#00F5FF] drop-shadow-[0_0_15px_rgba(0,245,255,0.8)]">BIRTHDAY</span>
            </h1>
            <p className="mt-4 text-white font-medium bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 inline-block">
             Gifting Permanent Happiness in little effors ✨
            </p>
          </div>
        </motion.div>

        {/* 3. Right Side: Ultra-Attractive Password Div */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md bg-[#0a0f1e]/80 backdrop-blur-2xl p-8 rounded-[3rem] border-2 border-[#00F5FF]/40 shadow-[0_0_60px_rgba(0,245,255,0.2)]"
        >
          {/* Enhanced Display */}
          <div className={`w-full mb-6 p-6 bg-black rounded-2xl border-b-4 transition-all duration-300 ${error ? 'border-red-500 animate-shake' : 'border-[#00F5FF] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'}`}>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#00F5FF] mb-2 font-black">Surprise is Waiting</p>
            <div className="text-3xl text-white font-mono h-10 tracking-[0.4em] flex items-center">
              {input.split("").map((_, i) => (
                <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block">★</motion.span>
              )) || <span className="text-white/10 text-sm">ACCESS CODE...</span>}
            </div>
          </div>

          {/* Keypad Grid - 7 Columns */}
          <div className="grid grid-cols-7 gap-2">
            {keys.map((key) => (
              <button
                key={key}
                onClick={() => handleKeyClick(key)}
                className={`h-10 md:h-12 rounded-xl font-black text-xs transition-all active:scale-90 flex items-center justify-center border-b-2
                  ${key === "C" 
                    ? "bg-red-600 text-white border-red-900 hover:bg-red-500" 
                    : "bg-[#1a1f2e] text-[#00F5FF] border-black] hover:bg-[#00F5FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]"}`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>

          <button 
            onClick={checkPassword}
            className="w-full mt-8 py-5 bg-linear-to-r from-[#00F5FF] to-blue-600 text-[#020617] font-black text-lg rounded-2xl shadow-[0_10px_25px_rgba(0,245,255,0.4)] hover:brightness-110 active:translate-y-1 transition-all uppercase tracking-tighter"
          >
            Surprise is waiting ✨
          </button>
        </motion.div>

      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.15s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
};

export default Home;