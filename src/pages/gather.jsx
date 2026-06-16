import React from 'react';
import { motion } from 'framer-motion';

const GroupGather = () => {
  const groups = [
    { id: 1, img: "./assets/group2.jpeg", title: "The Begining", deg: "-rotate-3", desc: "Ek ek karke kitne saare log mile the , everyone has their own charm .... Dj nights , Garba nights , movie nights , Hunting kitna kuch enjoy kiya tha hamne sath me ...." },
    { id: 2, img: "./assets/group3.jpeg", title: "The Craze", deg: "rotate-2", desc: "dosti k dushmano ne ped hi ukahd diya 😂😂 , oo meri paaro .... ek ek chai k cup ka hisab tha is ped k pass gha chad k hamne tuffan mcha diya tha ....but its cute ..🥰😍" },
    { id: 3, img: "./assets/group4.jpeg", title: "The Journey", deg: "-rotate-1", desc: "Dhire dhire log kam hogye or yaade jayda , but the journey was amazing . itna fun the sath me , ek pagalpan sa ... uno , chai party , sarovar pe masti , reels ....❤️❤️" },
    { id: 4, img: "./assets/group1.jpeg", title: "The Real One", deg: "rotate-6", desc: "In the end , ham do logo ka bda sa group hamesha mera favourite rhega....you are my best friend , my favourite diary , gisme me hamesha kuch likhna chahta hu " }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 overflow-hidden">
      
      {/* Magazine Masthead - Very Bold */}
      <div className="relative mb-32 text-center">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-[15vw] font-black leading-none uppercase tracking-tighter opacity-10 absolute -top-20 left-0 right-0 select-none"
        >
          COLLECTIVE
        </motion.h1>
        <h2 className="text-5xl md:text-7xl font-bold relative z-10 italic">
          Group <span className="text-cyan-500 italic font-light">Gather.</span>
        </h2>
        <div className="h-1 w-32 bg-pink-500 mx-auto mt-4 animate-pulse"></div>
      </div>

      {/* The Overlapping Magazine Grid */}
      <div className="max-w-6xl mx-auto space-y-32">
        {groups.map((item, index) => (
          <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
            
            {/* Image Box - Magazine Style */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              className={`relative w-full md:w-1/2 p-2 bg-white shadow-[20px_20px_0px_0px_rgba(255,255,255,0.05)] ${item.deg} transition-all duration-500 cursor-crosshair`}
            >
              <div className="relative overflow-hidden aspect-video border-8 border-white">
                <img src={item.img} alt="Group" className="w-full h-full object-cover" />
                {/* Pop-up Sparkle Overlay */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-6xl text-white drop-shadow-lg animate-ping">✨</span>
                </div>
              </div>
              <div className="absolute top-4 right-6 text-black font-black text-xl italic opacity-20">#MEMORIES</div>
            </motion.div>

            {/* Content Space - Editor's Note Style */}
            <motion.div 
              initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <span className="text-pink-500 font-mono text-sm tracking-[0.3em] uppercase">Issue No. 0{item.id}</span>
              <h3 className="text-4xl font-bold border-b border-white/20 pb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed italic font-light">
                "{item.desc}"
              </p>
              <div className="flex gap-4 pt-4">
                <div className="h-[2px] w-12 bg-cyan-500 mt-3"></div>
                <p className="text-xs uppercase tracking-widest text-white/40 italic">Raw & Human // 2026 Edition</p>
              </div>
            </motion.div>

          </div>
        ))}
      </div>

      {/* Floating Elements (Sparkles) */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 text-cyan-400 animate-bounce">✦</div>
        <div className="absolute bottom-1/4 right-20 text-pink-500 animate-pulse delay-700">✦</div>
        <div className="absolute top-1/2 right-1/3 text-white animate-spin">★</div>
      </div>

    </div>
  );
};

export default GroupGather;