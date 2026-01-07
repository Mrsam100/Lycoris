
import React, { useState } from 'react';
import { getCreativeSpark } from '../services/geminiService';
import { SparkResult } from '../types';

// Helper to sanitize text output to prevent XSS
const sanitizeText = (text: string): string => {
  return text.replace(/[<>]/g, '');
};

const SparkTool: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [vibe, setVibe] = useState('Organic');
  const [result, setResult] = useState<SparkResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!industry.trim()) {
      setError('Please enter an industry or sector');
      return;
    }

    if (industry.trim().length < 2) {
      setError('Industry name must be at least 2 characters');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await getCreativeSpark(industry.trim(), vibe);
      setResult(data);
    } catch (err) {
      console.error('Error generating creative spark:', err);
      const errorMessage = err instanceof Error ? err.message : 'Seed failed to sprout. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Limit input length
    if (value.length <= 200) {
      setIndustry(value);
      // Clear error when user starts typing
      if (error) setError('');
    }
  };

  return (
    <section id="spark" className="relative px-4 sm:px-6 lg:px-24 py-24 sm:py-32 lg:py-48 bg-wasabi/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 sm:gap-16 lg:gap-24 items-center">

          <div>
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-coral border-2 border-ivy flex items-center justify-center text-2xl sm:text-3xl stamp-shadow">🌱</div>
               <span className="text-[0.6rem] sm:text-[0.75rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-ivy opacity-40">The Botanical Synthesizer</span>
            </div>

            <h2 className="font-serif text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-bold leading-[0.85] mb-8 sm:mb-14 text-ivy tracking-tighter">
              Harvest Your <br />
              <span className="text-coral italic underline decoration-honey decoration-[6px] sm:decoration-[10px] underline-offset-4 sm:underline-offset-8">Idea.</span>
            </h2>

            <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-medium text-ivy/60 mb-12 sm:mb-16 max-w-lg leading-tight">
              Plant your sector parameters. Synthesize a core visual nectar forged in the heat of seasonal creativity.
            </p>

            <form onSubmit={handleGenerate} className="space-y-8 sm:space-y-10 lg:space-y-12">
               <div className="space-y-3 sm:space-y-4">
                 <label htmlFor="spark-industry" className="text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-ivy mb-2 block">Seed Sector *</label>
                 <input
                   type="text"
                   id="spark-industry"
                   value={industry}
                   onChange={handleIndustryChange}
                   placeholder="e.g. Mycelium Architecture"
                   required
                   minLength={2}
                   maxLength={200}
                   aria-required="true"
                   aria-invalid={error ? 'true' : 'false'}
                   aria-describedby={error ? 'spark-error' : undefined}
                   className="w-full bg-white border-2 border-ivy p-5 sm:p-6 lg:p-7 text-lg sm:text-xl lg:text-2xl font-bold outline-none focus:bg-wasabi/20 focus:ring-2 focus:ring-ivy/20 transition-all stamp-shadow placeholder:text-ivy/20"
                 />
                 {error && (
                   <p id="spark-error" className="text-coral font-bold text-sm mt-2" role="alert">
                     {sanitizeText(error)}
                   </p>
                 )}
               </div>

               <div className="space-y-3 sm:space-y-4">
                 <label className="text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-ivy mb-2 block">Vibe Selection</label>
                 <div className="flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="Vibe options">
                   {['Organic', 'Kinetic', 'Floral', 'Digital', 'Hybrid'].map((v) => (
                     <button
                       key={v}
                       type="button"
                       onClick={() => setVibe(v)}
                       aria-pressed={vibe === v}
                       className={`px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 border-2 border-ivy font-black text-[0.6rem] sm:text-[0.7rem] uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-ivy/50 active:scale-95 ${vibe === v ? 'bg-ivy text-wasabi -translate-y-1' : 'bg-white text-ivy hover:bg-wasabi stamp-shadow'}`}
                     >
                       {v}
                     </button>
                   ))}
                 </div>
               </div>

               <button
                type="submit"
                disabled={loading || !industry.trim()}
                className="w-full py-6 sm:py-7 lg:py-8 bg-ivy text-wasabi font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[0.65rem] sm:text-xs hover:bg-coral hover:text-white transition-all stamp-shadow hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-ivy/50 active:scale-95"
              >
                {loading ? 'Cultivating...' : 'Ignite Growth Engine'}
              </button>
            </form>
          </div>

          <div className="relative mt-12 lg:mt-0">
             {/* Decorative Garden Elements */}
             <div className="absolute -top-12 -right-12 w-48 h-48 sm:w-64 sm:h-64 bg-honey/20 rounded-full blur-3xl -z-10 animate-float-slow"></div>
             <div className="absolute -bottom-12 -left-12 w-60 h-60 sm:w-80 sm:h-80 bg-wasabi/20 rounded-full blur-3xl -z-10 animate-float-slow animation-delay-3000"></div>

             <div className="bg-white p-6 sm:p-10 lg:p-12 xl:p-16 border-2 border-ivy min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex flex-col justify-between relative stamp-shadow overflow-hidden">
                <div className="absolute inset-0 bg-wasabi/5 opacity-40 pointer-events-none"></div>

                {result ? (
                  <div className="relative z-10 animate-in fade-in zoom-in duration-700">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-ivy/10">
                       <div className="bg-ivy text-wasabi px-4 sm:px-5 py-2 text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-widest italic">CROP_ID: {Math.floor(Math.random()*9999)}</div>
                       <div className="flex gap-2" role="presentation">
                          <div className="w-3 h-3 bg-wasabi rounded-full"></div>
                          <div className="w-3 h-3 bg-coral rounded-full"></div>
                          <div className="w-3 h-3 bg-honey rounded-full"></div>
                       </div>
                    </div>

                    <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black italic text-ivy leading-[0.85] mb-6 sm:mb-8 tracking-tighter break-words">{sanitizeText(result.brandName)}</h3>
                    <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-coral font-bold italic mb-8 sm:mb-12">"{sanitizeText(result.tagline)}"</p>

                    <div className="p-6 sm:p-8 bg-cardstock border-2 border-ivy mb-8 sm:mb-12 italic relative overflow-hidden group">
                       <div className="absolute top-0 left-0 w-2 h-full bg-honey"></div>
                       <p className="font-serif text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-ivy relative z-10">"{sanitizeText(result.reasoning)}"</p>
                    </div>

                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-6 sm:gap-8 lg:gap-12">
                       <div
                         className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border-2 border-ivy stamp-shadow rotate-12 animate-float-slow flex-shrink-0"
                         style={{ backgroundColor: sanitizeText(result.primaryColor) }}
                         aria-label={`Primary color swatch: ${result.primaryColor}`}
                       ></div>
                       <div>
                          <p className="text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-ivy opacity-30 mb-2">Harvest Frequency Swatch</p>
                          <p className="font-mono text-2xl sm:text-3xl lg:text-4xl text-ivy font-black tracking-tighter uppercase break-all">{sanitizeText(result.primaryColor)}</p>
                       </div>
                    </div>
                  </div>
                ) : error ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                    <div className="text-6xl sm:text-7xl lg:text-[8rem] mb-6 sm:mb-8" role="presentation">⚠️</div>
                    <p className="font-serif italic text-xl sm:text-2xl max-w-md font-bold text-coral mb-4">Generation Failed</p>
                    <p className="text-ivy/60 text-sm sm:text-base">{sanitizeText(error)}</p>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 px-4">
                    <div className="text-8xl sm:text-9xl lg:text-[12rem] mb-8 sm:mb-12 animate-float-slow" role="presentation">🌿</div>
                    <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl max-w-sm font-bold text-ivy">Plant Signal to Begin Germination</p>
                  </div>
                )}

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-ivy/10 text-[0.55rem] sm:text-[0.6rem] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] opacity-30 text-center text-ivy">
                  Synthesized via Lycoris Botanical Lab v9.2
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SparkTool;
