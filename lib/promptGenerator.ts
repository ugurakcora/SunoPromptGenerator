import { PromptOptions } from './types';

// Türk Müziği Stilleri için detaylı açıklamalar
const TURKISH_STYLE_DESCRIPTIONS: Record<string, string> = {
  'Arabesk Müzik (Arabesk Music)': 'Arabesk - emotional, makam-based melodies. Oud, violin, darbuka. Strong vibrato vocals. Lo-fi warm production with nostalgic feel.',
  'Anadolu Rock (Anatolian Rock)': 'Anatolian Rock - rock fusion with Turkish folk. Electric saz and distorted guitars create makam harmonies. Intro melody is prominent and melodic. Energetic vocals with rock drums and Turkish percussion, blending traditional and modern elements.',
  'Türk Sanat Müziği (Turkish Classical Art Music)': 'Turkish Classical Art Music (TSM) - classical tradition. Oud, violin, kanun, ney, tanbur. Complex makam systems and usul rhythms. Formal, refined performance style.',
  'Türk Halk Müziği (Turkish Folk Music)': 'Turkish Folk Music - traditional Anatolian music. Saz, kaval, duduk. Modal harmonies, regional variations. Raw, emotional vocals with authentic folk instruments.',
  'Fantezi Müzik (Fantezi Music)': 'Fantezi - Turkish pop music. Emotional melodies, modern production. Blend of traditional and contemporary elements with accessible arrangements.'
};

// Genre açıklamaları
const GENRE_DESCRIPTIONS: Record<string, string> = {
  'Rock (Rock)': 'Rock',
  'Pop (Pop)': 'Pop',
  'Jazz (Jazz)': 'Jazz',
  'Hip Hop (Hip Hop)': 'Hip Hop',
  'Electronic (Electronic)': 'Electronic',
  'Classical (Classical)': 'Classical',
  'Metal (Metal)': 'Metal',
  'Country (Country)': 'Country',
  'R&B/Soul (R&B)': 'R&B/Soul',
  'Blues (Blues)': 'Blues',
  'Reggae (Reggae)': 'Reggae',
  'Folk (Folk)': 'Folk',
  'Funk (Funk)': 'Funk',
  'Soul (Soul)': 'Soul',
  'Ambient (Ambient)': 'Ambient',
  'Afrobeats (Afrobeats)': 'Afrobeats',
  'Lo-fi (Lo-fi)': 'Lo-fi',
  'Cinematic (Cinematic)': 'Cinematic',
  'Alternative (Alternative)': 'Alternative',
  'Latin (Latin)': 'Latin',
  'Acoustic Rock (Acoustic Rock)': 'Acoustic Rock',
  'Acoustic Blues (Acoustic Blues)': 'Acoustic Blues'
};

// Bölge açıklamaları
const REGION_DESCRIPTIONS: Record<string, string> = {
  'Orta Doğu & Kuzey Afrika (Middle East & North Africa)': 'Middle Eastern & North African',
  'Afrika (Africa)': 'African',
  'Asya (Asia)': 'Asian',
  'Avrupa (Europe)': 'European',
  'Latin Amerika & Karayipler (Latin America & Caribbean)': 'Latin American & Caribbean',
  'Kuzey Amerika (North America)': 'North American',
  'Okyanusya (Oceania & Polynesia)': 'Oceania & Polynesian'
};

export function generatePrompt(options: PromptOptions): string {
  const parts: string[] = [];
  const descriptions: string[] = [];

  // Türk Müziği Stili - Öncelikli
  if (options.turkishMusicStyle) {
    const styleDesc = TURKISH_STYLE_DESCRIPTIONS[options.turkishMusicStyle];
    if (styleDesc) {
      descriptions.push(styleDesc);
      
      // Eğer bölge de seçilmişse, bunu da ekle
      if (options.region) {
        const regionDesc = REGION_DESCRIPTIONS[options.region] || options.region.replace(/\s*\([^)]*\)/g, '').trim();
        descriptions[0] = descriptions[0].replace(/\.$/, '') + ` with ${regionDesc.toLowerCase()} influences.`;
      }
    } else {
      parts.push(options.turkishMusicStyle);
    }
  }

  // Genre (Türk müziği yoksa)
  if (!options.turkishMusicStyle && options.genre) {
    const genreName = options.genre.replace(/\s*\([^)]*\)/g, '').trim();
    parts.push(genreName);
  }

  // Sub Genre
  if (options.subGenre) {
    parts.push(options.subGenre);
  }

  // Origin Language (Türk müziği yoksa veya ek bilgi olarak)
  if (options.originLanguage && !options.turkishMusicStyle) {
    const langName = options.originLanguage.replace(/\s*\([^)]*\)/g, '').trim();
    parts.push(langName);
  }

  // Dünya Müzikleri (Türk müziği ile çakışmıyorsa)
  if (!options.turkishMusicStyle) {
    if (options.region) {
      const regionDesc = REGION_DESCRIPTIONS[options.region] || options.region.replace(/\s*\([^)]*\)/g, '').trim();
      if (options.musicalTradition || options.primaryInstrument) {
        // Bölge bilgisi daha detaylı açıklamaya dahil edilecek
      } else {
        parts.push(regionDesc);
      }
    }
    
    if (options.musicalTradition) {
      parts.push(options.musicalTradition);
    }
    
    if (options.primaryInstrument) {
      parts.push(`featuring ${options.primaryInstrument}`);
    }
    
    if (options.rhythmicFeel) {
      const feel = options.rhythmicFeel.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(feel.toLowerCase());
    }
    
    if (options.scaleMode) {
      const scale = options.scaleMode.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(`using ${scale.toLowerCase()}`);
    }
    
    if (options.musicalTexture) {
      const texture = options.musicalTexture.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(texture.toLowerCase());
    }
    
    if (options.performanceContext) {
      const context = options.performanceContext.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(context.toLowerCase());
    }
    
    if (options.worldVocalStyle) {
      const vocal = options.worldVocalStyle.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(vocal.toLowerCase());
    }
    
    if (options.atmosphere) {
      const atmos = options.atmosphere.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(atmos.toLowerCase());
    }
  }

  // Prodüksiyon & Enstrümanlar
  if (options.tempo) {
    const tempo = options.tempo.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(tempo.toLowerCase());
  }
  
  if (options.mood) {
    const mood = options.mood.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(mood.toLowerCase());
  }
  
  if (options.harmonyType) {
    const harmony = options.harmonyType.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(`${harmony.toLowerCase()} harmony`);
  }
  
  if (options.productionStyle) {
    const prod = options.productionStyle.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(`${prod.toLowerCase()} production`);
  }
  
  if (options.songStructure) {
    const structure = options.songStructure.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(`${structure.toLowerCase()} structure`);
  }
  
  if (options.dynamicFlow) {
    const flow = options.dynamicFlow.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(`${flow.toLowerCase()}`);
  }
  
  // Enstrümanlar
  const instruments: string[] = [];
  if (options.leadInstrument) {
    const inst = options.leadInstrument.replace(/\s*\([^)]*\)/g, '').trim();
    instruments.push(inst);
  }
  if (options.accompanyingInstrument) {
    const inst = options.accompanyingInstrument.replace(/\s*\([^)]*\)/g, '').trim();
    instruments.push(inst);
  }
  if (options.bassInstrument) {
    const inst = options.bassInstrument.replace(/\s*\([^)]*\)/g, '').trim();
    instruments.push(inst);
  }
  if (options.percussionInstrument) {
    const inst = options.percussionInstrument.replace(/\s*\([^)]*\)/g, '').trim();
    instruments.push(inst);
  }
  
  if (instruments.length > 0) {
    descriptions.push(`featuring ${instruments.join(', ')}`);
  }

  // Vokal
  if (options.primaryVocal && !options.primaryVocal.includes('Instrumental')) {
    const vocal = options.primaryVocal.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(`${vocal.toLowerCase()} vocals`);
    
    if (options.vocalStyle) {
      const style = options.vocalStyle.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(`${style.toLowerCase()} vocal style`);
    }
    
    if (options.vocalTimbre) {
      const timbre = options.vocalTimbre.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(`${timbre.toLowerCase()} timbre`);
    }
    
    if (options.vocalEffects) {
      const effect = options.vocalEffects.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(`${effect.toLowerCase()}`);
    }
    
    if (options.femaleVocalRange) {
      const range = options.femaleVocalRange.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(`${range.toLowerCase()}`);
    }
    
    if (options.maleVocalRange) {
      const range = options.maleVocalRange.replace(/\s*\([^)]*\)/g, '').trim();
      descriptions.push(`${range.toLowerCase()}`);
    }
  } else if (options.primaryVocal?.includes('Instrumental')) {
    descriptions.push('instrumental');
  }

  // Mixing
  if (options.mixingStyle) {
    const mixing = options.mixingStyle.replace(/\s*\([^)]*\)/g, '').trim();
    descriptions.push(`${mixing.toLowerCase()} mixing`);
  }

  // Prompt'u birleştir
  let prompt = '';
  
  // Ana açıklama varsa onu kullan
  if (descriptions.length > 0) {
    prompt = descriptions.join('. ') + '.';
  }
  
  // Ekstra bilgiler varsa ekle
  if (parts.length > 0 && !options.turkishMusicStyle) {
    if (prompt) {
      prompt += ' ' + parts.join(', ');
    } else {
      prompt = parts.join(', ');
    }
  }

  // Şarkı sözleri varsa ekle
  if (options.lyrics && options.lyrics.trim()) {
    prompt += `\n\nLyrics:\n${options.lyrics}`;
  }

  return prompt || 'Lütfen en az bir seçenek seçin';
}

export function truncatePrompt(prompt: string, maxLength: number = 1000): string {
  if (prompt.length <= maxLength) return prompt;
  return prompt.substring(0, maxLength).trim();
}

// LocalStorage helpers
export function savePromptToLocal(prompt: string, name: string, options: PromptOptions): void {
  if (typeof window === 'undefined') return;
  
  const savedPrompts = getSavedPrompts();
  const newPrompt = {
    id: Date.now().toString(),
    name,
    prompt,
    options,
    createdAt: new Date().toISOString(),
  };
  
  savedPrompts.push(newPrompt);
  localStorage.setItem('sunoPrompts', JSON.stringify(savedPrompts));
}

export function getSavedPrompts(): any[] {
  if (typeof window === 'undefined') return [];
  
  const saved = localStorage.getItem('sunoPrompts');
  return saved ? JSON.parse(saved) : [];
}

export function deletePrompt(id: string): void {
  if (typeof window === 'undefined') return;
  
  const savedPrompts = getSavedPrompts();
  const filtered = savedPrompts.filter(p => p.id !== id);
  localStorage.setItem('sunoPrompts', JSON.stringify(filtered));
}
