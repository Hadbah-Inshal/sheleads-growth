
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-petal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <span className="text-berry-light font-black uppercase tracking-[0.3em] text-[9px] mb-5 block opacity-70">Empowering Representation</span>
            <h2 className="text-4xl md:text-6xl font-black text-berry mb-10 tracking-tighter leading-none">
              Amplify Your <br /> Vision.
            </h2>
            <div className="space-y-10">
              <div className="group cursor-default">
                <h3 className="text-berry font-bold text-xl mb-3 flex items-center group-hover:translate-x-1 transition-all duration-500">
                  <span className="w-8 h-[2px] bg-berry/15 mr-4 transition-all duration-500 group-hover:w-12 group-hover:bg-berry/30"></span>
                  Our Mission
                </h3>
                <p className="text-lg text-berry-light/70 leading-relaxed font-semibold max-w-lg">
                  To amplify women-led brands through ethical marketing while creating remote income opportunities for women in Pakistan.
                </p>
              </div>
              <div className="group cursor-default">
                <h3 className="text-berry font-bold text-xl mb-3 flex items-center group-hover:translate-x-1 transition-all duration-500">
                  <span className="w-8 h-[2px] bg-berry/15 mr-4 transition-all duration-500 group-hover:w-12 group-hover:bg-berry/30"></span>
                  The Vision
                </h3>
                <p className="text-lg text-berry-light/70 leading-relaxed font-semibold max-w-lg">
                  Pakistan’s first global women-only agency setting a standard for digital inclusion.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-reveal">
            <div className="bg-berry/5 p-7 rounded-[60px] shadow-sm hover:bg-berry/8 transition-all duration-700 hover:shadow-xl group">
              <div className="relative overflow-hidden rounded-[45px]">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" 
                  alt="Founders"
                  className="w-full h-auto aspect-[4/5] object-cover transition-all duration-1000 group-hover:scale-105 brightness-95"
                />
                <div className="absolute top-8 right-8 bg-berry/95 backdrop-blur-md px-7 py-5 rounded-[30px] shadow-2xl transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <p className="text-4xl font-black text-white">5+</p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-petal/80 mt-1.5">Core Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
