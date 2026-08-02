"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HargaPage() {
  const [activeCategory, setActiveCategory] = useState<"video" | "event" | "photo" | "branding">("video");

  const videoPackages = [
    { name: "Video Promosi UMKM", price: "Mulai Rp 500.000", desc: "Video singkat kreatif berdurasi 30-60 detik untuk mempromosikan produk/jasa UMKM di Instagram & TikTok." },
    { name: "Video Company Profile", price: "Mulai Rp 1.500.000", desc: "Video profil perusahaan berdurasi 3-5 menit lengkap dengan konsep, wawancara, b-roll, & narasi suara." },
    { name: "Short Video (Reels/TikTok)", price: "Mulai Rp 300.000 / video", desc: "Produksi video vertikal tren terkini yang ramah algoritma untuk konten harian/mingguan." },
    { name: "Drone Aerial Footage", price: "Mulai Rp 500.000", desc: "Pengambilan gambar udara berkualitas 4K untuk lokasi perumahan, hotel, cafe, & acara outdoor." }
  ];

  const eventPackages = [
    { name: "Wedding Highlight", price: "Mulai Rp 2.500.000", desc: "Video teaser & highlight pernikahan sinematik berdurasi 3-5 menit dengan color grading romantis." },
    { name: "Wedding Full Day", price: "Mulai Rp 5.000.000", desc: "Dokumentasi penuh akad & resepsi seharian, video highlight, serta album foto fisik eksklusif." },
    { name: "Dokumentasi Seminar", price: "Mulai Rp 1.500.000", desc: "Liputan foto & video acara seminar, workshop, launching produk, atau konferensi bisnis." },
    { name: "Dokumentasi Wisuda", price: "Mulai Rp 1.000.000", desc: "Sesi foto personal, kelompok, & video kenangan momen kelulusan di kampus/sekolah." },
    { name: "Birthday & Party", price: "Mulai Rp 800.000", desc: "Dokumentasi foto & video acara ulang tahun, gathering keluarga, atau anniversary." }
  ];

  const photoPackages = [
    { name: "Foto Produk Studio", price: "Mulai Rp 150.000 / produk", desc: "Pemotretan produk berlatar studio bersih (white/black/custom background) untuk e-commerce." },
    { name: "Foto Menu Makanan", price: "Mulai Rp 250.000 / sesi", desc: "Food photography profesional dengan aksesoris pendukung untuk menu restoran & GoFood/GrabFood." },
    { name: "Foto Company & Direksi", price: "Mulai Rp 500.000 / sesi", desc: "Sesi foto profil direksi & fasilitas kantor untuk kebutuhan website & annual report." }
  ];

  const brandingPackages = [
    { name: "Desain Logo Vektor", price: "Mulai Rp 350.000", desc: "Perancangan logo profesional 3 opsi konsep lengkap dengan master file vektor (AI, EPS, PNG)." },
    { name: "Brand Identity Guidelines", price: "Mulai Rp 1.000.000", desc: "Buku panduan identitas brand meliputi logo, palette warna, tipografi, & aturan penggunaan." },
    { name: "Desain Poster & Banner", price: "Mulai Rp 100.000 / desain", desc: "Desain materi promosi cetak/digital untuk kebutuhan pameran, event, & iklan." }
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
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Paket & Investasi Kreatif</h1>
            <p className="text-slate-400 text-sm mt-3">
              Tarif layanan transparan tanpa biaya tersembunyi untuk mendukung pertumbuhan citra bisnis Anda.
            </p>
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
                  <span className="text-amber-400 font-mono text-xs font-bold block mb-2">[ PAKET {idx + 1} ]</span>
                  <h3 className="text-lg font-bold text-white uppercase mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800 mb-6 font-mono">
                    <strong className="text-amber-400 text-sm sm:text-base block">{pkg.price}</strong>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6285137743321?text=${encodeURIComponent(`Halo Pak Briand (COO Sivilize Creative),\nSaya tertarik dengan paket *${pkg.name} (${pkg.price})*.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs transition-all shadow-md shadow-amber-500/20"
                >
                  💬 Minta Penawaran (COO WA)
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
