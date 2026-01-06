
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="px-6 lg:px-24 py-40 bg-cotton relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-sky text-blue-800 text-[0.6rem] font-black uppercase rounded-lg mb-6 tracking-widest">Connect</span>
          <h2 className="font-serif text-6xl md:text-8xl font-bold leading-[0.9] text-ink mb-10">
            Let’s start the <br /><span className="text-apricot italic">Dialogue.</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-ink/60 mb-12 max-w-sm">
            Ready to brighten up your vision? We’re currently accepting select projects for Q3 2025.
          </p>
          <div className="space-y-6">
            <a href="mailto:hello@lycoris.design" className="flex items-center gap-6 group">
              <span className="w-16 h-16 flex items-center justify-center bg-apricot rounded-2xl text-white text-2xl transition-transform group-hover:rotate-12 group-hover:scale-110">✉</span>
              <span className="text-xl font-bold text-ink group-hover:text-apricot transition-colors underline decoration-black/5">hello@lycoris.design</span>
            </a>
            <a href="tel:+97142234567" className="flex items-center gap-6 group">
              <span className="w-16 h-16 flex items-center justify-center bg-lavender rounded-2xl text-white text-2xl transition-transform group-hover:-rotate-12 group-hover:scale-110">☎</span>
              <span className="text-xl font-bold text-ink group-hover:text-lavender transition-colors underline decoration-black/5">+971 4 223 4567</span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-2xl border border-black/5 relative soft-press">
          {submitted ? (
            <div className="h-[500px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="text-8xl mb-8">🪷</div>
              <h3 className="text-4xl font-black text-ink mb-4">Signal Received</h3>
              <p className="text-xl text-ink/50">Our team will reach out shortly. <br/> Stay bright.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Full Name</label>
                  <input type="text" placeholder="Design Lover" className="px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot transition-all placeholder:text-ink/20 font-bold" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Email</label>
                  <input type="email" placeholder="you@hello.com" className="px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot transition-all placeholder:text-ink/20 font-bold" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Vertical</label>
                <select className="px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot transition-all font-bold appearance-none cursor-pointer">
                  <option>Select Industry</option>
                  <option>Lifestyle & Fashion</option>
                  <option>Tech & Vision</option>
                  <option>Food & Experience</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Manifesto</label>
                <textarea placeholder="Tell us about the dream..." className="min-h-[150px] resize-none px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot transition-all placeholder:text-ink/20 font-bold"></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-ink text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-apricot transition-all shadow-xl hover:-translate-y-1">
                Launch Transmission
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
