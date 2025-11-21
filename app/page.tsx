'use client';

import { useState } from 'react';
import { Music2, RefreshCw, Sparkles } from 'lucide-react';
import GeneralTrack from '@/components/GeneralTrack';
import WorldMusic from '@/components/WorldMusic';
import Production from '@/components/Production';
import VocalSection from '@/components/VocalSection';
import MixingSection from '@/components/MixingSection';
import LyricsInput from '@/components/LyricsInput';
import PromptDisplay from '@/components/PromptDisplay';
import SavedPrompts from '@/components/SavedPrompts';
import { PromptOptions, SavedPrompt } from '@/lib/types';
import { generatePrompt, savePromptToLocal, truncatePrompt } from '@/lib/promptGenerator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [options, setOptions] = useState<PromptOptions>({});
  const [prompt, setPrompt] = useState('');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleGenerate = () => {
    const newPrompt = generatePrompt(options);
    setPrompt(newPrompt);
  };

  const handleSave = (name: string) => {
    const finalPrompt = truncatePrompt(prompt, 1000);
    savePromptToLocal(finalPrompt, name, options);
    setRefreshTrigger(prev => prev + 1);
  };

  const handleLoad = (saved: SavedPrompt) => {
    setOptions(saved.options);
    setPrompt(saved.prompt);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setOptions({});
    setPrompt('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f3460]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.1),transparent_50%,rgba(236,72,153,0.1),transparent_50%,rgba(139,92,246,0.1))] animate-[spin_20s_linear_infinite]"></div>
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
                <p className="text-xs sm:text-sm text-white/70 font-medium mt-0.5 sm:mt-1 hidden sm:block">SUNO için detaylı ve zengin müzik prompt'ları oluşturun</p>
              </div>
            </div>
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="bg-background/50 border-border/50 text-white hover:bg-background/70 w-full sm:w-auto"
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Formu Temizle</span>
            </Button>
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
                  onChange={(newOptions) => setOptions(prev => ({ ...prev, ...newOptions }))}
                />
                
                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <WorldMusic
                    options={options}
                    onChange={(newOptions) => setOptions(prev => ({ ...prev, ...newOptions }))}
                  />
                </div>
                
                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <Production
                    options={options}
                    onChange={(newOptions) => setOptions(prev => ({ ...prev, ...newOptions }))}
                  />
                </div>
                
                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <VocalSection
                    options={options}
                    onChange={(newOptions) => setOptions(prev => ({ ...prev, ...newOptions }))}
                  />
                </div>
                
                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <MixingSection
                    options={options}
                    onChange={(newOptions) => setOptions(prev => ({ ...prev, ...newOptions }))}
                  />
                </div>
                
                <div className="border-t border-border/50 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                  <LyricsInput
                    lyrics={options.lyrics || ''}
                    onChange={(lyrics) => setOptions(prev => ({ ...prev, lyrics }))}
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
                <PromptDisplay
                  prompt={prompt}
                  onSave={handleSave}
                />
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
        <footer className="mt-20 text-center">
          <p className="text-white/50 text-sm font-medium">© 2024 Suno AI Prompt Generator - Müziğinizi yaratın 🎵</p>
        </footer>
      </main>
    </div>
  );
}
