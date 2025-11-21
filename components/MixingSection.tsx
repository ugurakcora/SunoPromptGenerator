"use client";

import { Sliders } from "lucide-react";
import { MIXING_STYLES, PromptOptions } from "@/lib/types";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MixingSectionProps {
  options: PromptOptions;
  onChange: (options: Partial<PromptOptions>) => void;
}

export default function MixingSection({
  options,
  onChange,
}: MixingSectionProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg sm:rounded-xl blur-md opacity-50"></div>
          <div className="relative p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 rounded-lg sm:rounded-xl border border-indigo-500/30">
            <Sliders className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-words">
          5. Mixing
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        <div className="space-y-1.5 sm:space-y-2">
          <Label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-wider">
            Mixing Stili (Mixing Style)
          </Label>
          <Select
            value={options.mixingStyle || ""}
            onValueChange={(value) =>
              onChange({ mixingStyle: value || undefined })
            }
          >
            <SelectTrigger className="w-full bg-background/50 border-border/50 text-foreground h-10 sm:h-11 md:h-12 text-sm sm:text-base">
              <SelectValue placeholder="Mixing stili seçin" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {MIXING_STYLES.map((style) => (
                <SelectItem
                  key={style}
                  value={style}
                  className="text-popover-foreground"
                >
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
