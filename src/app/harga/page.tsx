"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HargaPage() {
  const [siteData, setSiteData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/data")
      .then((res) => res.json())
      .then((data) => setSiteData(data))
      .catch(() => {});
  }, []);

  const cmoPhone = siteData?.admin?.cmoPhone || "+6281246821279";
  const cmoWaNumber = cmoPhone.replace(/[^0-9]/g, "");

  const getWaLink = (packageName: string, price: string) => {
    const text = `Halo Mas Shatrya Dhimar (CMO Sivilize Corp Indonesia),\n\nSaya mau diskusi & order mengenai ${packageName} (${price}).\n\nBoleh dibantu jadwal brief & alur kerjanya? Terima kasih.`;
    return `https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(text)}`;
  };

  const bundlingPackages = [
    {
      name: "Bundling Web + Video + Flyer Promo",
      price: "Rp 1.499.000 (DP 50% Rp 749.000)",
      badge: "HOT ALL-IN-ONE PROMO",
      desc: "Solusi terlengkap & paling diminati: Website Landing Page / Profil Perusahaan 3 Hari Rilis dari SiWeb Production + 1 Video Promosi Sinematik 4K + 1 Desain Flyer & Pamflet Promo HD dari Sivilize Creative.",
      features: [
        "1 Website Landing Page / Profil Perusahaan (SiWeb Production)",
        "Domain .com / .co.id + Hosting Super Cepat (3 Hari Rilis)",
        "1 Video Promosi Sinematik 4K (Reels + TikTok HD)",
        "1 Desain Flyer & Pamflet Promo (Format Print + Sosmed HD)",
        "Scriptwriting Naskah & Subtitle Dinamis",
        "Syarat DP 50% Rp 749.000 (Langsung Ditransfer di Awal)"
      ],
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Corp Indonesia),\n\nSaya mau order *Paket Bundling Web + 1 Video Sinematik + 1 Desain Flyer/Pamflet (Rp 1.499.000 / DP Rp 749.000)*.\n\nBoleh dibantu koordinasi brief & penyerahan bahan materinya? Terima kasih."
    },
    {
      name: "Single Video Promosi Sinematik",
      price: "Rp 150.000 / Video",
      badge: "SINGLE PROMO",
      desc: "1 Video Promosi Sinematik 4K include scriptwriting naskah & subtitle dinamis dengan pembatasan maksimal 2 kali revisi saja.",
      features: [
        "1 Video Promosi Sinematik 4K (Reels / TikTok HD)",
        "Scriptwriting Naskah & Ide Konsep Orisinal",
        "Subtitle Dinamis & Color Correction Sinematik",
        "Pembatasan Maksimal 2x Revisi Saja",
        "Master File HD via GDrive (Setelah Lunas 100%)"
      ],
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya mau order *Single Video Promosi Sinematik (Rp 150.000 / Video - Max 2x Revisi)*.\n\nBoleh dibantu koordinasi brief & jadwal videonya? Terima kasih."
    },
    {
      name: "Bundling Hemat 5 Konten",
      price: "Rp 1.199.000 (Total 10 Postings)",
      badge: "PAKET POPULER",
      desc: "5 Konsep Konten Kreatif dengan Ekspor Multi-Platform. Total Anda mendapatkan 10 Postings Siap Pakai (5 Reels + 5 TikTok) untuk konsistensi feeds 1 bulan.",
      features: [
        "5 Ide Konsep Video Kreatif",
        "Total 10 Video Export (5 Reels + 5 TikTok)",
        "Copywriting Caption Persuasif",
        "Subtitle & Transisi Tren",
        "Jadwal Penyiapan Konten 1 Bulan"
      ],
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya mau order *Paket Bundling Hemat 5 Konten (Rp 1.199.000 - Total 10 Post Reels & TikTok)*.\n\nBoleh dibantu koordinasi ide & penentuan jadwal videonya? Terima kasih."
    },
    {
      name: "Bundling Multi-Format (Video + Foto)",
      price: "Rp 1.699.000 / Proyek",
      badge: "ALL-IN-ONE PROMO",
      desc: "Solusi lengkap bagi produk baru: 3 Video Promosi Vertikal (Reels/TikTok) + 10 Foto Produk Studio HD + Custom Cover Thumbnail Keren.",
      features: [
        "3 Video Promosi Vertikal (Reels + TikTok)",
        "10 Foto Produk Studio Hi-Res Retouched",
        "Shooting Studio / On-Location",
        "Custom Cover Thumbnail Design",
        "Master File High-Quality"
      ],
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud memesan *Paket Bundling Multi-Format Video + Foto (Rp 1.699.000 / Proyek)*.\n\nBoleh dibantu pengiriman sampel produk & jadwal shootingnya? Terima kasih."
    }
  ];

  const videoProductionItems = [
    { name: "Single Video Promosi (Reels / TikTok)", price: "Rp 150.000 / Video", desc: "1 Video promosi sinematik 4K include scriptwriting naskah & subtitle dinamis (Maksimal 2x revisi)." },
    { name: "Commercial Product Video", price: "Mulai Rp 1.199.000", desc: "Video iklan produk dengan pencahayaan studio komersial." },
    { name: "Company Profile Video", price: "Mulai Rp 2.499.000", desc: "Profil naratif perusahaan berdurasi 3-5 menit untuk investor & website." },
    { name: "Wedding Documentation", price: "Mulai Rp 2.799.000", desc: "Highlight sinematik & liputan penuh momen pernikahan sakral." },
    { name: "Engagement Event", price: "Mulai Rp 1.999.000", desc: "Dokumentasi momen lamaran & pertunangan sinematik." },
    { name: "Prewedding Film", price: "Mulai Rp 1.999.000", desc: "Konsep cerita pasangan dalam bentuk film pendek & teaser." },
    { name: "Corporate & Special Event", price: "Mulai Rp 1.699.000", desc: "Liputan acara perusahaan, gala dinner, & gathering." },
    { name: "Seminar & Workshop", price: "Mulai Rp 1.699.000", desc: "Liputan konferensi, edukasi, & sesi pembicara profesional." },
    { name: "Grand Opening Store", price: "Mulai Rp 1.699.000", desc: "Video peluncuran outlet, restoran, atau kantor baru." },
    { name: "Drone Aerial Footage (Add-On)", price: "Mulai Rp 699.000", desc: "Pengambilan gambar udara 4K untuk perspektif arsitektur & lokasi." },
  ];

  const photoItems = [
    { name: "Foto Produk Studio", price: "Mulai Rp 599.000", desc: "Sesi foto katalog produk studio dengan penataan lighting pro." },
    { name: "Foto Event & Gathering", price: "Mulai Rp 1.199.000", desc: "Dokumentasi foto momen acara penting & ekspresi tamu." },
    { name: "Foto Wedding Documentation", price: "Mulai Rp 1.999.000", desc: "Album foto fisik & digital momen pernikahan utuh." },
    { name: "Foto Corporate & Direksi", price: "Mulai Rp 1.699.000", desc: "Potret eksekutif, profil jajaran manajemen, & fasilitas kantor." },
  ];

  const designItems = [
    { name: "Desain Logo Vektor", price: "Mulai Rp 399.000", desc: "3 Opsi konsep logo orisinal master file AI, EPS, PNG beresolusi tinggi." },
    { name: "Desain Poster & Flyer / Pamflet", price: "Mulai Rp 149.000", desc: "Materi iklan promo cetak & digital berestetika tinggi (Flyer / Pamflet)." },
    { name: "Desain Feed Instagram", price: "Mulai Rp 149.000", desc: "Desain mikro-konten feeds Instagram yang menarik perhatian." },
    { name: "Desain Banner & Baliho", price: "Mulai Rp 199.000", desc: "Tata letak materi cetak baliho/banner ukuran besar." },
    { name: "Brand Identity Guidelines", price: "Mulai Rp 1.499.000", desc: "Buku panduan visual identitas brand (Logo, Palette, Tipografi)." },
  ];

  const valuePoints = [
    { title: "Waktu & Dedikasi Tim", desc: "Fokus penuh tim profesional dari pra-produksi hingga paska-produksi." },
    { title: "Ide & Konsep Orisinal", desc: "Riset tren & penyusunan skrip narasi yang relevan dengan audiens target." },
    { title: "Produksi Standar Industri", desc: "Penggunaan kamera cinema 4K, lighting studio, & peralatan audio profesional." },
    { title: "Editing & Sound Design", desc: "Color grading sinematik, efek transisi halus, & lisensi musik komersial." },
    { title: "Quality Control Ketat", desc: "Setiap output melewati pemeriksaan standar estetika sebelum diserahkan." },
    { title: "Jaminan Revisi & Siap Rilis", desc: "Bebas dari masalah teknis dan langsung siap diunggah ke semua platform." },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-24 lg:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER SECTION */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-2">
              // TRANSPARENT_VALUE_PRICING
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white tracking-tight uppercase mb-2">
              Paket &amp; Investasi Konten
            </h1>
            <p className="text-slate-400 text-xs sm:text-xs leading-relaxed max-w-md mx-auto">
              Kami tidak sekadar menjual durasi video atau platform. Kami menghadirkan <strong className="text-white font-bold">produksi konten bernilai tinggi</strong>—satu karya video berkualitas dapat Anda publikasikan secara bebas di Instagram Reels, TikTok, Facebook Video, hingga YouTube Shorts.
            </p>
          </div>

          {/* HERO SPECIAL BUNDLE: LANDING PAGE + 1 VIDEO + 1 FLYER/PAMFLET */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 via-[#0f172a] to-slate-900 border border-amber-500/50 rounded-xl p-4.5 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="inline-block px-3 py-0.5 bg-amber-500/20 border border-amber-500/50 text-amber-400 font-mono text-[10px] font-bold uppercase rounded-md mb-2">
                    🔥 BEST SELLER: ALL-IN-ONE DIGITAL LAUNCH BUNDLE
                  </span>
                  <h2 className="text-base sm:text-lg lg:text-lg font-bold text-white uppercase tracking-tight">
                    Website + 1 Video Promosi + 1 Desain Flyer/Pamflet
                  </h2>
                  <p className="text-slate-300 text-[11px] sm:text-xs mt-1">
                    Solusi terlengkap &amp; paling terjangkau bagi usaha yang ingin langsung tayang resmi &amp; punya materi promosi berkelas!
                  </p>
                </div>
                
                <div className="bg-[#070b12] p-4 rounded-xl border border-amber-500/40 text-center md:text-right w-full md:w-auto min-w-0 sm:min-w-[200px] shrink-0">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-mono">Harga Promo Terjangkau</span>
                  <div className="text-lg sm:text-xl font-bold text-amber-400 font-mono my-0.5">
                    Rp 1.499.000
                  </div>
                  <span className="text-emerald-400 text-[10px] font-mono font-bold block">Syarat DP 50% = Rp 749.000</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-6 font-bold">
                  Apa Saja Yang Langsung Anda Dapatkan:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    "1 Website Landing Page / Profil Perusahaan (SiWeb)",
                    "Domain .com / .co.id + Hosting Super Cepat (3 Hari Rilis)",
                    "1 Video Promosi Sinematik 4K (Reels & TikTok HD)",
                    "1 Desain Flyer & Pamflet Promo (Format Print + Sosmed HD)",
                    "Scriptwriting Naskah & Subtitle Dinamis",
                    "Tombol Integrasi Chat WhatsApp Direct",
                    "Syarat DP 50% Rp 749.000 (Langsung Ditransfer di Awal)",
                    "Revisi 2x Gratis & Bantuan Rilis",
                    "Master File HD Dikirim via Google Drive"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">
                        ✓
                      </span>
                      <span className="text-xs text-slate-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
                  <p className="text-slate-500 text-xs font-mono italic">
                    💡 Hemat Rp 1.000.000 dibanding membeli paket terpisah! Rilis cepat dalam 3 hari kerja.
                  </p>
                  
                  <a
                    href={`https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(
                      "Halo Mas Shatrya Dhimar (CMO Sivilize Corp Indonesia),\n\nSaya mau order *Paket Bundling Web + 1 Video Promosi + 1 Desain Flyer/Pamflet (Rp 1.499.000 / DP Rp 749.000)*.\n\nBoleh dibantu koordinasi brief & penyerahan materi promosinya? Terima kasih."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-xl shadow-amber-500/20"
                  >
                    💬 Order Paket All-In-One (DP Rp 749rb) &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION BUNDLING: PAKET BUNDLING KONTEN (MULTI-PLATFORM BUNDLE CARDS) */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">
                // SPECIAL_MULTI_PLATFORM_BUNDLES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Paket Bundling Spesial (Reels + TikTok)
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Setiap opsi bundling di bawah memiliki <strong className="text-amber-400">pesan WhatsApp otomatis khusus</strong> yang memuat judul paket dan nominal hematnya secara presisi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bundlingPackages.map((pkg, idx) => (
                <div key={idx} className="bg-gradient-to-b from-slate-900 via-[#0f172a] to-slate-900 border border-amber-500/40 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400 transition-all shadow-xl relative">
                  <div className="absolute -top-3.5 right-4 px-3 py-1 bg-amber-500/20 border border-amber-500/50 text-amber-400 font-mono text-[9px] font-bold uppercase tracking-widest rounded-lg">
                    {pkg.badge}
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono text-xs uppercase tracking-wider block mb-2">
                      BUNDLING {idx + 1}
                    </span>
                    <h3 className="text-lg font-extrabold text-white uppercase mb-2 leading-snug">{pkg.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">{pkg.desc}</p>
                    
                    <div className="p-4 rounded-2xl bg-[#070b12] border border-amber-500/20 mb-6">
                      <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono block">{pkg.price}</span>
                      <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Multi-Platform Ready</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                        Fitur Bundling:
                      </span>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <span className="text-amber-400 font-bold">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(pkg.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                  >
                    💬 Order {pkg.name.split(" ")[0]} &rarr;
                  </a>
                </div>
              ))}
            </div>

            {/* JENJANG TINGKAT 2: E-COMMERCE & SOFTWARE CUSTOM REDIRECTION TO SIVILIZE SOFTWARE */}
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/80 via-indigo-950/80 to-slate-900 border-2 border-purple-500/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <span className="inline-block px-3.5 py-1 bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold rounded-full mb-3">
                    ENTERPRISE TIER: E-COMMERCE &amp; CUSTOM SOFTWARE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    Butuh Toko Online E-Commerce &amp; Sistem Custom + Video Iklan?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    Untuk kebutuhan pengembangan <strong className="text-purple-300 font-bold">Platform E-Commerce Kustom, ERP Multi-Cabang, SIMRS Kesehatan, &amp; Aplikasi Mobile</strong> yang dilengkapi Video Iklan Komersial Sinematik, pengerjaan sistem software sepenuhnya ditangani oleh divisi <strong className="text-white font-bold">Sivilize Software</strong>.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">✓</span> E-Commerce Custom &amp; Payment Gateway
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">✓</span> Sistem ERP &amp; Database Multi-Branch
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">✓</span> SIMRS BPJS &amp; SATUSEHAT Ready
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">✓</span> Video Commercial Ad dari Sivilize Creative
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 bg-[#070b14]/80 p-6 rounded-2xl border border-purple-500/30">
                  <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">Divisi Enterprise Software</span>
                  <div className="text-xl font-extrabold text-purple-300 font-mono text-center lg:text-right">
                    Sivilize Software
                  </div>
                  <a
                    href="https://software.sivilizecorp.com/ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2"
                  >
                    <span>Kunjungi Sivilize Software</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: PAKET BULANAN (3 CARDS DENGAN HARGA LEBIH TERJANGKAU UMKM) */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">
                // MONTHLY_RETAINER_PACKAGES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Paket Manajemen Konten Bulanan
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Konsistensi adalah kunci utama pertumbuhan media sosial. Pilih paket retainer bulanan sesuai skala bisnis Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* CARD 1: BASIC */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div>
                  <span className="text-slate-400 font-mono text-xs uppercase tracking-wider block mb-2">
                    UMKM &amp; STARTER
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Basic</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Cocok untuk UMKM yang ingin menjaga keberadaan akun media sosial tetap aktif &amp; konsisten.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#070b12] border border-slate-800 mb-8">
                    <span className="text-3xl font-black text-amber-400 font-mono block">Rp 1.199.000</span>
                    <span className="text-slate-500 text-xs font-mono">/ Bulan</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                      Benefit Paket:
                    </span>
                    {[
                      "6 Konten Video Siap Upload (Reels + TikTok)",
                      "Kalender Konten Sederhana",
                      "Editing Video & Subtitle Dinamis",
                      "Copywriting Caption Ringkas",
                      "Export File Kualitas HD 1080p"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWaLink("Paket Bulanan Basic", "Rp 1.199.000 / Bulan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700"
                >
                  Pilih Paket Basic &rarr;
                </a>
              </div>

              {/* CARD 2: GROWTH (FEATURED) */}
              <div className="bg-gradient-to-b from-slate-900 via-[#0f172a] to-slate-900 border-2 border-amber-500/80 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative hover:border-amber-400 transition-all transform md:-translate-y-2">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white font-mono text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                  MOST POPULAR
                </div>

                <div>
                  <span className="text-amber-400 font-mono text-xs uppercase tracking-wider block mb-2">
                    ACTIVE SOCIAL BUSINESS
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Growth</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Untuk bisnis yang ingin aktif membangun reputasi &amp; jangkauan penjualan sosial media.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#070b12] border border-amber-500/30 mb-8">
                    <span className="text-3xl font-black text-amber-400 font-mono block">Rp 2.199.000</span>
                    <span className="text-slate-500 text-xs font-mono">/ Bulan</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                      Benefit Paket:
                    </span>
                    {[
                      "12 Konten Video Siap Upload (Reels + TikTok)",
                      "Content Planning & Strategi",
                      "Copywriting Naskah Persuasif",
                      "Editing Premium & Sound FX",
                      "Subtitle Dinamis & Grafis",
                      "Custom Cover Thumbnail Keren"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-200 font-medium">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWaLink("Paket Bulanan Growth", "Rp 2.199.000 / Bulan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                >
                  Pilih Paket Growth &rarr;
                </a>
              </div>

              {/* CARD 3: BUSINESS */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div>
                  <span className="text-slate-400 font-mono text-xs uppercase tracking-wider block mb-2">
                    CORPORATE &amp; SCALE
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Business</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Untuk perusahaan yang membutuhkan dominasi konten digital dengan hasil sinematik.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#070b12] border border-slate-800 mb-8">
                    <span className="text-3xl font-black text-white font-mono block">Rp 3.899.000</span>
                    <span className="text-slate-500 text-xs font-mono">/ Bulan</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                      Benefit Paket:
                    </span>
                    {[
                      "20 Konten Video Siap Upload (Reels + TikTok)",
                      "Comprehensive Content Planning",
                      "Branding Consultation",
                      "Professional Copywriting",
                      "Premium Editing & Color Grading",
                      "Priority Support & Tim Khusus"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWaLink("Paket Bulanan Business", "Rp 3.899.000 / Bulan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700"
                >
                  Pilih Paket Business &rarr;
                </a>
              </div>

            </div>
          </div>

          {/* SECTION 3: VIDEO PRODUCTION GRID */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-1">
                  // VIDEO_PRODUCTION_SERVICES
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Layanan Video Production &amp; Event
                </h2>
              </div>
              <p className="text-slate-500 text-xs font-mono">
                📍 Melayani lokasi Kota Kupang &amp; sekitarnya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {videoProductionItems.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white uppercase mb-1">{item.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                    <span className="text-amber-400 font-mono text-xs font-bold">{item.price}</span>
                    <a
                      href={getWaLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-300 hover:text-amber-400 font-bold uppercase tracking-wider transition-colors"
                    >
                      Pesan &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#070b12] border border-amber-500/30 text-slate-300 text-xs font-mono space-y-2">
              <p>📌 <strong className="text-amber-400">Shooting On-Location (Kota Kupang &amp; Sekitarnya):</strong> Minimum order wajib Paket Bundling (3-5 Video / Rp 1.000.000) untuk efisiensi batch shooting &amp; operasional sewa alat.</p>
              <p>📌 <strong className="text-white">File Mentahan (Raw Footage):</strong> Diberikan secara GRATIS via Google Drive hanya setelah pembayaran LUNAS 100% (Clear 100%).</p>
              <p>📌 <strong className="text-amber-400">Ketentuan DP &amp; Pembatalan:</strong> Wajib DP 50% (H-3 sebelum shooting) + SPK. Jika dibatalkan sepihak oleh klien dalam kurun H-3 setelah DP, maka DP 50% HANGUS 100%.</p>
            </div>
          </div>

          {/* SECTION 4 & 5: PHOTO & DESIGN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
            
            {/* PHOTO SECTION */}
            <div>
              <div className="mb-6">
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-1">
                  // COMMERCIAL_PHOTOGRAPHY
                </span>
                <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">
                  Commercial Photography
                </h2>
              </div>

              <div className="space-y-4">
                {photoItems.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase">{item.name}</h3>
                      <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <span className="text-amber-400 font-mono text-xs font-bold block mb-1">{item.price}</span>
                      <a
                        href={getWaLink(item.name, item.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-300 font-bold uppercase transition-all inline-block"
                      >
                        Pesan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESIGN SECTION */}
            <div>
              <div className="mb-6">
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-1">
                  // BRANDING_&_DESIGN
                </span>
                <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">
                  Branding &amp; Graphic Design
                </h2>
              </div>

              <div className="space-y-4">
                {designItems.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase">{item.name}</h3>
                      <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <span className="text-amber-400 font-mono text-xs font-bold block mb-1">{item.price}</span>
                      <a
                        href={getWaLink(item.name, item.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-300 font-bold uppercase transition-all inline-block"
                      >
                        Pesan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* SECTION 6: KENAPA HARGA KAMI SEPERTI INI? */}
          <div className="mb-24 bg-gradient-to-b from-[#0f172a] to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">
                // TRANSPARENCY_&_VALUE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Kenapa Investasi Konten Kami Seperti Ini?
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Di Sivilize Creative, Anda tidak hanya membayar proses teknis mengedit video. Anda berinvestasi pada <strong className="text-white font-bold">proses kreatif profesional berstandar korporat</strong> yang menjamin reputasi brand Anda terlihat kredibel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuePoints.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 7: CTA SECTION */}
          <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                Siap Meningkatkan Kualitas Konten Bisnis Anda?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                Diskusikan kebutuhan konten Anda bersama tim Sivilize Creative. Kami membantu mulai dari konsep, produksi, hingga hasil akhir yang siap dipublikasikan.
              </p>
              
              <a
                href={`https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(
                  "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin berkonsultasi mengenai rencana pembuatan konten & produksi media untuk bisnis kami.\n\nBoleh dibantu koordinasi awalnya? Terima kasih."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20"
              >
                Hubungi Tim Creative Direct CMO &rarr;
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
