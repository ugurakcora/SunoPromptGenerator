"use client";

import { Mic } from "lucide-react";
import {
  PRIMARY_VOCALS,
  VOCAL_STYLES,
  VOCAL_TIMBRES,
  VOCAL_EFFECTS,
  FEMALE_VOCAL_RANGES,
  MALE_VOCAL_RANGES,
  PromptOptions,
} from "@/lib/types";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VocalSectionProps {
  options: PromptOptions;
  onChange: (options: Partial<PromptOptions>) => void;
}

export default function VocalSection({ options, onChange }: VocalSectionProps) {
  const showFemaleRange =
    options.primaryVocal?.includes("Kadın") ||
    options.primaryVocal?.includes("Female");
  const showMaleRange =
    options.primaryVocal?.includes("Erkek") ||
    options.primaryVocal?.includes("Male");

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl blur-md opacity-50"></div>
          <div className="relative p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-lg sm:rounded-xl border border-emerald-500/30">
            <Mic className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-words">
          4. Vokal (Vocals)
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        {[
          {
            key: "primaryVocal",
            label: "Ana Vokal (Primary Vocal)",
            options: PRIMARY_VOCALS,
            placeholder: "Vokal tipi seçin",
          },
          {
            key: "vocalStyle",
            label: "Vokal Tarzı (Vocal Style)",
            options: VOCAL_STYLES,
            placeholder: "Tarz seçin",
          },
          {
            key: "vocalTimbre",
            label: "Vokal Timbresi (Vocal Timbre)",
            options: VOCAL_TIMBRES,
            placeholder: "Renk seçin",
          },
          {
            key: "vocalEffects",
            label: "Vokal Efektleri (Vocal Effects)",
            options: VOCAL_EFFECTS,
            placeholder: "Efekt seçin",
          },
        ].map(({ key, label, options: selectOptions, placeholder }) => (
          <div key={key} className="space-y-1.5 sm:space-y-2">
            <Label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-wider">
              {label}
            </Label>
            <Select
              value={(options[key as keyof PromptOptions] as string) || ""}
              onValueChange={(value) => onChange({ [key]: value || undefined })}
            >
              <SelectTrigger className="w-full bg-background/50 border-border/50 text-foreground h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {selectOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="text-popover-foreground"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        {showFemaleRange && (
          <div className="space-y-1.5 sm:space-y-2">
            <Label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-wider">
              Vokal Aralığı - Kadın (Female Vocal Range)
            </Label>
            <Select
              value={options.femaleVocalRange || ""}
              onValueChange={(value) =>
                onChange({ femaleVocalRange: value || undefined })
              }
            >
              <SelectTrigger className="w-full bg-background/50 border-border/50 text-foreground h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                <SelectValue placeholder="Aralık seçin" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {FEMALE_VOCAL_RANGES.map((range) => (
                  <SelectItem
                    key={range}
                    value={range}
                    className="text-popover-foreground"
                  >
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {showMaleRange && (
          <div className="space-y-1.5 sm:space-y-2">
            <Label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-wider">
              Vokal Aralığı - Erkek (Male Vocal Range)
            </Label>
            <Select
              value={options.maleVocalRange || ""}
              onValueChange={(value) =>
                onChange({ maleVocalRange: value || undefined })
              }
            >
              <SelectTrigger className="w-full bg-background/50 border-border/50 text-foreground h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                <SelectValue placeholder="Aralık seçin" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {MALE_VOCAL_RANGES.map((range) => (
                  <SelectItem
                    key={range}
                    value={range}
                    className="text-popover-foreground"
                  >
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
}
