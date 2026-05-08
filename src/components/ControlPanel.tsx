'use client'

import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import FontSizeSwitcher from './FontSizeSwitcher';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';

const ControlPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-3 bg-gradient-to-r from-primary dark:from-[#A91D3A] to-primary/80 dark:to-[#C72C41] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95",
          isOpen ? "rotate-90" : "rotate-0"
        )}
        aria-label="Settings"
      >
        <Settings size={20} />
      </button>

      {/* Control Panel */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-xl p-5 border border-gray-200 dark:border-white/10 shadow-2xl min-w-[240px] animate-in fade-in-0 slide-in-from-top-4 duration-300">
          <div className="space-y-6">
            {/* Language Switcher */}
            <div>
              <h3 className="text-foreground text-sm font-bold mb-3 tracking-wide uppercase opacity-70">Language</h3>
              <LanguageSwitcher />
            </div>

            {/* Font Size Switcher */}
            <div>
              <h3 className="text-foreground text-sm font-bold mb-3 tracking-wide uppercase opacity-70">Font Size</h3>
              <FontSizeSwitcher />
            </div>

            {/* Theme Switcher */}
            <div>
              <h3 className="text-foreground text-sm font-bold mb-3 tracking-wide uppercase opacity-70">Theme</h3>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 -z-10 bg-black/5"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ControlPanel;
