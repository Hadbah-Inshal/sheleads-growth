
import React from 'react';

const TargetMarket: React.FC = () => {
  return (
    <section id="markets" className="py-24 bg-petal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-berry/5 rounded-[50px] -z-10 group-hover:bg-berry/8 transition-all duration-700"></div>
            <img 
              src="https://picsum.photos/seed/global-market/1000/1000" 
              className="rounded-[40px] w-full aspect-square object-cover shadow-2xl transition-all duration-[1.2s] group-hover:scale-[1.02] group-hover:rotate-[0.5deg] border-[5px] border-snow" 
              alt="Global Market"
            />
            <div className="absolute bottom-8 left-8 bg-snow/98 backdrop-blur-md p-6 rounded-[25px] shadow-2xl border border-berry/5 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              <p className="text-berry font-black text-2xl tracking-tighter">Global</p>
              <p className="text-[8px] font-bold text-berry/30 uppercase tracking-widest mt-1">Presence</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-berry font-black uppercase tracking-[0.3em] text-[9px] mb-4 block opacity-60">Our Reach</span>
            <h2 className="text-3xl md:text-5xl font-black text-berry mb-9 leading-none tracking-tighter">
              Scaling Leaders <br /> <span className="text-snow">Without Borders.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-5 group cursor-default">
                <div className="shrink-0 w-12 h-12 bg-snow text-berry rounded-[16px] flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-110 group-hover:bg-berry group-hover:text-white transition-all duration-500">1</div>
                <div>
                  <h4 className="text-lg font-bold text-berry mb-1.5 transition-colors duration-500 group-hover:text-berry-light">Primary (International)</h4>
                  <p className="text-base text-berry/55 leading-relaxed font-medium">
                    Targeting founders in USA, UK, Singapore, and Australia. We specialize in SaaS, consulting, and high-ticket coaching.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 group cursor-default">
                <div className="shrink-0 w-12 h-12 bg-snow text-berry rounded-[16px] flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-110 group-hover:bg-berry group-hover:text-white transition-all duration-500">2</div>
                <div>
                  <h4 className="text-lg font-bold text-berry mb-1.5 transition-colors duration-500 group-hover:text-berry-light">Secondary (Local)</h4>
                  <p className="text-base text-berry/55 leading-relaxed font-medium">
                    Empowering the local startup ecosystem in Pakistan, focusing on women-led social enterprises and NGOs.
                  </p>
                </div>
              </div>
              
              <div className="p-7 bg-berry rounded-[40px] text-white shadow-xl shadow-berry/15 mt-5 transform hover:-translate-y-1 transition-all duration-700 cursor-default group overflow-hidden relative">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1.5 italic">The Pink Card Advantage</p>
                <p className="text-base font-bold leading-relaxed relative z-10">
                  Representation matters. Our clients choose us because our results are fueled by shared identity and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
