# ZOOVIA Kurumsal Site Güncellemesi

Bu paket, mevcut `zoovia-platform` Next.js 15 / React 19 projesine eklenmek üzere hazırlanmış kurumsal web sitesi arayüzüdür. Holistik Çiftlik sitesinin birebir kopyası değildir; kurumsal yaklaşımından esinlenerek ZOOVIA markasına ve yeni sekiz ürünlük ambalaj ailesine uyarlanmıştır.

## Pakette neler var?
- Yeni kurumsal ana sayfa (`app/page.tsx`)
- Ürün kataloğu ve dinamik ürün detayları (`app/products`)
- Hakkımızda, çözümlerimiz, bayilik, iletişim ve bilgi merkezi sayfaları
- Ortak header/footer ve responsive tasarım bileşenleri
- Sekiz ürün ambalaj görseli ve koleksiyon görseli

## GitHub'a uygulama
1. ZIP'i bilgisayarınızda açın.
2. İçindeki `app`, `components` ve `public` klasörlerini mevcut `zoovia-platform` deposunun kök dizinine kopyalayın.
3. Dosya çakışmalarında bu paketteki `app/page.tsx` dosyası ana sayfayı yeniler. Mevcut `app/ration`, `app/admin` ve diğer mevcut sayfalar silinmez; yalnızca aynı isimli `app/products` varsa önce mevcut içeriğini yedekleyin.
4. GitHub'da değişiklikleri commit edin. Vercel bağlıysa yeni dağıtım otomatik başlar.

## Yerel kontrol
```bash
npm install
npm run dev
```

## Önemli entegrasyon notları
- Rasyon (`/ration`) ve yönetici paneli (`/admin`) mevcut depodaki halleriyle korunur; bu paket bu modülleri yeniden yazmaz.
- İletişim formu şimdilik e-posta uygulamasına taslak açar. Gerçek web formu gönderimi için güvenli sunucu tarafı e-posta entegrasyonu gerekir.
- Ürün açıklamaları genel tanıtım metinleridir. Kesin bileşim, doz ve kullanım talimatları ürün etiketleri/onaylı teknik dokümanlarla tamamlanmalıdır.
- Ürün ambalajları konsept görselleridir; baskı öncesi logo, yazım, net miktar ve mevzuat bilgileri tasarım dosyasında son kez kontrol edilmelidir.
