import { siteMetadata } from "@/data/metadata";
import "./globals.css";
import CardNav from "@/components/CardNav";
import { FontSizeProvider } from "@/contexts/FontSizeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ControlPanel from "@/components/ControlPanel";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <FontSizeProvider>
              <CardNav
                logo="/logo.png"
                logoAlt="Vipat Portfolio Logo"
                baseColor="var(--card)"
                menuColor="var(--foreground)"
                buttonBgColor="var(--primary)"
                buttonTextColor="var(--primary-foreground)"
                ease="power3.out"
                className="animate-slide-down"
              />
              <ControlPanel />
              <main className="relative min-h-screen">
                {children}
              </main>
            </FontSizeProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}