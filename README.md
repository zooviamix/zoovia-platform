# ZOOVIA Platform v4

## GitHub / Vercel
1. ZIP içeriğini GitHub deposunun kök dizinine yükleyin (mevcut dosyaların üzerine yazın).
2. Vercel projesi aynı depoya bağlıysa yeni commit sonrası otomatik dağıtım başlar.

## Yönetici paneli
- Adres: `/admin/login`
- Kullanıcı adı: `zooviaadmin`
- Şifre: `Zoovia2026!`
- Giriş yaptıktan sonra `/admin` panelinden rasyon destek taleplerini ve hammadde kütüphanesini yönetin.
- Yayına almadan önce bu örnek yönetici parolasını değiştirin ve gerçek sunucu tarafı kimlik doğrulama/veritabanı entegrasyonu kurun.

## v4 değişiklikleri
- Otomatik rasyon hesaplama/robot akışı kaldırıldı; form yalnızca destek talebi toplar.
- Üye kayıt ve giriş ekranı etkinleştirildi.
- Yönetici panelinde üretici adıyla gelen destek talepleri listelenir; durumları değiştirilebilir.
- 32 hammadde kaydı kütüphaneye eklendi; grup ve besin parametreleri düzenlenebilir.
- Ürün galerisi Büyükbaş → Küçükbaş → Kanatlı sırasına alındı; grup filtreleri sadece seçilen grubu gösterir, Tümü hepsini gösterir.
- Küçükbaş ürün fotoğrafında kullanıcının önceki mor çuval tasarımı korunarak tek koyunlu orijinal görsel kullanıldı.

## Önemli veri notu
Bu ZIP'e erişilebilen önceki proje dosyalarında NRC/NASEM 32 hammaddelik özgün katkı tablosu bulunmadı. Bu nedenle 32 hammadde adı açıldı, ancak doğrulanamayan besin değerleri boş bırakıldı; hiçbir değer uydurulmadı. Orijinal 32'li NRC rapor tablosu sisteme aktarılınca ilgili alanlar gerçek verilerle doldurulmalıdır.

## Veri saklama notu
Bu v4 önizlemesinde üyeler, destek talepleri ve yönetim verileri tarayıcı `localStorage` alanında tutulur. Bu nedenle farklı üreticilerin cihazlarından gelen kayıtlar otomatik olarak tek yönetici ekranında birleşmez; canlı kullanım için Supabase gibi sunucu veritabanı ve güvenli auth bağlantısı gerekir.
