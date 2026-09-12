import React from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'horizontal' | 'rectangle' | 'sidebar' | 'banner';
  className?: string;
  label?: string;
}

export default function AdBanner({
  slot = '1234567890',
  format = 'horizontal',
  className = '',
  label = 'Advertisement'
}: AdBannerProps) {
  const getFormatClasses = () => {
    switch (format) {
      case 'banner':
        return 'w-full h-24 sm:h-28 md:h-32 max-w-5xl mx-auto';
      case 'rectangle':
        return 'w-full h-64 max-w-sm mx-auto';
      case 'sidebar':
        return 'w-full h-80 max-w-xs mx-auto';
      case 'horizontal':
      default:
        return 'w-full h-24 sm:h-28 max-w-4xl mx-auto';
    }
  };

  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full flex justify-center mb-1">
        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 dark:text-gray-500">
          {label}
        </span>
      </div>
      
      {/* Real AdSense Placement Container & Fallback Visual Mock */}
      <div
        className={`relative overflow-hidden rounded-lg border border-dashed border-gray-300 dark:border-gray-800 bg-gray-50/60 dark:bg-editorial-subtle/40 flex flex-col items-center justify-center p-4 transition-all hover:border-gold-500/50 ${getFormatClasses()}`}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            AdSense Ready Placement
          </p>
          <p className="text-[11px] font-mono text-gray-400/80 dark:text-gray-600 mt-0.5">
            Slot: {slot} &bull; Responsive {format}
          </p>
        </div>

        {/* Real AdSense Script Hook is injected when AdSense is active */}
        <div className="hidden">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9876543210123456"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </div>
  );
}
