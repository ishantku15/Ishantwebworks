
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

type ViewMode = 'desktop' | 'mobile';

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, url, title }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('mobile');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-3xl"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

          {/* Device Toggle Header */}
          <div className="relative z-20 mb-10 flex items-center gap-2 glass-nav p-1.5 rounded-2xl border border-white/10 shadow-2xl">
            <button 
              onClick={() => setViewMode('desktop')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all font-bold text-xs ${viewMode === 'desktop' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <i className="fas fa-desktop"></i> Desktop
            </button>
            <button 
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all font-bold text-xs ${viewMode === 'mobile' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <i className="fas fa-mobile-alt"></i> Mobile
            </button>
            <div className="w-px h-6 bg-white/10 mx-2"></div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'desktop' ? (
              /* MacBook Pro Frame */
              <motion.div
                key="desktop"
                initial={{ scale: 0.85, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.85, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl aspect-[16/10] z-10 flex flex-col"
              >
                <div className="relative w-full h-full bg-[#1a1a1a] rounded-[2.5rem] p-[1.5%] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden border-[4px] border-[#333]">
                  {/* Camera area */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#333]"></div>
                  </div>

                  <div className="flex-grow bg-white rounded-2xl overflow-hidden flex flex-col">
                    {/* Browser UI */}
                    <div className="h-12 bg-[#f1f1f1] border-b border-black/5 flex items-center px-6 gap-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="flex-grow max-w-xl mx-auto h-7 bg-white rounded-md border border-black/5 flex items-center px-4 text-[10px] text-gray-400 truncate shadow-sm">
                        <i className="fas fa-lock text-[8px] mr-2 text-green-500"></i>
                        {url}
                      </div>
                    </div>
                    {/* Iframe */}
                    <div className="flex-grow relative bg-white">
                      <iframe src={url} className="w-full h-full border-none" title={title} />
                    </div>
                  </div>
                </div>
                {/* Macbook Base */}
                <div className="w-[106%] h-3 bg-gradient-to-b from-[#e5e5e5] to-[#999] self-center rounded-b-full mt-[-2px] relative z-0 border-t border-white/10" />
              </motion.div>
            ) : (
              /* iPhone 17 Pro Max Frame */
              <motion.div
                key="mobile"
                initial={{ scale: 0.85, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.85, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative h-[85vh] aspect-[9/19.5] z-10"
              >
                <div className="relative w-full h-full bg-[#1c1c1e] rounded-[3.5rem] p-[10px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-[4px] border-[#48484a] flex flex-col">
                  <div className="relative w-full h-full bg-black rounded-[2.8rem] overflow-hidden flex flex-col border border-white/5">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 border border-white/5 shadow-inner"></div>
                    
                    {/* Content */}
                    <div className="flex-grow bg-white">
                      <iframe src={url} className="w-full h-full border-none" title={title} />
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-30" />
                  </div>

                  {/* Physical Buttons */}
                  <div className="absolute -left-[5px] top-28 w-[3px] h-8 bg-[#48484a] rounded-l-sm" />
                  <div className="absolute -left-[5px] top-44 w-[3px] h-14 bg-[#48484a] rounded-l-sm" />
                  <div className="absolute -left-[5px] top-64 w-[3px] h-14 bg-[#48484a] rounded-l-sm" />
                  <div className="absolute -right-[5px] top-56 w-[3px] h-20 bg-[#48484a] rounded-r-sm" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
