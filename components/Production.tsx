'use client';

import { Settings } from 'lucide-react';
import { TEMPO_OPTIONS, MOODS, HARMONY_TYPES, PRODUCTION_STYLES, SONG_STRUCTURES, DYNAMIC_FLOWS, INSTRUMENTS, PromptOptions } from '@/lib/types';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductionProps {
  options: PromptOptions;
  onChange: (options: Partial<PromptOptions>) => void;
}

export default function Production({ options, onChange }: ProductionProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg sm:rounded-xl blur-md opacity-50"></div>
          <div className="relative p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-lg sm:rounded-xl border border-orange-500/30">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words">3. Prodüksiyon & Enstrümanlar (Production & Instruments)</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        {[
          { key: 'tempo', label: 'Tempo / Hız (Tempo / Speed)', options: TEMPO_OPTIONS, placeholder: '-- Tempo seçin --' },
          { key: 'mood', label: 'Mod / Duygu (Mood)', options: MOODS, placeholder: '-- Mod seçin --' },
          { key: 'harmonyType', label: 'Genel Armoni Tipi (Harmony Type)', options: HARMONY_TYPES, placeholder: '-- Armoni Tipi Seçin --' },
          { key: 'productionStyle', label: 'Prodüksiyon Tarzı (Production Style)', options: PRODUCTION_STYLES, placeholder: '-- Prodüksiyon seçin --' },
          { key: 'songStructure', label: 'Parça Yapısı (Song Structure)', options: SONG_STRUCTURES, placeholder: '-- Yapı seçin --' },
          { key: 'dynamicFlow', label: 'Dinamik Akış (Dynamic Flow)', options: DYNAMIC_FLOWS, placeholder: '-- Akış seçin --' },
          { key: 'leadInstrument', label: 'Lead Enstrüman (Lead Instrument)', options: INSTRUMENTS, placeholder: '-- Lead seçin --' },
          { key: 'accompanyingInstrument', label: 'Accompanying Enstrüman (Accompanying Instrument)', options: INSTRUMENTS, placeholder: '-- Accompanying seçin --' },
          { key: 'bassInstrument', label: 'Bas Enstrüman (Bass Instrument)', options: INSTRUMENTS, placeholder: '-- Bass seçin --' },
          { key: 'percussionInstrument', label: 'Perküsyon Enstrüman (Percussion Instrument)', options: INSTRUMENTS, placeholder: '-- Perküsyon seçin --' },
        ].map(({ key, label, options: selectOptions, placeholder }) => (
          <div key={key} className="space-y-1.5 sm:space-y-2">
            <Label className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider">
              {label}
            </Label>
            <Select
              value={(options[key as keyof PromptOptions] as string) || ''}
              onValueChange={(value) => onChange({ [key]: value || undefined })}
            >
              <SelectTrigger className="w-full bg-background/50 border-border/50 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-[#1a0b2e] border-border">
                {selectOptions.map(option => (
                  <SelectItem key={option} value={option} className="text-white">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  );
}
