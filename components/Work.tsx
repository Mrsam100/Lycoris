
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="relative px-6 lg:px-24 py-56 bg-white soft-torn -mt-20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-wasabi/5 pointer-events-none blur-3xl"></div>
      
      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-40 gap-16">
          <div className="max-w-4xl">
            <span className="inline-block bg-honey border-2 border-ivy px-5 py-2 text-[0.7rem] font-black uppercase tracking-[0.4em] mb-10">Archive Harvest</span>
            <h2 className="font-serif text-8xl md:text-[10rem] font-bold leading-[0.75] text-ivy tracking-tighter">
              Bolder <br /><span className="text-coral italic decoration-wasabi decoration-[12px] underline underline-offset-8">Blooms.</span>
            </h2>
          </div>
          <p className="font-serif text-3xl font-bold text-ivy/20 italic leading-tight uppercase tracking-tighter max-w-sm">
            "A collection of identities nurtured from seed to digital scale."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, i) => (
            <article 
              key={project.id} 
              className={`group relative ${i % 3 === 1 ? 'lg:translate-y-24' : ''} ${i % 3 === 2 ? 'lg:-translate-y-12' : ''}`}
            >
              <div className="bg-cardstock p-6 border-2 border-ivy stamp-shadow transition-all duration-700 hover:-translate-y-4 hover:rotate-1">
                 <div className="absolute -top-4 -right-4 bg-honey/40 w-16 h-16 rounded-full flex items-center justify-center font-black border border-ivy text-ivy z-20 group-hover:rotate-45 transition-transform">
                   #{project.id}
                 </div>
                 
                 <div className={`aspect-[4/5] bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] ink-multiply"></div>
                    <div className="w-full h-full border-[15px] border-white/20 flex items-center justify-center p-8">
                       <span className="text-white text-9xl font-serif font-black opacity-10 italic select-none">FLORA</span>
                    </div>
                 </div>
                 
                 <div className="mt-10 p-2">
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-hydrangea mb-3">{project.tag}</p>
                    <div className="flex justify-between items-end border-t border-ivy/10 pt-6">
                       <h3 className="font-serif text-4xl font-bold italic text-ivy tracking-tight">{project.title}</h3>
                       <div className="w-14 h-14 bg-white border-2 border-ivy flex items-center justify-center text-3xl group-hover:bg-wasabi group-hover:text-ivy transition-all">
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
