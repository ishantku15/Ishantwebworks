
import React from 'react';
import { NavLink } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'School/Coaching',
      desc: 'Complete digital management for educational institutes with admission forms and event sections.',
      icon: 'fa-graduation-cap',
      price: '₹2,499',
      color: '#007AFF'
    },
    {
      title: 'E-Commerce',
      desc: 'Modern online stores with shopping carts, payment gateway integration, and inventory management.',
      icon: 'fa-shopping-bag',
      price: '₹4,999',
      color: '#007AFF'
    },
    {
      title: 'Startup Launch',
      desc: 'High-conversion landing pages with custom UI/UX, analytics, and 1 year maintenance.',
      icon: 'fa-rocket',
      price: '₹5,999',
      color: '#007AFF'
    },
    {
      title: 'Business Pro',
      desc: 'Enterprise-grade full stack solutions with cloud integration and priority 24/7 support.',
      icon: 'fa-crown',
      price: '₹12,999',
      color: '#007AFF'
    }
  ];

  return (
    <div className="py-40 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-8xl font-outfit font-bold mb-6 tracking-tight">World-Class <span className="text-primary">Services</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">We bring the highest standards of web development to Moradabad at an affordable cost.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <GlassCard key={i} delay={i * 0.1} className="h-full flex flex-col items-center text-center p-12 group hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 mb-10 flex-grow text-sm leading-relaxed">{s.desc}</p>
              
              <div className="w-full pt-8 border-t border-glass-border">
                <p className="text-3xl font-bold text-white mb-6">{s.price}</p>
                <NavLink 
                  to={`/contact?service=${encodeURIComponent(s.title)}`}
                  className="inline-block w-full py-4 bg-primary text-white font-bold rounded-xl transition-all hover:bg-blue-600 hover-glow shadow-lg shadow-primary/20"
                >
                  Get Started
                </NavLink>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
