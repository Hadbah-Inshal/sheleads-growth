
import React from 'react';

const SocialImpact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-petal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-berry-light rounded-[70px] p-12 lg:p-24 text-white overflow-hidden relative shadow-2xl transition-all duration-1000 hover:shadow-berry/20 group">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-petal/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none group-hover:bg-petal/10 transition-colors duration-1000" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="inline-block text-[9px] font-black uppercase tracking-[0.3em] mb-8 border-b border-petal/30 pb-2 opacity-70">Social Impact</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter">
                The Silent <br /> Economy.
              </h2>
              <p className="text-lg md:text-xl opacity-85 mb-12 leading-relaxed font-bold">
                Empowering women in regions where traditional work is inaccessible through training and hardware donation.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: 'Remote Placements', val: '100%' },
                  { label: 'Hardware Donated', val: '20+' },
                  { label: 'Global Network', val: '40+' },
                  { label: 'Country Focus', val: 'PK' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-7 rounded-[35px] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
                    <p className="text-3xl font-black mb-1.5 text-petal">{item.val}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-[50px]">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Impact" 
                className="rounded-[50px] shadow-2xl transition-transform duration-[1.5s] group-hover:scale-110 border-[10px] border-white/5 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-berry/10 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
