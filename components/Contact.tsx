
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-petal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <span className="text-berry-light font-black uppercase tracking-[0.3em] text-[9px] mb-5 block opacity-60">Connect</span>
            <h2 className="text-4xl md:text-6xl font-black text-berry mb-9 tracking-tighter leading-none uppercase">Let's Lead <br /> Together.</h2>
            <p className="text-lg text-berry/55 mb-14 leading-relaxed max-w-md font-bold">
              Ready to take the spotlight? Connect with Pakistan’s premier women-only agency today.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center space-x-7 group cursor-default">
                <div className="w-14 h-14 bg-snow/90 backdrop-blur-sm text-berry rounded-[25px] flex items-center justify-center shadow-lg shadow-berry/5 border border-berry/5 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[8px] font-black text-berry/30 uppercase tracking-[0.2em] mb-1">Direct Inquiry</p>
                  <p className="text-xl font-black text-berry group-hover:text-berry-light transition-colors duration-500">hello@sheleads.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-7 group cursor-default">
                <div className="w-14 h-14 bg-snow/90 backdrop-blur-sm text-berry rounded-[25px] flex items-center justify-center shadow-lg shadow-berry/5 border border-berry/5 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[8px] font-black text-berry/30 uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-xl font-black text-berry">Global Remote • PK</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-snow p-10 lg:p-16 rounded-[70px] border border-berry/5 shadow-2xl relative overflow-hidden animate-reveal">
            <div className="absolute top-0 right-0 w-48 h-48 bg-petal/20 rounded-full blur-[70px] -z-0 pointer-events-none transition-transform duration-1000 hover:scale-125"></div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-10">
                <div className="w-20 h-20 bg-berry text-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-berry/15 scale-110">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-berry mb-3">Received.</h3>
                <p className="text-berry/50 text-base font-bold">We'll be in touch very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <input 
                        required 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full px-7 py-4 bg-petal/10 rounded-[30px] border border-berry/5 focus:ring-4 focus:ring-petal/30 focus:bg-white focus:border-berry/20 outline-none transition-all duration-500 placeholder:text-berry/20 font-bold text-base text-berry"
                      />
                    </div>
                    <div>
                      <input 
                        required 
                        type="email" 
                        placeholder="Email"
                        className="w-full px-7 py-4 bg-petal/10 rounded-[30px] border border-berry/5 focus:ring-4 focus:ring-petal/30 focus:bg-white focus:border-berry/20 outline-none transition-all duration-500 placeholder:text-berry/20 font-bold text-base text-berry"
                      />
                    </div>
                  </div>
                  <div>
                    <select className="w-full px-7 py-4 bg-petal/10 rounded-[30px] border border-berry/5 focus:ring-4 focus:ring-petal/30 focus:bg-white outline-none transition-all duration-500 font-bold text-base text-berry/40 appearance-none cursor-pointer">
                      <option>Growth Strategy</option>
                      <option>Lead Generation</option>
                      <option>Paid Marketing</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      required 
                      rows={3} 
                      placeholder="Your brand vision..."
                      className="w-full px-7 py-5 bg-petal/10 rounded-[30px] border border-berry/5 focus:ring-4 focus:ring-petal/30 focus:bg-white focus:border-berry/20 outline-none transition-all duration-500 placeholder:text-berry/20 font-bold text-base text-berry resize-none"
                    ></textarea>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-berry text-white font-black rounded-[30px] hover:bg-berry-light shadow-xl shadow-berry/10 transition-all duration-500 uppercase tracking-[0.3em] text-[10px] active:scale-95 hover:translate-y-[-1px]"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
