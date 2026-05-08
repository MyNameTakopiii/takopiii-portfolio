'use client'

import React from 'react';
import Image from 'next/image';
import { useFontSize } from '@/hooks/useFontSize';
import { EducationItem } from '@/types/education';
import { cn } from '@/lib/utils';

interface EducationStepperProps {
  items: EducationItem[];
}

const EducationStepper: React.FC<EducationStepperProps> = ({ items }) => {
  const { getFontSizeClass } = useFontSize();

  const getStatusConfig = (status?: string) => {
    const s = status?.toLowerCase() || '';
    if (s.includes('success') || s.includes('สำเร็จ') || s.includes('graduated')) {
      return {
        borderColor: 'border-green-500',
        shadowColor: 'group-hover:shadow-green-500/50',
        pulseColor: 'bg-green-500',
        textColor: 'text-green-400',
        isCompleted: true
      };
    }
    if (s.includes('in progress') || s.includes('กำลังศึกษา')) {
      return {
        borderColor: 'border-yellow-500',
        shadowColor: 'group-hover:shadow-yellow-500/50',
        pulseColor: 'bg-yellow-500',
        textColor: 'text-yellow-400',
        isCompleted: true // Set to true because user wants it to look like graduated (static)
      };
    }
    return {
      borderColor: 'border-primary dark:border-[#A91D3A]',
      shadowColor: 'group-hover:shadow-primary/50 dark:group-hover:shadow-[#A91D3A]/50',
      pulseColor: 'bg-primary dark:bg-[#A91D3A]',
      textColor: 'text-primary dark:text-[#ff9cb0]',
      isCompleted: false
    };
  };

  return (
    <div className="relative">
      <div className="absolute left-[1.35rem] sm:left-8 top-0 bottom-0 w-1 sm:w-1.5 bg-foreground/20"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => {
          const statusConfig = getStatusConfig(item.status);
          
          return (
            <div key={index} className="relative flex items-start gap-3 sm:gap-6 group">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className={cn(
                  "w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#0f172a] to-[#334155] border-2 flex items-center justify-center shadow-lg transition-all duration-300",
                  statusConfig.borderColor,
                  statusConfig.shadowColor
                )}>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Pulse effect */}
                {!statusConfig.isCompleted && (
                  <div className={cn(
                    "absolute inset-0 rounded-full animate-ping opacity-20",
                    statusConfig.pulseColor
                  )}></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 dark:group-hover:shadow-[#A91D3A]/20">
                <div className="flex flex-col gap-1 sm:gap-2 mb-2 sm:mb-3">
                  <h3 className={getFontSizeClass("text-foreground text-base sm:text-xl lg:text-2xl font-semibold group-hover:text-primary dark:group-hover:text-[#ff9cb0] transition-colors duration-300 leading-tight break-words")}>
                    {item.title}
                  </h3>
                  <span className={getFontSizeClass("text-foreground/80 font-medium text-sm sm:text-base lg:text-lg")}>
                    {item.period}
                  </span>
                </div>
                <p className={getFontSizeClass("text-foreground/70 text-sm sm:text-base leading-relaxed")}>
                  {item.detail}
                </p>
                
                {item.status && (
                  <div className="flex items-center gap-2 mt-3">
                    <div className={cn(
                      "w-3 h-3 rounded-full shadow-lg",
                      statusConfig.pulseColor,
                      statusConfig.shadowColor.replace('group-hover:', '')
                    )}></div>
                    <span className={getFontSizeClass(cn("text-sm font-medium", statusConfig.textColor))}>
                      {item.status}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationStepper;
