import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoCallPage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      img: "./assets/vc1.jpeg", 
      title: "MY BARBIE GIRL",
      text: "No matter how the things will be in future but you will always be my faviourite notification....it was never annoying, it was always alorable , loveable ....❤️🧿",
      stickers: ["✨", "🦋", "💖"]
    },
    {
      id: 2,
      img: "./assets/vc2.jpeg",
      title: "Drama queen",
      text: "i love to hear you at every moment , teri patar patar sune bina muje mza nhi aata , din to nikal jata hai magar dil ko sukun nhi aata ....",
      stickers: ["🐣", "🌈", "🍕"]
    },
    {
      id: 3,
      img: "./assets/vc3.jpeg",
      title: "CRIME PARTNERS",
      text: "you know what , tujse lde bina mera khana hazam nhi hota , tujse thoda ladh bidh k tuje ched k , teri ye cute cute se reaction dekhna mera favourite part hai , i love to see you angry and cute at the same time ....",
      stickers: ["🧸", "🍭", "🌸"]
    },
    {
      id: 4,
      img: "./assets/vc4.jpeg",
      title: "MY gem",
      text: "You are my hunny bunch , sugar plum , Pumpy-umpy-umpkin ,You're my sweetie pie , you are my cuppy cake , gum drop , Snoogums boogums you're The apple of my eye And I love you so and I want you to know That I'll always be right here And I love to sing, sweet songs to you Because you are so dear ",
      stickers: ["🧠", "💎", "🔥"]
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full bg-[#050505] overflow-hidden font-sans text-white">
      
      {/* 1. Dynamic Blurred Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[index].img}
            className="w-full h-full object-cover blur-[50px] scale-110"
            alt="blur-bg"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full w-full items-center px-6 md:px-20">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "circOut" }}
            >
              <span className="text-cyan-400 font-mono tracking-[0.5em] text-sm mb-4 block uppercase">
                # PAPI_gang
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
                {slides[index].title}
              </h1>
              <div className="h-1 w-20 bg-cyan-500 mb-8 rounded-full" />
              <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-lg italic">
                "{slides[index].text}"
              </p>
              
              <div className="mt-10 flex gap-4">
                <button onClick={prevSlide} className="group p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
                   <span className="group-hover:-translate-x-1 block transition-transform">←</span>
                </button>
                <button onClick={nextSlide} className="group p-4 px-10 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all font-bold">
                   NEXT MEMORY <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Portrait Mockup UI */}
        <div className="flex justify-center items-center order-1 lg:order-2 py-10 lg:py-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`phone-${index}`}
              initial={{ rotateY: direction > 0 ? 45 : -45, opacity: 0, scale: 0.8 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: direction > 0 ? -45 : 45, opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative"
            >
              {/* Phone Frame Mockup */}
              <div className="relative w-[300px] h-[580px] md:w-[330px] md:h-[650px] bg-black rounded-[3rem] p-3 border-[6px] border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.2)] overflow-hidden">
                {/* Selfie Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-900/50" />
                </div>

                {/* The Portrait Image */}
                <img 
                  src={slides[index].img} 
                  className="w-full h-full object-cover rounded-[2.2rem] opacity-90"
                  alt="Video Call"
                />

                {/* VC Overlay Elements */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-start pt-8">
                        <div className="bg-black/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px]">● REC 00:45:21</div>
                        <div className="text-xl">📶</div>
                    </div>
                    <div className="flex justify-center gap-4 pb-10">
                        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-xl">📞</div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">🎙️</div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">📷</div>
                    </div>
                </div>
              </div>

              {/* Floating Stickers around the phone */}
              {slides[index].stickers.map((emoji, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity }}
                  className="absolute text-5xl z-30"
                  style={{ 
                    top: i === 0 ? '-20px' : i === 1 ? '40%' : '80%',
                    right: i === 0 ? '-30px' : i === 2 ? '-40px' : 'auto',
                    left: i === 1 ? '-50px' : 'auto'
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bars (Bottom) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, i) => (
          <motion.div 
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${index === i ? 'w-12 bg-cyan-400' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCallPage;