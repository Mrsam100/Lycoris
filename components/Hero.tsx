
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-cardstock">
      {/* Botanical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] left-[5%] sm:left-[15%] w-32 h-32 sm:w-64 sm:h-64 bg-wasabi/20 rounded-full blur-3xl animate-petal-drift"></div>
         <div className="absolute bottom-[20%] right-[5%] sm:right-[10%] w-48 h-48 sm:w-96 sm:h-96 bg-honey/15 rounded-full blur-3xl animate-petal-drift animation-delay-2000"></div>
         <div className="absolute top-1/2 left-1/2 w-[90vw] sm:w-[80vw] h-[90vw] sm:h-[80vw] bg-coral/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

         {/* Decorative "Petals" - Hidden on very small screens */}
         <div className="hidden sm:block absolute top-1/4 right-1/4 w-12 h-20 bg-wasabi/40 rounded-[100%_0%_100%_0%] rotate-45 animate-float-slow"></div>
         <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-8 h-12 bg-coral/30 rounded-[0%_100%_0%_100%] -rotate-12 animate-float-slow animation-delay-3000"></div>
      </div>

      <div className="relative z-10 text-center max-w-7xl w-full">
        <div className="mb-8 sm:mb-12 inline-block animate-float-slow">
          <span className="bg-white border-2 border-ivy px-3 sm:px-6 py-1.5 sm:py-2 text-[0.5rem] sm:text-[0.7rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] stamp-shadow text-ivy">
            Seedlings v.09 — Seasonal Harvest
          </span>
        </div>

        <h1 className="font-serif text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tighter mb-12 sm:mb-16 text-ivy px-4">
          Pressed <br />
          <span className="relative inline-block hover:scale-105 transition-transform">
             <span className="text-coral italic underline decoration-wasabi decoration-[6px] sm:decoration-[12px] underline-offset-[8px] sm:underline-offset-[16px]">Beauty</span>
             <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-12 w-12 h-12 sm:w-20 sm:h-20 bg-honey/30 rounded-full blur-xl pointer-events-none animate-pulse"></div>
          </span>
          <br />
          Digitally.
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 mt-12 sm:mt-20">
           <div className="max-w-lg text-left sm:text-left border-l-[6px] sm:border-l-[10px] border-wasabi pl-4 sm:pl-10">
              <p className="font-serif text-lg sm:text-2xl md:text-3xl italic font-medium leading-tight sm:leading-tight text-ivy/80">
                We bridge the gap between organic roots and digital canopies. Crafting brands that breathe and identities that bloom.
              </p>
           </div>

           <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 lg:gap-8 w-full xs:w-auto">
             <a href="#work" className="px-8 sm:px-12 lg:px-14 py-5 sm:py-6 bg-ivy text-wasabi font-black uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[0.65rem] sm:text-[0.75rem] hover:bg-coral transition-all stamp-shadow hover:translate-x-1 hover:translate-y-1 text-center active:scale-95">
               See Harvest
             </a>
             <a href="#spark" className="px-8 sm:px-12 lg:px-14 py-5 sm:py-6 bg-white border-2 border-ivy text-ivy font-black uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[0.65rem] sm:text-[0.75rem] hover:bg-honey transition-all stamp-shadow hover:translate-x-1 hover:translate-y-1 text-center active:scale-95">
               The Studio
             </a>
           </div>
        </div>
      </div>

      {/* Botanical Scales */}
      <div className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-4 opacity-30">
         {[1, 2, 3, 4, 5].map(m => (
           <div key={m} className="flex items-center gap-4">
              <div className={`h-1 bg-ivy transition-all ${m === 3 ? 'w-24 bg-coral' : 'w-12'}`}></div>
              <span className="font-black text-[0.6rem] uppercase tracking-widest text-ivy">{m * 20}% Bloom</span>
           </div>
         ))}
      </div>
    </section>
  );
};

export default Hero;
