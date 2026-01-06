
import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cardstock">
      <div className="relative">
        {/* Animated flower spinner */}
        <div className="w-24 h-24 relative animate-spin">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-wasabi rounded-full opacity-20"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-coral rounded-full opacity-30"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-honey rounded-full opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl animate-pulse">🌸</span>
          </div>
        </div>
      </div>

      <p className="mt-8 font-serif text-2xl font-bold italic text-ivy animate-pulse">
        {message}
      </p>

      <div className="flex gap-2 mt-4">
        <div className="w-2 h-2 bg-wasabi rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-honey rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
