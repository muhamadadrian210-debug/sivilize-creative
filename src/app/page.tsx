"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const rfpWaMessage = encodeURIComponent(
    "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud berkonsultasi / mengajukan Request Proposal (RFP) untuk produksi video, foto, dan branding bisnis kami.\n\nBoleh dibantu koordinasinya? Terima kasih."
  );

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300 selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        
        {/* 1. EDITORIAL HERO SECTION */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-slate-800/60 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-[11px] font-mono tracking-wider mb-6 shadow-2xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>CREATIVE AGENCY RESMI PT SIVILIZE CORP INDONESIA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 uppercase">
              Kalau Sivilize Software Membangun Sistem, <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Maka Sivilize Creative Membangun Citra Bisnis.
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-normal max-w-3xl mx-auto leading-relaxed mb-8">
              Sivilize Creative membantu bisnis, organisasi, dan individu membangun citra profesional melalui visual, foto, video, desain, branding, dan konten digital berkualitas tinggi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/6282347058055?text=${rfpWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>📸 Konsultasi Creative (CMO WA Direct)</span>
              </a>
              <Link
                href="/harga"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm px-8 py-4 rounded-xl border border-slate-700/80 transition-all"
              >
                <span>📋 Minta Penawaran Harga</span>
              </Link>
            </div>

            {/* LIVE METRIC BAR */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto text-left">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">sivilize-creative-studio.active</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
                  <span className="text-amber-400 font-bold">[ BRANDING AGENCY ]</span>
                  <span className="text-emerald-400 font-bold">[ PT SIVILIZE CORP ]</span>
                  <span>[ NIB 0207260103661 ]</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">01 / PRODUCTION</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">Business Video & Shorts</strong>
                  <span className="text-amber-400 text-[11px]">Commercial & Corporate</span>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">02 / EVENT DOCS</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">Wedding & Event Highlight</strong>
                  <span className="text-emerald-400 text-[11px]">Full Day Documentation</span>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">03 / PHOTOGRAPHY</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">Foto Produk & Menu</strong>
                  <span className="text-indigo-400 text-[11px]">High-Res Commercial Studio</span>
                </div>
                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[10px] block mb-1">04 / EXECUTIVE LEAD</span>
                  <strong className="text-white block font-sans font-bold text-sm mb-1">Shatrya Dhimar (CMO)</strong>
                  <span className="text-slate-400 text-[11px]">0823 4705 8055</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. CORPORATE BACKGROUND & EKOSISTEM PT SIVILIZE CORP INDONESIA */}
        <section className="py-20 border-b border-slate-800/60 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// CORPORATE_BACKGROUND</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Bagian Dari Ekosistem PT Sivilize Corp Indonesia
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">
                Sivilize Creative beroperasi sebagai divisi Creative Agency resmi di bawah badan hukum perseroan yang sah.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              
              {/* PROFIL PERUSAHAAN */}
              <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 uppercase">Profil Divisi & Legalitas</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  <strong>PT SIVILIZE CORP INDONESIA</strong> menaungi divisi khusus **Sivilize Creative** untuk merancang identitas visual, produksi video promosi, fotografi commercial, dan kampanye digital bagi pelaku usaha maupun organisasi besar.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Setiap kontrak pengerjaan video dan konten didukung oleh bukti pembayaran sah perseroan, perjanjian lisensi penggunaan karya, serta dokumen kerahasiaan materi (*NDA*).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">NIB KEMENKUMHAM</span>
                    <strong className="text-amber-400 font-bold text-xs">0207260103661</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">KBLI ADVERTISING</span>
                    <strong className="text-white font-bold text-xs">73100 Periklanan</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[10px] mb-1">PROGRAMMING KBLI</span>
                    <strong className="text-emerald-400 font-bold text-xs">62199 Software</strong>
                  </div>
                </div>
              </div>

              {/* DIREKSI & EXECUTIVE LEADERSHIP (SHATRYA DHIMAR CMO) */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 border border-slate-800 relative shadow-xl">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-2">// EXECUTIVE_MARKETING_LEAD</span>
                <h3 className="text-xl font-bold text-white mb-6 uppercase">Direksi & Penanggung Jawab Pemasaran</h3>
                
                <div className="p-5 rounded-xl bg-[#070b12] border border-amber-500/40 mb-5">
                  <strong className="text-white font-bold text-base block">Shatrya Dhimar</strong>
                  <span className="text-amber-400 font-bold text-xs block mb-2">Chief Marketing Officer (CMO) — Sivilize Creative</span>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Memimpin strategi pemasaran visual, supervisi penawaran harga proposal, serta pengesahan lisensi kampanye kreatif.
                  </p>
                  <a
                    href={`https://wa.me/6282347058055?text=${rfpWaMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs transition-all"
                  >
                    💬 WA Direct CMO: +62 823-4705-8055 &rarr;
                  </a>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4 font-mono">
                  CEO: Muhamad Adrian | COO: Briand Jivencha Therik | CFO: Hendrik Putra Hanas
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 3. 5 PILAR LAYANAN UTAMA SIVILIZE CREATIVE */}
        <section className="py-20 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// CREATIVE_PILLARS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">5 Pilar Layanan Kreatif Utama</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">Solusi produksi visual & branding menyeluruh untuk mendukung pertumbuhan bisnis Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* 01. BUSINESS CONTENT */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 block mb-1">[01] VIDEO PRODUCTION</span>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase">Business Content</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Video Promosi UMKM, Cafe, Hotel, Properti, Company Profile, Video Produk, TikTok/Reels, & Drone.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail Video Content &rarr;
                </Link>
              </div>

              {/* 02. EVENT DOCUMENTATION */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 block mb-1">[02] EVENT COVERAGE</span>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase">Event Docs</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Dokumentasi Wedding, Wisuda, Seminar, Launching Produk, Konser, Gathering, & Corporate Event.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail Event Docs &rarr;
                </Link>
              </div>

              {/* 03. PHOTOGRAPHY */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 block mb-1">[03] COMMERCIAL PHOTO</span>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase">Photography</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Foto Produk Studio, Foto Menu Makanan, Foto Interior/Eksterior, Foto Company Profile, & Personal Branding.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail Photography &rarr;
                </Link>
              </div>

              {/* 04. BRANDING & DESIGN */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 block mb-1">[04] BRAND IDENTITY</span>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase">Branding & Logo</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Desain Logo Vektor, Brand Identity Guidelines, Poster, Banner, Flyer, Desain Menu, & Packaging.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail Branding &rarr;
                </Link>
              </div>

              {/* 05. SOCIAL MEDIA MANAGEMENT */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 block mb-1">[05] DIGITAL MARKETING</span>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase">Social Media</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Content Planning, Content Calendar, Copywriting Caption, Strategi Konten, & Editing Video Pendek.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail Social Media &rarr;
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 4. CROSS-ECOSYSTEM SECTION ("BUTUH WEBSITE ATAU SISTEM?") */}
        <section className="py-20 border-b border-slate-800/60 bg-[#070b12]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 border-2 border-amber-500/40 shadow-2xl">
              
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// SIVILIZE_CORP_ECOSYSTEM</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">
                  Butuh Website Atau Sistem Software?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  Selain layanan produksi konten visual dan branding, <strong>PT SIVILIZE CORP INDONESIA</strong> juga memiliki unit bisnis software & website profesional:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* CARD SIVILIZE SOFTWARE */}
                <div className="p-6 rounded-xl bg-[#070b12] border border-slate-800 hover:border-amber-500/40 transition-all">
                  <span className="text-amber-400 font-mono text-xs font-bold block mb-1">[ ENTERPRISE SOFTWARE ]</span>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">Sivilize Software</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Spesialis pembuatan sistem software enterprise custom, ERP, CRM, SIMRS rumah sakit, & integrasi AI/ML.
                  </p>
                  <a
                    href="http://localhost:3000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs font-bold hover:underline"
                  >
                    Buka Website Sivilize Software &rarr;
                  </a>
                </div>

                {/* CARD SIWEB PRODUCTION */}
                <div className="p-6 rounded-xl bg-[#070b12] border border-slate-800 hover:border-amber-500/40 transition-all">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">[ WEB & LANDING PAGE ]</span>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">SiWeb Production</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Layanan pembuatan landing page kilat, website profile UMKM, cafe, & toko online terintegrasi WhatsApp.
                  </p>
                  <a
                    href="https://github.com/muhamadadrian210-debug/portfolio-adrian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold hover:underline"
                  >
                    Buka Website SiWeb Production &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 5. MENGAPA MEMILIH SIVILIZE CREATIVE */}
        <section className="py-20 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// WHY_CHOOSE_US</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">Mengapa Memilih Sivilize Creative</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">Pendekatan editorial bergaransi kualitas tinggi untuk pertumbuhan citra bisnis Anda.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-mono">
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-amber-400 text-sm block mb-2">01 / TRANSPARENT PRICING</strong>
                <span className="text-white font-bold block text-sm mb-1">Harga Transparan</span>
                <p className="text-slate-400 font-sans leading-relaxed">Tarif paket jelas tanpa biaya tersembunyi untuk seluruh skala proyek.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-amber-400 text-sm block mb-2">02 / PROFESSIONAL TEAM</strong>
                <span className="text-white font-bold block text-sm mb-1">Tim Profesional</span>
                <p className="text-slate-400 font-sans leading-relaxed">Videografer, fotografer, & desainer grafis berpengalaman di industri komersial.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-amber-400 text-sm block mb-2">03 / FAST TURNAROUND</strong>
                <span className="text-white font-bold block text-sm mb-1">Proses Cepat</span>
                <p className="text-slate-400 font-sans leading-relaxed">Penyelesaian editing & dokumentasi sesuai jadwal komitmen yang disepakati.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-amber-400 text-sm block mb-2">04 / CLEAR REVISION</strong>
                <span className="text-white font-bold block text-sm mb-1">Revisi Jelas</span>
                <p className="text-slate-400 font-sans leading-relaxed">Jatah revisi terstruktur agar hasil akhir 100% sesuai dengan ekspektasi Anda.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-amber-400 text-sm block mb-2">05 / HIGH QUALITY</strong>
                <span className="text-white font-bold block text-sm mb-1">Hasil Berkualitas</span>
                <p className="text-slate-400 font-sans leading-relaxed">Penggunaan kamera high-end 4K, lighting studio profesional, & color grading editorial.</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-amber-400 text-sm block mb-2">06 / FULL SYNERGY</strong>
                <span className="text-white font-bold block text-sm mb-1">Terintegrasi Ekosistem</span>
                <p className="text-slate-400 font-sans leading-relaxed">Konten visual yang dihasilkan siap diintegrasikan langsung ke sistem website Sivilize.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. EXECUTIVE CONTACT BANNER (SHATRYA DHIMAR CMO) */}
        <section className="py-20 bg-slate-900/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#070b12] border-2 border-amber-500/60 shadow-2xl relative overflow-hidden">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-3">// EXECUTIVE_MARKETING_RESPONSE</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase mb-4">
                Konsultasikan Citra Visual Bisnis Anda Sekarang
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
                Diskusikan produksi video promosi, dokumentasi event, fotografi produk, dan branding langsung bersama Chief Marketing Officer (CMO) kami.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/6282347058055?text=${rfpWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
                >
                  <span>💬 Chat WA CMO: Shatrya Dhimar (+62 823-4705-8055)</span>
                </a>
                <Link
                  href="/kontak"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm px-8 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  <span>📋 Minta Penawaran Proposal</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
