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

// Tag Bundling Multi-Platform
const BundleTag = () => (
  <span style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
    border: "1px solid rgba(236, 72, 153, 0.5)",
    color: "#f472b6",
    fontSize: "0.62rem",
    fontWeight: 800,
    padding: "2px 7px",
    borderRadius: "6px",
    letterSpacing: "0.4px",
    fontFamily: "monospace",
    whiteSpace: "nowrap",
    marginBottom: "8px"
  }}>
    ✨ BUNDLE MULTI-PLATFORM (Reels + TikTok)
  </span>
);

export default function HargaPage() {
  const [activeCategory, setActiveCategory] = useState<"video" | "event" | "photo" | "branding">("video");

  const cmoWaNumber = "6282347058055";

  const videoPackages = [
    {
      name: "Short Video Single (Reels + TikTok)",
      price: "Rp 300.000 / konten",
      desc: "Paket 1 Ide Konten Video Vertikal Tren. Otomatis mendapatkan 2 format siap post: 1 Format Instagram Reels HD + 1 Format TikTok HD lengkap subtitle & musik tren.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik mengambil paket *Short Video Single (Rp 300.000/konten - Bundling Reels & TikTok)*.\n\nBoleh dibantu alur konsep & pengerjaannya? Terima kasih."
    },
    {
      name: "Bundling Hemat 5 Short Video",
      price: "Rp 1.350.000 (Hemat Rp 150rb)",
      desc: "Paket 5 Ide Konten Kreatif dengan Bundling Multi-Platform. Total Anda mendapatkan 10 postingan siap pakai (5 Reels + 5 TikTok) untuk konsistensi feeds 1 bulan.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya mau order paket *Bundling Hemat 5 Short Video (Rp 1.350.000 - Total 10 Posting Reels & TikTok)*.\n\nBoleh dibantu koordinasi jadwal shooting & ide videonya? Terima kasih."
    },
    {
      name: "Bundling Bulanan (12 Video Multi-Platform)",
      price: "Rp 2.900.000 / bulan",
      desc: "Paket Konten Rutin Bulanan (3 Konten/minggu). 12 Konsep Video Kreatif di-bundle untuk Instagram Reels + TikTok (Total 24 postingan), gratis Scriptwriting, Voiceover, & Hashtag Research.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik mengambil paket *Bundling Bulanan 12 Video (Rp 2.900.000/bulan - 24 Post Reels & TikTok)*.\n\nBoleh dibantu jadwal meeting brief-nya? Terima kasih."
    },
    {
      name: "Video Promosi UMKM Bundling",
      price: "Mulai Rp 500.000",
      desc: "Video promosi produk 30-60 detik High-Quality. Dilengkapi Bundling 3 Platform sekaligus (Instagram Reels, TikTok, & YouTube Shorts) untuk jangkauan maksimal.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik berkonsultasi paket *Video Promosi UMKM Bundling (Mulai Rp 500.000)*.\n\nBoleh dibantu konsep videonya? Terima kasih."
    },
    {
      name: "Video Company Profile + Teaser Bundle",
      price: "Mulai Rp 1.500.000",
      desc: "Video profil perusahaan 3-5 menit (4K) + Bundling Bonus 3 Cut Teaser Vertikal (Format Reels & TikTok) untuk promosi cepat di media sosial.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud berkonsultasi mengenai *Video Company Profile + Bonus Teaser Bundle (Mulai Rp 1.500.000)* untuk perusahaan/instansi kami.\n\nBoleh dibantu penawarannya? Terima kasih."
    },
    {
      name: "Drone Aerial Footage",
      price: "Mulai Rp 500.000",
      desc: "Pengambilan gambar udara 4K untuk lokasi perumahan, hotel, cafe, & acara outdoor. Termasuk potongan video vertikal Reels/TikTok.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya membutuhkan *Drone Aerial Footage (Mulai Rp 500.000)*.\n\nBoleh dibantu ketersediaan tim videografernya? Terima kasih."
    }
  ];

  const eventPackages = [
    {
      name: "Wedding Highlight + Teaser Bundle",
      price: "Mulai Rp 2.500.000",
      desc: "Video highlight pernikahan sinematik 3-5 menit (Horizontal 4K) + Bundling 2 Video Teaser Vertikal siap upload ke Instagram Reels & TikTok.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik berkonsultasi untuk paket *Wedding Highlight + Teaser Bundle (Mulai Rp 2.500.000)*.\n\nBoleh dibantu cek ketersediaan tanggal acara kami? Terima kasih."
    },
    {
      name: "Wedding Full Day All-In-One",
      price: "Mulai Rp 5.000.000",
      desc: "Dokumentasi penuh akad & resepsi seharian, album foto fisik eksklusif, plus Bundling Paket Teaser Sinematik Reels & TikTok.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud mengambil paket *Wedding Full Day All-In-One (Mulai Rp 5.000.000)*.\n\nBoleh dibantu koordinasi tim dokumentasi? Terima kasih."
    },
    {
      name: "Seminar & Corporate Event Bundle",
      price: "Mulai Rp 1.500.000",
      desc: "Liputan foto & video acara seminar/launching produk + Bundling 3 Video Highlight Vertikal (Reels/TikTok/Shorts) untuk recap instan.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya butuh layanan *Dokumentasi Event Corporate Bundle (Mulai Rp 1.500.000)*.\n\nBoleh dibantu pengiriman draf penawarannya? Terima kasih."
    },
    {
      name: "Dokumentasi Wisuda & Reunion",
      price: "Mulai Rp 1.000.000",
      desc: "Sesi foto personal/kelompok + Bundling Video Kenangan Sinematik durasi 1 menit untuk Reels & TikTok.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik mengambil paket *Dokumentasi Wisuda & Reunion (Mulai Rp 1.000.000)*.\n\nBoleh dibantu jadwal kelulusan kami? Terima kasih."
    }
  ];

  const photoPackages = [
    {
      name: "Foto Produk Studio + Video Reels Showcase",
      price: "Mulai Rp 150.000 / produk",
      desc: "Pemotretan produk studio berlatar bersih (white/black/custom) + Bundling 1 Video Showcase 360° Produk untuk Reels & TikTok.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin memesan sesi *Foto Produk Studio + Video Reels Showcase (Mulai Rp 150.000/produk)*.\n\nBoleh dibantu koordinasi pengiriman produknya? Terima kasih."
    },
    {
      name: "Foto Menu Kuliner + Reel Foodie Bundle",
      price: "Mulai Rp 250.000 / sesi",
      desc: "Food photography profesional untuk resto/cafe + Bundling 1 Video Teaser Makanan menggugah selera untuk Reels & TikTok.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya membutuhkan sesi *Foto Menu Kuliner + Reel Foodie Bundle (Mulai Rp 250.000/sesi)*.\n\nBoleh dibantu jadwal tim fotografernya? Terima kasih."
    },
    {
      name: "Foto Company & Direksi Bundle",
      price: "Mulai Rp 500.000 / sesi",
      desc: "Sesi foto profil direksi & fasilitas kantor + Bundling Video Short Intro Direksi untuk kebutuhan website & medsos.",
      onLocation: true,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud mengajukan *Foto Company & Direksi Bundle (Mulai Rp 500.000/sesi)*.\n\nBoleh dibantu persiapan sesinya? Terima kasih."
    }
  ];

  const brandingPackages = [
    {
      name: "Desain Logo Vektor + Social Media Kit",
      price: "Mulai Rp 350.000",
      desc: "Desain logo profesional 3 opsi konsep + master file (AI, EPS, PNG) + Bundling Template Profile Picture & Reels Cover Kit.",
      onLocation: false,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya tertarik membuat *Desain Logo Vektor + Social Media Kit (Mulai Rp 350.000)*.\n\nBoleh dibantu form brief konsep logonya? Terima kasih."
    },
    {
      name: "Brand Identity Guidelines Full Package",
      price: "Mulai Rp 1.000.000",
      desc: "Buku panduan identitas brand komprehensif (Logo, Color Palette, Typography) + Bundling 5 Template Feeds, Reels, & TikTok Cover.",
      onLocation: false,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud membuat *Brand Identity Guidelines Full Package (Mulai Rp 1.000.000)*.\n\nBoleh dibantu alur konsultasinya? Terima kasih."
    },
    {
      name: "Desain Poster, Banner & Feed Bundle",
      price: "Mulai Rp 100.000 / desain",
      desc: "Desain materi promosi cetak/digital + Bundling format cerita Story / Reels Cover siap pakai.",
      onLocation: false,
      bundle: true,
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin memesan *Desain Poster, Banner & Feed Bundle (Mulai Rp 100.000/desain)*.\n\nBoleh dibantu pengerjaannya? Terima kasih."
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

      <main className="flex-1 pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-2">// MULTI_PLATFORM_BUNDLING_PRICING</span>
            <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">Paket &amp; Estimasi Biaya (Multi-Platform Bundling)</h1>
            <p className="text-slate-400 text-xs mt-2">
              Setiap paket video otomatis menyertakan **Bundling Multi-Platform (Instagram Reels + TikTok)** — 1 Harga untuk 2 Platform sekaligus!
            </p>
            
            {/* Highlights Bundling Promo Banner */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-base">🎬✨</span>
              <span><strong>PROMO BUNDLING MULTI-PLATFORM:</strong> Dapatkan format Reels + TikTok sekaligus dengan harga terjangkau mulai Rp 300.000 / konten!</span>
            </div>

            {/* Keterangan tag area */}
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono">
              <span>📍</span>
              <span>Layanan bertanda <strong>Kupang &amp; Sekitarnya</strong> membutuhkan kehadiran tim videografer di lokasi Anda.</span>
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex justify-center mb-10">
            <div className="p-1 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap gap-1.5 justify-center">
              <button
                onClick={() => setActiveCategory("video")}
                className={`px-4 py-2 rounded-xl font-mono text-[10px] font-bold transition-all ${activeCategory === "video" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                🎬 Business Video (Reels &amp; TikTok)
              </button>
              <button
                onClick={() => setActiveCategory("event")}
                className={`px-4 py-2 rounded-xl font-mono text-[10px] font-bold transition-all ${activeCategory === "event" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                🎉 Event Docs Bundle
              </button>
              <button
                onClick={() => setActiveCategory("photo")}
                className={`px-4 py-2 rounded-xl font-mono text-[10px] font-bold transition-all ${activeCategory === "photo" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                📷 Photography Bundle
              </button>
              <button
                onClick={() => setActiveCategory("branding")}
                className={`px-4 py-2 rounded-xl font-mono text-[10px] font-bold transition-all ${activeCategory === "branding" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "text-slate-400 hover:text-white"}`}
              >
                🎨 Branding &amp; Logo Kit
              </button>
            </div>
          </div>

          {/* PACKAGES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {getCurrentPackages().map((pkg, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-start justify-between mb-2 gap-2 flex-wrap">
                    <span className="text-amber-400 font-mono text-[9px] font-bold">[ PAKET {idx + 1} ]</span>
                    <div className="flex flex-wrap gap-1">
                      {pkg.bundle && <BundleTag />}
                      {pkg.onLocation && <KupangTag />}
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold text-white uppercase mb-2 group-hover:text-amber-400 transition-colors">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{pkg.desc}</p>
                  
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-amber-500/20 mb-4 font-mono">
                    <span className="text-slate-500 text-[9px] uppercase tracking-wider block mb-0.5">Biaya Paket Bundling</span>
                    <strong className="text-amber-400 text-sm block font-extrabold">{pkg.price}</strong>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(pkg.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold text-xs transition-all shadow-md shadow-amber-500/20"
                >
                  💬 Order Paket Bundling (CMO WA) &rarr;
                </a>
              </div>
            ))}
          </div>

          {/* Disclaimer area layanan */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <p className="text-slate-400 text-[11px] leading-relaxed font-mono">
              <span className="text-amber-400 font-bold">📍 Catatan Bundling:</span> Setiap paket video otomatis mendapatkan <strong className="text-pink-400">2 Format Video Siap Upload (Instagram Reels + TikTok)</strong>. Pengambilan gambar shooting bertanda Kupang &amp; Sekitarnya dilakukan langsung di lokasi mitra.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
