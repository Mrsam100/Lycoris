
import React from 'react';

export const Header: React.FC = () => (
  <header className="fixed top-6 left-0 right-0 z-[1000] px-6 flex justify-between items-center pointer-events-none">
    {/* Skip to main content link for accessibility */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[1001] focus:bg-ivy focus:text-wasabi focus:px-4 focus:py-2 pointer-events-auto"
    >
      Skip to main content
    </a>

    <a
      href="#"
      aria-label="Lycoris by Gregorious AI Studio - Home"
      className="pointer-events-auto bg-white border-2 border-ivy px-8 py-3 font-black text-xl tracking-tighter stamp-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all focus:outline-none focus:ring-4 focus:ring-ivy/50 flex items-center gap-3"
    >
      <span className="text-3xl" aria-hidden="true">🤖</span>
      <div className="flex flex-col leading-none">
        <span className="text-sm tracking-wider opacity-60">GREGORIOUS AI</span>
        <span className="text-2xl">LYCORIS<span className="text-coral">✿</span></span>
      </div>
    </a>

    <nav className="hidden md:flex gap-1 pointer-events-auto bg-white border-2 border-ivy p-1 stamp-shadow" aria-label="Main navigation">
      <a href="#work" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] text-ivy hover:bg-wasabi transition-all focus:outline-none focus:ring-2 focus:ring-ivy/50">Harvest</a>
      <a href="#services" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] text-ivy hover:bg-honey transition-all focus:outline-none focus:ring-2 focus:ring-ivy/50">Process</a>
      <a href="#spark" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] bg-ivy text-wasabi hover:bg-coral hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-coral/50">The Studio</a>
      <a href="#contact" className="px-6 py-3 font-bold uppercase text-[0.65rem] tracking-[0.2em] text-ivy hover:bg-hydrangea transition-all focus:outline-none focus:ring-2 focus:ring-ivy/50">Connect</a>
    </nav>

    <div className="md:hidden pointer-events-auto w-14 h-14 bg-wasabi border-2 border-ivy flex items-center justify-center stamp-shadow" role="presentation">
       <span className="text-2xl text-ivy" aria-hidden="true">🌿</span>
    </div>
  </header>
);

export const Footer: React.FC = () => (
  <footer className="relative bg-cardstock pt-32 pb-16 px-6 border-t-2 border-ivy overflow-hidden soft-torn">
    <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none" aria-hidden="true">
       <div className="w-[40vw] h-[40vw] bg-wasabi rounded-full blur-[100px] animate-petal-drift"></div>
    </div>

    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-start relative z-10">
      <div className="lg:col-span-2">
         <div className="flex items-center gap-4 mb-6">
           <span className="text-6xl" aria-hidden="true">🤖</span>
           <div>
             <div className="text-xl font-black tracking-wider text-ivy/60 uppercase">Gregorious AI Studio</div>
             <h2 className="text-5xl font-black tracking-tighter italic text-ivy underline decoration-coral decoration-4 underline-offset-8">LYCORIS<span className="text-honey" aria-hidden="true">*</span></h2>
           </div>
         </div>
         <p className="text-xl font-medium leading-relaxed max-w-sm text-ivy/70">
           A contemporary atelier exploring the organic intersection of botanical beauty and digital logic.
         </p>
      </div>
      <div className="space-y-6">
         <h3 className="text-[0.7rem] font-black uppercase tracking-[0.4em] text-coral opacity-60">Studio Root</h3>
         <address className="font-serif text-lg italic text-ivy not-italic">Dubai Design District<br/>Greenhouse 09, Bloom Way</address>
      </div>
      <nav className="space-y-6" aria-label="Social media links">
         <h3 className="text-[0.7rem] font-black uppercase tracking-[0.5em] text-hydrangea opacity-60">Branches</h3>
         <div className="flex flex-col gap-3 font-serif text-lg italic text-ivy">
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors focus:outline-none focus:underline" aria-label="Visit our Instagram">Instagram</a>
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-wasabi transition-colors focus:outline-none focus:underline" aria-label="Visit our LinkedIn">LinkedIn</a>
           <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-honey transition-colors focus:outline-none focus:underline" aria-label="Visit our Dribbble">Dribbble</a>
         </div>
      </nav>
    </div>
    <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-ivy/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] font-black uppercase tracking-[0.4em] text-ivy opacity-40">
       <p>© 2026 Gregorious AI Studio. Powered by Innovation.</p>
       <div className="flex gap-4 items-center" role="presentation" aria-hidden="true">
         <div className="w-4 h-4 rounded-full bg-wasabi"></div>
         <div className="w-4 h-4 rounded-full bg-coral"></div>
         <div className="w-4 h-4 rounded-full bg-honey"></div>
       </div>
    </div>
  </footer>
);
