import React from 'react';
import { motion } from 'framer-motion';

const FirstMeet = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center py-12 px-4 overflow-x-hidden">
      {/* Top Heading */}
      <header className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] font-serif italic"
        >
          "Wahi jagah, wahi waqt aur tum..."
        </motion.h1>
        <div className="h-1 w-32 bg-cyan-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
      </header>

      {/* 3 Images in ONE ROW */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-6xl mb-20 perspective-1000">
  {[
    { src: "./assets/firstmeet1.jpeg", delay: 0.1 },
    { src: "./assets/firstmeet2.jpeg", delay: 0.3 },
    { src: "./assets/firstmeet3.jpeg", delay: 0.5 }
  ].map((img, index) => (
    <motion.div
      key={index}
      initial={{ 
        opacity: 0, 
        scale: 0.5, 
        z: -500, 
        rotateX: 15 
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        z: 0, 
        rotateX: 0 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        scale: 1.02,
        rotateY: 10, // Subtle 3D tilt on hover
        boxShadow: "0px 20px 40px rgba(0, 255, 255, 0.2)"
      }}
      transition={{ 
        duration: 1, 
        delay: img.delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="relative w-72 h-96 bg-slate-900 rounded-3xl overflow-hidden border-b-4 border-cyan-500/50 group"
    >
      {/* Glossy Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <img 
        src={img.src} 
        alt={`Moment ${index}`} 
        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
      />

      {/* Aqua Glow Ring */}
      <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-cyan-400/50 transition-all duration-500" />
    </motion.div>
  ))}
</div>



      {/* Content Section */}
      <motion.article 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-4xl bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-cyan-900/30 backdrop-blur-sm shadow-2xl"
>
  <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed font-light italic">
    
    {/* Intro Section */}
    <p className="text-cyan-400 font-medium not-italic">
      "Chup-chup khade ho... Zaroor koi baat hai... <br />
      Pehli mulakat hai ji, pehli mulakat hai..." 🎶
    </p>

    <p>
      Okay, okay, calm down! Itna filmy hone ki zaroorat nahi hai... just joking. 😉
    </p>

    <hr className="border-cyan-900/30 w-1/4" />

    {/* The Journey */}
    <p>
      Waise kitna ajeeb hai na? 3 second ki woh awkward <strong>'Hello'</strong> se... 3 saal ki ye crazy journey! <br />
      Palak japakte hi nikal gayi. ✨ 
    </p>
    
    <p>
      Lagta hi nahi ki itna waqt beet gaya, aur sach toh ye hai ki abhi toh bohot saare kaand baaki hain! 🔥
    </p>

    {/* The Flashback */}
    <p>
      Yaad hai hamari woh 'shantipurvak' mulakat? Jo bilkul bhi shant nahi thi... <br />
      Aise jaise do dushman jung ke maidan mein utre hon! ⚔️ <br />
      Waise jo bhi ho, <em>Thevenin</em> toh tujhse tab bhi solve nahi hui thi! 😂
    </p>

    {/* The Rebels */}
    <p>
      Humne har wo kaand kiya jo <strong>'Mana'</strong> tha. Aur humne efforts kaand chhupane mein nahi, balki unhe celebrate karne mein lagaye! 🥂
    </p>

    <p>
      Aur pagalon ki tarah behes kar rahe hain ki—"Log ek baar milne ke baad mar jaate hain kya, jo dobara nahi milte?" <br />
      Bade ajeeb log hain yahan ke toh... 🤔💨
    </p>

    {/* Fest Memory */}
    <p className="bg-slate-800/40 p-4 rounded-xl border-l-4 border-cyan-500">
      Yaad hai fest waala din? Duniya music enjoy kar rahi thi aur hum kutte-billi waale filters try kar rahe the. <br />
      Matlab jab natural shakal hi kharab hai, toh phone ka camera kyun badnaam karna dost? 💀📸
    </p>

    {/* Outro */}
    <p className="text-right pt-4 text-cyan-400 not-italic font-semibold">
      Chalo, bahut ho gaya! Ab main itna bhi kuch khaas nahi... <br />
      Now, enjoy this journey with me! 👉👈
    </p>

  </div>
</motion.article>
    </div>
  );
};

export default FirstMeet;