
import React from 'react';
import { PRICING_PLANS } from '../constants';
import GlassCard from '../components/GlassCard';
import { NavLink } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="py-48 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-saffron font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Investment Plans</span>
          <h1 className="text-6xl md:text-[8rem] font-playfair font-black mb-12 tracking-tighter leading-none">Transparent <span className="text-rani">Vignettes</span></h1>
          <p className="text-dark/60 max-w-2xl mx-auto text-2xl font-jakarta leading-relaxed">No hidden taxes. No digital fine print. Just premium Moradabad craft at honest pricing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PRICING_PLANS.map((plan, i) => (
            <GlassCard 
              key={plan.id} 
              delay={i * 0.1} 
              className={`flex flex-col relative overflow-hidden h-full p-12 group ${plan.isSpecial ? 'border-saffron border-2 shadow-2xl shadow-saffron/20 diya-animation' : 'border-brass/10'}`}
            >
              {plan.isSpecial && (
                <div className="absolute top-0 right-0 bg-saffron text-white text-[9px] font-black px-12 py-3 uppercase tracking-widest transform rotate-45 translate-x-[30%] translate-y-[50%] shadow-lg">
                  Popular Yatra
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-black mb-6 text-dark group-hover:text-rani transition-colors">{plan.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-playfair font-black text-dark">{plan.price}</span>
                  {plan.suffix && <span className="text-dark/30 text-xs font-bold uppercase tracking-widest">{plan.suffix}</span>}
                </div>
                {plan.originalPrice && (
                  <p className="text-sm text-dark/30 line-through font-bold">Offer Ends Soon: {plan.originalPrice}</p>
                )}
              </div>

              <ul className="space-y-5 mb-16 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-sm text-dark/60 font-jakarta font-medium">
                    <i className="fas fa-check-circle text-emerald mt-1 mr-4 text-sm"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <NavLink 
                to="/contact" 
                className={`w-full py-6 rounded-2xl font-black text-center transition-all text-[10px] uppercase tracking-[0.3em] shadow-xl ${
                  plan.isSpecial ? 'bg-dark text-white hover:bg-saffron' : 'bg-sandstone text-dark hover:bg-white border border-brass/20'
                }`}
              >
                Secure {plan.title}
              </NavLink>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
