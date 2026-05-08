'use client'

import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { NavCardProps } from '@/types/navigation';
import { cn } from '@/lib/utils';

export const NavCard: React.FC<NavCardProps> = ({ 
  item, 
  isMobile, 
  isTablet, 
  setRef 
}) => {
  const labelSizeClass = isMobile 
    ? "text-[15px]" 
    : isTablet 
    ? "text-[17px]" 
    : "text-[18px] lg:text-[20px]";

  const linkSizeClass = isMobile 
    ? "text-[13px] min-h-[28px]" 
    : "text-[14px] sm:text-[15px] min-h-[24px]";

  return (
    <div
      className="nav-card select-none relative flex flex-col gap-2 p-[12px_14px] sm:p-[14px_16px] rounded-[calc(0.6rem-0.1rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[50px] sm:min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%] backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      ref={setRef}
      style={{ background: item.bgColor, color: item.textColor }}
    >
      <div className={cn("nav-card-label font-medium tracking-tight leading-tight", labelSizeClass)}>
        {item.label}
      </div>
      <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
        {item.links?.map((lnk, i) => (
          <a
            key={`${lnk.label}-${i}`}
            className={cn(
              "nav-card-link inline-flex items-center gap-[5px] sm:gap-[6px] no-underline cursor-pointer transition-all duration-300 hover:opacity-75 hover:translate-x-1 active:opacity-60 leading-tight",
              linkSizeClass
            )}
            href={lnk.href}
            aria-label={lnk.ariaLabel}
            target={lnk.href.startsWith('http') ? '_blank' : '_self'}
            rel={lnk.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <GoArrowUpRight
              className={cn(
                "nav-card-link-icon shrink-0",
                isMobile ? "w-[13px] h-[13px]" : "w-[15px] h-[15px]"
              )}
              aria-hidden="true"
            />
            <span className="break-words">{lnk.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
