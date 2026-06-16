import React from 'react';
import { motion } from 'framer-motion';

const LittleAchievements = () => {
  const achievements = [
    { id: 1, img: "./assets/achive2.jpeg", title: "Ramayana Quiz", subtitle: "Little moment", emoji: "🎁" },
    { id: 2, img: "./assets/achive1.jpeg", title: "Unstop goodies", subtitle: "Build journey", emoji: "💻" },
    { id: 3, img: "./assets/achive3.jpeg", title: "Sankalp partner", subtitle: "Best friend", emoji: "📡" },
    { id: 4, img: "./assets/achive4.jpeg", title: "TTTTT smile", subtitle: "my energy", emoji: "🌱" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 overflow-x-hidden">
      
      {/* --- TECH GRID BACKGROUND --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #0891b2 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* --- STICKER OVERLAYS --- */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                    className="absolute top-10 right-[5%] text-6xl opacity-20">⚙️</motion.div>
        <div className="absolute bottom-10 left-[5%] text-5xl animate-bounce">🦋</div>
        <div className="absolute top-1/2 left-10 text-4xl text-cyan-500/40 opacity-50">{"{ }"}</div>
      </div>

      {/* --- HEADER --- */}
      <header className="relative pt-20 pb-10 text-center z-10">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-7xl md:text-8xl font-black italic tracking-tighter text-white"
        >
          LITTLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">WINS</span>
        </motion.h1>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="h-[1px] w-20 bg-cyan-900"></div>
          <p className="text-xs font-mono text-cyan-500 uppercase tracking-[0.5em]">Milestones Tracker</p>
          <div className="h-[1px] w-20 bg-cyan-900"></div>
        </div>
      </header>

      {/* --- 4 IMAGES: UNIQUE MASK DESIGN --- */}
      <div className="relative z-10 flex flex-nowrap overflow-x-auto gap-8 px-10 py-20 no-scrollbar">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 group relative w-[350px]"
          >
            {/* Sticker on each image */}
            <div className="absolute -top-6 -left-4 z-30 bg-black border border-cyan-500 p-3 rounded-full text-3xl group-hover:scale-125 transition-transform">
              {item.emoji}
            </div>

            {/* Slanted Image Container */}
            <div className="relative h-[550px] w-full clip-path-slanted overflow-hidden border-r-4 border-cyan-500 group-hover:border-white transition-all duration-500">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                onError={(e) => { e.target.src=`https://via.placeholder.com/400x700/080808/00ffff?text=${item.title}` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Text Overlay */}
            <div className="mt-6 pl-4 border-l border-zinc-800">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-zinc-500 font-mono text-sm uppercase">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- BOTTOM CONTENT: CYBER BOX --- */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div 
          whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)" }}
          className="relative bg-[#050505] border border-zinc-800 p-12 rounded-bl-[4rem] rounded-tr-[4rem] overflow-hidden"
        >
          {/* Glitch Decorative Element */}
          <div className="absolute top-0 right-0 w-32 h-1 bg-cyan-500 shadow-[0_0_15px_cyan]"></div>
          <div className="absolute bottom-0 left-0 w-32 h-1 bg-cyan-500 shadow-[0_0_15px_cyan]"></div>

          <p className="text-zinc-300 text-xl md:text-2xl leading-[1.8] font-light text-justify italic">
            "Apne aas paas dek k smj aata hai ki go paaya hai vo pathar nhi heera hai...khud ko thoda push karke ek dusre ka motivation ban k hamne ye life saath me ji hai.
            ye har achivement sirf teri vjah se hai har choti se lekar badi tak , fir chahe vo achivement materialistic ho ya phir emotional, har cheez ki partner h tu....
            the biggest thing i found from you is you . you are my charm, my motivation, my energy, my best friend, my partner in crime, my everything. i am so grateful to have you in my life and i am so proud of all the little wins we have achieved together. i know that we will achieve many more big wins in the future and i am so excited to see what the future holds for us."
            "
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-6 py-2 bg-zinc-900 rounded-full border border-zinc-700 text-xs font-bold text-cyan-400 uppercase italic shadow-inner">#ConsistencyKing</div>
            <div className="px-6 py-2 bg-zinc-900 rounded-full border border-zinc-700 text-xs font-bold text-cyan-400 uppercase italic">#MERNVibes</div>
            <div className="px-6 py-2 bg-zinc-900 rounded-full border border-zinc-700 text-xs font-bold text-cyan-400 uppercase italic">#LittleWinsBigDreams</div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .clip-path-slanted {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default LittleAchievements;