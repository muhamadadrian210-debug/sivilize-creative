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
  Play,
  Film,
  Camera,
  Layers,
  MessageCircle,
  Calculator,
  ShieldCheck,
  Building2,
  Briefcase,
  Users,
  Award,
  ExternalLink,
  ChevronRight,
  FileText,
  FolderKanban,
  HelpCircle
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
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-800/80 overflow-hidden">
          {/* Ambient Lighting Background */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111622] border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide mb-6 shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>SIVILIZE CREATIVE — PRODUCTION HOUSE PT SIVILIZE CORP INDONESIA</span>
            </div>

            {/* Dynamic Hero Headings */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
              {hero.headingMain}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 block mt-2">
                {hero.headingHighlight}
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              {hero.subtitle}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={`https://wa.me/${waCleanPhone}?text=${cmoWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Konsultasi WA CMO ({cmoName})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/tentang"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#111622] hover:bg-[#182030] text-slate-200 font-bold text-sm border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Profil & Legalitas Perusahaan</span>
              </Link>
            </div>

            {/* Dynamic Stats Grid */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {hero.stats.map((stat: any, idx: number) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#111622]/80 border border-slate-800/80 backdrop-blur-xl hover:border-amber-500/40 transition-colors group text-center"
                >
                  <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. PENJELASAN PERUSAHAAN & DIVISI */}
        <section className="py-20 border-b border-slate-800/80 bg-[#07090e] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-amber-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
                PROFIL PERUSAHAAN & DIVISI
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Mengenal PT Sivilize Corp Indonesia & Sivilize Creative
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Platform ekosistem teknologi, media digital sinematik, dan penyedia solusi bisnis terintegrasi yang berbasis di Kota Kupang, Nusa Tenggara Timur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1: PT Sivilize Corp Indonesia */}
              <div className="p-8 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">PT SIVILIZE CORP INDONESIA</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Perusahaan induk (holding) legal resmi berbadan hukum PT yang menaungi pengembangan software enterprise, platform SaaS, serta agensi media kreatif sinematik.
                  </p>
                  <div className="space-y-2 text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
                    <div>📌 NIB: 0207260103661</div>
                    <div>🏢 NPWP: 1000 0000 1032 4212</div>
                    <div>📍 Kota Kupang, NTT</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Sivilize Creative Division */}
              <div className="p-8 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                    <Film className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Divisi Sivilize Creative</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Production house & media agency profesional spesialis video sinematik 4K, drone aerial footage, komersial produk, dan branding visual untuk UMKM hingga instansi pemerintah.
                  </p>
                  <div className="space-y-2 text-[11px] text-slate-400 pt-3 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Kamera & Lighting Studio 4K Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Pilot Drone Certified & Experienced</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Color Grading & Scriptwriting Sales</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Legalitas & SPK Proteksi */}
              <div className="p-8 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Jaminan Legalitas & SPK</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Setiap pengerjaan project dilindungi Surat Perjanjian Kerja (SPK) bernomor resmi perseroan, faktur pajak/invoice lengkap, serta jaminan kerahasiaan materi (NDA).
                  </p>
                  <div className="space-y-2 text-[11px] text-slate-400 pt-3 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>SPK Kontrak Hukum Resmi PT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Invoice & Rekening Bank Perseroan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Bisa Pengadaan Instansi / Dinas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jajaran Manajemen Eksekutif */}
            <div className="p-8 rounded-3xl bg-[#0b0f17] border border-slate-800/80">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-amber-400 font-extrabold text-[10px] tracking-widest uppercase block mb-1">
                  EXECUTIVE LEADERSHIP
                </span>
                <h3 className="text-xl font-bold text-white">Jajaran Manajemen PT Sivilize Corp Indonesia</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-[#111622] border border-slate-800 text-center">
                  <strong className="text-white font-bold text-sm block">Muhamad Adrian</strong>
                  <span className="text-amber-400 text-xs font-semibold block mt-0.5">Founder & Chief Executive Officer (CEO)</span>
                  <p className="text-slate-400 text-[11px] mt-2">Direktur Utama PT Sivilize Corp Indonesia, memimpin visi strategi teknologi & ekspansi perusahaan.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#111622] border border-slate-800 text-center">
                  <strong className="text-white font-bold text-sm block">Briand Jivencha Therik</strong>
                  <span className="text-amber-400 text-xs font-semibold block mt-0.5">Chief Operating Officer (COO)</span>
                  <p className="text-slate-400 text-[11px] mt-2">Direktur Operasional PT Sivilize Corp Indonesia, mengawasi kepatuhan hukum, SPK, & manajemen proyek.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#111622] border border-slate-800 text-center border-amber-500/30">
                  <strong className="text-white font-bold text-sm block">Shatrya Dhimar</strong>
                  <span className="text-amber-400 text-xs font-semibold block mt-0.5">Chief Marketing Officer (CMO)</span>
                  <p className="text-slate-400 text-[11px] mt-2">Penanggung jawab eksekutif Divisi Sivilize Creative, memimpin produksi sinematik & komunikasi klien.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PORTAL NAVIGASI HALAMAN RESMI */}
        <section className="py-20 border-b border-slate-800/80 bg-[#0b0f17]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-amber-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
                PORTAL NAVIGASI RESMI
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Jelajahi Informasi Lengkap Sivilize Creative
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Pilih halaman di bawah ini untuk melihat detail katalog layanan, daftar harga transparan, portofolio karya, serta dokumen legalitas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Portal Card 1: Layanan */}
              <Link
                href="/layanan"
                className="p-6 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Film className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Katalog Layanan Kreatif
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Lihat 20+ kategori layanan produksi video promosi 4K, tur drone aerial, foto komersial produk, & perancangan identitas brand.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Buka Katalog Layanan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Portal Card 2: Paket & Harga */}
              <Link
                href="/harga"
                className="p-6 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Paket & Kalkulator Harga
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Estimasi biaya transparan paket UMKM Starter (1.5jt), Commercial Pro (3.5jt), Enterprise (6.5jt), & kalkulator kustomisasi.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Lihat Paket & Biaya</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Portal Card 3: Portofolio */}
              <Link
                href="/portofolio"
                className="p-6 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <FolderKanban className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Showcase Portofolio
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Koleksi sampel karya sinematik untuk klien perumahan komersial, cafe, restoran, pernikahan, hingga instansi BUMN.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Lihat Karya Klien</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Portal Card 4: Tentang Kami */}
              <Link
                href="/tentang"
                className="p-6 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Tentang Kami & Legalitas
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Informasi latar belakang divisi, filosofi kerja, tim manajemen, serta akta pendirian PT Sivilize Corp Indonesia.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Buka Profil Perusahaan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Portal Card 5: Kepatuhan */}
              <Link
                href="/kepatuhan"
                className="p-6 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Kepatuhan & SPK Protect
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Standar kepatuhan hukum, contoh Surat Perjanjian Kerja (SPK), jaminan NDA kerahasiaan, & alur klaim garansi revisi.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Lihat Ketentuan Hukum</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Portal Card 6: FAQ & Kontak */}
              <Link
                href="/faq"
                className="p-6 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    FAQ & Pusat Bantuan
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Jawaban pertanyaan umum seputar durasi pengerjaan, format penyerahan file 4K, pengadaan dinas, & pembayaran.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">
                  <span>Pertanyaan Sering Diajukan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. CROSS DOMAIN SINERGI ENTERPRISE */}
        <section className="py-20 border-b border-slate-800/80 bg-[#07090e] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#111622] via-[#0b0f17] to-[#151c2c] border border-amber-500/30 relative overflow-hidden shadow-2xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="max-w-2xl relative z-10">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-4">
                  SINERGI EKOSISTEM PT SIVILIZE CORP
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                  Website High-Speed + Video Promosi 4K Sinematik
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Butuh sistem software enterprise atau landing page yang langsung jadi? Hubungkan visual bisnis buatan Sivilize Creative dengan ekosistem software Sivilize Software.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://software.sivilizecorp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition"
                  >
                    <span>Kunjungi Sivilize Software</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <Link
                    href="/harga"
                    className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-700/80 transition"
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
