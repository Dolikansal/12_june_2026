import React from 'react';
import { motion } from 'framer-motion';

const GeetaJayanti2 = () => {
  const images = [
    { src: "/assets/geeta1.jpeg", label: "Geeta Jyanti Ke Nazare" },
    { src: "/assets/geeta2.jpeg", label: "SRK Vali Smile Teri 😂" },
    { src: "/assets/geet3.jpeg", label: "Nature Love ❤️🧿" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* --- DIVINE STICKERS / FLOATING ELEMENTS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 text-[200px] text-cyan-500/10"
        >
          🕉️
        </motion.div>
        <div className="absolute top-1/4 right-10 text-4xl animate-pulse">🪔</div>
        <div className="absolute bottom-20 left-10 text-5xl animate-bounce">✨</div>
        <div className="absolute top-1/2 right-[5%] text-3xl opacity-40">🪘</div>
      </div>

      {/* --- HEADER: GEETA UPDESH VIBE --- */}
      <header className="relative z-10 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-block px-6 py-1 border-y border-cyan-500 text-cyan-400 tracking-[0.4em] uppercase text-xs font-bold"
        >
          Kurukshetra Mahotsav
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-300 to-cyan-700 drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
          GEETA <span className="italic font-serif">JAYANTI</span>
        </h1>
        <p className="mt-4 text-zinc-400 font-serif italic text-lg">"Yada yada hi dharmasya glanirbhavati bharata..."</p>
      </header>

      {/* --- MAIN CONTENT: 3 LARGE IMAGES WITH GLOW --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {images.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -20 }}
            className="group relative h-[600px]   border-2 border-zinc-900 hover:border-cyan-500 overflow-hidden bg-[#050505] transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,1)]"
          >
            {/* The Image */}
            <img 
              src={item.src} 
              alt={item.label}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              onError={(e) => { e.target.src=`https://via.placeholder.com/500x800/000000/00ffff?text=${item.label}` }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* Label at the bottom */}
            <div className="absolute bottom-10 left-0 right-0 text-center">
              <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-2">Kurukshetra</p>
              <h3 className="text-2xl font-bold text-white tracking-tighter">{item.label}</h3>
            </div>
          </motion.div>
        ))}
      </main>

      {/* --- BOTTOM CONTENT: THE DHARMAKSHETRA FEEL --- */}
      <section className="relative z-10 max-w-4xl mx-auto pb-32 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-zinc-900/10 backdrop-blur-md border border-cyan-500/20 p-10 md:p-16 rounded-[4rem] relative overflow-hidden text-center"
        >
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500 rounded-tl-[4rem]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500 rounded-br-[4rem]"></div>

          <p className="text-zinc-200 text-xl md:text-2xl leading-[2] font-light italic">
            Geetajyanti to har saal aati hai but 3rd year vali sabse best thi .
            is baar lag rha tha maano ham sarovar ja nhi rha h balki sarovar hame bula rha hai.kabhi mere gharwale to kabhi annu di k sath bda mza kiya hamne is saal sarovar par ...
            geetajyanti ki performces , market , sales sab kuch best tha , and the best thing is sarovar has the solution for every problem . main bhi bunny ki trah tere sath ghhumna chahta hu , sarovar pe , phaado pe har jhag....🫂❤️🧿
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <span className="text-cyan-500 border border-cyan-500/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(0,255,255,0.2)]">#Dharmakshetra</span>
            <span className="text-zinc-400 border border-zinc-800 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">#MahabharataCity</span>
            <span className="text-cyan-500 border border-cyan-500/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(0,255,255,0.2)]">#DivineMemories</span>
          </div>
        </motion.div>
      </section>

      <footer className="text-center pb-10 text-zinc-700 text-[10px] tracking-[1em] uppercase">
        Blessings • Memories • Dosti
      </footer>

    </div>
  );
};

export default GeetaJayanti2;