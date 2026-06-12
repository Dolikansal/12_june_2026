import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GeetaJayanti = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      img: "/assets/sarovar2.jpeg",
      title: "iconic pose",
      content: "ek ajib sa pagalpan or janun tha us shaam me go hame itni sare adventures ko cross karke  sarovar tak kich layi thi , itne sare bandaro k bich se nikle the , gate se khud k gye the mast masti kari , apni pheli asthetic reels bhi to vhi banai thi or kya mast lot pot the ham sarovar me ek dusre ko duba rhe the or logo ko aisa khub taada tha , ki koi palat kar na deke....😂😂",
      color: "#083344"
    },
    {
      id: 2,
      img: "/assets/sarovar4.jpeg",
      title: "Main , tu or sarovar",
      content: "hamari har problem ka solution tha sarovar ka peace , like kuch to magical tha yha go hame kichta tha syd iska aura or hamari baate , gaise ku me survive karne k lea hi sarovar bna ho ... vha ki baate , yaade , shake , shanti , view , sab epic hai , adorable h , i wish ki har sham ham itni shanti k sath nikal ske bass sunset dekte hue or thandi hva ko feel karte hue.... ",
      color: "#0e7490"
    },
    {
      id: 3,
      img: "/assets/sarovar3.jpeg",
      title: "Get together",
      content: "finally the day come , giska hamne wait kiya tha a get together at sarovar , it was so much of fun  and laughter hamari sheli bhi to gyi thi ....i know it was not as expected but lets acpect it and celebrate it with a smile , ending kaisi bhi ho journey to hamari thi hamne tey kari thi .... ",
      color: "#155e75"
    },
    {
      id: 4,
      img: "/assets/weekend3.jpeg",
      title: "Weekends",
      content: "finally hamne sarovar pe late tak stay kiya aunties k sath kirtan kiya , or garba bhi to dekha or aarti k mje bhi to liye .... pheli aarti pe to lga gaise yhi moment h giske lea yha tak aaye h , ",
      color: "#164e63"
    }
  ]);

  const throwCard = () => {
    // Sabse upar wali card ko piche bhejne ka logic
    setCards((prev) => {
      const newArray = [...prev];
      const movedCard = newArray.shift();
      newArray.push(movedCard);
      return newArray;
    });
  };

  return (
    <div className="h-screen w-full bg-slate-950 flex flex-col md:flex-row items-center justify-center p-6 md:p-20 overflow-hidden">
      
      {/* LEFT: The Interactive Stack */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center cursor-pointer" onClick={throwCard}>
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              style={{ zIndex: cards.length - index }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1 - index * 0.05, 
                y: -index * 15, 
                opacity: 1,
                rotate: index === 0 ? 0 : index % 2 === 0 ? 5 : -5 
              }}
              exit={{ 
                x: 500, 
                rotate: 20, 
                opacity: 0,
                transition: { duration: 0.5 } 
              }}
              className="absolute w-64 h-80 md:w-80 md:h-[450px] bg-slate-900 rounded-3xl p-4 shadow-2xl border-2 border-white/10"
            >
              {/* Card Image Container */}
<div className="w-full h-[85%] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
  <img 
    src={card.img} 
    className="w-full h-full object-contain" // Changed to object-contain
    alt="Memory" 
  />
</div>
              <div className="mt-4 text-center">
                <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Tap to shuffle</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* RIGHT: Content Display */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 space-y-6 md:pl-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[0].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {cards[0].title}
            </h2>
            <div className="h-1 w-24 bg-cyan-500 mb-8 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
            
            {/* Scrollable Content Space */}
            <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/5">
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic font-light">
                "{cards[0].content}"
              </p>
            </div>

            <button 
              onClick={throwCard}
              className="mt-8 px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all font-bold tracking-widest text-sm"
            >
              NEXT MEMORY →
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default GeetaJayanti;