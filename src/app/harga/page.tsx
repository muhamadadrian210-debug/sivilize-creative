"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Tag penanda area layanan on-location
const KupangTag = () => (
  <span style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    background: "rgba(245, 158, 11, 0.12)",
    border: "1px solid rgba(245, 158, 11, 0.4)",
    color: "#f59e0b",
    fontSize: "0.62rem",
    fontWeight: 800,
    padding: "2px 7px",
    borderRadius: "6px",
    letterSpacing: "0.4px",
    fontFamily: "monospace",
    whiteSpace: "nowrap",
    marginBottom: "8px"
  }}>
    📍 Kupang & Sekitarnya
  </span>
);

export default function HargaPage() {
  const [activeCategory, setActiveCategory] = useState<"video" | "event" | "photo" | "branding">("video");

  const cmoWaNumber = "6282347058055";

  const videoPackages = [
    {
      name: "Video Promosi UMKM",
      price: "Mulai Rp 500.000",
      desc: "Video singkat kreatif berdurasi 30-60 detik untuk mempromosikan produk/jasa UMKM di Instagram & TikTok.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik untuk berkonsultasi mengenai paket *Video Promosi UMKM (Mulai Rp 500.000)*.\n\nBoleh dibantu koordinasi jadwal shooting & konsep awalnya? Terima kasih."
    },
    {
      name: "Video Company Profile",
      price: "Mulai Rp 1.500.000",
      desc: "Video profil perusahaan berdurasi 3-5 menit lengkap dengan konsep, wawancara, b-roll, & narasi suara.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud berkonsultasi mengenai pembuatan *Video Company Profile (Mulai Rp 1.500.000)* untuk perusahaan/instansi kami.\n\nBoleh dibantu jadwal rapat brief & penawarannya? Terima kasih."
    },
    {
      name: "Short Video (Reels / TikTok)",
      price: "Mulai Rp 300.000 / video",
      desc: "Produksi video vertikal tren terkini yang ramah algoritma untuk konten harian/mingguan.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik mengambil paket *Short Video Reels / TikTok (Mulai Rp 300.000/video)* untuk media sosial bisnis saya.\n\nBoleh dibantu informasi alur pengerjaannya? Terima kasih."
    },
    {
      name: "Drone Aerial Footage",
      price: "Mulai Rp 500.000",
      desc: "Pengambilan gambar udara berkualitas 4K untuk lokasi perumahan, hotel, cafe, & acara outdoor.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya membutuhkan layanan *Drone Aerial Footage (Mulai Rp 500.000)* untuk pengambilan gambar udara di lokasi kami.\n\nBoleh dibantu ketersediaan tim videografernya? Terima kasih."
    }
  ];

  const eventPackages = [
    {
      name: "Wedding Highlight",
      price: "Mulai Rp 2.500.000",
      desc: "Video teaser & highlight pernikahan sinematik berdurasi 3-5 menit dengan color grading romantis.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik berkonsultasi untuk paket *Wedding Highlight Video (Mulai Rp 2.500.000)*.\n\nBoleh dibantu cek ketersediaan tanggal acara kami? Terima kasih."
    },
    {
      name: "Wedding Full Day",
      price: "Mulai Rp 5.000.000",
      desc: "Dokumentasi penuh akad & resepsi seharian, video highlight, serta album foto fisik eksklusif.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud mengambil paket *Wedding Full Day Documentation (Mulai Rp 5.000.000)*.\n\nBoleh dibantu koordinasi tim dokumentasi & jadwal pertemuannya? Terima kasih."
    },
    {
      name: "Dokumentasi Seminar & Event",
      price: "Mulai Rp 1.500.000",
      desc: "Liputan foto & video acara seminar, workshop, launching produk, atau konferensi bisnis.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya butuh layanan *Dokumentasi Seminar & Corporate Event (Mulai Rp 1.500.000)* untuk acara instansi kami.\n\nBoleh dibantu pengiriman draf penawarannya? Terima kasih."
    },
    {
      name: "Dokumentasi Wisuda",
      price: "Mulai Rp 1.000.000",
      desc: "Sesi foto personal, kelompok, & video kenangan momen kelulusan di kampus/sekolah.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik mengambil paket *Dokumentasi Wisuda (Mulai Rp 1.000.000)*.\n\nBoleh dibantu koordinasi jadwal foto kelulusan kami? Terima kasih."
    },
    {
      name: "Birthday & Party",
      price: "Mulai Rp 800.000",
      desc: "Dokumentasi foto & video acara ulang tahun, gathering keluarga, atau anniversary.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya mau tanya paket *Dokumentasi Birthday & Gathering (Mulai Rp 800.000)*.\n\nBoleh dibantu detail liputannya? Terima kasih."
    }
  ];

  const photoPackages = [
    {
      name: "Foto Produk Studio",
      price: "Mulai Rp 150.000 / produk",
      desc: "Pemotretan produk berlatar studio bersih (white/black/custom background) untuk e-commerce.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin memesan sesi *Foto Produk Studio (Mulai Rp 150.000/produk)* untuk katalog toko online saya.\n\nBoleh dibantu koordinasi pengiriman produknya? Terima kasih."
    },
    {
      name: "Foto Menu Makanan",
      price: "Mulai Rp 250.000 / sesi",
      desc: "Food photography profesional dengan aksesoris pendukung untuk menu restoran & GoFood/GrabFood.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya butuh sesi pemotretan *Foto Menu Makanan Restoran/Cafe (Mulai Rp 250.000/sesi)*.\n\nBoleh dibantu jadwal tim fotografer datang ke tempat kami? Terima kasih."
    },
    {
      name: "Foto Company & Direksi",
      price: "Mulai Rp 500.000 / sesi",
      desc: "Sesi foto profil direksi & fasilitas kantor untuk kebutuhan website & annual report.",
      onLocation: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud mengajukan sesi pemotretan *Foto Company Profile & Direksi (Mulai Rp 500.000/sesi)*.\n\nBoleh dibantu jadwal & persiapan sesi perusahaannya? Terima kasih."
    }
  ];

  const brandingPackages = [
    {
      name: "Desain Logo Vektor",
      price: "Mulai Rp 350.000",
      desc: "Perancangan logo profesional 3 opsi konsep lengkap dengan master file vektor (AI, EPS, PNG).",
      onLocation: false,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik membuat *Desain Logo Vektor Profesional (Mulai Rp 350.000)* untuk brand baru saya.\n\nBoleh dibantu form brief konsep logonya? Terima kasih."
    },
    {
      name: "Brand Identity Guidelines",
      price: "Mulai Rp 1.000.000",
      desc: "Buku panduan identitas brand meliputi logo, palette warna, tipografi, & aturan penggunaan.",
      onLocation: false,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud membuat *Brand Identity Guidelines (Mulai Rp 1.000.000)* untuk merapikan visual bisnis kami.\n\nBoleh dibantu alur konsultasinya? Terima kasih."
    },
    {
      name: "Desain Poster & Banner",
      price: "Mulai Rp 100.000 / desain",
      desc: "Desain materi promosi cetak/digital untuk kebutuhan pameran, event, & iklan.",
      onLocation: false,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin memesan *Desain Poster / Banner Promosi (Mulai Rp 100.000/desain)*.\n\nBoleh dibantu pengerjaannya? Terima kasih."
    }
  ];

  const getCurrentPackages = () => {
    switch (activeCategory) {
      case "video": return videoPackages;
      case "event": return eventPackages;
      case "photo": return photoPackages;
      case "branding": return brandingPackages;
    }
  };

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// TRANSPARENT_PRICING</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Paket & Estimasi Biaya</h1>
            <p className="text-slate-400 text-sm mt-3">
              Setiap paket dilengkapi pesan otomatis langsung ke CMO Shatrya Dhimar (+62 823-4705-8055).
            </p>
            {/* Keterangan tag area */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <span>📍</span>
              <span>Layanan bertanda <strong>Kupang & Sekitarnya</strong> membutuhkan kehadiran tim secara langsung di lokasi Anda.</span>
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex justify-center mb-16">
            <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory("video")}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${activeCategory === "video" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                🎬 Business Video
              </button>
              <button
                onClick={() => setActiveCategory("event")}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${activeCategory === "event" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                🎉 Event Docs
              </button>
              <button
                onClick={() => setActiveCategory("photo")}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${activeCategory === "photo" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                📷 Photography
              </button>
              <button
                onClick={() => setActiveCategory("branding")}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${activeCategory === "branding" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                🎨 Branding & Logo
              </button>
            </div>
          </div>

          {/* PACKAGES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {getCurrentPackages().map((pkg, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2 gap-2 flex-wrap">
                    <span className="text-amber-400 font-mono text-xs font-bold">[ PAKET {idx + 1} ]</span>
                    {pkg.onLocation && <KupangTag />}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800 mb-6 font-mono">
                    <strong className="text-amber-400 text-sm sm:text-base block">{pkg.price}</strong>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(pkg.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs transition-all shadow-md shadow-amber-500/20"
                >
                  💬 Order Paket Ini (CMO WA) &rarr;
                </a>
              </div>
            ))}
          </div>

          {/* Disclaimer area layanan */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <p className="text-slate-500 text-xs leading-relaxed font-mono">
              <span className="text-amber-400 font-bold">📍 Catatan Area Layanan:</span> Untuk saat ini seluruh layanan produksi video, fotografi, dan dokumentasi event hanya tersedia untuk wilayah <strong className="text-slate-300">Kota Kupang & sekitarnya</strong>. Untuk layanan desain grafis dan branding, kami melayani seluruh Indonesia secara remote.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
