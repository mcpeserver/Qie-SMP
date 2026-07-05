# MASTER PROMPT UNIVERSAL: PANDUAN PEMBANGUNAN LANDING PAGE MINECRAFT

Panduan ini berisi arsitektur lengkap, petunjuk teknis, standar visual, dan petunjuk implementasi terperinci untuk membuat Landing Page Informasi Resmi Minecraft Server berkualitas tinggi (*production-grade*) dengan performa optimal.

Dokumen ini dirancang sebagai cetak biru (*blueprint*) modular yang dapat digunakan oleh AI atau Software Engineer untuk menghasilkan landing page Minecraft baru hanya dengan mengubah file konfigurasi terpusat.

---

## 📖 DAFTAR ISI
1. **Peran & Standar Arsitektur**
2. **Struktur Proyek & Asset Management**
3. **Konfigurasi Terpusat (`site.ts`)**
4. **Desain Sistem & Visual Identity**
5. **Implementasi Komponen Utama**
   - Developer Watermark Sticky Banner
   - Sticky Header & Navigation
   - Hero Section dengan Floating Logo
   - Indikator Status & Informasi Koneksi
   - Grid Peraturan Komunitas
   - Toko Rank & Sistem Ekonomi
   - Footer & Jaringan Sosial
6. **Optimasi Performa & SEO Modern**
7. **Panduan Pengelolaan & Deployment**

---

## 1. PERAN & STANDAR ARSITEKTUR

Untuk menjamin kualitas akhir berada pada tingkat profesional, setiap pembuat website wajib bertindak dengan standar kompetensi berikut:
* **Senior UI/UX Designer**: Mengatur harmoni warna, kegunaan (*usability*), dan hierarki visual yang natural.
* **Senior Front-End Engineer**: Menulis kode React & TypeScript yang modular, efisien, aman, dan mudah dibaca.
* **SEO Specialist**: Memastikan skema meta-tag, sitemap, robots, dan markup JSON-LD terisi dengan akurat sesuai standar mesin pencari.
* **Performance Engineer**: Meminimalkan ukuran bundle, mengoptimalkan rendering gambar, dan memastikan skor Lighthouse di atas 95.

---

## 2. STRUKTUR PROYEK & ASSET MANAGEMENT

Penerapan struktur folder yang rapi sangat penting untuk kemudahan pemeliharaan jangka panjang. Berikut adalah struktur folder yang direkomendasikan:

```text
/
├── public/                  # Static assets (Opsional / bisa diletakkan di src)
├── src/
│   ├── assets/
│   │   └── images/          # Menyimpan logo.png, hero-bg.webp, dsb.
│   ├── config/
│   │   └── site.ts          # FILE UTAMA: Sumber data tunggal untuk konten website
│   ├── components/          # Komponen UI modular
│   ├── App.tsx              # Komponen halaman utama (Single Page)
│   ├── index.css            # Pengaturan tema Tailwind v4, font Google, & animasi
│   └── main.tsx             # Entry point aplikasi
├── index.html               # Pengaturan SEO meta-tag & struktur JSON-LD
├── tsconfig.json            # Konfigurasi TypeScript
├── vite.config.ts           # Konfigurasi pembundelan Vite
├── robots.txt               # Peta crawling bot mesin pencari
└── sitemap.xml              # Pemetaan situs untuk index Google
```

*Aturan Penting Asset Gambar:*
1. Semua gambar dipanggil langsung melalui path relatif atau static import yang kompatibel dengan bundler (Vite / Next.js).
2. Disarankan menggunakan format modern seperti `.webp` untuk background guna mempercepat waktu pemuatan halaman.

---

## 3. KONFIGURASI TERPUSAT (`site.ts`)

Seluruh teks, IP, port, tautan sosial media, harga rank, aturan, dan watermark pengembang **WAJIB** dikumpulkan dalam satu berkas konfigurasi terpusat di `/src/config/site.ts`.

Komponen antarmuka (UI) dilarang keras memuat URL atau teks statis yang di-hardcode. Berikut adalah template konfigurasi yang fleksibel untuk digunakan kembali:

```typescript
export interface SiteConfig {
  name: string;
  theme: string;
  version: string;
  platform: string;
  connection: {
    ip: string;
    port: string;
    platformLabel: string;
  };
  community: {
    discord: string;
    linktree: string;
    tiktok: string;
    whatsappGroup: string;
  };
  purchase: {
    whatsappNumber: string;
    whatsappDisplay: string;
  };
  developer: {
    name: string;
    whatsapp: string;
    portfolioUrl: string;
  };
  prices: {
    ranks: {
      name: string;
      price: string;
    }[];
    money: {
      rate: string;
      description: string;
    };
  };
  rules: string[];
  copyright: string;
}

export const siteConfig: SiteConfig = {
  name: "NAMA SERVER ANDA",
  theme: "Minecraft Survival Economy",
  version: "Bedrock 1.26.30+",
  platform: "Bedrock Only",
  connection: {
    ip: "play.nama-server.com",
    port: "19132",
    platformLabel: "Minecraft Bedrock Edition"
  },
  community: {
    discord: "https://discord.gg/invite",
    linktree: "https://linktr.ee/username",
    tiktok: "https://tiktok.com/@username",
    whatsappGroup: "https://chat.whatsapp.com/invite"
  },
  purchase: {
    whatsappNumber: "62895602592430",
    whatsappDisplay: "0895602592430"
  },
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    portfolioUrl: "https://sfl.gl/x2ic"
  },
  prices: {
    ranks: [
      { name: "VIP", price: "Rp 25.000" },
      { name: "VIP+", price: "Rp 50.000" },
      { name: "MVP", price: "Rp 70.000" },
      { name: "MVP+", price: "Rp 85.000" },
      { name: "MVP++", price: "Rp 100.000" }
    ],
    money: {
      rate: "50K Money = 1K USD",
      description: "Hasil pembelian digunakan untuk membantu biaya operasional server, perpanjangan server, peningkatan spesifikasi, dan kebutuhan administrasi."
    }
  },
  rules: [
    "Gunakan Grup Dengan Bijak",
    "Sopan dan Saling Menghargai",
    "Menghormati Keputusan Admin",
    "Dilarang Membahas LGBTQ+",
    "Dilarang Menggunakan Cheat, X-Ray, Dupe, dan Bug Abuse",
    "Dilarang Promosi Tanpa Izin Admin",
    "Dilarang Membagikan Pornografi, Kekerasan, SARA, dan Konten Negatif Lainnya"
  ],
  copyright: "© 2026 NAMA SERVER. All Rights Reserved."
};
```

---

## 4. DESAIN SISTEM & VISUAL IDENTITY

Desain visual website harus mencerminkan karakter tema **Minecraft Nature & Survival Economy** yang hangat, bersih, dan natural. Hindari penggunaan tema luar angkasa, gaya cyber, atau warna neon yang berlebihan.

### Palet Warna Resmi
* **Forest Dark**: `#0a1c12` (Warna dasar latar belakang)
* **Forest Medium**: `#11331e` (Warna kartu / panel dasar)
* **Forest Light**: `#1b4d31` (Warna border dan elemen pemisah)
* **Nature Grass**: `#22c55e` (Aksen interaktif utama)
* **Gold Coin**: `#eab308` (Aksen visual untuk rank & aspek ekonomi)
* **White/Stone Light**: `#f5f5f4` (Warna tipografi utama)

### Tipografi
* **Font Utama (Body & Judul)**: `Plus Jakarta Sans` atau `Inter` untuk kesan yang bersih, modern, mudah dibaca, dan berkelas dunia.
* **Font Monospaced (Data & Kode)**: `JetBrains Mono` atau `Fira Code` untuk menampilkan alamat IP, Port, dan indikator teknis server dengan kesan game Minecraft yang otentik.

---

## 5. IMPLEMENTASI KOMPONEN UTAMA

Setiap komponen dirancang secara terperinci untuk kenyamanan pengguna:

### A. Developer Watermark Sticky Banner
Banner ini diletakkan di bagian paling atas halaman dan akan terus ikut ter-scroll (*sticky*). Banner harus berukuran kecil, elegan, dan memuat link untuk melihat portofolio server lain agar mudah ditemukan oleh pengunjung:
```tsx
<div className="w-full bg-[#0a1e12] border-b border-forest-light/40 py-2 px-4 text-xs sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <span>Developed by <strong className="text-nature-lime">RAN DEV</strong></span>
    <a href="https://sfl.gl/x2ic" target="_blank" className="bg-gradient-to-r from-gold-coin to-amber-500 text-stone-900 px-3 py-1 rounded-full text-[11px] font-bold">
      Lihat Server Lain 🌐
    </a>
  </div>
</div>
```

### B. Sticky Header & Navigation
Navbar utama menggunakan efek *glassmorphism* (blur latar belakang) dan secara dinamis mengubah kepadatannya saat digulir ke bawah guna mempertahankan fokus pada konten utama.
* Transisi: `transition-all duration-300`
* Perubahan saat scroll: Background berubah menjadi lebih solid, tinggi navbar mengecil, bayangan halus dimunculkan.

### C. Hero Section
Bagian pembuka yang dramatis menampilkan logo server di tengah dengan efek melayang (*floating animation*), judul utama dengan tipografi tebal, tag versi server, serta dua tombol aksi utama (Salin IP dan Gabung Komunitas).

### D. Indikator Status & Informasi Koneksi
Sesuai standar kejujuran informasi resmi, tampilkan legenda status server dengan 3 indikator:
* 🟢 **Online**: Server berjalan normal dan aktif.
* 🟡 **Maintenance**: Sistem sedang diperbarui atau dipelihara.
* 🔴 **Offline**: Server mati sementara.
Informasi koneksi disajikan dalam bentuk kartu modern yang dilengkapi fitur salin otomatis (*click-to-clipboard*) beserta notifikasi toast sukses yang halus.

### E. Peraturan Komunitas
Menggunakan tata letak kartu grid bernomor dari 1 sampai 7 sesuai peraturan resmi. Menyertakan kotak peringatan sanksi pelanggaran yang jelas untuk menjaga ketertiban server.

### F. Toko Rank & Sistem Ekonomi
* **Kartu Paket Rank**: Menampilkan 5 tingkat rank resmi (VIP, VIP+, MVP, MVP+, MVP++) dengan tombol beli yang langsung terhubung ke WhatsApp Admin yang memuat pesan pemesanan otomatis.
* **Sistem Ekonomi**: Informasi jelas tentang nilai konversi mata uang server beserta keterangan alokasi dana donasi secara transparan untuk biaya operasional server.

---

## 6. OPTIMASI PERFORMA & SEO MODERN

Website wajib memiliki performa luar biasa dan siap bersaing di halaman pencarian Google:
* **Lighthouse Score**: Target skor optimal di atas 95 pada aspek Performance, Accessibility, Best Practices, dan SEO.
* **JSON-LD Schema**: Menyertakan metadata `GameServer` terstruktur untuk mempermudah Google mengidentifikasi jenis dan kredibilitas website.
* **Robots.txt & Sitemap.xml**: Disediakan secara terpisah di direktori akar untuk mengontrol hak perayapan robot pencari.

---

## 7. PANDUAN PENGELOLAAN & DEPLOYMENT

### Panduan Mengganti Data
Jika Anda ingin menerapkan panduan ini untuk server Minecraft baru lainnya:
1. Ganti aset gambar di folder `/src/assets/images/` dengan logo dan background baru.
2. Perbarui seluruh objek data di `/src/config/site.ts` dengan data server yang baru.
3. Jalankan kembali `npm run build` untuk menghasilkan website siap rilis dalam hitungan detik!

---
*Dikembangkan oleh **RAN DEV** (WhatsApp: 0895602592430 | Portofolio: https://sfl.gl/x2ic).*
*Gunakan cetak biru ini untuk menghadirkan kehadiran digital terbaik bagi server Minecraft Anda!*
