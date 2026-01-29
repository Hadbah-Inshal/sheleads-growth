
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-700 ease-in-out ${scrolled ? 'bg-snow/95 backdrop-blur-md py-3 border-b border-petal/20 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="group transition-transform duration-300 hover:scale-[1.02] flex items-center">
              <span className={`text-lg font-black tracking-tighter transition-colors duration-500 ${scrolled ? 'text-berry' : 'text-white'}`}>
                <span className="uppercase">SHE.LEADS</span>
                <span className="italic font-medium lowercase text-petal ml-1">growth</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 font-bold text-[9px] uppercase tracking-[0.25em] ${scrolled ? 'text-berry/60 hover:text-berry' : 'text-white/70 hover:text-white hover:translate-y-[-1px]'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-7 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-md ${scrolled ? 'bg-berry text-white hover:bg-berry-light' : 'bg-white text-berry hover:bg-petal'}`}
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-berry' : 'text-white'} transition-colors duration-500 p-2 focus:outline-none`}>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-snow transition-all duration-500 ease-in-out shadow-2xl border-t border-petal/5 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-6 py-8 space-y-5 text-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-[10px] font-black text-berry uppercase tracking-[0.2em] hover:text-petal transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="inline-block bg-berry text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-berry-light transition-all">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
