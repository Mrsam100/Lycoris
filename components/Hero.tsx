
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-cardstock">
      {/* Botanical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-wasabi/20 rounded-full blur-3xl animate-petal-drift"></div>
         <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-honey/15 rounded-full blur-3xl animate-petal-drift animation-delay-2000"></div>
         <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] bg-coral/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
         
         {/* Decorative "Petals" */}
         <div className="absolute top-1/4 right-1/4 w-12 h-20 bg-wasabi/40 rounded-[100%_0%_100%_0%] rotate-45 animate-float-slow"></div>
         <div className="absolute bottom-1/3 left-1/3 w-8 h-12 bg-coral/30 rounded-[0%_100%_0%_100%] -rotate-12 animate-float-slow animation-delay-3000"></div>
      </div>

      <div className="relative z-10 text-center max-w-7xl">
        <div className="mb-12 inline-block animate-float-slow">
          <span className="bg-white border-2 border-ivy px-6 py-2 text-[0.7rem] font-black uppercase tracking-[0.5em] stamp-shadow text-ivy">
            Seedlings v.09 — Seasonal Harvest
          </span>
        </div>

        <h1 className="font-serif text-[4.5rem] md:text-[8rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tighter mb-16 text-ivy">
          Pressed <br />
          <span className="relative inline-block hover:scale-105 transition-transform">
             <span className="text-coral italic underline decoration-wasabi decoration-[12px] underline-offset-[16px]">Beauty</span>
             <div className="absolute -top-10 -right-12 w-20 h-20 bg-honey/30 rounded-full blur-xl pointer-events-none animate-pulse"></div>
          </span>
          <br />
          Digitally.
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-20">
           <div className="max-w-lg text-left border-l-[10px] border-wasabi pl-10">
              <p className="font-serif text-2xl md:text-3xl italic font-medium leading-tight text-ivy/80">
                We bridge the gap between organic roots and digital canopies. Crafting brands that breathe and identities that bloom.
              </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-8">
             <a href="#work" className="px-14 py-6 bg-ivy text-wasabi font-black uppercase tracking-[0.4em] text-[0.75rem] hover:bg-coral transition-all stamp-shadow hover:translate-x-1 hover:translate-y-1">
               See Harvest
             </a>
             <a href="#spark" className="px-14 py-6 bg-white border-2 border-ivy text-ivy font-black uppercase tracking-[0.4em] text-[0.75rem] hover:bg-honey transition-all stamp-shadow hover:translate-x-1 hover:translate-y-1">
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
