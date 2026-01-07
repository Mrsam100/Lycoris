
import React from 'react';

const About: React.FC = () => {
  const blocks = [
    { icon: '🌿', title: 'Organic', desc: 'Designs rooted in natural geometry and human intuition.', color: 'text-wasabi', bg: 'hover:bg-wasabi/5' },
    { icon: '🌺', title: 'Vibrant', desc: 'Chromatic strategies that celebrate the wild diversity of life.', color: 'text-coral', bg: 'hover:bg-coral/5' },
    { icon: '🐝', title: 'Pollinating', desc: 'Identities that spread effortlessly across every digital channel.', color: 'text-honey', bg: 'hover:bg-honey/5' },
    { icon: '💎', title: 'Pressed', desc: 'Polished with the precision of high-end digital craftsmanship.', color: 'text-hydrangea', bg: 'hover:bg-hydrangea/5' },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-24 py-24 sm:py-32 lg:py-48 bg-cardstock relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 mb-16 sm:mb-24 lg:mb-32 items-start">
          <div className="relative">
            <span className="inline-block bg-ivy text-wasabi px-3 sm:px-5 py-1.5 sm:py-2 text-[0.55rem] sm:text-[0.65rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-10 stamp-shadow">Atelier Origins</span>
            <h2 className="font-serif text-[3rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] font-bold leading-[0.85] text-ivy tracking-tighter">
              Cultivated <br /> <span className="text-coral italic decoration-honey decoration-4 sm:decoration-8 underline underline-offset-[8px] sm:underline-offset-[16px]">Intent.</span>
            </h2>
          </div>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-medium leading-relaxed text-ivy/60">
            Life isn't static, and neither should your brand be. We grow identities that adapt, inspire, and flourish in the sunlight of modern markets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blocks.map((block, i) => (
            <div key={i} className={`bg-white p-8 sm:p-10 lg:p-12 border-2 border-ivy stamp-shadow transition-all duration-500 group min-h-[320px] sm:min-h-[350px] lg:h-[400px] flex flex-col justify-between ${block.bg} active:scale-95`}>
              <div className={`text-5xl sm:text-6xl ${block.color} group-hover:scale-125 transition-transform duration-500`}>{block.icon}</div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 uppercase tracking-tighter text-ivy">{block.title}</h3>
                <p className="font-serif text-base sm:text-lg italic text-ivy/50 leading-relaxed">{block.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
