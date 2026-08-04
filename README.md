# StackStarter

[🌐 Lihat Live Demo Aplikasi](https://stackstarter-five.vercel.app/)

# StackStarter

StackStarter adalah aplikasi web direktori berbasis React yang menyediakan panduan inisialisasi perintah Command Line Interface (CLI) untuk berbagai kerangka kerja dan pustaka pemrograman. Aplikasi ini dirancang untuk mempermudah pengembang dalam menginisialisasi proyek dengan penyesuaian sintaksis perintah secara langsung berdasarkan jenis terminal yang digunakan (Windows CMD, PowerShell, dan Bash/macOS/Linux).

## Fitur Utama

- **Pemilih Terminal Global**: Mengubah seluruh instruksi perintah CLI di semua kartu proyek secara dinamis sesuai mode terminal yang dipilih (CMD, PowerShell, atau Bash).
- **Pencarian dan Filter Real-time**: Memfilter proyek berdasarkan kata kunci nama, deskripsi, atau kategori secara langsung.
- **Salin Sekali Klik (One-Click Copy)**: Memudahkan penyalinan baris perintah CLI ke papan klip (clipboard).
- **Panduan Lintas Platform**: Menangani perbedaan sintaksis spesifik sistem operasi, seperti pembuatan file/folder, variabel lingkungan, dan pengaktifan lingkungan virtual Python.
- **Tampilan Gelap Responsif**: Antarmuka berbasis tema terminal menggunakan Tailwind CSS v4.

## Teknologi yang Digunakan

- **React 18** (Vite)
- **Tailwind CSS v4**
- **Lucide React** (Ikon)

## Struktur Proyek

```text
stackstarter/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigasi atas dan pemilih terminal global
│   │   ├── SearchFilter.jsx   # Komponen input pencarian dan kategori
│   │   └── StackCard.jsx      # Kartu visual penampil perintah CLI
│   ├── data/
│   │   └── stacksData.js      # Basis data lokal untuk tech stack dan instruksi CLI
│   ├── App.jsx                # Komponen utama dan pengelola state
│   ├── index.css              # Konfigurasi gaya global
│   └── main.jsx               # Titik masuk aplikasi React
├── package.json
└── vite.config.js

Panduan Instalasi Lokal
Persyaratan sistem: Node.js versi 18.0.0 atau yang lebih baru.

Kloning Repositori

Bash
git clone [https://github.com/username/stackstarter.git](https://github.com/username/stackstarter.git)
cd stackstarter

Install Dependensi

Bash
npm install

Jalankan Server Pengembang

Bash
npm run dev

Akses Aplikasi
Buka peramban web dan akses alamat http://localhost:5173.

Panduan Perintah Terminal per Sistem Operasi
Aplikasi ini mengategorikan perintah CLI ke dalam tiga format utama:

Operasi	Windows CMD	PowerShell	macOS / Linux / Git Bash

Pembuatan Folder	mkdir folder1 folder2	New-Item -ItemType Directory -Path "folder1","folder2"	mkdir -p folder1 folder2

Pembuatan File Kosong	type nul > index.js	New-Item index.js -ItemType File	touch index.js

Pengaktifan Virtualenv Python	venv\Scripts\activate.bat	.\venv\Scripts\Activate.ps1	source venv/bin/activate

Penggabungan Perintahcommand1 & command2command1; command2command1 && command2
