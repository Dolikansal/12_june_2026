import React from 'react';
import { motion } from 'framer-motion';

const MovieNight = () => {
  const movies = [
    {
      id: 1,
      img: "./assets/movies1.jpeg",
      title: "The Greate setaan",
      desc: "kuch to baat thi in logo me , varna yu hi to koi itna pagal nhi hota ....horror movie k naam pe top class comedy dheki hamne , usse better bhoot to ham bangye the movie dek k go ground me aadhi raat ko chilla rhe the ....😂👻",
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 2,
      img: "./assets/movies2.jpeg",
      title: "The Taaj story",
      desc: "Pheli baar hamne theartor me movies dekhi thi , it was good experience , hamne zoo me competition bhi to dekha tha sher 😂 (yaad h na??)....we have fun together , play together and enjoye the first experince.",
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 3,
      img: "./assets/movies3.jpeg",
      title: "Damiyaan lot aaya",
      desc: "itni movies dek li gaise movies dekhne k lea B.tech ki thi 😂😂... har ek joner try kar chuke , chota bheem tak bhi , kirmaada ki bhen 😂😂",
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 4,
      img: "./assets/movies4.jpeg",
      title: "Our story",
      desc: "Everything is good , but the fun is us.... movies to hamesha se ordinary hi thi , go acha tha vo to company thi giske sath , jiske vjah se sab enjoy kiya ...🧿❤️🫂",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Cinematic Header */}
      <div className="pt-20 pb-10 text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-7xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-700"
        >
          Late night laughter
        </motion.h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-cyan-500/5 blur-[120px] pointer-events-none" />
      </div>

      {/* Film Strip Section */}
      <div className="flex flex-col items-center gap-24 pb-40 px-6">
        {movies.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative w-full max-w-5xl flex flex-col md:flex-row items-center gap-10"
          >
            {/* Movie Poster (Left Side) */}
            <div className="relative w-full md:w-[450px] h-[300px] md:h-[550px] shrink-0">
              {/* Film Strip Border Detail */}
              <div className="absolute -left-4 top-0 bottom-0 w-8 border-l-4 border-r-4 border-dashed border-slate-800 hidden md:block" />
              
              <div className="w-full h-full rounded-sm overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.1)] group-hover:shadow-cyan-500/20 transition-all duration-700">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={item.title} 
                />
              </div>

              {/* Top/Bottom Overlay for Cinema Feel */}
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Content (Right Side) */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-cyan-500 text-black px-3 py-1 font-bold text-xs rounded uppercase tracking-widest">
                  Release: 2024
                </span>
                <span className="text-slate-500 font-mono text-sm">{item.rating}</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors duration-500">
                {item.title}
              </h2>

              <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 to-transparent opacity-30" />

              {/* CONTENT SPACE: Lamba content likhne ke liye kaafi jagah hai */}
              <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light italic">
                "{item.desc}"
              </p>

              <button className="flex items-center gap-3 text-cyan-400 font-bold tracking-widest hover:gap-5 transition-all">
                WATCH REPLAY <span>▶</span>
              </button>
            </div>

            {/* Index Number background */}
            <span className="absolute -left-20 top-0 text-[15rem] font-black text-white/5 select-none pointer-events-none hidden lg:block">
              0{index + 1}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Glow */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default MovieNight;