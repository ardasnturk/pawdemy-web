# Pawdemy website

Landing page, privacy policy, terms and support for the Pawdemy iOS app, at https://pawdemy.ardasnturk.com.
Vite + React + Tailwind, English and Turkish (`src/i18n`). Deployed to GitHub Pages by `.github/workflows/deploy.yml`
on every push to `main`; the custom domain is in `public/CNAME`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

- App name, links and release state: `src/config.ts` (set `APP_STORE_URL` once the app is live)
- Screenshots: `public/screens/<language>/<slot>.png`, captured from the app with its `-demoData` launch argument
- The app itself: `../pawdemy-app`
