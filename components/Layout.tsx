
import React from 'react';

export const Header: React.FC = () => (
  <header className="fixed top-6 left-0 right-0 z-[1000] px-6 flex justify-between items-center pointer-events-none">
    <a href="#" className="pointer-events-auto bg-white border-2 border-ivy px-8 py-3 font-black text-2xl tracking-tighter stamp-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
      LYCORIS<span className="text-coral">✿</span>
    </a>
    
    <nav className="hidden md:flex gap-1 pointer-events-auto bg-white border-2 border-ivy p-1 stamp-shadow">
      <a href="#work" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] text-ivy hover:bg-wasabi transition-all">Harvest</a>
      <a href="#services" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] text-ivy hover:bg-honey transition-all">Process</a>
      <a href="#spark" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] bg-ivy text-wasabi hover:bg-coral hover:text-white transition-all">The Studio</a>
      <a href="#contact" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] text-ivy hover:bg-hydrangea transition-all">Connect</a>
    </nav>

    <div className="md:hidden pointer-events-auto w-14 h-14 bg-wasabi border-2 border-ivy flex items-center justify-center stamp-shadow">
       <span className="text-2xl text-ivy">🌿</span>
    </div>
  </header>
);

export const Footer: React.FC = () => (
  <footer className="relative bg-cardstock pt-32 pb-16 px-6 border-t-2 border-ivy overflow-hidden soft-torn">
    <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
       <div className="w-[40vw] h-[40vw] bg-wasabi rounded-full blur-[100px] animate-petal-drift"></div>
    </div>
    
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-start relative z-10">
      <div className="lg:col-span-2">
         <h2 className="text-5xl font-black tracking-tighter mb-6 italic text-ivy underline decoration-coral decoration-4 underline-offset-8">LYCORIS<span className="text-honey">*</span></h2>
         <p className="text-xl font-medium leading-relaxed max-w-sm text-ivy/70">
           A contemporary atelier exploring the organic intersection of botanical beauty and digital logic.
         </p>
      </div>
      <div className="space-y-6">
         <h4 className="text-[0.7rem] font-black uppercase tracking-[0.4em] text-coral opacity-60">Studio Root</h4>
         <p className="font-serif text-lg italic text-ivy">Dubai Design District<br/>Greenhouse 09, Bloom Way</p>
      </div>
      <div className="space-y-6">
         <h4 className="text-[0.7rem] font-black uppercase tracking-[0.5em] text-hydrangea opacity-60">Branches</h4>
         <div className="flex flex-col gap-3 font-serif text-lg italic text-ivy">
           <a href="#" className="hover:text-coral transition-colors">Instagram</a>
           <a href="#" className="hover:text-wasabi transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-honey transition-colors">Dribbble</a>
         </div>
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-ivy/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] font-black uppercase tracking-[0.4em] text-ivy opacity-40">
       <p>© 2025 Lycoris Botanical Atelier. Cultivating Brilliance.</p>
       <div className="flex gap-4 items-center">
         <div className="w-4 h-4 rounded-full bg-wasabi"></div>
         <div className="w-4 h-4 rounded-full bg-coral"></div>
         <div className="w-4 h-4 rounded-full bg-honey"></div>
       </div>
    </div>
  </footer>
);
