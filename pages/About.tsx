
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-48 px-6 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-saffron font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Our Lineage</span>
            <h1 className="text-6xl md:text-9xl font-playfair font-black mb-12 leading-none text-dark">
              Digital Artisans <br /> Born in <span className="text-rani italic">Moradabad</span>
            </h1>
            <p className="text-dark/60 text-2xl leading-relaxed mb-10 font-jakarta">
              Rooted in the brass capital of India, we treat web code like fine metalwork. Every project is an *Anusthan* — a dedicated ritual of perfection.
            </p>
            <p className="text-dark/60 text-xl leading-relaxed mb-16 font-jakarta">
              We specialize in bridging the gap between high-end international design standards and the vibrant soul of Indian entrepreneurship.
            </p>
            
            <div className="grid grid-cols-2 gap-16">
              <div>
                <p className="text-6xl font-playfair font-black text-saffron mb-2">100+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-dark/40">Sacred Satisfactions</p>
              </div>
              <div>
                <p className="text-6xl font-playfair font-black text-rani mb-2">24/7</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-dark/40">Devoted Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="mughal-dome p-4 bg-gradient-to-tr from-saffron to-rani shadow-2xl shadow-rani/20">
              <img 
                src="https://images.unsplash.com/photo-1598333398522-d0221368a021?auto=format&fit=crop&q=80&w=1200" 
                alt="Craftsmanship" 
                className="w-full aspect-[4/5] object-cover mughal-dome grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Hover Quote Card */}
            <div className="absolute -bottom-16 -left-16 glass-card p-12 rounded-[3rem] border-brass/20 max-w-sm shadow-2xl">
              <i className="fas fa-quote-left text-3xl text-saffron mb-8 block" />
              <p className="text-dark/70 font-jakarta font-medium text-lg leading-relaxed italic mb-8">
                "We don't just build websites; we enshrine your brand's digital legacy."
              </p>
              <h4 className="font-black text-dark text-xs uppercase tracking-widest">— Ishant, Founder</h4>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-40">
           <h2 className="text-4xl md:text-7xl font-playfair font-black mb-24">Our Core <span className="text-saffron">Philosophy</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'Tapasya (Dedication)', desc: 'We immerse ourselves completely into your vision until it manifests into reality.', icon: 'fa-fire-alt' },
               { title: 'Satya (Integrity)', desc: 'Transparent pricing. No hidden costs. Just pure digital excellence.', icon: 'fa-feather-alt' },
               { title: 'Kala (Artistry)', desc: 'Every pixel is placed with the intent of an artisan painting a mandala.', icon: 'fa-palette' }
             ].map((v, i) => (
               <GlassCard key={i} delay={i * 0.1} className="p-16 text-center group">
                 <div className="w-20 h-20 rounded-[2rem] bg-sandstone text-saffron flex items-center justify-center text-3xl mb-10 group-hover:bg-rani group-hover:text-white transition-all mx-auto shadow-inner">
                    <i className={`fas ${v.icon}`}></i>
                 </div>
                 <h3 className="text-2xl font-playfair font-black mb-6">{v.title}</h3>
                 <p className="text-dark/50 text-lg leading-relaxed">{v.desc}</p>
               </GlassCard>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
