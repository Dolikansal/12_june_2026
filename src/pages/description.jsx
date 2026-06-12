import React from 'react';
import { motion } from 'framer-motion';
import descImg1 from '/assets/desc1.jpeg'
import descImg2 from '/assets/homepage.jpeg'
import { Link } from 'react-router-dom';
const DescriptionPage = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4 sm:p-8 md:p-16">

      {/* 🎨 ANIMATED BACKGROUND: Pure black nahi, ek deep premium gradient */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-indigo-800 via-black to-indigo-400 animate-gradient-xy">
        {/* Floating Particles for extra design feel */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* 📝 LEFT SIDE: CONTENT (Fully Responsive) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-white space-y-6"
        >
          <h1 className="text-2xl md:text-4xl font-bold font-serif bg-clip-text text-transparent bg-linear-to-r from-pink-300 to-rose-100">
            A Little About You ...
          </h1>

          <div className="backdrop-blur-md bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl">
            <p className="text-lg md:text-xl leading-relaxed font-light italic text-rose-50">
              "Tuje gle se lga kar har khushi mil jaati hai , befkuf to tu hai jo meri zhalli si baato pe yu khil khila k muskuraati hai... ❤️"
            </p>
            <p className="mt-4 text-gray-200 text-base md:text-lg">
              So finally its 12 june , its 21st Birthday of my bestie , my dear "Dushman" belive me you are the gift from god , not only for me , for everyone. I see you , your kindness, your love , your concern its truly appricatiable. I pray , I wish and i will try to give you every happiness to make every day as your best day. ❤️🫂🧿<br></br> only god knows what will happen in future , so trying my best to make you happy in present.<br></br>Sankalp vijay bhav....
            </p>
          </div>

          <Link title="memories" to="/memories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 bg-linear-to-r from-rose-500 to-pink-500 rounded-full font-semibold shadow-lg hover:shadow-rose-500/50 transition-all text-white"
            >
              Memories Dekhein? →
            </motion.button>
          </Link>
        </motion.div>

        {/* 🖼️ RIGHT SIDE: POPPING IMAGES (Top to Bottom Pop) */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center space-y-8 relative">

          {/* Top Image Pop */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: -50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 bg-white p-2 rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={descImg1}
                alt="Friend"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Bottom Image Pop */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-rose-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 bg-white p-2 rounded-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src={descImg2}
                alt="Friend"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;