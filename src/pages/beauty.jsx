import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// --- Particle Background Component (Unique Element) ---
// Ye background mein neurons/connections jaisa effect dega
const NeuronBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-500 rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      {/* SVG connections bich mein lines dikhane ke liye */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 10% 10% L 30% 50% M 30% 50% L 60% 20% M 60% 20% L 90% 80% M 30% 50% L 80% 40%" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
      </svg>
    </div>
  );
};

// --- Individual Card Component with 3D Scroll Effect ---
const BrainyCard = ({ card, index }) => {
  const ref = useRef(null);
  
  // Scroll tracking for this specific card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // triggers when card enters/leaves viewport
  });

  // Smooth spring physics for animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Transform values based on scroll
  // 1. Y-axis movement (Parallax)
  const y = useTransform(smoothProgress, [0, 1], [100, -100]);
  // 2. 3D Rotation (scroll karte hue card rotate hoga)
  const rotateX = useTransform(smoothProgress, [0, 1], [15, -15]); 
  // 3. Opacity fading in/out
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Asymmetric positioning: Even indices left, Odd indices right
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ 
        y, 
        opacity, 
        rotateX, 
        perspective: 1000 // Enables 3D space
      }}
      className={`relative w-full md:w-[70%] flex flex-col md:flex-row items-center gap-6 mb-32 md:mb-16 ${isEven ? 'self-start' : 'self-end'}`}
    >
      {/* 3D Border Glow Effect wrapper */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-fuchsia-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Image Container - Glassmorphism style */}
      <div className="relative h-[300px] w-full md:w-[40%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex-shrink-0">
        <motion.img 
          src={card.img} 
          alt={card.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      {/* Content Container - Offset position */}
      <motion.div 
        className="relative bg-[#111111]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 md:-ml-12 md:mt-10 shadow-xl w-[90%] md:w-auto"
        whileHover={{ boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-mono text-lg font-bold">
            0{index + 1}
          </div>
          <h3 className="text-3xl font-extrabold text-white tracking-tight">
            {card.title.split(' ')[0]} <span className="text-cyan-400">{card.title.split(' ')[1]}</span>
          </h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light italic relative pl-6 border-l-2 border-fuchsia-500/50">
          <span className="absolute left-0 top-0 text-4xl text-fuchsia-500 opacity-50 font-serif">“</span>
          {card.desc}
          <span className="absolute -bottom-4 right-0 text-4xl text-fuchsia-500 opacity-50 font-serif">”</span>
        </p>
        
        {/* Decorative Tech lines */}
        <div className="absolute bottom-3 right-3 flex gap-1">
          <div className="w-8 h-1 bg-cyan-800 rounded"></div>
          <div className="w-2 h-1 bg-fuchsia-800 rounded"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
const BeautyWithBrain = () => {
  // Data remains same, just used better placeholder names for imagery context
  const cards = [
    { id: 1, img: "/assets/beauty3.jpeg", title: "After fairlovely", desc: "my little princes , i will treat you as treasure . hamare beauty sessions ko bhla kon rok sakta hai " },
    { id: 2, img: "/assets/beauty1.jpeg", title: "Cheeta", desc: "Shero k muh kisne dhoye aisa khete hai log maine to scrub kar diya tha or face pack bhi lga diya tha 😂👻" },
    { id: 3, img: "/assets/beauty4.jpeg", title: "Before fairlovely", desc: "camera khol k ye feel to aata hai ki main bass dil se acha hu 👉👈" },
    { id: 4, img: "/assets/beauty2.jpeg", title: "Beautiful world", desc: "well jokes apart you are the best , very beautiful and with a pure soul. hindi me bole to gods faviourate child 🫂" }
  ];

  return (
    // Added perspective to container for children 3D effects
    <div className="relative min-h-screen bg-[#080808] py-24 px-5 md:px-20 overflow-hidden" style={{ perspective: '2000px' }}>
      
      {/* Unique Neuron Background Element */}
      <NeuronBackground />

      {/* Modern Page Title */}
      <div className="relative flex flex-col items-center mb-32 z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-cyan-500 font-mono tracking-widest text-sm uppercase mb-2"
        >
          Intelligence meets Aesthetics
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-7xl font-black text-white tracking-tighter text-center"
        >
          Beauty <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Dates</span> 
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mt-6 rounded-full"></div>
      </div>

      {/* Asymmetric Flex Container (Replaces Grid) */}
      <div className="relative max-w-7xl mx-auto flex flex-col z-10">
        {cards.map((card, index) => (
          <BrainyCard key={card.id} card={card} index={index} />
        ))}
      </div>

      {/* Final unique touch: Futuristic signature */}
      <div className="text-center mt-20 text-gray-700 font-mono text-xs tracking-widest uppercase relative z-10">
        // logical_elegance.exe loaded successfully
      </div>
    </div>
  );
};

export default BeautyWithBrain;