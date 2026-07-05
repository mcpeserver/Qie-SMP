# QIE SMP - Landing Page Informasi Resmi Minecraft Server

Halo! Selamat datang di repositori website resmi **QIE SMP**. Website ini dirancang khusus untuk menjadi pusat informasi satu pintu bagi server Minecraft Bedrock Edition bertema *Survival Economy* Anda. 

Dengan website ini, pemain baru bisa dengan mudah melihat status server, menyalin alamat IP & port, membaca tata tertib, mengecek daftar rank, hingga bergabung ke komunitas Anda secara cepat tanpa harus terus-menerus bertanya di grup chat.

---

## 🚀 Teknologi yang Digunakan

Website ini dibangun menggunakan teknologi modern kelas industri untuk menjamin kecepatan, keamanan, dan kemudahan pemeliharaan:
* **React 19 & TypeScript**: Basis aplikasi yang cepat, aman, dan modular.
* **Vite**: Sebagai build tool generasi baru yang super cepat dan efisien.
* **Tailwind CSS v4**: Utility-first CSS framework terbaru untuk tampilan yang konsisten dan modern.
* **Framer Motion**: Untuk efek animasi mikro yang halus, elegan, dan ringan.
* **Lucide React**: Set ikon bergaya minimalis yang modern dan seragam.

---

## 📁 Struktur Folder & Fungsinya

Berikut adalah struktur folder dalam proyek ini agar Anda tidak bingung saat melakukan pemeliharaan:

```text
/
├── src/
│   ├── assets/
│   │   └── images/          # Tempat menyimpan logo dan background hero resmi
│   ├── config/
│   │   └── site.ts          # FILE UTAMA: Semua konfigurasi & data teks server di sini
│   ├── App.tsx              # Layout halaman utama & logika interaktif (copy IP, toast)
│   ├── index.css            # Pengaturan font, tema warna Minecraft, & animasi custom
│   └── main.tsx             # Entry point aplikasi React
├── index.html               # File HTML utama & pengaturan tag SEO / JSON-LD
├── tsconfig.json            # Konfigurasi TypeScript
├── vite.config.ts           # Konfigurasi bundling Vite
├── package.json             # Daftar library & script perintah
├── robots.txt               # Panduan ramah untuk mesin pencari (SEO)
└── sitemap.xml              # Peta situs untuk mempermudah Google melakukan indeks
```

---

## 🛠️ Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan website ini di komputer Anda sendiri, pastikan sudah menginstal [Node.js](https://nodejs.org/) versi terbaru. Kemudian ikuti langkah berikut:

1. **Unduh atau Clone Repositori**
   ```bash
   git clone https://github.com/username-anda/qie-smp-website.git
   cd qie-smp-website
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan**
   ```bash
   npm run dev
   ```
   Setelah itu, buka browser dan akses alamat `http://localhost:3000`.

4. **Kompilasi untuk Produksi (Build)**
   ```bash
   npm run build
   ```
   Hasil build siap pakai akan berada di dalam folder `dist/`.

---

## 🎨 Panduan Menyesuaikan Website

Kami memusatkan semua konfigurasi di dalam file konfigurasi sehingga Anda **tidak perlu menyentuh kode HTML atau React sama sekali**.

### 1. Mengubah Informasi & Kontak Server
Semua teks, IP, port, tautan Discord, nomor WhatsApp, harga rank, dan peraturan diatur di file **`/src/config/site.ts`**.
Cukup buka file tersebut dan ganti isinya dengan mudah:
```typescript
export const siteConfig = {
  name: "QIE SMP",
  theme: "Minecraft Survival Economy",
  version: "Bedrock 1.26.30+",
  connection: {
    ip: "IP_BARU_ANDA",
    port: "PORT_BARU_ANDA",
  },
  // ... Ganti tautan sosial media dan harga rank sesuai keinginan Anda
};
```

### 2. Mengganti Logo Server
Ganti file logo lama Anda yang ada di:
👉 **`/src/assets/images/qie_smp_logo_...jpg`** dengan file logo baru Anda. 
*Saran: Gunakan gambar berformat PNG atau JPG berukuran 512x512 piksel untuk hasil terbaik.*

### 3. Mengganti Gambar Background Hero
Ganti file background yang ada di:
👉 **`/src/assets/images/qie_smp_hero_bg_...jpg`** dengan gambar lanskap Minecraft milik server Anda sendiri.
*Saran: Gunakan gambar beresolusi minimal 1920x1080 piksel dengan nuansa alam yang hangat agar sesuai dengan konsep aslinya.*

---

## ☁️ Cara Deploy ke Vercel (Gratis & Cepat)

Website ini 100% siap untuk diunggah ke Vercel hanya dalam hitungan menit:

1. Buat akun gratis di [Vercel](https://vercel.com).
2. Hubungkan akun GitHub Anda ke Vercel.
3. Impor repositori proyek website ini.
4. Klik tombol **Deploy**. Vercel akan otomatis mengenali proyek Vite dan mempublikasikannya secara online.

---

## 🪵 Changelog Awal
* **v1.0.0 (Rilis Awal)**
  * Desain antarmuka responsif bertema Minecraft Nature.
  * Fitur copy IP & Port sekali klik dengan notifikasi toast custom.
  * Modul toko rank Minecraft terintegrasi WhatsApp.
  * SEO lengkap dengan metadata Indonesia, Open Graph, & JSON-LD terstruktur.

---

## 🔧 Troubleshooting Dasar

* **Error: "Module not found" saat menjalankan proyek**
  * Solusi: Hapus folder `node_modules` dan jalankan kembali perintah `npm install` di terminal.
* **Perubahan tidak langsung muncul di browser**
  * Solusi: Lakukan refresh penuh pada browser Anda (*Hard Refresh* dengan menekan `Ctrl + F5` atau `Cmd + Shift + R`).

---

## 💖 Lisensi & Kontribusi

Proyek ini dilisensikan di bawah **Lisensi MIT**. Anda bebas melakukan fork, memodifikasi, dan menggunakan website ini untuk server Anda sendiri. Jika Anda menemukan bug, silakan buat *Pull Request* atau laporkan di tab *Issues* repositori GitHub Anda!

*Website ini dikembangkan dengan penuh perhatian oleh **RAN DEV** (WhatsApp: 0895602592430).*
Jika Anda terbantu dengan website ini, jangan ragu untuk memberikan bintang ⭐ pada repositori ini ya! Selamat bermain dan semoga server Anda semakin ramai! 🌲
