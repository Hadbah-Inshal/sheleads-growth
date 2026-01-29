
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2000" 
          alt="Leadership" 
          className="w-full h-full object-cover brightness-[0.65] scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block bg-petal/90 backdrop-blur-sm text-berry px-7 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] mb-8 shadow-xl animate-fade-up opacity-0 [animation-delay:200ms]">
            Women in leadership deserve the spotlight
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter animate-fade-up opacity-0 [animation-delay:400ms]">
            <span className="uppercase block">SHE.LEADS</span>
            <span className="italic font-medium lowercase text-petal">growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/85 mb-12 max-w-xl leading-relaxed font-semibold animate-fade-up opacity-0 [animation-delay:600ms]">
            The premier women-led agency helping women founders scale visibility, leads, and revenue through ethical marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-14 animate-fade-up opacity-0 [animation-delay:800ms]">
            <a href="#contact" className="px-12 py-5 bg-white text-berry rounded-full text-[11px] font-black uppercase tracking-[0.15em] hover:bg-petal transition-all duration-500 shadow-2xl hover:-translate-y-1 active:scale-95">
              Work With Us
            </a>
            <a href="#services" className="px-12 py-5 bg-transparent text-white border border-white/30 rounded-full text-[11px] font-black uppercase tracking-[0.15em] hover:bg-white/10 transition-all duration-500 active:scale-95 backdrop-blur-sm">
              Our Expertise
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl w-full border-t border-white/10 pt-12 mt-8 animate-fade-up opacity-0 [animation-delay:1000ms]">
            {[
              { val: '124%', label: 'Revenue Growth' },
              { val: '45k+', label: 'Leads Generated' },
              { val: '100%', label: 'Women-Led' },
              { val: '24/7', label: 'Remote Ops' }
            ].map((stat, i) => (
              <div key={i} className="text-white text-center group cursor-default transition-all duration-300 hover:scale-105">
                <p className="text-3xl font-black mb-1.5 group-hover:text-petal transition-colors duration-500">{stat.val}</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-petal/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
