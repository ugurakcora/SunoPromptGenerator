"use client";

import { useState } from "react";
import { Copy, Check, Save } from "lucide-react";
import { truncatePrompt } from "@/lib/promptGenerator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PromptDisplayProps {
  prompt: string;
  onSave: (name: string) => void;
}

export default function PromptDisplay({ prompt, onSave }: PromptDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [saveName, setSaveName] = useState("");

  const MAX_LENGTH = 1000;
  const truncatedPrompt = truncatePrompt(prompt, MAX_LENGTH);
  const charCount = prompt.length;
  const isOverLimit = charCount > MAX_LENGTH;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(truncatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (saveName.trim()) {
      onSave(saveName);
      setSaveName("");
      setShowSaveDialog(false);
    }
  };

  return (
    <div id="prompt-display" className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
          Oluşturulan Prompt
        </h3>
        <span
          className={`text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg whitespace-nowrap ${
            isOverLimit
              ? "bg-red-500/20 text-red-400 border border-red-500/30"
              : charCount > MAX_LENGTH * 0.9
              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
              : "bg-background/50 text-foreground/80 border border-border/50"
          }`}
        >
          {charCount} / {MAX_LENGTH}
        </span>
      </div>

      <Card
        className={`bg-background/50 border-border/50 ${
          isOverLimit ? "border-red-500/50" : ""
        }`}
      >
        <CardContent className="p-4 sm:p-5 md:p-6">
          <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed font-medium text-xs sm:text-sm min-h-[150px] sm:min-h-[200px] md:min-h-[250px]">
            {truncatedPrompt || (
              <span className="text-foreground/50 italic">
                Formu doldurun ve "Prompt Oluştur" butonuna tıklayın...
              </span>
            )}
          </p>
          {isOverLimit && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-xs font-medium">
                ⚠️ Prompt {MAX_LENGTH} karakteri aşıyor! İlk {MAX_LENGTH}{" "}
                karakter gösteriliyor.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
        <Button
          onClick={copyToClipboard}
          disabled={!prompt}
          variant={copied ? "default" : "default"}
          size="sm"
          className={`flex-1 h-14 sm:h-9 text-base sm:text-sm px-6 sm:px-3 font-semibold ${
            copied
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-6 h-6 sm:w-4 sm:h-4" />
              <span>Kopyalandı!</span>
            </>
          ) : (
            <>
              <Copy className="w-6 h-6 sm:w-4 sm:h-4" />
              <span>Kopyala</span>
            </>
          )}
        </Button>

        <Button
          onClick={() => setShowSaveDialog(true)}
          disabled={!prompt}
          variant="default"
          size="sm"
          className="flex-1 h-14 sm:h-9 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-base sm:text-sm px-6 sm:px-3 font-semibold"
        >
          <Save className="w-6 h-6 sm:w-4 sm:h-4" />
          <span>Kaydet</span>
        </Button>
      </div>

      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent className="bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Prompt'u Kaydet
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Prompt için bir isim girin
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Label htmlFor="name" className="text-foreground">
              İsim
            </Label>
            <Input
              id="name"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              placeholder="Prompt için bir isim girin..."
              className="bg-background/50 border-border text-foreground"
              onKeyPress={(e) => e.key === "Enter" && handleSave()}
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSaveDialog(false)}>
              İptal
            </Button>
            <Button
              onClick={handleSave}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Kaydet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
