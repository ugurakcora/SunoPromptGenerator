'use client';

import { Globe } from 'lucide-react';
import { REGIONS, RHYTHMIC_FEELS, SCALE_MODES, MUSICAL_TEXTURES, PERFORMANCE_CONTEXTS, WORLD_VOCAL_STYLES, ATMOSPHERES, PromptOptions } from '@/lib/types';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface WorldMusicProps {
  options: PromptOptions;
  onChange: (options: Partial<PromptOptions>) => void;
}

export default function WorldMusic({ options, onChange }: WorldMusicProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl blur-md opacity-50"></div>
          <div className="relative p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg sm:rounded-xl border border-blue-500/30">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words">2. Dünya Müzikleri (World Music)</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Bölge / Kıta (Region / Continent)
          </Label>
          <Select
            value={options.region || ''}
            onValueChange={(value) => onChange({ region: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Bölge Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {REGIONS.map(region => (
                <SelectItem key={region} value={region} className="text-white">
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Müzik Geleneği (Musical Tradition)
          </Label>
          <Select
            value={options.musicalTradition || ''}
            onValueChange={(value) => onChange({ musicalTradition: value || undefined })}
            disabled={!options.region}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Önce Bölge Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {/* Geleneğler bölgeye göre dinamik olarak eklenebilir */}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Ana Enstrüman (Primary Instrument)
          </Label>
          <Select
            value={options.primaryInstrument || ''}
            onValueChange={(value) => onChange({ primaryInstrument: value || undefined })}
            disabled={!options.musicalTradition}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Önce Gelenek Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {/* Enstrümanlar geleneğe göre dinamik olarak eklenebilir */}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Ritmik His (Rhythmic Feel)
          </Label>
          <Select
            value={options.rhythmicFeel || ''}
            onValueChange={(value) => onChange({ rhythmicFeel: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Ritim Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {RHYTHMIC_FEELS.map(feel => (
                <SelectItem key={feel} value={feel} className="text-white">
                  {feel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Ölçek / Mod (Scale / Mode)
          </Label>
          <Select
            value={options.scaleMode || ''}
            onValueChange={(value) => onChange({ scaleMode: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Ölçek Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {SCALE_MODES.map(mode => (
                <SelectItem key={mode} value={mode} className="text-white">
                  {mode}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Müzikal Doku (Musical Texture)
          </Label>
          <Select
            value={options.musicalTexture || ''}
            onValueChange={(value) => onChange({ musicalTexture: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Doku Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {MUSICAL_TEXTURES.map(texture => (
                <SelectItem key={texture} value={texture} className="text-white">
                  {texture}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Performans Bağlamı (Performance Context)
          </Label>
          <Select
            value={options.performanceContext || ''}
            onValueChange={(value) => onChange({ performanceContext: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Bağlam Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {PERFORMANCE_CONTEXTS.map(context => (
                <SelectItem key={context} value={context} className="text-white">
                  {context}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
            Vokal Stili (Vocal Style)
          </Label>
          <Select
            value={options.worldVocalStyle || ''}
            onValueChange={(value) => onChange({ worldVocalStyle: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Vokal Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {WORLD_VOCAL_STYLES.map(style => (
                <SelectItem key={style} value={style} className="text-white">
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2 space-y-2">
          <Label className="text-sm font-bold text-white/70 uppercase tracking-wider">
            Atmosfer (Atmosphere)
          </Label>
          <Select
            value={options.atmosphere || ''}
            onValueChange={(value) => onChange({ atmosphere: value || undefined })}
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="-- Atmosfer Seçin --" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a0b2e] border-border">
              {ATMOSPHERES.map(atmos => (
                <SelectItem key={atmos} value={atmos} className="text-white">
                  {atmos}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
