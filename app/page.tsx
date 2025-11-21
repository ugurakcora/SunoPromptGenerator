"use client";

import { useState } from "react";
import {
  Music2,
  RefreshCw,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";
import GeneralTrack from "@/components/GeneralTrack";
import WorldMusic from "@/components/WorldMusic";
import Production from "@/components/Production";
import VocalSection from "@/components/VocalSection";
import MixingSection from "@/components/MixingSection";
import LyricsInput from "@/components/LyricsInput";
import PromptDisplay from "@/components/PromptDisplay";
import SavedPrompts from "@/components/SavedPrompts";
import { PromptOptions, SavedPrompt } from "@/lib/types";
import {
  generatePrompt,
  savePromptToLocal,
  truncatePrompt,
} from "@/lib/promptGenerator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [options, setOptions] = useState<PromptOptions>({});
  const [prompt, setPrompt] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleGenerate = () => {
    const newPrompt = generatePrompt(options);
    setPrompt(newPrompt);

    // Smooth scroll to prompt display area with custom duration
    setTimeout(() => {
      const promptElement = document.getElementById("prompt-display");
      if (promptElement) {
        const elementPosition = promptElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset from top

        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 1200; // 1.2 seconds for slower scroll
        let start: number | null = null;

        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);

          const ease = easeInOutCubic(progress);
          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    }, 100);
  };

  const handleSave = (name: string) => {
    const finalPrompt = truncatePrompt(prompt, 1000);
    savePromptToLocal(finalPrompt, name, options);
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleLoad = (saved: SavedPrompt) => {
    setOptions(saved.options);
    setPrompt(saved.prompt);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setOptions({});
    setPrompt("");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#1a0b2e] dark:via-[#16213e] dark:to-[#0f3460]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.05),transparent_50%,rgba(236,72,153,0.05),transparent_50%,rgba(139,92,246,0.05))] dark:bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.1),transparent_50%,rgba(236,72,153,0.1),transparent_50%,rgba(139,92,246,0.1))] animate-[spin_20s_linear_infinite]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl sm:rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-2xl">
                  <Music2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black gradient-text tracking-tight break-words">
                  SUNO Şarkı-Müzik Style Prompt Oluşturucu
                </h1>
                <p className="text-xs sm:text-sm text-foreground/70 font-medium mt-0.5 sm:mt-1 hidden sm:block">
                  SUNO için detaylı ve zengin müzik prompt'ları oluşturun
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <Button
                onClick={handleReset}
                variant="outline"
                size="sm"
                className="bg-background/50 border-border/50 text-foreground hover:bg-background/70 w-full sm:w-auto"
              >
                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">Formu Temizle</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Left Column - Options */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Card className="bg-background/50 border-border/50 backdrop-blur-xl">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 sm:space-y-10 md:space-y-12">
                <GeneralTrack
                  options={options}
                  onChange={(newOptions) =>
                    setOptions((prev) => ({ ...prev, ...newOptions }))
                  }
                />

                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <WorldMusic
                    options={options}
                    onChange={(newOptions) =>
                      setOptions((prev) => ({ ...prev, ...newOptions }))
                    }
                  />
                </div>

                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <Production
                    options={options}
                    onChange={(newOptions) =>
                      setOptions((prev) => ({ ...prev, ...newOptions }))
                    }
                  />
                </div>

                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <VocalSection
                    options={options}
                    onChange={(newOptions) =>
                      setOptions((prev) => ({ ...prev, ...newOptions }))
                    }
                  />
                </div>

                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <MixingSection
                    options={options}
                    onChange={(newOptions) =>
                      setOptions((prev) => ({ ...prev, ...newOptions }))
                    }
                  />
                </div>

                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <LyricsInput
                    lyrics={options.lyrics || ""}
                    onChange={(lyrics) =>
                      setOptions((prev) => ({ ...prev, lyrics }))
                    }
                  />
                </div>

                {/* Prompt Oluştur Button */}
                <div className="border-t border-border/50 pt-6 sm:pt-8">
                  <Button
                    onClick={handleGenerate}
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-base sm:text-lg h-12 sm:h-14"
                  >
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Prompt Oluştur</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Output & Saved */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-first lg:order-last">
            <Card className="bg-background/50 border-border/50 backdrop-blur-xl lg:sticky lg:top-32">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <PromptDisplay prompt={prompt} onSave={handleSave} />
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-border/50 backdrop-blur-xl">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <SavedPrompts
                  onLoad={handleLoad}
                  refreshTrigger={refreshTrigger}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-border/50 pt-8 pb-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <p className="text-foreground/70 text-sm font-medium">
                © 2025 Uğur Akçora - Suno AI Prompt Generator - Müziğinizi
                yaratın 🎵
              </p>
              <p className="text-foreground/50 text-xs sm:text-sm">
                Geliştirici:{" "}
                <span className="font-semibold text-foreground/80">
                  Uğur Akçora
                </span>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/ugurakcora"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/50 border border-border/50 hover:border-purple-500/50 transition-all hover:scale-110"
                aria-label="GitHub Profili"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-purple-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              </a>

              <a
                href="https://twitter.com/uguurakcora"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/50 border border-border/50 hover:border-blue-500/50 transition-all hover:scale-110"
                aria-label="Twitter Profili"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-blue-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              </a>

              <a
                href="https://www.linkedin.com/in/ugurakcora"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/50 border border-border/50 hover:border-blue-600/50 transition-all hover:scale-110"
                aria-label="LinkedIn Profili"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-blue-500 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              </a>

              <a
                href="mailto:ugurakcora@outlook.com"
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/50 border border-border/50 hover:border-pink-500/50 transition-all hover:scale-110"
                aria-label="E-posta Gönder"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-pink-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              </a>

              <a
                href="https://ugurakcora.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/50 border border-border/50 hover:border-cyan-500/50 transition-all hover:scale-110"
                aria-label="Portfolio Web Sitesi"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              </a>
            </div>

            <p className="text-foreground/40 text-xs mt-2">
              Sorularınız veya önerileriniz için iletişime geçebilirsiniz
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
