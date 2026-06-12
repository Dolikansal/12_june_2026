import { motion } from 'framer-motion';

const PartyPage = () => {
  const sections = [
    {
      title: "Har choti-badi chizon ka ho jashn manana to...\n Hame nahi chahiye gaana-bajaana, chahiye to bas thoda khana aur thoda khilkhilana!",
      content: "Log jeene ke liye khate hain aur hum khane ke liye jee rahe hain! 😂\n Result aaya, scholarship aayi, Negi ne repost kiya, ya mausam achha hai... chalo kuch kha lete hain!😂\n Kyunki jeena agar zaruri hai, toh khana bohot zaruri hai.\n Har choti cheez ka chota sa celebration bohot pyari yaad ban jati hai, aur inhi yaadon ko ek dhage mein piro kar, tere liye ye tohfa pesh hai! 🥰✨",
      img: "/assets/party2.jpeg",
      reverse: false,
    },
    {
      title: "Dance, Eat, Repeat! 💃🍕",
      content: `Kabhi baarish mein bheegte hue Maggie lana, 🍜\nKabhi Maggie banane ke liye induction ka khud prakat ho jaana! ✨\nWo aam-panna ke chatkare lagana, ya ped se tod-tod kar jamun khana... 🫐\nAam todne ki khatir ped pe chadh jaana aur wahan se utar ke shuttle le aana! 🏸\n\nKabhi jise kha ke ungliyan chaat-te rahe—wo Amritsari Kulcha, 🥙\nYa jise kha ke "Aa-chhiii" nikal jaye—vahi Chilli Potato, Pizza aur Burger khana! 🍕🍔\nLangar toh kha liya, magar ek shaadi crack karna abhi baaki hai... 😉\n\nKabhi chatpata, kabhi meetha, kabhi teekha... tha tere saath ye safar, magar abhi asli masale baaki hai! 🔥`,
      img: "/assets/party1.jpeg",
      reverse: true,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {sections.map((section, index) => (
        <section 
          key={index} 
          className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-screen items-center justify-center p-6 md:p-20 gap-10`}
        >
          {/* Image Side */}
        {/* Image Side */}
<motion.div 
  initial={{ x: section.reverse ? 100 : -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-full md:w-1/2 flex justify-center perspective-1000" // Flex center added
>
  <motion.div
    whileHover={{ scale: 1.03, rotateY: section.reverse ? -5 : 5 }}
    className="inline-block h-auto max-h-[550px] rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] group relative" // Changed to inline-block
  >
    <img 
      src={section.img} 
      alt="Party" 
      className="h-full max-h-[550px] w-auto block object-contain transition-transform duration-700" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
</motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ x: section.reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed whitespace-pre-line font-light">
              {section.content}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
            >
              Be ready for adventure
            </motion.button>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default PartyPage;