
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="relative px-4 sm:px-6 lg:px-24 py-24 sm:py-32 lg:py-56 bg-white soft-torn -mt-10 sm:-mt-20">
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-wasabi/5 pointer-events-none blur-3xl"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 sm:mb-24 lg:mb-40 gap-8 sm:gap-12 lg:gap-16">
          <div className="max-w-4xl">
            <span className="inline-block bg-honey border-2 border-ivy px-3 sm:px-5 py-1.5 sm:py-2 text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-10">Archive Harvest</span>
            <h2 className="font-serif text-[3.5rem] xs:text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.75] text-ivy tracking-tighter">
              Bolder <br /><span className="text-coral italic decoration-wasabi decoration-[6px] sm:decoration-[12px] underline underline-offset-4 sm:underline-offset-8">Blooms.</span>
            </h2>
          </div>
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-ivy/20 italic leading-tight uppercase tracking-tighter max-w-sm">
            "A collection of identities nurtured from seed to digital scale."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`group relative ${i % 3 === 1 ? 'lg:translate-y-24' : ''} ${i % 3 === 2 ? 'lg:-translate-y-12' : ''}`}
            >
              <div className="bg-cardstock p-4 sm:p-6 border-2 border-ivy stamp-shadow transition-all duration-700 hover:-translate-y-4 hover:rotate-1 active:scale-95">
                 <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-honey/40 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-sm sm:text-base font-black border border-ivy text-ivy z-20 group-hover:rotate-45 transition-transform">
                   #{project.id}
                 </div>

                 <div className={`aspect-[4/5] bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] ink-multiply"></div>
                    <div className="w-full h-full border-[10px] sm:border-[15px] border-white/20 flex items-center justify-center p-4 sm:p-8">
                       <span className="text-white text-6xl sm:text-8xl lg:text-9xl font-serif font-black opacity-10 italic select-none">FLORA</span>
                    </div>
                 </div>

                 <div className="mt-6 sm:mt-10 p-1 sm:p-2">
                    <p className="text-[0.6rem] sm:text-[0.65rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-hydrangea mb-2 sm:mb-3">{project.tag}</p>
                    <div className="flex justify-between items-end border-t border-ivy/10 pt-4 sm:pt-6 gap-2">
                       <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold italic text-ivy tracking-tight">{project.title}</h3>
                       <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white border-2 border-ivy flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-wasabi group-hover:text-ivy transition-all flex-shrink-0">
                          ↗
                       </div>
                    </div>
                 </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
