
import React from 'react';

const Marquee: React.FC = () => {
  const items = ['Brand Harvest', 'Organic Motion', 'Digital Pollen', 'Crafted Blooms'];
  
  return (
    <div className="py-8 bg-ivy text-wasabi overflow-hidden">
      <div className="flex animate-marquee w-max whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, idx) => (
              <span key={idx} className="font-serif text-3xl font-semibold italic px-16 flex items-center gap-16">
                {item} 
                <span className={`w-4 h-4 rounded-full ${idx % 2 === 0 ? 'bg-wasabi' : 'bg-coral'}`}></span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
