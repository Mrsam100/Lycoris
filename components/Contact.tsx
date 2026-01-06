
import React, { useState, useEffect, useRef } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const industry = formData.get('industry') as string;
    const message = formData.get('message') as string;

    // Basic validation (browser also validates due to required attributes)
    if (!name || !email || !industry || !message) {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // In production, you would send this data to your backend API
    // For now, just show success message
    setSubmitted(true);

    // Clear any existing timeout to prevent memory leak
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSubmitted(false);
      timeoutRef.current = null;
    }, 5000);
  };

  // Cleanup timeout on unmount to prevent memory leak
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="px-6 lg:px-24 py-40 bg-cotton relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-sky text-blue-800 text-[0.6rem] font-black uppercase rounded-lg mb-6 tracking-widest">Connect</span>
          <h2 className="font-serif text-6xl md:text-8xl font-bold leading-[0.9] text-ink mb-10">
            Let's start the <br /><span className="text-apricot italic">Dialogue.</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-ink/60 mb-12 max-w-sm">
            Ready to brighten up your vision? We're currently accepting select projects for Q3 2025.
          </p>
          <div className="space-y-6">
            <a href="mailto:hello@lycoris.design" className="flex items-center gap-6 group" aria-label="Email us at hello@lycoris.design">
              <span className="w-16 h-16 flex items-center justify-center bg-apricot rounded-2xl text-white text-2xl transition-transform group-hover:rotate-12 group-hover:scale-110" aria-hidden="true">✉</span>
              <span className="text-xl font-bold text-ink group-hover:text-apricot transition-colors underline decoration-black/5">hello@lycoris.design</span>
            </a>
            <a href="tel:+97142234567" className="flex items-center gap-6 group" aria-label="Call us at +971 4 223 4567">
              <span className="w-16 h-16 flex items-center justify-center bg-lavender rounded-2xl text-white text-2xl transition-transform group-hover:-rotate-12 group-hover:scale-110" aria-hidden="true">☎</span>
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
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Design Lover"
                    required
                    minLength={2}
                    maxLength={100}
                    aria-required="true"
                    className="px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot focus:ring-2 focus:ring-apricot/20 transition-all placeholder:text-ink/20 font-bold"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Email *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="you@hello.com"
                    required
                    aria-required="true"
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    className="px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot focus:ring-2 focus:ring-apricot/20 transition-all placeholder:text-ink/20 font-bold"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-industry" className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Vertical *</label>
                <select
                  id="contact-industry"
                  name="industry"
                  required
                  aria-required="true"
                  className="px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot focus:ring-2 focus:ring-apricot/20 transition-all font-bold appearance-none cursor-pointer"
                >
                  <option value="">Select Industry</option>
                  <option value="lifestyle">Lifestyle & Fashion</option>
                  <option value="tech">Tech & Vision</option>
                  <option value="food">Food & Experience</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Manifesto *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about the dream..."
                  required
                  minLength={10}
                  maxLength={1000}
                  aria-required="true"
                  className="min-h-[150px] resize-none px-6 py-5 bg-cotton-warm rounded-2xl outline-none border border-transparent focus:border-apricot focus:ring-2 focus:ring-apricot/20 transition-all placeholder:text-ink/20 font-bold"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-ink text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-apricot transition-all shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-apricot/50">
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
