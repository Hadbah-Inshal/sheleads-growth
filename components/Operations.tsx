
import React from 'react';

const Operations: React.FC = () => {
  const steps = [
    { title: 'Discovery', desc: 'Identifying your brand DNA and core growth levers.' },
    { title: 'Blueprint', desc: 'Crafting a data-driven campaign architecture.' },
    { title: 'Execution', desc: 'Seamless delivery by our trained female experts.' },
    { title: 'Optimize', desc: 'Real-time scaling and continuous ROI tracking.' },
  ];

  return (
    <section id="operations" className="py-24 bg-petal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-berry font-black uppercase tracking-[0.3em] text-[9px] mb-4 block opacity-60">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-black text-berry mb-6 tracking-tighter">The Remote Ecosystem.</h2>
          <p className="text-base text-berry/55 max-w-xl mx-auto leading-relaxed font-medium">100% digital operations, powered by top-tier communication tools and a structured workforce.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white p-9 rounded-[40px] border border-berry/5 shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col h-full cursor-default hover:-translate-y-1">
                <div className="w-12 h-12 bg-petal text-berry rounded-[18px] flex items-center justify-center mb-7 font-black text-lg group-hover:bg-berry group-hover:text-white group-hover:scale-105 transition-all duration-500 shadow-sm">
                  {i + 1}
                </div>
                <h4 className="font-bold text-berry mb-2.5 text-lg group-hover:text-berry-light transition-colors duration-500">{step.title}</h4>
                <p className="text-sm text-berry/40 leading-relaxed font-medium">{step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1.5px] bg-berry/10 group-hover:bg-berry/30 transition-colors duration-500"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-snow rounded-[55px] p-9 lg:p-16 shadow-2xl shadow-berry/5 border border-berry/5 transition-all duration-700 hover:shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-xl font-black text-berry mb-9 flex items-center">
                <span className="w-8 h-[2px] bg-berry mr-3.5"></span>
                Growth Roadmap
              </h4>
              <div className="space-y-7">
                {[
                  { month: 'Phase 01', activity: 'Brand Foundation & Infrastructure Setup' },
                  { month: 'Phase 02', activity: 'Strategic Outreach & Community Building' },
                  { month: 'Phase 03', activity: 'Scaling & Multi-Channel Dominance' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group cursor-default">
                    <div className="text-berry font-black text-[9px] uppercase tracking-[0.2em] pt-1.5 whitespace-nowrap opacity-40 group-hover:opacity-100 transition-all duration-500">{item.month}</div>
                    <div className="text-base text-berry-light font-bold group-hover:text-berry transition-all duration-500 group-hover:translate-x-1 leading-tight">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-petal/20 p-10 rounded-[45px] relative overflow-hidden group hover:bg-petal/25 transition-colors duration-700">
               <div className="absolute -top-8 -right-8 w-32 h-32 bg-petal/20 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
               <p className="text-lg font-bold text-berry leading-relaxed italic relative z-10 group-hover:translate-y-[-2px] transition-transform duration-500">
                "We aren't just managing tasks; we are building a legacy where every lead generated translates to female economic freedom."
               </p>
               <p className="mt-7 text-[9px] font-black uppercase tracking-[0.3em] text-berry/50">— The Leadership Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
