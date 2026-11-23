# ZOOVIA Platform

## V4 düzeltmeleri
- Rasyon destek formunun önceki adımlı tasarımı korunmuştur. Sadece son adımda rasyon önerisi/hesaplaması yerine destek talebi ön izlemesi ve gönderimi bulunur.
- Ürünlerde eski küçükbaş premiks görseli (`public/products/premix-4.webp`) korunmuştur. Sonradan eklenen alternatif küçükbaş çuval görseli kaldırılmıştır.
- Ürün grup filtreleri seçilen grubu gösterir; Tümü bütün ürünleri gösterir.
- Üye giriş/kayıt ekranında ayrı Yönetici Girişi bağlantısı vardır.
- Yönetici girişi sunucu tarafında, HttpOnly oturum çereziyle doğrulanır.
- Yönetim panelinde 32 hammadde adı, düzenlenebilir besin parametreleri, grup yönetimi ve destek talebi listesi bulunur.

## Yönetici hesabını Vercel'de etkinleştirme
Vercel → Project → Settings → Environment Variables bölümüne şu üç değişkeni ekleyin:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

`.env.example` dosyasında örnek biçim vardır. Değerleri gizli tutun; GitHub deposuna gerçek `.env` dosyası yüklemeyin. Değişkenleri ekledikten sonra yeniden deploy edin. Yönetici girişi `/admin/login` adresindedir; normal üye giriş ekranındaki Yönetici Girişi bağlantısı da buraya gider.

## Veri notu
Üye kayıtları, hammadde düzenlemeleri ve destek talepleri bu prototip sürümünde tarayıcı `localStorage` alanında saklanır. Bu nedenle farklı cihazlardan gelen gerçek kullanıcı taleplerini ortak yönetim panelinde göstermek için veritabanı entegrasyonu gerekir. Ayrıca 32 hammaddenin adları eklenmiştir; kullanıcının orijinal NRC/NASEM 32'li besin değerleri tablosu erişilebilir proje dosyalarında bulunmadığından bilimsel besin değerleri uydurulmamış, doğrulanamayan alanlar boş bırakılmıştır.

## Çalıştırma
`npm install` ardından `npm run dev`; üretim derlemesi için `npm run build`.
