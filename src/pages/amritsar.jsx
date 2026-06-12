import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AmritsarVisit = () => {
  const [page, setPage] = useState(0);

  const slides = [
    { img: "/assets/amritsar2.jpeg", title: "The Glow of Golden temple", desc: "Oo bhai , oo bhai , bhaisa shaba kya ho to din tha vo, kitna mzedaar tha hamara first trip , subah subah khali hostel me batakte hue , din me 6hr bak bak karke shamk ko fatt gyi magar raat me view ne sari tension bhula di , ek smile or sab udan chuu maano sab hojega , bass yha bitho or sant hojao , itna pyara viewww ....sarir thak gya tha buri trah ghum ghum k but man nhi vo thodi der or is view ko apni aakho k samne chahta tha , bina kisi judgement k aaram se apne hi khayalo me ...." },
    { img: "/assets/amritsar.jpeg", title: "Funny incidient", desc: "Ham log room tlashne k lea sadak pe ghum rhe h , or log khe rhe h aao ji juti lelo , paaji ko smjao ham dikte garib h magar itne bhi garib nhi hai , rhene khane k paise h hamare pass .....or haa bhai khane ki bat ho or koi langar ko bhul jaye aise kaise ho sakta hai , langar ek khani ban gya tha par khair mjedaar tha , ab to galdi si next tour bna le main wait kar rha hu .....👉👈" },
    { img: "/assets/amrtisar3.jpeg", title: "Just in moment", desc: "tere sath rhe k har choti chij me mza aata h gaise ye bacho vali train , kuch khass tha yha to bass tu , or teri simran bole to main ... kuch bhi khe khudko piche nhi choduha main , chant hu na bole to esmart .....khair har choti badi masti adorable thi gisko bass ji liya ab kha jana to bhot muskil h ...." },
    { img: "/assets/amrtisar4.jpeg", title: "Asthetic Queens", desc: "Ooh dek rhe ho mitro , jalve , inni badi investment kari thi sirf photos k lea is chasme pe ...😂 but chasma lga k koi esmat nhi banta , aakhir katvane vale khi bhi katwa sakte hia , gaise ki bag k lea extra pasie deke ya apni hosiyari me rasta khud cover karke paise autovale ko deke 😂😂 .... par gaise bhi tha fun tha !" },
    { img: "/assets/amritsar1.jpeg", title: "Home Tour", desc: "Finally madam ji mere gahr ghumi ghumi kar aai , bhot acha lga merko isi bhahne ham chulkana bhi darshan kar aaye or vha iconic pose bhi to diya tha , or madam ne sari cold drink merko pila k mere pet me dard bhi to kiya tha ... hai to tu kutti hi but meri kutti hai , rakshash...." }
  ];

  const handleNext = () => {
    if (page < slides.length - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && page < slides.length - 1) {
      handleNext();
    } else if (info.offset.x > swipeThreshold && page > 0) {
      handlePrev();
    }
  };

  return (
    <div className="h-screen w-full bg-slate-950 overflow-hidden flex flex-col items-center justify-center relative">
      
      {/* Background Title */}
      <div className="absolute top-10 left-10 text-cyan-900/10 text-7xl md:text-9xl font-black select-none pointer-events-none">
        AMRITSAR
      </div>

      <div className="w-full max-w-6xl h-[80vh] flex items-center justify-center px-4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            drag="x" 
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            style={{ touchAction: 'none' }} 
            className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 bg-slate-900/40 p-6 md:p-12 rounded-[2.5rem] border border-cyan-500/10 backdrop-blur-md cursor-grab active:cursor-grabbing shadow-2xl"
          >
<div className="w-full md:w-1/2 h-72 md:h-[500px] pointer-events-none p-1 bg-slate-950/20 rounded-3xl">
  <img
    src={slides[page].img}
    alt={slides[page].title}
    className="w-full h-full object-contain rounded-3xl border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]" // Added border and shadow
  />
</div>

            {/* RIGHT SIDE: Content */}
            <div className="w-full md:w-1/2 space-y-6 pointer-events-none">
              <span className="text-cyan-400 font-mono tracking-widest uppercase text-xs px-3 py-1 border border-cyan-500/30 rounded-full">
                Stop 0{page + 1}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                {slides[page].title}
              </h2>
              <p className="text-slate-400 text-lg md:text-xl italic leading-relaxed">
                "{slides[page].desc}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- NEW BUTTONS: Prev & Next --- */}
      
      {/* Left Bottom Button (Prev) */}
      <div className="absolute bottom-0 left-6 md:left-20">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          disabled={page === 0}
          className={`px-6 py-3 rounded-full font-bold border-2 transition-all duration-300 ${
            page === 0 
            ? 'border-slate-800 text-slate-700 cursor-not-allowed' 
            : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
          }`}
        >
          ← PREV
        </motion.button>
      </div>

      {/* Right Bottom Button (Next) */}
      <div className="absolute bottom-0 right-6 md:right-20">
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          disabled={page === slides.length - 1}
          className={`px-6 py-3 rounded-full font-bold border-2 transition-all duration-300 ${
            page === slides.length - 1 
            ? 'border-slate-800 text-slate-700 cursor-not-allowed' 
            : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
          }`}
        >
          NEXT →
        </motion.button>
      </div>

      {/* Slide Indicators (Middle) */}
      <div className="absolute bottom-12 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-300 rounded-full ${i === page ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-800'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AmritsarVisit;