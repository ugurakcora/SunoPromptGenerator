"use client";

import { useState, useEffect } from "react";
import { Trash2, Clock, Copy, AlertTriangle } from "lucide-react";
import { SavedPrompt } from "@/lib/types";
import { getSavedPrompts, deletePrompt } from "@/lib/promptGenerator";
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

interface SavedPromptsProps {
  onLoad: (prompt: SavedPrompt) => void;
  refreshTrigger?: number;
}

export default function SavedPrompts({
  onLoad,
  refreshTrigger,
}: SavedPromptsProps) {
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [promptToDelete, setPromptToDelete] = useState<SavedPrompt | null>(
    null
  );

  useEffect(() => {
    loadPrompts();
  }, [refreshTrigger]);

  const loadPrompts = () => {
    const prompts = getSavedPrompts();
    setSavedPrompts(prompts);
  };

  const openDeleteDialog = (prompt: SavedPrompt) => {
    setPromptToDelete(prompt);
    setDeleteDialogOpen(true);
  };

  const handleDelete = () => {
    if (promptToDelete) {
      deletePrompt(promptToDelete.id);
      loadPrompts();
      setDeleteDialogOpen(false);
      setPromptToDelete(null);
    }
  };

  const copyToClipboard = async (prompt: string) => {
    await navigator.clipboard.writeText(prompt);
  };

  if (savedPrompts.length === 0) {
    return (
      <Card className="bg-background/50 border-border/50">
        <CardContent className="p-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 mb-5 border border-purple-500/30">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <p className="text-foreground/70 font-medium">
            Henüz kayıtlı prompt yok. Oluşturduğunuz prompt'ları kaydedin!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-5">
      <h3 className="text-lg sm:text-xl font-bold text-foreground flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl blur-md opacity-50"></div>
          <div className="relative p-1.5 sm:p-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg sm:rounded-xl border border-purple-500/30">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>
        <span className="break-words">Kayıtlı Prompt'lar</span>
        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-background/50 rounded-full text-xs sm:text-sm font-bold text-foreground border border-border/50">
          {savedPrompts.length}
        </span>
      </h3>
      <div className="grid gap-2 sm:gap-3 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-1 sm:pr-2">
        {savedPrompts.map((saved) => (
          <Card
            key={saved.id}
            className="bg-background/50 border-border/50 hover:bg-background/70 transition-all"
          >
            <CardContent className="p-3 sm:p-4 md:p-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-2 sm:gap-3">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <h4 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                    {saved.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2 mb-2 sm:mb-3 leading-relaxed">
                    {saved.prompt}
                  </p>
                  <p className="text-[10px] sm:text-xs text-foreground/50 font-medium">
                    {new Date(saved.createdAt).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="flex gap-1.5 sm:gap-2 flex-shrink-0 w-full sm:w-auto justify-end sm:justify-start">
                  <Button
                    onClick={() => copyToClipboard(saved.prompt)}
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 sm:h-9 sm:w-9 border-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                    title="Kopyala"
                  >
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button
                    onClick={() => onLoad(saved)}
                    size="sm"
                    className="h-8 sm:h-9 text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-2 sm:px-3"
                  >
                    Yükle
                  </Button>
                  <Button
                    onClick={() => openDeleteDialog(saved)}
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 sm:h-9 sm:w-9 border-red-500/20 text-red-400 hover:bg-red-500/20"
                    title="Sil"
                  >
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-background border-border">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md"></div>
                <div className="relative p-2 bg-red-500/20 rounded-full border border-red-500/30">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
              </div>
              <DialogTitle className="text-foreground">
                Prompt'u Sil
              </DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground pt-2">
              Bu işlem geri alınamaz. "{promptToDelete?.name}" adlı prompt
              kalıcı olarak silinecek.
            </DialogDescription>
          </DialogHeader>
          {promptToDelete && (
            <div className="py-4">
              <div className="p-3 bg-background/50 border border-border/50 rounded-lg">
                <p className="text-xs text-foreground/70 line-clamp-3 leading-relaxed">
                  {promptToDelete.prompt}
                </p>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false);
                setPromptToDelete(null);
              }}
              className="w-full sm:w-auto"
            >
              İptal
            </Button>
            <Button
              onClick={handleDelete}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
