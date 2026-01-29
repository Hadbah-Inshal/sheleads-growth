
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-berry py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl font-black tracking-tighter text-white mb-10 transition-transform duration-500 hover:scale-105 cursor-default flex items-center">
            <span className="uppercase">SHE.LEADS</span>
            <span className="italic font-medium lowercase text-petal ml-px">growth</span>
          </span>
          
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-5 mb-14">
            {['About', 'Services', 'Impact', 'Contact'].map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-[9px] font-black uppercase tracking-[0.3em] text-petal/30 hover:text-petal transition-all duration-300 hover:translate-y-[-1px]"
              >
                {link}
              </a>
            ))}
          </nav>
          
          <div className="flex space-x-9 mb-16">
            <a href="https://linkedin.com/company/sheleads-growth/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-petal transition-all duration-300 font-black text-[8px] uppercase tracking-[0.25em] hover:translate-y-[-1px]">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/she.leadsgrowth/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-petal transition-all duration-300 font-black text-[8px] uppercase tracking-[0.25em] hover:translate-y-[-1px]">
              Instagram
            </a>
            <a href="#" className="text-white/30 hover:text-petal transition-all duration-300 font-black text-[8px] uppercase tracking-[0.25em] hover:translate-y-[-1px]">
              Twitter
            </a>
          </div>
          
          <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5 opacity-40">
            <p className="text-[8px] font-black text-white uppercase tracking-[0.25em]">
              © {new Date().getFullYear()} SHE.LEADSgrowth
            </p>
            <p className="text-[8px] font-black text-white uppercase tracking-[0.25em]">
              Empowering global female leadership
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
