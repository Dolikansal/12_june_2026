import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HostelMasti = () => {
  const [activeFile, setActiveFile] = useState(null);

  const folders = [
    { id: 1, name: "Matching_asthetics.jpg", content: "Asthetic to match karna jaruri hai na!!...", img: "./assets/hostle1.jpeg", icon: "🖼️" },
    { id: 2, name: "Happy_holi.mp4", content: "Aaji ham to vaise bhi meera bawan se h , so no issue 👉👈", img: "./assets/hostel5.jpeg", icon: "🎥" },
    { id: 3, name: "Pagalpan_gang.log", content: "Kuch to bat thi ham me , varna yu hi to koi itna pagal nhi hota...", img: "./assets/hostel4.jpeg", icon: "📄" },
    { id: 4, name: "Warther_on_top.pdf", content: "Main nachu aaj cham cham cham .... Monjulika 😂", img: "./assets/hostel3.jpeg", icon: "☕" },
    { id: 5, name: "Living_togther.png", content: "My biggest pleasure ❤️🫂🧿", img: "./assets/hostel2.jpeg", icon: "✨" },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono p-4 md:p-10 flex flex-col md:flex-row gap-6">
      
      {/* Sidebar - File Explorer Style */}
      <div className="w-full md:w-64 bg-[#161b22] border border-slate-700 rounded-lg p-4 shadow-2xl">
        <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-slate-500 ml-2 italic">hostel_root/memories</span>
        </div>
        
        <nav className="space-y-2">
          {folders.map((file) => (
            <div 
              key={file.id}
              onClick={() => setActiveFile(file)}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-all ${activeFile?.id === file.id ? 'bg-cyan-900/30 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-slate-800'}`}
            >
              <span>{file.icon}</span>
              <span className="text-sm truncate">{file.name}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area - Editor Style */}
      <div className="flex-1 bg-[#161b22] border border-slate-700 rounded-lg flex flex-col shadow-2xl relative overflow-hidden">
        
        {activeFile ? (
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFile.id}
              // initial={{ opacity: 0.5, x: 0.2 }}
              // animate={{ opacity: 0.5, x: 0.2 }}
              // exit={{ opacity: 0.5, x: -20 }}
              className="p-6 h-full flex flex-col"
            >
              {/* Image Window */}
              <div className="flex-1 rounded-lg border border-slate-700 overflow-hidden bg-black group relative">
                <img 
                  src={activeFile.img} 
                  alt={activeFile.name} 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-350 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                   <p className="text-cyan-400 italic">" {activeFile.content} "</p>
                </div>
              </div>

              {/* Bottom "Console" */}
              <div className="mt-4 bg-black/40 p-4 rounded border-t border-cyan-900/50">
                <div className="flex gap-4 text-xs text-slate-500 mb-2 font-bold uppercase">
                  <span>Status: Memory_Loaded</span>
                  <span className="text-cyan-600">Location: UIET_Hostel</span>
                </div>
                <div className="text-green-500">
                   {`> execution successful: showing ${activeFile.name}...`}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-600 p-10 text-center">
             <div className="text-8xl mb-4 animate-pulse">📁</div>
             <p className="text-xl">Select a file from the sidebar to compile memories.</p>
             <div className="mt-4 px-4 py-1 border border-slate-700 rounded-full text-xs uppercase tracking-widest animate-bounce">
                Waiting for input...
             </div>
          </div>
        )}

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
           <h2 className="text-6xl font-black italic">MERN_VIBES</h2>
        </div>
      </div>

      {/* Terminal Footer (Responsive) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0d1117]/80 backdrop-blur text-[10px] px-4 py-1 border-t border-slate-800 flex justify-between">
         <div className="flex gap-4">
            <span className="text-cyan-500">UTF-8</span>
            <span className="text-green-500">Main Branch*</span>
         </div>
         <div className="text-slate-500 font-bold uppercase">
            Made with ☕ by Doli
         </div>
      </div>
    </div>
  );
};

export default HostelMasti;