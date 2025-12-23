
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import DemoModal from '../components/DemoModal';

const CATEGORIES = ['All', 'Education', 'E-Commerce', 'Luxury', 'Tech', 'Heritage'];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedDemo, setSelectedDemo] = useState<{ url: string; title: string } | null>(null);

  const works = [
    { 
      title: 'Vedanta Academy', 
      cat: 'Education', 
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
      desc: 'A digital gateway for holistic learning. Integrated management system for schools.',
      url: 'https://ishantwebworks.in/demos/edu'
    },
    { 
      title: 'Benares Silks', 
      cat: 'E-Commerce', 
      img: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=800',
      desc: 'Weaving traditional threads into online sales. High-speed inventory and cart system.',
      url: 'https://ishantwebworks.in/demos/shop'
    },
    { 
      title: 'Jaipur Jewels', 
      cat: 'Luxury', 
      img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
      desc: 'Precious designs meet high-end performance. Optimized for high-resolution visual storytelling.',
      url: 'https://ishantwebworks.in/demos/luxury'
    },
    { 
      title: 'Indus Tech Hub', 
      cat: 'Tech', 
      img: 'https://images.unsplash.com/photo-1590483736622-39da8caf3581?auto=format&fit=crop&q=80&w=800',
      desc: 'Modernizing Indias IT landscape with cloud-ready architecture and native performance.',
      url: 'https://ishantwebworks.in/demos/agency'
    },
    { 
      title: 'Saffron Spices', 
      cat: 'Heritage', 
      img: 'https://images.unsplash.com/photo-1596797038530-2c39bb9edc6c?auto=format&fit=crop&q=80&w=800',
      desc: 'Authentic flavors delivered worldwide. SEO-first approach for global organic reach.',
      url: 'https://ishantwebworks.in/demos/food'
    },
    { 
      title: 'Agra Fort Resorts', 
      cat: 'Heritage', 
      img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800',
      desc: 'Digital hospitality fit for kings. Booking systems integrated with local heritage aesthetics.',
      url: 'https://ishantwebworks.in/demos/medical' // Reusing a placeholder URL for demo purposes
    },
  ];

  const filteredWorks = activeTab === 'All' 
    ? works 
    : works.filter(w => w.cat === activeTab);

  return (
    <div className="py-48 px-6 min-h-screen relative overflow-hidden">
      {/* Decorative background Mandala */}
      <div className="absolute top-40 -left-40 w-96 h-96 opacity-[0.02] pointer-events-none mandala-rotate">
        <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" /></svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-saffron font-black uppercase tracking-[0.5em] text-[10px] mb-8 block"
          >
            The Exhibition
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10rem] font-playfair font-black mb-12 leading-none tracking-tighter vibrant-text-gradient"
          >
            Digital <span className="text-rani italic">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-dark/60 max-w-2xl mx-auto text-2xl font-jakarta leading-relaxed"
          >
            A curated collection of digital sanctuaries we've built for visionaries across the subcontinent.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all border ${
                activeTab === cat 
                  ? 'bg-dark text-white border-dark shadow-xl' 
                  : 'bg-white/50 text-dark/40 border-brass/10 hover:border-saffron hover:text-saffron'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((w, i) => (
              <motion.div
                key={w.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <GlassCard className="p-0 overflow-hidden bg-white shadow-2xl h-full border-brass/10 hover:border-saffron/50 transition-all flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden mughal-arch p-1 bg-gradient-to-tr from-saffron/20 to-rani/20">
                    <div className="w-full h-full overflow-hidden mughal-arch relative">
                      <img 
                        src={w.img} 
                        alt={w.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" 
                      />
                      {/* Subtle Jali Overlay on Hover */}
                      <div className="absolute inset-0 jali-bg opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                    </div>
                    
                    {/* Modern Overlay with Indian Aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-12">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-saffron font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{w.cat}</span>
                        <h3 className="text-4xl font-playfair font-black text-white mb-6 leading-tight">{w.title}</h3>
                        <p className="text-white/60 text-sm mb-10 leading-relaxed font-jakarta font-medium">{w.desc}</p>
                        <button 
                          onClick={() => setSelectedDemo({ url: w.url, title: w.title })}
                          className="px-10 py-5 bg-white text-dark font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-rani hover:text-white transition-all shadow-2xl"
                        >
                          Examine Exhibit
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Footer for static view */}
                  <div className="p-10 group-hover:bg-sandstone transition-colors flex-grow">
                     <div className="flex justify-between items-center mb-4">
                        <h4 className="font-playfair font-black text-2xl text-dark">{w.title}</h4>
                        <span className="text-[9px] font-black uppercase tracking-widest text-brass/50">{w.cat}</span>
                     </div>
                     <p className="text-dark/40 text-sm font-jakarta font-medium line-clamp-2">
                        {w.desc}
                     </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Live Demo Modal Integration */}
      {selectedDemo && (
        <DemoModal 
          isOpen={!!selectedDemo} 
          onClose={() => setSelectedDemo(null)} 
          url={selectedDemo.url} 
          title={selectedDemo.title} 
        />
      )}
    </div>
  );
};

export default Portfolio;
