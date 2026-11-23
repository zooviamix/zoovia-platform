# ZOOVIA – bağımsız web platformu prototipi

Bu sürüm, kullanıcının tarif ettiği ZOOVIA marka sitesi ve rasyon akışının görsel/etkileşimli prototipidir.

## Neler var?
- Mobil uyumlu kurumsal ana sayfa ve ZOOVIA görsel kimliği için geçici logo yaklaşımı
- Ayrı Hakkımızda, Ürünlerimiz, İletişim ve Üye Girişi sayfaları
- Büyükbaş/küçükbaş → üretim grubu → ırk → kademeli parametre seçimi
- Mevcut rasyon yemlerini satır satır girme arayüzü
- Rapor ön izleme ve tarayıcıdan PDF olarak kaydetme/yazdırma
- Sağ altta canlı destek yerine “Rasyon Hazırla” kısayol kutusu
- Bayilik ve iletişim formu arayüzleri

## Yerel çalıştırma
1. Node.js LTS kurun.
2. Terminalde proje klasörüne girin.
3. `npm install`
4. `npm run dev`
5. `http://localhost:3000` adresini açın.

## Önemli: Prototip sınırı
Bu sürümde gerçek kullanıcı doğrulaması, veritabanına kayıt, e-posta gönderimi, OpenAI bağlantısı ve bilimsel rasyon hesaplama motoru henüz bağlı değildir. PDF düğmesi tarayıcının yazdırma/PDF kaydetme penceresini açar. Rapor ön izlemesi gerçek rasyon sonucu değildir.

Üretim sürümünde:
- Supabase Auth (telefon veya e-posta), PostgreSQL
- Yönetici paneli ve manuel Pro yetkilendirmesi
- Doğrulanmış yem analiz veri tabanı ve NASEM/NRC tabanlı test edilebilir hesaplama motoru
- AI ile açıklama/yorum katmanı (sayısal hesapların yerine geçmez)
- Sunucu tarafında kurumsal PDF raporu, rapor arşivi
- Bayilik başvuru kaydı ve e-posta bildirimi
- Güvenlik, yetkilendirme, yedekleme ve yayın altyapısı

Gerçek yem miktarları ve besleme önerileri, hesaplama motoru ve parametreler uzman kontrolünden geçmeden otomatik olarak sunulmamalıdır.
