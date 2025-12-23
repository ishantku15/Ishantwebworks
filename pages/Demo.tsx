
import React, { useState } from 'react';
import { DEMO_TEMPLATES } from '../constants';
import DemoModal from '../components/DemoModal';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';

const Demo: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<typeof DEMO_TEMPLATES[0] | null>(null);

  return (
    <div className="py-40 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
          >
            Showcase
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-outfit font-bold mb-6 tracking-tight leading-tight"
          >
            Live <span className="text-primary">Interactive Demos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Experience our premium architecture in real-time. Choose a template and preview it in both Desktop and Mobile environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_TEMPLATES.map((demo, i) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-0 overflow-hidden group cursor-pointer border-white/5 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10] bg-black/40">
                  <img 
                    src={demo.image} 
                    alt={demo.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center backdrop-blur-sm gap-4">
                    <button 
                      onClick={() => setSelectedDemo(demo)}
                      className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-all text-sm uppercase tracking-wider"
                    >
                      <i className="fas fa-play mr-2"></i> Launch Preview
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                      {demo.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{demo.title}</h3>
                  <div className="flex gap-4 mt-auto">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                      <i className="fas fa-check-circle text-primary"></i> PWA Support
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                      <i className="fas fa-check-circle text-primary"></i> 99+ Speed
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

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

export default Demo;
