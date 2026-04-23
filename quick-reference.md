# 📋 QUICK REFERENCE - Prompt untuk Landing Page (React JS)

## 🎯 Format Prompt yang Paling Jelas

Copy-paste template ini dan sesuaikan:

```
Anda adalah expert React developer. Analisis design PNG landing page saya dan generate kode production-ready.

## TECH STACK
- Framework: React JS (dengan TypeScript)
- Styling: Tailwind CSS v4
- Struktur: Component-based (folder components/)

## CRITICAL RULES

1. **IMAGES (PENTING!)**
   ❌ JANGAN set src dengan path apapun
   ✅ HARUS src="" (kosong)
   ✅ HARUS ada alt text deskriptif
   ✅ Gunakan HTML img tag biasa: <img src="" alt="..." />
   
2. **FILE STRUCTURE**
   ```
   src/
   ├── components/
   │   ├── Hero.tsx
   │   ├── Navigation.tsx
   │   ├── Features.tsx
   │   └── [komponen lain].tsx
   ├── App.tsx
   ├── App.css
   └── index.tsx
   ```
   
3. **COMPONENTS**
   - Setiap file = 1 komponen utama
   - Props harus punya interface TypeScript
   - Export default atau named export
   
4. **STYLING**
   ✅ Tailwind CSS utility classes
   ✅ Responsive: sm: md: lg: xl: 2xl:
   ❌ Hindari inline styles
   ❌ Hindari custom CSS kecuali sangat perlu
   
5. **CODE QUALITY**
   ✅ Semantic HTML (nav, section, article, button)
   ✅ Proper TypeScript typing (no any)
   ✅ Clean dan readable code
   ❌ Hindari hardcoded values
   
## DELIVERABLES
1. App.tsx (main component)
2. Semua file komponen di folder components/ (terpisah per file)
3. App.css atau globals.css (global styles)
```

---

## 📝 CHECKLISTS

### Sebelum Submit Prompt:
- [ ] PNG design siap (di-copy dari Figma)
- [ ] Tahu komponen apa saja yang ada
- [ ] Folder Next.js sudah siap
- [ ] Tau image mana yang placeholder (kosong src)

### Setelah Dapat Kode:
- [ ] Semua image src="" (kosong)
- [ ] TypeScript no error
- [ ] Folder structure rapi
- [ ] Tailwind CSS dipakai (bukan inline style)
- [ ] Semantic HTML digunakan
- [ ] Responsive classes ada (sm:, md:, etc)

---

## 🛠️ TROUBLESHOOTING INSTANT

| Problem | Solusi |
|---------|--------|
| Image src tidak kosong | Minta: "Ubah semua image src="" (kosong)" |
| Inline styles | Minta: "Convert semua inline style ke Tailwind classes" |
| TypeScript error | Cek interface definition, gunakan type yang tepat |
| Tailwind tidak work | Install tailwindcss, cek tailwind.config.ts |
| Layout berantakan | Add responsive classes: `sm:` `md:` `lg:` |
| Missing components | Ensure semua file ada di `components/` folder |

---

## 🔄 QUICK PROMPT EDITS

**Jika ada yang salah, prompt singkat ini biasanya cukup:**

```
Perbaiki:
- Image src harus kosong: src=""
- Ubah [komponen] dari [lama] ke [baru]
- Tambahkan responsive classes untuk mobile
- Fix TypeScript errors di file [filename]
```

---

## 📦 PROJECT SETUP (Sebelum Generate)

```bash
# Create React project dengan Vite + TypeScript + Tailwind
npm create vite@latest landing-page -- --template react-ts
cd landing-page

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 🎨 DESIGN TO CODE WORKFLOW

1. **Design** (Figma/Adobe)
   ↓
2. **Export PNG** (design screenshot)
   ↓
3. **Copy PNG** → Paste di Antigravity Chat
   ↓
4. **Paste Prompt Template** → Klik Submit
   ↓
5. **Claude Opus generate kode**
   ↓
6. **Copy kode** → Paste di project Anda
   ↓
7. **Update src=""** → Tambah image paths
   ↓
8. **npm run dev** → Test di browser
   ↓
9. **Done!** ✨

---

## 📌 MOST IMPORTANT RULES

🔴 **PALING PENTING:**
1. **src="" (kosong)** - Jangan lupa! Saya isi sendiri nanti
2. **TypeScript** - No `any` type
3. **Tailwind** - Semua styling via classes
4. **Component-based** - File terpisah per komponen
5. **Semantic HTML** - Gunakan semantic tags

---

## 💡 TIPS

- ✅ Semakin detail prompt → semakin bagus hasil
- ✅ Screenshot design PNG dari Figma buat reference
- ✅ Sebut komponen mana saja yang ada di design
- ✅ Kalo result belum perfect, fine-tune dengan prompt singkat
- ✅ Test di mobile untuk responsive design
- ⚠️ JANGAN forget src="" pada images - ini penting!

---

## 🚀 SETELAH DAPAT KODE

1. Copy semua file ke project
2. `npm install` (jika ada dependency baru)
3. `npm run dev` → Check di browser
4. Isi `src=""` dengan path image yang sebenarnya
5. Test di mobile (F12 → device toggle)
6. Done! Siap deploy 🎉

