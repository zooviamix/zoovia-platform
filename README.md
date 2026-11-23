# ZOOVIA Platform

Next.js 15 / React 19 project. Existing ration assistant and admin panel routes are retained.

## Routes
- `/` Home
- `/about` About
- `/products` Product catalogue
- `/contact` Contact
- `/login` Producer signup/login
- `/ration` Ration support request
- `/admin/login` Admin login
- `/admin` Admin panel

## Local development
```bash
npm install
npm run dev
```

## Vercel environment variables
Set the following in Project Settings → Environment Variables:
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

## Important data limitation
This package currently stores producer accounts, ingredient data, groups and ration support requests in browser `localStorage`. The producer signup/login flow accepts either the registered phone number or email as the login identifier, without email/phone verification. Requests are visible in the admin panel when both producer and admin use the same browser profile and deployed origin. Data is not shared between different devices or browsers and is not durable server-side storage. A production multi-device workflow requires a shared database and server-side member authentication; database credentials must be configured in Vercel before enabling that workflow.

The ingredient library preserves the existing editable admin structure. The NRC/NASEM source nutrient values are not populated with invented values; the supplied source tables must be imported to complete those data fields.


## Son arayüz güncellemesi
- Yönetim paneli: `/admin` (önce `/admin/login` üzerinden giriş yapılır).
- Panel sekmeleri: rasyon destek talepleri, üyeler, hammadde kütüphanesi ve hammadde grupları.
- Ürünler sayfasında ürün açıklamaları ve “Ürünü İncele” detay penceresi bulunur.
- Üst navigasyon referans sitedeki kurumsal sekme düzenine göre genişletildi.
- ZOOVIA amblemi fotoğraf kırpımı yerine temiz, ölçeklenebilir SVG olarak yeniden çizildi.

Not: Üyeler, hammaddeler ve rasyon talepleri bu sürümde localStorage üzerinde tutulur. Bu nedenle farklı cihazlar/tarayıcılar arasında ortak değildir. Canlı kullanım için veritabanı ve üye kimlik doğrulama altyapısı ayrıca kurulmalıdır.
