
import React from 'react';
import { Header, Footer } from './components/Layout';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Work from './components/Work';
import SparkTool from './components/SparkTool';
import Contact from './components/Contact';
import { SERVICES, STATS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-wasabi selection:text-ivy overflow-x-hidden bg-cardstock">
      <Header />
      <main id="main-content">
        <Hero />
        
        {/* Animated Botanical Divider */}
        <div className="relative border-y-2 border-ivy py-4 bg-white overflow-hidden rotate-1 scale-105 z-20">
           <Marquee />
        </div>

        {/* About: The Organic Approach */}
        <About />

        {/* Harvest Statistics */}
        <section className="px-6 lg:px-24 py-48 bg-cardstock relative overflow-hidden" aria-label="Company statistics">
           <div className="absolute top-0 left-0 w-full h-full bg-wasabi/5 opacity-50 pointer-events-none blur-[150px]" aria-hidden="true"></div>
           <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
             {STATS.map((stat, i) => (
               <div key={i} className={`bg-white p-14 border-2 border-ivy stamp-shadow transition-all duration-700 hover:-translate-y-4 hover:-rotate-1 flex flex-col justify-between h-[450px] group`}>
                 <p className={`font-serif text-8xl font-bold italic leading-none ${stat.color} group-hover:scale-110 transition-transform`} aria-label={`${stat.value} ${stat.label}`}>{stat.value}</p>
                 <div className="pt-10 border-t border-ivy/10">
                   <p className="text-[0.75rem] font-black uppercase tracking-[0.5em] opacity-40 text-ivy">{stat.label}</p>
                   <div className="h-4 w-full bg-ivy/5 mt-6 overflow-hidden rounded-full relative" role="presentation">
                      <div className={`h-full bg-current transition-all duration-1000 ${stat.color} w-3/4`}></div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </section>

        <Work />

        {/* Capabilities Section */}
        <section id="services" className="px-6 lg:px-24 py-64 bg-white soft-torn relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-32 items-end mb-40">
                <div className="relative">
                   <span className="inline-block bg-wasabi text-ivy border-2 border-ivy px-6 py-2 text-[0.7rem] font-black uppercase mb-10 stamp-shadow">Harvest Capabilities</span>
                   <h2 className="font-serif text-[5rem] md:text-[9.5rem] font-bold italic leading-[0.75] text-ivy tracking-tighter">
                     The <br /><span className="text-coral italic underline decoration-honey decoration-[12px] underline-offset-[20px]">Studio</span> <br /> Output.
                   </h2>
                </div>
                <p className="font-serif text-3xl md:text-4xl italic font-bold text-ivy/30 leading-tight tracking-tight uppercase">
                  Our Atelier methodology cultivates organic growth through digital precision and high-vis botanical energy.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((service) => (
                  <div key={service.id} className="group bg-cardstock p-16 md:p-20 border-2 border-ivy stamp-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col justify-between min-h-[500px] relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-wasabi/10 rotate-45 border-ivy/5 border"></div>
                    <div className="flex justify-between items-start">
                       <span className="font-mono text-[0.8rem] font-black text-ivy/20">{service.id} // BIOMETRIC</span>
                       <div className={`w-20 h-20 border-2 border-ivy stamp-shadow ${service.color} transition-transform group-hover:rotate-45`}></div>
                    </div>
                    <div>
                       <h3 className="text-6xl font-serif font-bold italic mb-10 text-ivy group-hover:text-coral transition-colors">{service.name}</h3>
                       <p className="font-serif text-2xl italic font-medium leading-relaxed text-ivy/40 max-w-sm">
                         Forging organic brand signals into high-clarity visual synthetics and tactile pulp legacies.
                       </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Testimonial Bloom */}
        <section className="bg-ivy py-64 px-8 relative overflow-hidden soft-torn border-y-4 border-wasabi" aria-label="Client testimonial">
           <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 right-0 w-full h-full bg-wasabi/10 animate-petal-drift"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-coral/5 blur-3xl rounded-full"></div>
           </div>
           <div className="max-w-[1200px] mx-auto text-center relative z-10">
              <p className="text-wasabi text-[15rem] font-serif block mb-12 leading-none opacity-40" aria-hidden="true">✿</p>
              <blockquote className="font-serif text-6xl md:text-8xl font-bold italic text-white leading-tight mb-32 drop-shadow-2xl">
                A masterpiece of growth. They didn't just build our brand; they <span className="underline decoration-wasabi decoration-8 underline-offset-8">harvested our soul</span> and made it bloom.
              </blockquote>

              <div className="inline-flex flex-col items-center">
                 <div className="w-32 h-32 bg-white p-4 border-2 border-ivy mb-10 -rotate-6 stamp-shadow overflow-hidden group" aria-hidden="true">
                    <div className="w-full h-full bg-gradient-to-tr from-wasabi via-coral to-honey animate-petal-drift rounded-full transition-transform group-hover:scale-125"></div>
                 </div>
                 <cite className="text-5xl font-black text-white tracking-tighter not-italic">Sarah Chen</cite>
                 <p className="text-[0.8rem] uppercase tracking-[0.6em] text-wasabi font-black mt-6">Atelier Director, Terre & Stone</p>
              </div>
           </div>
        </section>

        <SparkTool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
