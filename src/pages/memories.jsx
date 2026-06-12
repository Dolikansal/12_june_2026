import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MemoriesPage = () => {
  const navigate = useNavigate();
  const [showGrid, setShowGrid] = useState(false);

  const memoriesData = [
    { id: 1, url: "/assets/firstmeet.jpeg", title: "First Meet", date: "Aug 2023" },
    { id: 2, url: "/assets/party.jpeg", title: "Parties Mood", date: "Sept 2023" },
    { id: 3, url: "/assets/birthday.jpeg", title: "Birthday Special", date: "Oct 2023" },
    { id: 4, url: "/assets/amritsar.jpeg", title: "Amritsar visit", date: "Dec 2023" },
    { id: 5, url: "/assets/geetajyanti.jpeg", title: "Brahmasarovar", date: "Jan 2024" },
    { id: 6, url: "/assets/movies.jpeg", title: "Movies & Cinema", date: "Feb 2024" },
    { id: 7, url: "/assets/group.jpeg", title: "Group Gather", date: "March 2024" },
    { id: 8, url: "/assets/holi.jpeg", title: "Holi Special", date: "March 2024" },
    { id: 9, url: "/assets/beauty.jpeg", title: "Beauty dates", date: "April 2024" },
    { id: 10, url: "/assets/videocall.jpeg", title: "Video Calls", date: "May 2024" },
    { id: 11, url: "/assets/sankalp.jpeg", title: "Sankalp", date: "June 2024" },
    { id: 12, url: "/assets/selfie.jpeg", title: "Selfie Moments", date: "July 2024" },
    { id: 13, url: "/assets/nit.jpeg", title: "Late Outing", date: "Aug 2024" },
    { id: 14, url: "/assets/excelsior.jpeg", title: "Excelsior", date: "Sept 2024" },
    { id: 15, url: "/assets/achive.jpeg", title: "Achievements", date: "Oct 2024" },
    { id: 16, url: "/assets/sarovar.jpeg", title: "Geeta Jayanti", date: "Nov 2024" },
    { id: 17, url: "/assets/weekend.jpeg", title: "Weekends", date: "Nov 2024" },
    { id: 18, url: "/assets/UIET.jpeg", title: "UIET Days", date: "Dec 2024" },
    { id: 19, url: "/assets/hostel.jpeg", title: "Hostel Masti", date: "Jan 2025" },
    { id: 20, url: "/assets/happy.jpeg", title: "Happiness", date: "Feb 2025" },
  ];

  const duplicatedData = [...memoriesData, ...memoriesData];

  const handleNavigation = (id) => {
    const routes = {
      1: '/first-meet', 2: '/party', 3: '/birthday-vibes', 4: '/amritsar-trip',
      5: '/sarovar', 6: '/movies', 7: '/gather', 8: '/holi' , 9: '/beauty' , 10: "/video" , 11 : "/sankalp" , 12: "/selfie" , 13:"/outing",
      14:"/excel" , 15:"/achive" , 16:"/geeta" , 17 : "/week" , 18: "/uiet" , 19:"/hostel" , 20:"/capture"
    };
    navigate(routes[id] || `/memory/${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-10 overflow-hidden relative">
      
      {/* --- HEADER --- */}
      <header className="text-center px-4 mb-6 z-10">
        <motion.h1 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="text-3xl md:text-6xl font-black text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
        >
          Every Picture Tells a Story... ✨
        </motion.h1>
      </header>

      {/* --- CUTE SEE ALL BUTTON --- */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowGrid(true)}
        className="mb-10 flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-2xl text-cyan-400 font-bold tracking-widest hover:border-cyan-400 shadow-2xl backdrop-blur-md transition-all"
      >
        <span>OPEN GALLERY</span>
        <span className="text-xl">📸</span>
      </motion.button>

      {/* --- INFINITE SCROLL (Same as before) --- */}
      <div className="relative w-full py-16 bg-slate-900/40 border-y border-white/5 group overflow-hidden">
        <motion.div 
          className="flex gap-10 px-10 w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedData.map((img, index) => (
            <div key={index} onClick={() => handleNavigation(img.id)} className="flex flex-col items-center gap-4 cursor-pointer shrink-0">
              <div className="w-64 h-80 bg-slate-800 rounded-[2rem] overflow-hidden border-2 border-slate-700 hover:border-cyan-400 transition-all duration-500">
                <img src={img.url} className="w-full h-full object-cover" draggable="false" alt="" />
              </div>
              <p className="text-cyan-200/60 font-serif italic text-lg">{img.title}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- PREMIUM 4X5 GRID OVERLAY --- */}
      <AnimatePresence>
        {showGrid && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 z-[150] bg-slate-950 p-6 md:p-12 overflow-y-auto custom-scrollbar"
          >
            {/* Grid Header */}
            <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-white/10 pb-8 mb-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500">The Archives</h2>
                <p className="text-slate-500 font-mono text-sm mt-2 uppercase tracking-[0.3em]">Total Memories: 20 Items</p>
              </div>
              <button onClick={() => setShowGrid(false)} className="px-6 py-2 bg-red-500/10 text-red-400 border border-red-500/50 rounded-xl hover:bg-red-500 hover:text-white transition-all">Close</button>
            </div>

            {/* 🚀 THE 4x5 GRID DESIGN */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pb-20">
              {memoriesData.map((img, index) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => { handleNavigation(img.id); setShowGrid(false); }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 bg-slate-900 group-hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" />
                    
                    {/* Overlay with Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                       <span className="text-cyan-400 text-[10px] font-mono tracking-widest mb-1 uppercase">{img.date}</span>
                       <h3 className="text-xl font-bold text-white leading-tight">{img.title}</h3>
                       <p className="text-slate-400 text-xs mt-2 italic">Tap to relive this moment →</p>
                    </div>

                    {/* Decorative Corner Label */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-white/50 group-hover:text-cyan-400 transition-colors">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-16">

        <button onClick={() => navigate('/next-page')} className="px-12 py-4 bg-white text-slate-950 font-black rounded-full hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all uppercase tracking-widest text-sm">
          Continue Journey →
        </button>
      </footer>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #020617; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #22d3ee; }
      `}</style>
    </div>
  );
};

export default MemoriesPage;