
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { TECH_STACK, TESTIMONIALS } from '../constants';

const Mandala = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={`mandala-rotate opacity-[0.05] pointer-events-none ${className}`}
  >
    <g fill="none" stroke="#B8860B" strokeWidth="0.5">
      {[...Array(24)].map((_, i) => (
        <circle key={i} cx="100" cy="100" r={10 + i * 4} />
      ))}
      {[...Array(36)].map((_, i) => (
        <path key={i} d="M100 10 Q120 100 100 190" transform={`rotate(${i * 10} 100 100)`} />
      ))}
    </g>
  </svg>
);

const DiyaDecoration = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-16 h-10 ${className}`}>
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-5 h-10 bg-gradient-to-t from-saffron via-yellow-400 to-transparent rounded-full flame blur-[2px]"></div>
    <div className="absolute inset-0 bg-[#8B4513] rounded-b-full rounded-t-sm shadow-xl border-t-2 border-[#A0522D]"></div>
  </div>
);

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const mandalaY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="relative">
      <Mandala className="fixed top-20 -left-60 w-[800px] h-[800px]" />
      <Mandala className="fixed bottom-20 -right-60 w-[600px] h-[600px]" />

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 flex flex-col items-center text-center relative z-10">
        
        {/* Floating Hero Diyas */}
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%] hidden xl:block"
        >
          <DiyaDecoration />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-60 right-[10%] hidden xl:block"
        >
          <DiyaDecoration />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <span className="inline-block px-10 py-3 rounded-full border border-brass/20 bg-white/50 text-brass font-black text-[10px] uppercase tracking-[0.5em] mb-12 shadow-sm relative overflow-hidden group">
            <span className="relative z-10">Digital Artisans of Moradabad</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </span>
          
          <h1 className="text-7xl md:text-[11rem] font-playfair font-black mb-12 leading-[0.85] tracking-tighter text-dark">
            Crafting <span className="vibrant-text-gradient">Heritage</span> <br /> 
            <span className="text-rani italic">Hyper-Webs</span>
          </h1>

          <p className="text-dark/60 text-xl md:text-3xl max-w-3xl mx-auto mb-20 leading-relaxed font-jakarta font-medium">
            Where the intricate patterns of Indian art meet the lightning speed of modern edge-computing. 
            <br className="hidden md:block" /> 
            High-conversion palaces built in days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <NavLink 
              to="/contact" 
              className="px-20 py-8 bg-dark text-white font-black rounded-[2rem] transition-all hover:scale-105 shadow-2xl shadow-dark/20 text-[10px] uppercase tracking-[0.4em]"
            >
              Initiate Yatra
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className="px-20 py-8 glass-card border-brass/20 text-dark font-black rounded-[2rem] hover:bg-white transition-all text-[10px] uppercase tracking-[0.4em]"
            >
              The Gallery
            </NavLink>
          </div>
        </motion.div>

        {/* Hero Image in Mughal Arch */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 w-full max-w-5xl mughal-arch p-3 bg-gradient-to-tr from-saffron/20 to-rani/20 shadow-2xl rotate-1 relative"
        >
          {/* Diyas at the base of the arch */}
          <div className="absolute -bottom-4 left-20 z-20"><DiyaDecoration className="scale-75" /></div>
          <div className="absolute -bottom-4 right-20 z-20"><DiyaDecoration className="scale-75" /></div>

          <div className="mughal-arch overflow-hidden bg-white aspect-[16/9]">
            <img 
              src="https://images.unsplash.com/photo-1524492459413-0296b71fb8a6?auto=format&fit=crop&q=80&w=2000" 
              alt="Indian Heritage Inspiration" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Grid with Bright Cards */}
      <section className="py-40 px-6 relative z-10 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: 'Dharmic Speed', icon: 'fa-om', desc: 'Websites that flow with the harmony of nature, optimized for a 100 Lighthouse score.' },
             { title: 'Royal Design', icon: 'fa-gem', desc: 'Intricate, custom interfaces inspired by Indian jewelry and architectural grandeur.' },
             { title: 'Global Growth', icon: 'fa-rocket', desc: 'SEO strategies that place your business on the throne of Google rankings.' }
           ].map((feature, i) => (
             <GlassCard key={i} delay={0.2 + (i * 0.1)} className="text-center p-16 group hover:border-saffron/50 transition-all">
               <div className="w-24 h-24 bg-sandstone rounded-[2.5rem] flex items-center justify-center text-saffron text-4xl mb-12 group-hover:bg-saffron group-hover:text-white transition-all shadow-inner rotate-3">
                 <i className={`fas ${feature.icon}`}></i>
               </div>
               <h3 className="text-3xl font-playfair font-black mb-6">{feature.title}</h3>
               <p className="text-dark/50 text-lg leading-relaxed">{feature.desc}</p>
             </GlassCard>
           ))}
        </div>
      </section>

      {/* Stats with Cultural Icons */}
      <section className="py-32 border-y border-brass/5 bg-sandstone">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
          {[
            { label: 'Happy Patrons', val: '100+', icon: 'fa-users' },
            { label: 'Enshrined Projects', val: '150+', icon: 'fa-monument' },
            { label: 'Latency < 0.5s', val: 'Vayu', icon: 'fa-wind' },
            { label: 'Value Focus', val: 'Affordable', icon: 'fa-hand-holding-heart' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-brass/20 text-3xl mb-4"><i className={`fas ${stat.icon}`}></i></div>
              <h2 className="text-5xl font-playfair font-black text-rani mb-3">{stat.val}</h2>
              <p className="text-[10px] text-dark/40 font-black uppercase tracking-[0.4em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-playfair font-black text-center mb-24 leading-none">Voices of <span className="text-saffron italic">Success</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <GlassCard key={i} delay={i * 0.1} className="relative p-12 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rani/5 rounded-bl-[6rem] transition-all group-hover:scale-110"></div>
                <i className="fas fa-quote-left text-saffron/20 text-5xl mb-10 block"></i>
                <p className="text-dark/70 text-xl font-jakarta italic mb-12 leading-relaxed font-medium">"{t.content}"</p>
                <div className="flex items-center gap-6">
                  <img src={t.avatar} className="w-16 h-16 rounded-full border-2 border-rani/20" alt={t.name} />
                  <div>
                    <h4 className="font-black text-dark uppercase tracking-widest text-sm">{t.name}</h4>
                    <p className="text-[10px] text-rani font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[4rem] bg-dark p-20 md:p-32 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(45,27,13,0.3)]"
        >
           <Mandala className="absolute top-0 right-0 w-[800px] h-[800px] text-saffron !opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-9xl font-playfair font-black text-white mb-12 leading-none">Create Your <br /> <span className="text-saffron italic">Digital Yatra</span></h2>
            <p className="text-white/50 text-xl md:text-3xl mb-20 max-w-2xl mx-auto font-jakarta">
              Launch your presence with the soul of an artisan and the brain of an engineer.
            </p>
            <NavLink 
              to="/contact" 
              className="inline-block px-24 py-10 bg-saffron text-white font-black rounded-full transition-all hover:scale-110 shadow-2xl shadow-saffron/40 text-[10px] uppercase tracking-[0.5em] diya-animation"
            >
              Launch Now
            </NavLink>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
