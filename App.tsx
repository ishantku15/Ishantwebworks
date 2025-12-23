
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Components
import { COMPANY_INFO } from './constants';

const Diya = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-12 h-7 ${className}`}>
    {/* Real-feel multi-layered flame */}
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-saffron via-yellow-400 to-transparent rounded-full flame blur-[1px] shadow-[0_0_15px_rgba(255,153,51,0.6)]"></div>
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2 h-5 bg-white rounded-full flame opacity-70"></div>
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-blue-300 rounded-full flame opacity-30 blur-[2px]"></div>
    
    {/* Earthen Body */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#A0522D] to-[#5D2906] rounded-b-full rounded-t-sm shadow-[0_5px_10px_rgba(0,0,0,0.3)] border-t border-[#CD853F]/30"></div>
    <div className="absolute inset-x-2 top-0 h-1 bg-white/10 rounded-full"></div>
  </div>
);

const FestiveLights = ({ scrolled }: { scrolled: boolean }) => (
  <div className={`fixed top-0 left-0 w-full z-[45] pointer-events-none transition-all duration-700 ${scrolled ? 'opacity-20 translate-y-[-20px]' : 'opacity-100'}`}>
    <div className="flex justify-around px-10">
      {[...Array(14)].map((_, i) => (
        <div key={i} className="flex flex-col items-center light-string" style={{ animationDelay: `${i * 0.25}s`, animationDuration: `${4 + (i % 3)}s` }}>
          <div className="w-[1px] h-16 bg-dark/10"></div>
          {/* Bulb shape */}
          <div className={`w-3 h-5 rounded-full shadow-[0_0_15px_currentColor] border border-white/20 ${
            i % 4 === 0 ? 'bg-saffron text-saffron' : 
            i % 4 === 1 ? 'bg-rani text-rani' : 
            i % 4 === 2 ? 'bg-emerald text-emerald' : 
            'bg-yellow-300 text-yellow-300'
          }`}></div>
        </div>
      ))}
    </div>
    {/* Horizontal wire */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-dark/5"></div>
  </div>
);

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-2xl py-4 border-b border-brass/10 shadow-lg' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl md:text-3xl font-playfair font-black tracking-tight text-dark flex items-center gap-3">
            <div className="w-12 h-12 bg-dark rounded-[1.2rem] flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform group">
               <span className="text-saffron group-hover:text-rani transition-colors">I</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brass/60">Ishant</span>
              <span className="text-xl font-black uppercase tracking-tighter">Webworks</span>
            </div>
          </NavLink>
          
          <div className="hidden lg:flex items-center space-x-12">
            {['Home', 'About', 'Services', 'Pricing', 'Demo', 'Portfolio'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `text-[10px] font-black uppercase tracking-[0.3em] transition-all relative py-2 ${
                    isActive ? 'text-rani' : 'text-dark/50 hover:text-saffron'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item}
                    {isActive && (
                      <motion.div layoutId="navline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-rani rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <NavLink to="/contact" className="px-10 py-4 bg-dark text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-saffron hover:scale-105 shadow-xl">
              Initiate Project
            </NavLink>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark text-3xl">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'}`}></i>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="lg:hidden fixed inset-0 z-40 bg-sandstone flex flex-col items-center justify-center space-y-10"
          >
            {['Home', 'About', 'Services', 'Pricing', 'Demo', 'Portfolio', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-5xl font-playfair font-black text-dark hover:text-rani transition-colors"
              >
                {item}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="relative pt-48 pb-20 overflow-hidden bg-white">
      {/* Decorative Rangoli Patterns in Corners */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full mandala-rotate">
           <circle cx="50" cy="50" r="45" fill="none" stroke="#D81B60" strokeWidth="0.5" strokeDasharray="2 2" />
           <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" fill="none" stroke="#FF9933" strokeWidth="0.5" />
           <circle cx="50" cy="50" r="10" fill="none" stroke="#B8860B" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full z-0">
        <div className="watermark-text uppercase tracking-[0.3em]">ISHANT</div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-saffron via-rani to-brass"></div>
      
      {/* Jali Divider */}
      <div className="absolute top-0 left-0 w-full h-16 jali-bg opacity-10 border-b border-brass/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
             <NavLink to="/" className="text-4xl font-playfair font-black mb-8 inline-block">
                ISHANT<span className="text-saffron">.WEBWORKS</span>
             </NavLink>
             <p className="text-dark/60 text-xl leading-relaxed max-w-md font-jakarta font-medium">
               Crafting digital palaces from the heart of Moradabad. Every pixel is hand-polished with traditional devotion and modern speed.
             </p>
             <div className="flex gap-4 mt-8">
               <Diya className="scale-75" />
               <Diya className="scale-75" />
             </div>
          </div>
          
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] text-brass mb-8 border-b border-brass/10 pb-2 inline-block">Navigation</h4>
            <div className="flex flex-col gap-6">
              {['Services', 'Pricing', 'Portfolio', 'Contact'].map(link => (
                <NavLink key={link} to={`/${link.toLowerCase()}`} className="text-dark/40 hover:text-rani font-bold text-sm transition-all hover:translate-x-2">
                  {link}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] text-brass mb-8 border-b border-brass/10 pb-2 inline-block">Connect</h4>
            <div className="flex flex-col gap-6 text-dark/40 font-bold text-sm">
              <p className="flex items-center gap-4 group cursor-default">
                <span className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-all">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                {COMPANY_INFO.location}
              </p>
              <p className="flex items-center gap-4 group cursor-default">
                <span className="w-8 h-8 rounded-full bg-rani/10 flex items-center justify-center text-rani group-hover:bg-rani group-hover:text-white transition-all">
                  <i className="fas fa-phone-alt"></i>
                </span>
                {COMPANY_INFO.phone}
              </p>
              <p className="flex items-center gap-4 group cursor-default">
                <span className="w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-white transition-all">
                  <i className="fas fa-envelope"></i>
                </span>
                {COMPANY_INFO.email}
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-20 border-t border-brass/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-dark/30">&copy; {new Date().getFullYear()} Ishant Webworks. Crafted in Moradabad.</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1 h-1 rounded-full bg-emerald"></span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-emerald/60">Digital Artisan Sanctuary</span>
            </div>
          </div>
          
          <div className="flex gap-10">
            <a href={`https://instagram.com/${COMPANY_INFO.instagram}`} target="_blank" rel="noreferrer" className="text-2xl text-dark/20 hover:text-rani transition-all hover:scale-125"><i className="fab fa-instagram"></i></a>
            <a href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="text-2xl text-dark/20 hover:text-emerald transition-all hover:scale-125"><i className="fab fa-whatsapp"></i></a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-2xl text-dark/20 hover:text-saffron transition-all hover:scale-125"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <FestiveLights scrolled={scrolled} />
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-saffron via-rani to-brass z-[110] origin-left" style={{ scaleX }} />
      <div className="flex flex-col min-h-screen">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp with real-feel flame */}
        <a 
          href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g,'')}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-10 right-10 z-[60] w-20 h-20 bg-[#25D366] text-white rounded-[2rem] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform diya-animation"
        >
          <div className="relative">
            <i className="fab fa-whatsapp text-4xl"></i>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-saffron via-yellow-400 to-transparent rounded-full flame blur-[1px]"></div>
          </div>
        </a>
      </div>
    </Router>
  );
};

export default App;
