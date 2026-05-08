'use client'

import React from 'react';
import EducationStepper from './EducationStepper';
import { useLanguage } from '@/hooks/useLanguage';
import { useFontSize } from '@/hooks/useFontSize';
import { EducationItem } from '@/types/education';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';

interface BackgroundProps {
  educationData: EducationItem[];
  experienceData: EducationItem[];
}

const Background: React.FC<BackgroundProps> = ({ educationData, experienceData }) => {
  const { t } = useLanguage();
  const { getFontSizeClass } = useFontSize();
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const currentData = activeTab === 'education' ? educationData : experienceData;
  const currentTitle = activeTab === 'education' ? t('education.title') : t('experience.title');
  const currentDescription = activeTab === 'education' ? t('education.description') : t('experience.description');

  // Early Return for empty data
  if (!educationData || educationData.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 w-full px-4 sm:px-6 lg:px-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000" id="educate">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text content */}
          <div className="text-center lg:text-left lg:flex-shrink-0 lg:max-w-md xl:max-w-lg animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-200">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className={getFontSizeClass("text-3xl sm:text-4xl lg:text-5xl text-foreground font-extrabold mb-4 sm:mb-6")}>
                {currentTitle as string}
              </h2>
              <p className={getFontSizeClass("text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8")}>
                {currentDescription as string}
              </p>

              {/* Tab Switcher */}
              <div className="flex bg-black/5 dark:bg-white/5 backdrop-blur-sm p-1.5 rounded-xl border border-gray-200 dark:border-white/10 w-fit mx-auto lg:mx-0">
                <button
                  onClick={() => setActiveTab('education')}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300",
                    activeTab === 'education' 
                      ? "bg-primary dark:bg-[#A91D3A] text-white shadow-md" 
                      : "text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <GraduationCap size={20} />
                  <span>Education</span>
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300",
                    activeTab === 'experience' 
                      ? "bg-primary dark:bg-[#A91D3A] text-white shadow-md" 
                      : "text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <Briefcase size={20} />
                  <span>Experience</span>
                </button>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="relative w-full lg:flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <EducationStepper items={currentData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
