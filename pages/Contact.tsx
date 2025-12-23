
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('Other Inquiry');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [location]);

  return (
    <div className="py-48 px-6 min-h-screen relative overflow-hidden">
      {/* Decorative background Mandala */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none mandala-rotate">
        <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" /></svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-saffron font-black uppercase tracking-[0.6em] text-[10px] mb-8 block"
          >
            Anusthan (Initiation)
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-playfair font-black mb-12 leading-none text-dark tracking-tighter"
          >
            Start Your <br /> <span className="vibrant-text-gradient italic">Digital Yatra</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-dark/60 max-w-2xl mx-auto text-2xl font-jakarta leading-relaxed"
          >
            Ready to manifest your vision into a digital palace? Our artisans are ready to begin the craftsmanship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-2 space-y-10">
            {[
              { icon: 'fa-map-marker-alt', title: 'The Workshop', detail: COMPANY_INFO.location, color: 'text-saffron' },
              { icon: 'fa-phone-alt', title: 'The Call', detail: COMPANY_INFO.phone, color: 'text-rani' },
              { icon: 'fa-envelope', title: 'The Message', detail: COMPANY_INFO.email, color: 'text-brass' }
            ].map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="group p-10 bg-white rounded-[2.5rem] border border-brass/10 flex items-center gap-8 hover:border-saffron/30 transition-all shadow-sm hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-sandstone ${method.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner`}>
                  <i className={`fas ${method.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-dark/30 text-[9px] font-black uppercase tracking-[0.4em] mb-2">{method.title}</h4>
                  <p className="text-2xl font-playfair font-black text-dark group-hover:text-rani transition-colors leading-tight">{method.detail}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-16 border-t border-brass/10">
              <h4 className="font-black text-[10px] uppercase tracking-[0.4em] mb-10 text-brass">Global Sanctuary Links</h4>
              <div className="flex gap-6">
                {[
                  { icon: 'fab fa-instagram', link: `https://instagram.com/${COMPANY_INFO.instagram}`, color: 'bg-rani' },
                  { icon: 'fab fa-whatsapp', link: `https://wa.me/${COMPANY_INFO.phone.replace(/\D/g,'')}`, color: 'bg-emerald' },
                  { icon: 'fab fa-linkedin-in', link: '#', color: 'bg-[#0077b5]' }
                ].map((soc, i) => (
                  <a key={i} href={soc.link} target="_blank" rel="noreferrer" 
                     className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white ${soc.color} transition-all hover:scale-110 hover:-rotate-6 shadow-lg`}>
                    <i className={soc.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white p-12 md:p-20 rounded-[4rem] border border-brass/10 shadow-2xl relative"
          >
            {/* Mughal decorative arch around the form header */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 jali-bg opacity-10 rounded-b-full border border-t-0 border-brass/20"></div>

            <form action={`https://formsubmit.co/${COMPANY_INFO.email}`} method="POST" className="space-y-10 relative z-10">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`https://${COMPANY_INFO.domain}/thankyou.html`} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brass px-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="E.g. Arjun Dev"
                    className="w-full bg-sandstone border border-brass/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all text-dark font-medium shadow-inner" 
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brass px-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="+91 00000 00000"
                    className="w-full bg-sandstone border border-brass/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all text-dark font-medium shadow-inner" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brass px-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="name@example.com"
                  className="w-full bg-sandstone border border-brass/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all text-dark font-medium shadow-inner" 
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brass px-2">Project Path</label>
                <select 
                  name="subject" 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-sandstone border border-brass/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all text-dark font-black uppercase tracking-widest text-[10px] appearance-none cursor-pointer shadow-inner"
                >
                  <option value="School Management Systems">School Systems (₹2,499)</option>
                  <option value="E-Commerce Solutions">E-Commerce Store (₹4,999+)</option>
                  <option value="Startup Landing Page">Startup Page (₹5,999)</option>
                  <option value="Business Pro">Business Pro (₹12,999)</option>
                  <option value="Other Inquiry">Other Sacred Inquiry</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brass px-2">Vision Description</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  placeholder="Tell us about the digital palace you envision building..."
                  className="w-full bg-sandstone border border-brass/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all text-dark font-medium resize-none shadow-inner" 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-8 bg-dark text-white font-black rounded-[2rem] shadow-2xl shadow-dark/20 hover:bg-saffron transition-all uppercase tracking-[0.5em] text-[10px] diya-animation"
              >
                Invoke Project
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
