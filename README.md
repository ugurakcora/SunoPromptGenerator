# 🎵 Suno AI Prompt Generator

Suno AI için detaylı ve zengin müzik prompt'ları oluşturan modern bir web uygulaması. Türk müziği stilleri, dünya müzikleri, prodüksiyon seçenekleri ve vokal ayarlarıyla profesyonel müzik prompt'ları üretin.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-000000?style=flat)

## ✨ Özellikler

### 🎼 Müzik Stilleri
- **Türk Müziği Stilleri**: Anadolu Rock, Arabesk, Türk Sanat Müziği, Türk Halk Müziği ve daha fazlası
- **Dünya Müzikleri**: Orta Doğu, Afrika, Asya, Avrupa, Latin Amerika ve daha fazlası
- **Genre Seçenekleri**: Rock, Pop, Jazz, Hip Hop, Electronic ve 20+ kategori

### 🎹 Prodüksiyon Özellikleri
- Tempo ve hız ayarları
- Mod ve duygu seçenekleri
- Armoni tipleri
- Prodüksiyon tarzları
- Parça yapısı ve dinamik akış

### 🎤 Vokal Ayarları
- Vokal tipi ve tarzı
- Vokal timbresi ve efektleri
- Kadın ve erkek vokal aralıkları
- Enstrümantal seçenekleri

### 🎚️ Enstrüman Seçenekleri
- Lead, Accompanying, Bass ve Perküsyon enstrümanları
- Dünya müziği enstrümanları
- Geleneksel Türk enstrümanları

### 💾 Kayıt ve Yönetim
- Prompt'ları kaydetme ve yükleme
- LocalStorage ile kalıcı saklama
- Prompt'ları kopyalama
- Silme işlemi için onay modal'ı

### 📱 Responsive Tasarım
- Mobil, tablet ve desktop uyumlu
- Modern ve kullanıcı dostu arayüz
- Shadcn UI component'leri
- Glassmorphism efektleri

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/ugurakcora/SunoPromptGenerator.git
cd SunoPromptGenerator
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📦 Build ve Deploy

### Production Build
```bash
npm run build
npm start
```

### Vercel'e Deploy
```bash
vercel
```

## 🛠️ Teknolojiler

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Storage**: LocalStorage API

## 📖 Kullanım

1. **Müzik Türü Seçin**: Genre, Sub Genre, Origin Language veya Turkish Music Style seçin
2. **Dünya Müzikleri**: Bölge, müzik geleneği ve enstrümanları seçin
3. **Prodüksiyon Ayarları**: Tempo, mod, armoni ve prodüksiyon tarzını belirleyin
4. **Vokal Ayarları**: Vokal tipi, tarzı ve efektlerini seçin
5. **Mixing**: Mixing stilini belirleyin
6. **Şarkı Sözleri**: İsteğe bağlı olarak şarkı sözlerini ekleyin
7. **Prompt Oluştur**: "Prompt Oluştur" butonuna tıklayın
8. **Kaydet**: Oluşturulan prompt'u kaydedin veya kopyalayın

## 🎯 Örnek Kullanım

### Anadolu Rock Örneği
- **Türk Müziği Stili**: Anadolu Rock (Anatolian Rock)
- **Bölge**: Orta Doğu & Kuzey Afrika

**Oluşturulan Prompt:**
```
Anatolian Rock - rock fusion with Turkish folk. Electric saz and distorted guitars create makam harmonies. Intro melody is prominent and melodic. Energetic vocals with rock drums and Turkish percussion, blending traditional and modern elements. with middle eastern & north african influences.
```

## 📁 Proje Yapısı

```
sunoPromptGenerator/
├── app/
│   ├── globals.css          # Global stiller
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Ana sayfa
├── components/
│   ├── GeneralTrack.tsx    # Genel parça seçenekleri
│   ├── WorldMusic.tsx      # Dünya müzikleri
│   ├── Production.tsx      # Prodüksiyon ayarları
│   ├── VocalSection.tsx    # Vokal ayarları
│   ├── MixingSection.tsx   # Mixing ayarları
│   ├── LyricsInput.tsx     # Şarkı sözleri girişi
│   ├── PromptDisplay.tsx  # Prompt gösterimi
│   ├── SavedPrompts.tsx   # Kayıtlı prompt'lar
│   └── ui/                # Shadcn UI component'leri
├── lib/
│   ├── types.ts           # TypeScript tipleri
│   ├── promptGenerator.ts # Prompt oluşturma mantığı
│   └── utils.ts           # Yardımcı fonksiyonlar
└── public/                # Statik dosyalar
```

## 🎨 Özelleştirme

### Renk Teması
`app/globals.css` dosyasındaki CSS değişkenlerini düzenleyerek renk temasını değiştirebilirsiniz.

### Prompt Şablonları
`lib/promptGenerator.ts` dosyasındaki `TURKISH_STYLE_DESCRIPTIONS` ve diğer açıklama objelerini düzenleyerek prompt şablonlarını özelleştirebilirsiniz.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje açık kaynaklıdır ve MIT lisansı altında lisanslanmıştır.

## 👤 Yazar

**Uğur Akçora**
- GitHub: [@ugurakcora](https://github.com/ugurakcora)

## 🙏 Teşekkürler

- [Suno AI](https://suno.ai) - Müzik üretimi için
- [Shadcn UI](https://ui.shadcn.com) - Harika UI component'leri için
- [Next.js](https://nextjs.org) - Güçlü React framework'ü için

## 📞 İletişim

Sorularınız veya önerileriniz için GitHub Issues kullanabilirsiniz.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
