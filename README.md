# StackStarter

[🌐 Lihat Live Demo Aplikasi](https://stackstarter-five.vercel.app/)

# StackStarter

StackStarter adalah aplikasi web direktori berbasis React yang menyediakan panduan inisialisasi perintah Command Line Interface (CLI) untuk berbagai kerangka kerja dan pustaka pemrograman. Aplikasi ini dirancang untuk mempermudah pengembang dalam menginisialisasi proyek dengan penyesuaian sintaksis perintah secara langsung berdasarkan jenis terminal yang digunakan (Windows CMD, PowerShell, dan Bash/macOS/Linux).

## Fitur Utama

- **Pemilih Terminal Global**: Mengubah seluruh instruksi perintah CLI di semua kartu proyek secara dinamis sesuai mode terminal yang dipilih (CMD, PowerShell, atau Bash). Terminal default terdeteksi otomatis berdasarkan OS pengguna dan disimpan di `localStorage`.
- **Pencarian dan Filter Real-time**: Memfilter proyek berdasarkan kata kunci nama, deskripsi, kategori, atau tag secara langsung, lengkap dengan saran pencarian dan sorotan kata kunci.
- **Salin Sekali Klik (One-Click Copy)**: Menyalin satu perintah atau seluruh urutan perintah ke papan klip (clipboard).
- **Detail Modal per Stack**: Klik kartu untuk membuka detail lengkap: deskripsi, prasyarat, tag, tingkat kesulitan, tautan dokumentasi/repo, dan checklist kemajuan langkah setup.
- **Favorit & Progress Tersimpan**: Simpan stack favorit beserta progress langkah yang sudah selesai secara lokal (`localStorage`).
- **Perbandingan Stack**: Bandingkan hingga 3 stack dalam tabel berdampingan berdasarkan kategori, deskripsi, kesulitan, prasyarat, dan daftar perintah.
- **Mode Terang/Gelap & Aksen Warna**: Ganti tema gelap/terang dan pilih warna aksen (emerald, cyan, violet, amber, rose, blue).
- **Multi-bahasa**: Dukung Bahasa Indonesia dan English untuk seluruh antarmuka.
- **Statistik Penggunaan**: Tampilkan jumlah stack, perintah yang telah disalin, dan jumlah favorit.
- **Tampilan Responsif**: Antarmuka berbasis tema terminal menggunakan Tailwind CSS v4.
- **Panduan Lintas Platform**: Menangani perbedaan sintaksis spesifik sistem operasi, seperti pembuatan file/folder, variabel lingkungan, dan pengaktifan lingkungan virtual Python.

## Teknologi yang Digunakan

- **React 19** (Vite)
- **Tailwind CSS v4**
- **Lucide React** (Ikon)

## Struktur Proyek

```text
stackstarter/
├── .github/
│   └── workflows/
│       └── ci.yml             # CI: lint, test, dan build otomatis
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigasi atas, terminal global, tema, aksen, bahasa
│   │   ├── SearchFilter.jsx   # Pencarian, kategori, favorit, sortir
│   │   ├── StackCard.jsx      # Kartu visual penampil perintah CLI
│   │   ├── StackModal.jsx     # Modal detail stack + checklist progress
│   │   ├── CompareModal.jsx   # Tabel perbandingan stack
│   │   └── StatsBar.jsx       # Statistik penggunaan
│   ├── data/
│   │   ├── stacksData.js      # Basis data lokal untuk tech stack & instruksi CLI
│   │   └── stacksData.test.js # Test validasi data stack
│   ├── i18n.js                # Terjemahan UI (ID/EN)
│   ├── App.jsx                # Komponen utama dan pengelola state
│   ├── index.css              # Tema global, variabel warna, utilitas kustom
│   └── main.jsx               # Titik masuk aplikasi React
├── package.json
└── vite.config.js
```

## Stack yang Tersedia

Aplikasi saat ini mencakup **35+ stack** pada kategori:

- Frontend (React, Next.js, Vue, Svelte, Angular, Astro, Nuxt, dll.)
- Backend (Express, NestJS, Hono, Django, FastAPI, Laravel, Gin, Spring Boot)
- Mobile (React Native/Expo, Flutter)
- Database & ORM (Prisma, Drizzle, Supabase)
- DevOps (Docker Compose, Tailwind, shadcn/ui)
- Testing (Vitest, Playwright, Cypress)
- AI/ML (TensorFlow, PyTorch, Ollama)
- Monorepo (Turborepo, Nx)
- Tools (pnpm, Bun, uv, Git)

## Panduan Instalasi Lokal

Persyaratan sistem: Node.js versi 18.0.0 atau yang lebih baru.

### Kloning Repositori

```bash
git clone https://github.com/username/stackstarter.git
cd stackstarter
```

### Install Dependensi

```bash
npm install
```

### Jalankan Server Pengembang

```bash
npm run dev
```

### Lint, Test, dan Build

```bash
npm run lint
npm test
npm run build
```

## Akses Aplikasi

Buka peramban web dan akses alamat http://localhost:5173.

## Panduan Perintah Terminal per Sistem Operasi

Aplikasi ini mengategorikan perintah CLI ke dalam tiga format utama:

| Operasi | Windows CMD | PowerShell | macOS / Linux / Git Bash |
| --- | --- | --- | --- |
| Pembuatan Folder | `mkdir folder1 folder2` | `New-Item -ItemType Directory -Path "folder1","folder2"` | `mkdir -p folder1 folder2` |
| Pembuatan File Kosong | `type nul > index.js` | `New-Item index.js -ItemType File` | `touch index.js` |
| Pengaktifan Virtualenv Python | `venv\Scripts\activate.bat` | `.\venv\Scripts\Activate.ps1` | `source venv/bin/activate` |
| Penggabungan Perintah | `command1 & command2` | `command1; command2` | `command1 && command2` |
