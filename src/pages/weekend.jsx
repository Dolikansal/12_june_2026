import React from 'react';
import { motion } from 'framer-motion';

const Weekends = () => {
  const data = [
    {
      id: 1,
      title: "Aura ka katora",
      content: "Sankari hi itne h ki bado ko dekh k pero me pad gaate hai 😂 ...fir chahe bade dar hi kyu na jaye usse hame kya vo unki dikkat h 😂",
      img: "/assets/weekend1.jpeg", 
      pos: "justify-start"
    },
    {
      id: 2,
      title: "Walking Dead Mode",
      content: "ham log weekend dek k pagal hojate hai , walk k naam pe aadhi university naap di hai hamne infact usse bhar bhi , ye kaisa pagalpan h bhagwan hi jaane 😂",
      img: "/assets/weekend4.jpeg",
      pos: "justify-end"
    },
    {
      id: 3,
      title: "Sarvor ka sukoon",
      content: "We are chasing the time , aise hva ki trah furrrr hojayege gaise hamra room hostel me nhi sarovar pe hai...😂😂  ",
      img: "/assets/group1.jpeg",
      pos: "justify-center"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-24 selection:bg-cyan-500/30">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mb-32 max-w-3xl"
      >
        <span className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase">// damage brain cells </span>
        <h1 className="text-6xl md:text-8xl font-bold mt-4 tracking-tighter italic">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CHILL</span> ZONE
        </h1>
      </motion.div>

      {/* 3-Image Interactive Stack */}
      <div className="space-y-40">
        {data.map((item, idx) => (
          <div key={item.id} className={`flex w-full ${item.pos}`}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-full md:w-[60%] group"
            >
              {/* Image Container with Aqua Glow */}
              <div className="relative overflow-hidden rounded-lg border border-gray-900 group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full aspect-[16/9] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Content Card */}
              <motion.div 
                whileHover={{ x: 10, y: -10 }}
                className="absolute -bottom-10 -right-4 md:right-10 bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-800 p-8 max-w-sm rounded-sm shadow-[10px_10px_0px_0px_rgba(6,182,212,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(6,182,212,0.3)] transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-[1px] w-8 bg-cyan-500" />
                  <span className="text-cyan-500 font-mono text-[10px] tracking-widest uppercase">{item.title}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-light italic">
                  "{item.content}"
                </p>
              </motion.div>

              {/* Index Number Shadow */}
              <span className="absolute -top-16 -left-10 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-500/10 transition-colors">
                0{idx + 1}
              </span>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Aesthetic Footer */}
      <div className="mt-40 pt-20 border-t border-gray-900 text-center">
        <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.5em]">Sankalp vijay bahv</p>
      </div>
    </div>
  );
};

export default Weekends;