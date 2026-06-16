import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CollegeDays = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const memories = [
    { id: 1, title: "Mission lift taken", content: "us special vali bus me baithe the ... (ye kyu btana h bhla sirf do min k lea 😂)", img: "./assets/uiet3.jpeg", sticker: "🤝" },
    { id: 2, title: "Asthetic Vibe", content: "so innocent in face but hai puri setaan khopdi ....😂", img: "./assets/uiet1.jpeg", sticker: "☕" },
    { id: 3, title: "black gang", content: "Chalo kisi jamane me to hamari twining hui hai .... by the way looks good (obeviously me)", img: "./assets/uiet2.jpeg", sticker: "📝" },
    { id: 4, title: "Network on top", content: "certificate to hona chiye , 2nd position aayi thi all credit goes to network company (khi to time pe chle)", img: "./assets/uiet4.jpeg", sticker: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12 font-sans text-slate-200">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          UIET Days Chronicles
        </h1>
        <p className="text-slate-400 mt-4 italic">Four letters, a thousand memories.</p>
      </motion.div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {memories.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.03, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 cursor-pointer hover:border-cyan-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            onClick={() => setSelectedLetter(item)}
          >
            {/* Box UI - Envelope Style */}
            <div className="flex flex-col items-center justify-center space-y-6 py-8">
              <div className="text-7xl group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all">
                📩
              </div>
              <h2 className="text-2xl font-bold text-cyan-400 tracking-wide uppercase">{item.title}</h2>
              <button className="px-8 py-2 bg-cyan-600/20 border border-cyan-500/50 text-cyan-400 rounded-full group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all font-semibold">
                Open Memory
              </button>
            </div>

            {/* Sticker */}
            <div className="absolute top-4 right-4 bg-slate-800 p-2 rounded-lg text-2xl shadow-inner">
              {item.sticker}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Pop-up */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 border-2 border-cyan-500 max-w-2xl w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-5 right-5 text-slate-400 hover:text-cyan-400 text-3xl z-10"
                onClick={() => setSelectedLetter(null)}
              >
                &times;
              </button>
              
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={selectedLetter.img} 
                    alt="memory" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                  <span className="text-cyan-500 font-mono text-sm mb-2 tracking-tighter">#UIET_DIARIES</span>
                  <h2 className="text-3xl font-black text-white mb-4 uppercase leading-tight">
                    {selectedLetter.title}
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed italic">
                    "{selectedLetter.content}"
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <p className="text-cyan-400 font-medium">✨ Keep Shining!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollegeDays;