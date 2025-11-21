export interface PromptOptions {
  // Genel Parça
  genre?: string;
  subGenre?: string;
  originLanguage?: string;
  turkishMusicStyle?: string;
  
  // Dünya Müzikleri
  region?: string;
  musicalTradition?: string;
  primaryInstrument?: string;
  rhythmicFeel?: string;
  scaleMode?: string;
  musicalTexture?: string;
  performanceContext?: string;
  worldVocalStyle?: string;
  atmosphere?: string;
  
  // Prodüksiyon & Enstrümanlar
  tempo?: string;
  mood?: string;
  harmonyType?: string;
  productionStyle?: string;
  songStructure?: string;
  dynamicFlow?: string;
  leadInstrument?: string;
  accompanyingInstrument?: string;
  bassInstrument?: string;
  percussionInstrument?: string;
  
  // Vokal
  primaryVocal?: string;
  vocalStyle?: string;
  vocalTimbre?: string;
  vocalEffects?: string;
  femaleVocalRange?: string;
  maleVocalRange?: string;
  
  // Mixing
  mixingStyle?: string;
  
  // Ek
  lyrics?: string;
}

export interface SavedPrompt {
  id: string;
  name: string;
  prompt: string;
  options: PromptOptions;
  createdAt: string;
}

// Genel Parça
export const GENRES = [
  'Alternatif (Alternative)',
  'Blues (Blues)',
  'Klasik (Classical)',
  'Country (Country)',
  'Elektronik (Electronic)',
  'Halk Müziği (Folk)',
  'Hip Hop (Hip Hop)',
  'Caz (Jazz)',
  'Latin (Latin)',
  'Metal (Metal)',
  'Pop (Pop)',
  'R&B/Soul (R&B)',
  'Reggae (Reggae)',
  'Rock (Rock)',
  'Akustik Rock (Acoustic Rock)',
  'Akustik Blues (Acoustic Blues)',
  'Lo-fi (Lo-fi)',
  'Sinematik (Cinematic)',
  'Funk (Funk)',
  'Soul (Soul)',
  'Ambiyans (Ambient)',
  'Afrobeats (Afrobeats)'
];

export const ORIGIN_LANGUAGES = [
  'Türkçe (Turkish)',
  'İngilizce (English)',
  'Latin (Latin)',
  'Fransızca (French)',
  'İspanyolca (Spanish)',
  'Arapça (Arabic)',
  'Orta Doğu (Middle Eastern)',
  'Balkan (Balkan)',
  'Batı Afrika (West African)',
  'Hint Klasik (Indian Classical)',
  'İskandinav Halk (Scandinavian Folk)',
  'And (Andean)',
  'Kelt (Celtic)',
  'Japonca (Japanese)',
  'Korece (Korean)'
];

export const TURKISH_MUSIC_STYLES = [
  'Arabesk Müzik (Arabesk Music)',
  'Anadolu Rock (Anatolian Rock)',
  'Türk Sanat Müziği (Turkish Classical Art Music)',
  'Türk Halk Müziği (Turkish Folk Music)',
  'Fantezi Müzik (Fantezi Music)'
];

// Dünya Müzikleri
export const REGIONS = [
  'Afrika (Africa)',
  'Orta Doğu & Kuzey Afrika (Middle East & North Africa)',
  'Asya (Asia)',
  'Avrupa (Europe)',
  'Latin Amerika & Karayipler (Latin America & Caribbean)',
  'Kuzey Amerika (North America)',
  'Okyanusya (Oceania & Polynesia)'
];

export const RHYTHMIC_FEELS = [
  'Törensel ve yavaş (Ceremonial and slow)',
  'Dansedilebilir ve çok-ritmik (Danceable and polyrhythmic)',
  'Meditatif ve serbest akışlı (Meditative and free-flowing)',
  'İtici ve enerjik (Driving and energetic)'
];

export const SCALE_MODES = [
  'Pentatonik ölçek (Pentatonic scale)',
  'Majör/Minör diyatonik ölçek (Major/Minor diatonic scale)',
  'Geleneksel modal sistem - Makam (Traditional modal system)',
  'Mikrotonal ölçek (Microtonal scale)',
  'Atonal veya kromatik ölçek (Atonal or chromatic scale)'
];

export const MUSICAL_TEXTURES = [
  'Monofonik - tek melodi (Monophonic texture)',
  'Homofonik - melodi ve akorlar (Homophonic texture)',
  'Polifonik - iç içe melodiler (Polyphonic texture)',
  'Heterofonik - eşzamanlı varyasyonlar (Heterophonic texture)'
];

export const PERFORMANCE_CONTEXTS = [
  'Kutsal tören veya ayin için (Sacred ritual or ceremony)',
  'Canlı topluluk dansı için (Lively community dance)',
  'Samimi solo performans için (Intimate solo performance)',
  'Hareketli sokak performansı için (Bustling street performance)',
  'Resmi saray veya konser ortamı için (Formal court or concert setting)'
];

export const WORLD_VOCAL_STYLES = [
  'Hikaye anlatan vokal (Storytelling vocals)',
  'Ritüel ilahisi (Ritualistic chanting)',
  'Çağrı-cevap kalıbı (Call-and-response patterns)',
  'Tamamen enstrümantal (Purely instrumental)',
  'Boğaz şarkısı - harmonik sesler (Throat singing)',
  'Alp tarzı yodelleme (Alpine-style yodeling)',
  'Güçlü Gospel çağrı-cevap (Powerful Gospel call-and-response)'
];

export const ATMOSPHERES = [
  'Ham, sahada kaydedilmiş his (Raw, field-recorded feel)',
  'Temiz, doğal akustik ses (Clean, natural acoustic sound)',
  'Trans benzeri, hipnotik kalite (Trance-like, hypnotic quality)',
  'Modern elektronik füzyon (Modern electronic fusion)'
];

// Prodüksiyon
export const TEMPO_OPTIONS = [
  'Yavaş (Slow, 60-80 BPM)',
  'Orta (Medium, 90-120 BPM)',
  'Hızlı (Fast, 130-160 BPM)',
  'Çok Hızlı (Very Fast, 170+ BPM)',
  'Serbest akışlı (Free-flowing, without strict tempo)'
];

export const MOODS = [
  'Sakin & Rahat (Chill & Relaxed)',
  'Mutlu (Happy)',
  'Enerjik (Energetic)',
  'Melankolik (Melancholic)',
  'Karanlık (Dark)',
  'Epik (Epic)',
  'Romantik (Romantic)',
  'Yükselten (Uplifting)',
  'Gizemli (Mysterious)'
];

export const HARMONY_TYPES = [
  'Majör (Major)',
  'Minör (Minor)',
  'Diyatonic (Diyatonic Ölçekler)',
  'Kromatik (Kromatik Sesler)',
  'Modal (Makam/Mod bazlı)',
  'Pentatonic (Pentatonik)',
  'Harmonik Minör (Harmonic Minor)',
  'Blues Armoni (Blues Harmony)',
  'Tam Ton (Whole Tone)'
];

export const PRODUCTION_STYLES = [
  'Temiz ve parlak stüdyo kayıt (Clean & Modern)',
  'Eski kaset gibi sıcak ve yumuşak (Lo-fi & Vintage)',
  'Sade ve az enstrüman (Minimal)',
  'Çok katmanlı ve zengin ses (Layered & Complex)',
  'Canlı konser gibi doğal (Raw & Live)',
  'Yankılı ve geniş atmosfer (Atmospheric)'
];

export const SONG_STRUCTURES = [
  'Kısa döngü - tekrarlı (Loop Style)',
  'Klasik şarkı yapısı - kıta ve nakarat (Verse/Chorus)',
  'Tam yapılı şarkı - giriş/köprü/çıkış (Full Structure)',
  'Nostaljik yapı - eski şarkı formatı (AABA Pattern)',
  'Pop/Rock yapısı - köprülü nakarat tekrarı (Pop Structure)',
  'Sürekli değişen - her bölüm farklı (Progressive)',
  'Serbest akış - doğaçlama (Free-form)'
];

export const DYNAMIC_FLOWS = [
  'Sabit enerji - baştan sona aynı (Static Energy)',
  'Yavaş yavaş yükselen - giderek artış (Gradual Build-up)',
  'Kıtadan nakarata patlama - klasik yükseliş (Verse to Chorus Explosion)',
  'Dinamik iniş çıkışlar - dalgalı enerji (Dynamic Peaks and Valleys)',
  'Sakin başlangıç - güçlü son (Calm Start, Powerful End)'
];

export const INSTRUMENTS = [
  'Gitar (Guitar)',
  'Piyano (Piano)',
  'Davul (Drums)',
  'Bas Gitar (Bass Guitar)',
  'Keman (Violin)',
  'Synthesizer',
  'Saksafon (Saxophone)',
  'Trompet (Trumpet)',
  'Flüt (Flute)',
  'Akordeon (Accordion)',
  'Bağlama (Bağlama)',
  'Ud (Oud)',
  'Elektronik Beats (Electronic Beats)',
  'Strings (Strings)',
  'Brass (Brass)',
  'Perküsyon (Percussion)',
  'Arp (Harp)',
  'Vurmalı Çalgılar (Percussion Instruments)',
  'Org (Organ)',
  'Çello (Cello)',
  'Ney (Ney)',
  'Kanun (Kanun)',
  'Tanbur (Tanbur)',
  'Darbuka (Darbuka)',
  'Kaval (Kaval)',
  'Duduk (Duduk)'
];

// Vokal
export const PRIMARY_VOCALS = [
  'Kadın Vokal (Female)',
  'Erkek Vokal (Male)',
  'Çocuk Vokal (Child)',
  'Koro (Choir)',
  'Vokalsiz (Instrumental)'
];

export const VOCAL_STYLES = [
  'Enerjik ve coşkulu (Energetic and passionate)',
  'Sakin ve hüzünlü (Calm and melancholic)',
  'Ritmik ve tekrarlı (Rhythmic and repetitive)',
  'Hızlı ve akıcı (Fast and flowing)',
  'Soru-cevap (Call and response)',
  'Makam tarzı (Makam style)',
  'Vokalsiz (Instrumental)'
];

export const VOCAL_TIMBRES = [
  'Net (Clear)',
  'Dolgun (Resonant)',
  'Hafif (Airy)',
  'Kısık (Husky)',
  'Nefesli (Breathy)',
  'Kaba (Gravelly)'
];

export const VOCAL_EFFECTS = [
  'Salon yankısı (Hall reverb)',
  'Oda yankısı (Room reverb)',
  'Kilise yankısı (Church reverb)',
  'Plaka yankısı (Plate reverb)',
  'Kısa eko (Short delay)',
  'Uzun eko (Long echo)',
  'Slapback eko (Slapback echo)',
  'Telefon sesi (Lo-fi/Telephone)'
];

export const FEMALE_VOCAL_RANGES = [
  'Koloratür Soprano (Coloratura Soprano)',
  'Lirik Soprano (Lyric Soprano)',
  'Dramatik Soprano (Dramatic Soprano)',
  'Soprano (Soprano)',
  'Mezzo-soprano (Mezzo-soprano)',
  'Alto / Kontralto (Contralto)'
];

export const MALE_VOCAL_RANGES = [
  'Kontrtenor (Countertenor)',
  'Lirik Tenor (Lyric Tenor)',
  'Dramatik Tenor (Dramatic Tenor)',
  'Tenor (Tenor)',
  'Bariton (Baritone)',
  'Bas-Bariton (Bass-Baritone)',
  'Bas (Bass)',
  'Derin Bas (Basso Profondo)'
];

// Mixing
export const MIXING_STYLES = [
  'Sıcak mix (Warm mixing)',
  'Parlak mix (Bright mixing)',
  'Karanlık mix (Dark mixing)',
  'Dengeli mix (Balanced mixing)'
];
