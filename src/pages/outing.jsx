import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LateNightOuting = () => {
  const images = [
    { id: 1, url: "./assets/ln1.jpeg", title: "NIT FEST", desc: "First time we attend a concert , its was all fun in the winter nigth in half sleevs. Thand se mar jayege par aura kam nhi hona chiye 😂😏", color: "cyan" },
    { id: 2, url: "./assets/ln2.jpeg", title: "AMRITSAR", desc: "it was little scary but with a lot of fun , vo sukun , santi , raat ko ghumna , early morning pictures all amazing", color: "fuchsia" },
    { id: 3, url: "./assets/ln3.jpeg", title: "weekends", desc: "our faviourite part of weekend is walking, sarovar pe der tak baith kar aana is love.", color: "lime" }
  ];

  return (
    <div className="bg-[#030303] min-h-screen text-white overflow-x-hidden font-sans">
      
      {/* --- DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/20 blur-[120px] rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic"
        >
          NIGHT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">VIBES</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 font-mono tracking-[0.8em] mt-4 text-xs"
        >
          SCROLL_TO_REVEL
        </motion.p>
      </div>

      {/* --- 3D INTERACTIVE GALLERY --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-64">
        {images.map((img, idx) => (
          <ImageCard key={img.id} img={img} index={idx} />
        ))}
      </div>

      {/* --- MINIMAL FOOTER UI --- */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-white/30" />
        <span className="text-[10px] font-mono tracking-widest text-white/50">DOLI_EDITION_2026</span>
      </div>
    </div>
  );
};

/* --- INDIVIDUAL IMAGE COMPONENT WITH TILT & PARALLAX --- */
const ImageCard = ({ img, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "circOut" }}
      className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
    >
      {/* IMAGE CONTAINER */}
      <motion.div 
        whileHover={{ rotateY: isEven ? 5 : -5, rotateX: 5, scale: 1.02 }}
        className="relative z-10 w-full md:w-1/2 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl transition-all duration-500 group"
      >
        {/* Glow behind image */}
        <div className={`absolute -inset-2 bg-${img.color}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
        
        {/* THE IMAGE: FULL VIEW NO CROP */}
        <img 
          src={img.url} 
          alt={img.title} 
          className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
        />

        {/* Floating ID Tag */}
        <div className="absolute -top-4 -left-4 bg-white text-black font-black px-4 py-1 text-xl rounded-md transform -rotate-12 shadow-lg">
          0{img.id}
        </div>
      </motion.div>

      {/* TEXT CONTENT */}
      <div className={`w-full md:w-1/2 ${isEven ? 'text-left' : 'text-right'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold italic tracking-tighter text-white/90">
            {img.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mt-4 font-light italic">
            "{img.desc}"
          </p>
          
          {/* Cyber Lines decoration */}
          <div className={`mt-8 flex items-center gap-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
            <div className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-cyan-400' : 'bg-fuchsia-500'}`} />
            <div className="h-[1px] w-40 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Background Floating Number */}
      <span className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.02] select-none z-0">
        0{img.id}
      </span>
    </motion.div>
  );
};

export default LateNightOuting;