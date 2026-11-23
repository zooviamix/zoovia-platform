# ZOOVIA Platform

Next.js 15 / React 19 tabanlı ZOOVIA web platformu.

## Yerel çalıştırma

```bash
npm install
npm run dev
```

## Bölümler

- `/` Ana sayfa
- `/products` Ürün kataloğu (ürün görselleri `public/products` klasöründe)
- `/ration` Rasyon formu
- `/admin` Yönetici paneli

## Yönetici paneli prototipi

Yönetici panelinde hammadde ekleme/düzenleme/silme, besin değerlerini girme, gruplandırma ve rasyon parametrelerini düzenleme arayüzleri bulunur. Bu ilk sürümde değişiklikler tarayıcı `localStorage` alanında saklanır. Ortak ve kalıcı canlı kullanım için sunucu tarafı veritabanı, kimlik doğrulama ve yetki kontrolü bağlanmalıdır. Başlangıç hammadde kayıtları yalnızca örnek arayüz verisidir; NRC/NASEM referans değeri olarak kullanılmamalıdır.

Rasyon formundaki hammadde seçimi, aynı tarayıcıdaki yönetici panelinde kayıtlı hammadde adlarını okur.
