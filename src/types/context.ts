export type Language = 'th' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

export type FontSize = 'small' | 'medium' | 'large';

export interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  getFontSizeClass: (baseClass: string) => string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
