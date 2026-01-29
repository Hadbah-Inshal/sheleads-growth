
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'Lead Gen', 
      icon: (
        <svg className="w-10 h-10 text-berry transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ), 
      stats: '84% CVR', 
      desc: 'Targeted multi-channel conversion funnels designed for longevity.' 
    },
    { 
      title: 'Paid Ads', 
      icon: (
        <svg className="w-10 h-10 text-berry transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 6-6" />
          <circle cx="21" cy="8" r="1" />
        </svg>
      ), 
      stats: '4.2x ROAS', 
      desc: 'Strategic spending across Meta & Google with precision tracking.' 
    },
    { 
      title: 'SEO Tech', 
      icon: (
        <svg className="w-10 h-10 text-berry transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
          <path d="M8 11h6M11 8v6" />
        </svg>
      ), 
      stats: '320% Traffic', 
      desc: 'Sustainable organic visibility growth through data-led optimization.' 
    },
    { 
      title: 'Social Ops', 
      icon: (
        <svg className="w-10 h-10 text-berry transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M2 12h20M12 2a15 15 0 000 20M12 2a15 15 0 010 20" />
        </svg>
      ), 
      stats: '15k Reach', 
      desc: 'Community building and narrative growth for modern leaders.' 
    },
  ];

  return (
    <section id="services" className="py-24 bg-petal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
          <div className="max-w-xl">
            <span className="text-berry-light font-black uppercase tracking-[0.3em] text-[9px] mb-5 block opacity-70">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-black text-berry tracking-tighter leading-none">
              The Pink Card <br /> Advantage.
            </h2>
          </div>
          <p className="text-lg text-berry/55 max-w-sm leading-relaxed font-bold">
            Data-driven strategies meets feminine intuition for unmatched growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, i) => (
            <div key={i} className="group bg-snow p-10 rounded-[45px] border border-berry/5 hover:border-berry/15 transition-all duration-700 hover:shadow-xl hover:-translate-y-1.5 flex flex-col h-full cursor-default">
              <div className="mb-8">{service.icon}</div>
              <h4 className="text-xl font-black text-berry mb-3.5 transition-colors duration-500 group-hover:text-berry-light">{service.title}</h4>
              <div className="inline-block px-4 py-1 bg-petal/60 text-berry-light rounded-full mb-6 self-start shadow-sm transition-all duration-500 group-hover:bg-berry group-hover:text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.1em]">{service.stats}</span>
              </div>
              <p className="text-base text-berry/50 mb-7 font-bold leading-relaxed">{service.desc}</p>
              <div className="mt-auto pt-6 border-t border-berry/5 transition-all duration-500 group-hover:translate-x-1 flex items-center justify-between">
                <span className="text-[10px] font-black text-berry/30 uppercase tracking-[0.2em]">Explore</span>
                <svg className="w-4 h-4 text-berry/40 group-hover:text-berry transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
