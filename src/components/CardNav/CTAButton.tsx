'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { CTAButtonProps } from '@/types/navigation';

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  onClick, 
  text, 
  isTablet, 
  isMobile, 
  bgColor, 
  textColor 
}) => {
  if (isMobile) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "card-nav-cta-button md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] h-full font-medium cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105 active:scale-95 py-2 whitespace-nowrap",
        isTablet ? "px-3 text-sm" : "px-4 text-base",
        isTablet ? "hidden md:inline-flex" : "hidden md:inline-flex"
      )}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </button>
  );
};
