# Cloudflare Pages Deploy Rehberi

Bu proje Cloudflare Pages'de deploy edilmek üzere hazırlanmıştır.

## Deploy Adımları

### 1. Cloudflare Dashboard'a Giriş
1. [Cloudflare Dashboard](https://dash.cloudflare.com/) adresine gidin
2. Hesabınıza giriş yapın

### 2. Pages Projesi Oluştur
1. Sol menüden **Pages** sekmesine tıklayın
2. **Create a project** butonuna tıklayın
3. **Connect to Git** seçeneğini seçin

### 3. GitHub Repository Bağla
1. GitHub hesabınızı bağlayın (eğer bağlı değilse)
2. `ugurakcora/SunoPromptGenerator` repository'sini seçin
3. **Begin setup** butonuna tıklayın

### 4. Build Ayarları
Aşağıdaki ayarları yapın:

- **Project name**: `suno-prompt-generator` (veya istediğiniz isim)
- **Production branch**: `main`
- **Framework preset**: `None` veya `Next.js (Static HTML Export)`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (boş bırakın)
- **Node version**: `18` veya `20` (Environment Variables'da NODE_VERSION=18 ekleyin)

### 5. Environment Variables (Opsiyonel)
Gerekirse environment variable'lar ekleyebilirsiniz (şu an için gerekli değil).

### 6. Deploy
1. **Save and Deploy** butonuna tıklayın
2. İlk build başlayacak ve birkaç dakika sürecek
3. Build tamamlandığında projeniz canlıya alınacak

### 7. Custom Domain (Opsiyonel)
1. Proje sayfasında **Custom domains** sekmesine gidin
2. Domain ekleyin ve DNS ayarlarını yapın

## Otomatik Deploy
Her `main` branch'e push yaptığınızda otomatik olarak yeni bir deploy başlatılacak.

## Build Logları
Deploy sırasında oluşan hataları **Build logs** sekmesinden kontrol edebilirsiniz.

## Önemli Notlar
- Proje static export kullanıyor, bu yüzden server-side özellikler çalışmayacak
- LocalStorage kullanımı client-side'da çalışacak
- Tüm sayfalar statik olarak önceden oluşturuluyor

