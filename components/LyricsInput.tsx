"use client";

import { FileText } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface LyricsInputProps {
  lyrics: string;
  onChange: (lyrics: string) => void;
}

export default function LyricsInput({ lyrics, onChange }: LyricsInputProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg sm:rounded-xl blur-md opacity-50"></div>
          <div className="relative p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 rounded-lg sm:rounded-xl border border-indigo-500/30">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-words">
          Şarkı Sözleri (Lyrics)
        </h2>
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <Label className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-wider">
          Şarkı Sözleri{" "}
          <span className="text-foreground/50 normal-case font-normal">
            (Opsiyonel)
          </span>
        </Label>
        <Textarea
          value={lyrics}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Şarkı sözlerinizi buraya yazın..."
          className="w-full bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground min-h-[150px] sm:min-h-[180px] md:min-h-[200px] resize-none text-sm sm:text-base"
          rows={8}
        />
      </div>
    </div>
  );
}
