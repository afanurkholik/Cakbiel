// src/components/Layout.tsx
import { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import { profile } from "@/data";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Head>
        <title>{title ? `${title} | ${profile.name}` : profile.name}</title>
        <meta name="description" content={description || profile.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen relative">
        <Navigation 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        
        <main className="transition-all duration-300">
          {children}
        </main>
      </div>
    </>
  );
}
