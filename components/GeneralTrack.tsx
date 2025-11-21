'use client';

import { Music } from 'lucide-react';
import { GENRES, ORIGIN_LANGUAGES, TURKISH_MUSIC_STYLES, PromptOptions } from '@/lib/types';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';

interface GeneralTrackProps {
  options: PromptOptions;
  onChange: (options: Partial<PromptOptions>) => void;
}

export default function GeneralTrack({ options, onChange }: GeneralTrackProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl blur-md opacity-50"></div>
          <div className="relative p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg sm:rounded-xl border border-purple-500/30">
            <Music className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words">1. Genel Parça (General Track)</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Müzik Türü (Genre)
          </Label>
          <Select
            value={options.genre || ''}
            onValueChange={(value) => onChange({ genre: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Tür seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {GENRES.map(genre => (
                <SelectItem key={genre} value={genre} className="text-white focus:bg-purple-600/20">
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Alt Tür (Sub Genre)
          </Label>
          <Select
            value={options.subGenre || ''}
            onValueChange={(value) => onChange({ subGenre: value || undefined })}
            disabled={!options.genre}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Alt-tür seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {/* Alt türler genre'a göre dinamik olarak eklenebilir */}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Yöresel Dil (Origin / Language)
          </Label>
          <Select
            value={options.originLanguage || ''}
            onValueChange={(value) => onChange({ originLanguage: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Köken seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {ORIGIN_LANGUAGES.map(lang => (
                <SelectItem key={lang} value={lang} className="text-white">
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Türk Müziği Stili (Turkish Music Style)
          </Label>
          <Select
            value={options.turkishMusicStyle || ''}
            onValueChange={(value) => onChange({ turkishMusicStyle: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Stil Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {TURKISH_MUSIC_STYLES.map(style => (
                <SelectItem key={style} value={style} className="text-white">
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
