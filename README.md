# ZOOVIA Platform

Next.js 15 / React 19 project. Deploy on Vercel by importing this repository and using the default Next.js build settings.

## Environment variables

Set these in Vercel Project Settings → Environment Variables:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET` (long random secret)

## Included routes

- `/` homepage
- `/about`, `/products`, `/contact`
- `/ration` producer ration-support form
- `/login` member sign-up / sign-in
- `/admin/login`, `/admin` management panel

## Important data-storage note

This project snapshot's member accounts, ingredient library, ingredient groups and support-request queue still use browser `localStorage`. This means they are stored per browser/device and are not shared with the administrator on another device. A shared database (for example Supabase or Neon/Postgres) and server-side member authentication are required before using the platform for real producer registrations and cross-device admin request management. Do not treat the current localStorage flow as production-grade authentication or shared request storage.

## Product imagery

The eight ZOOVIA product package visuals are in `public/products/`.
