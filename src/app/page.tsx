"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Video,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Film,
  MessageCircle,
  Calculator,
  ShieldCheck,
  Building2,
  Users,
  Award,
  ExternalLink,
  ChevronRight,
  FolderKanban,
  HelpCircle,
  Star,
  UserCheck,
  FileText,
  Compass
} from "lucide-react";

export default function Home() {
  const [siteData, setSiteData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/data")
      .then((res) => res.json())
      .then((data) => setSiteData(data))
      .catch(() => {});
  }, []);

  const hero = siteData?.hero || {
    headingMain: "Ubah Visual Bisnis Anda Menjadi",
    headingHighlight: "Karya Sinematik 4K Berkelas Enterprise",
    subtitle: "Divisi Production House & Agensi Media Resmi PT Sivilize Corp Indonesia. Melayani Video Promosi 4K, Company Profile, Commercial Photography, Drone Aerial View, & Brand Identity di Kota Kupang & NTT.",
    stats: [
      { value: "100%", label: "Resolusi 4K Ultra HD" },
      { value: "3-5 Hari", label: "Estimasi Selesai Editing" },
      { value: "100%", label: "SPK Legality Protected" },
      { value: "0 Rupiah", label: "Raw Footage GDrive Gratis" }
    ]
  };

  const cmoPhone = siteData?.admin?.cmoPhone || "+6281246821279";
  const cmoName = siteData?.admin?.cmoName || "Shatrya Dhimar";
  const waCleanPhone = cmoPhone.replace(/[^0-9]/g, "");

  const cmoWaMsg = encodeURIComponent(
    `Halo Mas ${cmoName} (CMO Sivilize Creative),\n\nSaya bermaksud berkonsultasi mengenai rencana produksi video promosi, drone aerial, atau branding visual untuk bisnis kami.\n\nBoleh dibantu koordinasi awalnya mas? Terima kasih!`
  );

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#07090e] text-slate-300 selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-28 md:pb-14 border-b border-slate-800/80 overflow-hidden">
          {/* Ambient Lighting Background */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[280px] h-[280px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#111622] border border-amber-500/30 text-amber-400 text-[10px] sm:text-[11px] font-semibold tracking-wide mb-4 shadow-lg backdrop-blur-md max-w-full text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
              <span>SIVILIZE CREATIVE — PRODUCTION HOUSE PT SIVILIZE CORP INDONESIA</span>
            </div>

            {/* Dynamic Hero Headings */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3 max-w-2xl mx-auto">
              {hero.headingMain}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 block mt-1">
                {hero.headingHighlight}
              </span>
            </h1>

            <p className="text-slate-400 text-[11px] sm:text-xs font-normal max-w-lg mx-auto leading-relaxed mb-5">
              {hero.subtitle}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <a
                href={`https://wa.me/${waCleanPhone}?text=${cmoWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>Konsultasi WA CMO ({cmoName})</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/tentang"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#111622] hover:bg-[#182030] text-slate-200 font-bold text-xs border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Profil &amp; Legalitas Perusahaan</span>
              </Link>
            </div>

            {/* Dynamic Stats Grid */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {hero.stats.map((stat: any, idx: number) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-lg bg-[#111622]/80 border border-slate-800/80 backdrop-blur-xl hover:border-amber-500/40 transition-colors group text-center"
                >
                  <div className="text-base sm:text-lg font-bold text-amber-400 tracking-tight group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-medium text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. PROFIL PERUSAHAAN & DIVISI */}
        <section className="py-10 md:py-12 border-b border-slate-800/80 bg-[#07090e]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-amber-400 font-extrabold text-[10px] tracking-widest uppercase block mb-1.5">
                ENTITAS PERUSAHAAN & DIVISI CREATIVE
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
                Mengenal PT Sivilize Corp Indonesia &amp; Sivilize Creative
              </h2>
              <p className="text-slate-400 text-[11px] sm:text-xs mt-1.5 leading-relaxed">
                Holding ekosistem teknologi, media digital sinematik 4K, dan penyedia solusi bisnis terintegrasi yang berpusat di Kota Kupang, Nusa Tenggara Timur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Card 1: Holding */}
              <div className="p-4.5 sm:p-5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3.5">
                    <Building2 className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">PT SIVILIZE CORP INDONESIA</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Perusahaan induk (holding) legal resmi berbadan hukum PT yang menaungi pengembangan software enterprise, platform SaaS, serta agensi media kreatif sinematik.
                  </p>
                  <div className="space-y-1 text-[10px] font-mono text-slate-400 pt-2.5 border-t border-slate-800">
                    <div>📌 NIB: 0207260103661</div>
                    <div>🏢 NPWP: 1000 0000 1032 4212</div>
                    <div>📍 Kota Kupang, NTT</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Divisi Sivilize Creative */}
              <div className="p-4.5 sm:p-5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3.5">
                    <Film className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">Divisi Sivilize Creative</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Production house &amp; media agency profesional spesialis video sinematik 4K, drone aerial footage, foto komersial produk, dan branding visual usaha.
                  </p>
                  <div className="space-y-1 text-[10px] text-slate-400 pt-2.5 border-t border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Kamera &amp; Lighting Studio 4K Pro</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Pilot Drone Certified &amp; Experienced</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: SPK & Legalitas */}
              <div className="p-4.5 sm:p-5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3.5">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">Jaminan Legalitas &amp; SPK</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Setiap pengerjaan project dilindungi Surat Perjanjian Kerja (SPK) resmi perseroan, faktur pajak/invoice lengkap, serta jaminan kerahasiaan materi (NDA).
                  </p>
                  <div className="space-y-1 text-[10px] text-slate-400 pt-2.5 border-t border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>SPK Kontrak Hukum Resmi PT</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Invoice &amp; Rekening Bank Perseroan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LATAR BELAKANG & SEJARAH BERDIRINYA DIVISI */}
        <section className="py-10 md:py-12 border-b border-slate-800/80 bg-[#0b0f17]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-3.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-mono">
                  <Compass className="w-3 h-3 text-amber-400" /> LATAR BELAKANG &amp; SEJARAH
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
                  Menjawab Kebutuhan Visual 4K Berstandar Tinggi di Indonesia
                </h2>
                <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                  Sivilize Creative didirikan di Kota Kupang, Nusa Tenggara Timur (NTT) sebagai jawaban atas tantangan yang dihadapi oleh banyak pelaku bisnis, UMKM, korporasi, hingga instansi pemerintah. Banyak entitas memiliki produk atau layanan unggulan, namun belum memiliki media promosi sinematik yang mampu menyampaikan pesan merek secara maksimal.
                </p>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed">
                  Dengan mengintegrasikan pengambilan gambar 4K Ultra HD, drone aerial berlisensi, pencahayaan studio sinematik, dan narasi penjualan yang persuasif, Sivilize Creative memastikan setiap karya visual tidak hanya indah secara estetika, namun juga mampu meningkatkan penjualan dan kepercayaan calon mitra.
                </p>
              </div>

              {/* VISI & MISI */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 sm:p-5 rounded-xl bg-[#111622] border border-slate-800 hover:border-amber-500/30 transition-all shadow-lg">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Star className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">Visi Utama Perusahaan</h3>
                  </div>
                  <p className="text-slate-200 text-[11px] sm:text-xs italic leading-relaxed bg-[#070b12] p-3 rounded-lg border border-slate-800">
                    "Menjadi Production House &amp; Media Agency sinematik 4K terdepan di Indonesia yang mengawinkan estetika visual tinggi dengan pertumbuhan bisnis nyata bagi para mitra."
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#111622] border border-slate-800 hover:border-amber-500/30 transition-all shadow-lg">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">Misi Operasional Kami</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-[11px] sm:text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Kualitas Kinerja 4K Broadcast:</strong> Menghasilkan konten media beresolusi 4K Ultra HD dengan tata suara jernih.</span>
                    </li>
                    <li className="text-[11px] sm:text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Perlindungan Legal SPK:</strong> Menjamin keamanan transaksi melalui Surat Perjanjian Kerja (SPK) resmi PT Sivilize Corp.</span>
                    </li>
                    <li className="text-[11px] sm:text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Sinergi Ekosistem:</strong> Memadukan kekuatan promosi visual dengan sistem software &amp; website PT Sivilize Corp.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PENGENALAN FOUNDER, CEO, COO, & CMO PENANGGUNG JAWAB */}
        <section className="py-10 md:py-12 border-b border-slate-800/80 bg-[#07090e]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-amber-400 font-extrabold text-[10px] tracking-widest uppercase block mb-1.5">
                EXECUTIVE LEADERSHIP &amp; MANAGEMENT
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight uppercase">
                Jajaran Manajemen PT Sivilize Corp Indonesia
              </h2>
              <p className="text-slate-400 text-[11px] sm:text-xs mt-1.5">
                Para eksekutif dan penanggung jawab di balik visi strategi holding dan kualitas karya sinematik Sivilize Creative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* CARD 1: FOUNDER, CEO & DIREKTUR UTAMA */}
              <div className="p-4.5 sm:p-5 rounded-xl bg-[#111622] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mb-3.5 shadow-md shadow-amber-500/20">
                    <div className="w-full h-full bg-[#0b0f17] rounded-[6px] flex items-center justify-center text-amber-400 font-black text-xs">
                      MA
                    </div>
                  </div>
                  <span className="text-amber-400 text-[9px] font-mono tracking-widest uppercase font-bold block mb-1">
                    FOUNDER &amp; CHIEF EXECUTIVE OFFICER (CEO)
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">Muhamad Adrian</h3>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                    Founder &amp; Direktur Utama PT Sivilize Corp Indonesia. Memimpin visi strategi holding, ekspansi ekosistem teknologi software, serta arah pertumbuhan bisnis perseroan.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
                  📌 Penanggung Jawab Utama Holding Perseroan
                </div>
              </div>

              {/* CARD 2: COO DIREKTUR OPERASIONAL */}
              <div className="p-4.5 sm:p-5 rounded-xl bg-[#111622] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 p-0.5 mb-3.5 border border-slate-700">
                    <div className="w-full h-full bg-[#0b0f17] rounded-[6px] flex items-center justify-center text-slate-300 font-black text-xs">
                      BT
                    </div>
                  </div>
                  <span className="text-amber-400 text-[9px] font-mono tracking-widest uppercase font-bold block mb-1">
                    CHIEF OPERATING OFFICER (COO)
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">Briand Jivencha Therik</h3>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                    Direktur Operasional PT Sivilize Corp Indonesia. Mengawasi kepatuhan legalitas hukum perseroan, dokumen SPK kontrak, pengadaan instansi, dan kelancaran operasional proyek.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
                  ⚖️ Penanggung Jawab Kepatuhan &amp; Kontrak SPK
                </div>
              </div>

              {/* CARD 3: CMO PENANGGUNG JAWAB EKSEKUTIF DIVISI CREATIVE */}
              <div className="p-4.5 sm:p-5 rounded-xl bg-[#111622] border border-amber-500/40 hover:border-amber-400 transition-all flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mb-3.5 shadow-md shadow-amber-500/20">
                    <div className="w-full h-full bg-[#0b0f17] rounded-[6px] flex items-center justify-center text-amber-400 font-black text-xs">
                      SD
                    </div>
                  </div>
                  <span className="text-amber-400 text-[9px] font-mono tracking-widest uppercase font-bold block mb-1">
                    CHIEF MARKETING OFFICER (CMO)
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">Shatrya Dhimar</h3>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                    Penanggung Jawab Eksekutif Divisi Sivilize Creative. Memimpin eksekusi produksi video sinematik 4K, komunikasi brief klien, strategi konten media, dan koordinasi tim videografer.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-amber-500/30 text-[10px] text-amber-400 font-mono font-bold flex items-center gap-1.5">
                  <span>💬 Penanggung Jawab Eksekutif Divisi Creative</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PORTAL NAVIGASI KE HALAMAN RESMI TERSEDIA */}
        <section className="py-10 md:py-12 border-b border-slate-800/80 bg-[#0b0f17]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-amber-400 font-extrabold text-[10px] tracking-widest uppercase block mb-1.5">
                PORTAL NAVIGASI HALAMAN RESMI
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                Jelajahi Informasi Lengkap Sivilize Creative
              </h2>
              <p className="text-slate-400 text-[11px] sm:text-xs mt-1.5">
                Pilih halaman resmi di bawah ini sesuai kebutuhan Anda untuk melihat detail katalog layanan, daftar harga transparan, portofolio karya, serta dokumen legalitas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Portal Card 1: Layanan */}
              <Link
                href="/layanan"
                className="p-4 sm:p-4.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-8.5 h-8.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Film className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    Katalog Layanan Kreatif
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Lihat 20+ kategori layanan produksi video promosi 4K, tur drone aerial, foto komersial produk, &amp; perancangan identitas brand.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[11px] font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Buka Katalog Layanan</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Portal Card 2: Paket & Harga */}
              <Link
                href="/harga"
                className="p-4 sm:p-4.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-8.5 h-8.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    Paket &amp; Kalkulator Harga
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Estimasi biaya transparan paket UMKM Starter (1.5jt), Commercial Pro (3.5jt), Enterprise (6.5jt), &amp; kalkulator kustomisasi.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[11px] font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Lihat Paket &amp; Biaya</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Portal Card 3: Portofolio */}
              <Link
                href="/portofolio"
                className="p-4 sm:p-4.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-8.5 h-8.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <FolderKanban className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    Showcase Portofolio
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Koleksi sampel karya sinematik untuk klien perumahan komersial, cafe, restoran, pernikahan, hingga instansi BUMN.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[11px] font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Lihat Karya Klien</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Portal Card 4: Tentang Kami */}
              <Link
                href="/tentang"
                className="p-4 sm:p-4.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-8.5 h-8.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    Tentang Kami &amp; Legalitas
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Informasi latar belakang divisi, filosofi kerja, tim manajemen, serta akta pendirian PT Sivilize Corp Indonesia.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[11px] font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Buka Profil Perusahaan</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Portal Card 5: Kepatuhan */}
              <Link
                href="/kepatuhan"
                className="p-4 sm:p-4.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-8.5 h-8.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    Kepatuhan &amp; SPK Protect
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Standar kepatuhan hukum, contoh Surat Perjanjian Kerja (SPK), jaminan NDA kerahasiaan, &amp; alur klaim garansi revisi.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[11px] font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Lihat Ketentuan Hukum</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Portal Card 6: FAQ & Bantuan */}
              <Link
                href="/faq"
                className="p-4 sm:p-4.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-8.5 h-8.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    FAQ &amp; Pusat Bantuan
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                    Jawaban pertanyaan umum seputar durasi pengerjaan, format penyerahan file 4K, pengadaan dinas, &amp; pembayaran.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[11px] font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Pertanyaan Sering Diajukan</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. SINERGI EKOSISTEM SOFTWARE & MEDIA */}
        <section className="py-10 md:py-12 border-b border-slate-800/80 bg-[#07090e] relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#111622] via-[#0b0f17] to-[#151c2c] border border-amber-500/30 relative overflow-hidden shadow-xl">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="max-w-xl relative z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider inline-block mb-2.5">
                  SINERGI EKOSISTEM PT SIVILIZE CORP
                </span>
                <h2 className="text-base sm:text-xl font-bold text-white tracking-tight leading-tight mb-2">
                  Website High-Speed + Video Promosi 4K Sinematik
                </h2>
                <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed mb-4">
                  Butuh sistem software enterprise atau landing page yang langsung siap pakai? Hubungkan visual bisnis buatan Sivilize Creative dengan ekosistem software Sivilize Software.
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://software.sivilizecorp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-[11px] flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition"
                  >
                    <span>Kunjungi Sivilize Software</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <Link
                    href="/harga"
                    className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-[11px] border border-slate-700/80 transition"
                  >
                    Lihat Bundling All-in-One
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
