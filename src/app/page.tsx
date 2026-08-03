"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const rfpWaMessage = encodeURIComponent(
    "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud berkonsultasi mengenai rencana produksi video, fotografi, atau branding visual untuk bisnis/instansi kami.\n\nBoleh dibantu koordinasi awalnya? Terima kasih."
  );

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300 selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="flex-1">

        {/* 1. HERO */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-800/60 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] bg-amber-500/8 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-[10px] font-mono tracking-wide mb-4 shadow-xl backdrop-blur-md max-w-full text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
              <span className="truncate">Sivilize Creative — PT Sivilize Corp Indonesia</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Membangun Identitas Visual &amp; Konten Kreatif Berkelas.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 block sm:inline mt-1 sm:mt-0">
                Solusi Video Promosi, Fotografi, &amp; Branding Bisnis.
              </span>
            </h1>

            <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mb-7">
              Kami membantu UMKM, perusahaan, dan organisasi menyampaikan nilai produk melalui video komersial, fotografi studio, desain brand, dan manajemen konten digital.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/6282347058055?text=${rfpWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>📸 Konsultasi Langsung dengan CMO</span>
              </a>
              <Link
                href="/harga"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs px-6 py-3.5 rounded-xl border border-slate-700/80 transition-all"
              >
                <span>📋 Lihat Paket &amp; Estimasi Biaya</span>
              </Link>
            </div>

            {/* STUDIO STATUS BAR */}
            <div className="mt-10 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl max-w-4xl mx-auto text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">sivilize-creative-studio.active</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-slate-400">
                  <span className="text-amber-400 font-bold">[ BRANDING AGENCY ]</span>
                  <span className="text-emerald-400 font-bold">[ PT SIVILIZE CORP ]</span>
                  <span className="hidden sm:inline">[ NIB 0207260103661 ]</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[9px] block mb-1">01 / PRODUKSI VIDEO</span>
                  <strong className="text-white block font-sans font-bold text-xs mb-1">Video Promosi</strong>
                  <span className="text-amber-400 text-[10px]">Komersial & Company Profile</span>
                </div>
                <div className="p-3 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[9px] block mb-1">02 / DOKUMENTASI</span>
                  <strong className="text-white block font-sans font-bold text-xs mb-1">Event Coverage</strong>
                  <span className="text-emerald-400 text-[10px]">Sinematik & Full Day</span>
                </div>
                <div className="p-3 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[9px] block mb-1">03 / FOTOGRAFI</span>
                  <strong className="text-white block font-sans font-bold text-xs mb-1">Foto Produk & Menu</strong>
                  <span className="text-indigo-400 text-[10px]">High-Res Studio Lighting</span>
                </div>
                <div className="p-3 rounded-xl bg-[#070b12] border border-slate-800/80">
                  <span className="text-slate-500 text-[9px] block mb-1">04 / DIREKSI</span>
                  <strong className="text-white block font-sans font-bold text-xs mb-1">Shatrya Dhimar (CMO)</strong>
                  <span className="text-slate-400 text-[10px]">0823 4705 8055</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. CORPORATE BACKGROUND */}
        <section className="py-16 border-b border-slate-800/60 bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-2">// CORPORATE_BACKGROUND</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                Bagian dari Ekosistem PT Sivilize Corp Indonesia
              </h2>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Sivilize Creative beroperasi sebagai pilar spesialis produksi konten visual &amp; branding di bawah badan hukum perseroan yang terdaftar resmi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-0">

              {/* PROFIL PERUSAHAAN */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
                <h3 className="text-base font-bold text-white mb-3 uppercase">Profil Divisi &amp; Legalitas</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  <strong>PT SIVILIZE CORP INDONESIA</strong> menaungi divisi <strong>Sivilize Creative</strong> untuk merancang identitas visual, produksi video promosi, fotografi commercial, dan kampanye digital bagi pelaku usaha maupun organisasi.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed mb-5">
                  Setiap kerja sama didukung instrumen hukum perseroan yang transparan, dokumen penyerahan hak lisensi komersial, serta perjanjian kerahasiaan materi (NDA) bila diperlukan.
                </p>

                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[9px] mb-1">NIB KEMENKUMHAM</span>
                    <strong className="text-amber-400 font-bold text-[11px]">0207260103661</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[9px] mb-1">KBLI ADVERTISING</span>
                    <strong className="text-white font-bold text-[11px]">73100 Periklanan</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070b12] border border-slate-800">
                    <span className="text-slate-500 block text-[9px] mb-1">PROGRAMMING</span>
                    <strong className="text-emerald-400 font-bold text-[11px]">62199 Software</strong>
                  </div>
                </div>
              </div>

              {/* CMO CARD */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 relative shadow-xl">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-2">// MARKETING_LEAD</span>
                <h3 className="text-base font-bold text-white mb-4 uppercase">Direksi Pemasaran</h3>

                <div className="p-4 rounded-xl bg-[#070b12] border border-amber-500/40 mb-4">
                  <strong className="text-white font-bold text-sm block">Shatrya Dhimar</strong>
                  <span className="text-amber-400 font-bold text-[10px] block mb-2">Chief Marketing Officer (CMO) — Sivilize Creative</span>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3">
                    Memimpin strategi pemasaran visual, penyusunan proposal, serta pengawasan mutu produksi kampanye kreatif.
                  </p>
                  <a
                    href={`https://wa.me/6282347058055?text=${rfpWaMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs transition-all"
                  >
                    💬 WA CMO: +62 823-4705-8055 &rarr;
                  </a>
                </div>

                <div className="text-[10px] text-slate-400 leading-relaxed border-t border-slate-800 pt-3 font-mono">
                  CEO: Muhamad Adrian · COO: Briand Jivencha Therik · CFO: Hendrik Putra Hanas
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 3. 5 PILAR LAYANAN */}
        <section className="py-16 border-b border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-2">// CREATIVE_SERVICES</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase">5 Layanan Utama Sivilize Creative</h2>
              <p className="text-slate-400 text-xs mt-2">Solusi produksi visual &amp; branding profesional sesuai kebutuhan pertumbuhan bisnis Anda.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 block mb-1">[01] PRODUKSI VIDEO</span>
                  <h3 className="text-sm font-bold text-white mb-2 uppercase">Business Content</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Video Promosi UMKM, Cafe, Hotel, Properti, Company Profile, TikTok/Reels, &amp; Drone.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail &rarr;
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 block mb-1">[02] DOKUMENTASI</span>
                  <h3 className="text-sm font-bold text-white mb-2 uppercase">Event Coverage</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Wedding, Wisuda, Seminar, Launching Produk, Konser, Gathering, &amp; Corporate Event.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail &rarr;
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 block mb-1">[03] FOTOGRAFI</span>
                  <h3 className="text-sm font-bold text-white mb-2 uppercase">Commercial Photo</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Foto Produk Studio, Foto Menu Makanan, Foto Interior/Eksterior, &amp; Company Profile.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail &rarr;
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 block mb-1">[04] IDENTITAS VISUAL</span>
                  <h3 className="text-sm font-bold text-white mb-2 uppercase">Branding &amp; Logo</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Desain Logo Vektor, Brand Identity Guidelines, Poster, Banner, &amp; Packaging.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail &rarr;
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 block mb-1">[05] MEDIA SOSIAL</span>
                  <h3 className="text-sm font-bold text-white mb-2 uppercase">Social Media</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Content Planning, Calendar, Copywriting Caption, Strategi Konten, &amp; Video Editing.
                  </p>
                </div>
                <Link href="/layanan" className="text-amber-400 font-mono text-xs font-bold hover:underline">
                  Detail &rarr;
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 4. EKOSISTEM — BUTUH WEBSITE? */}
        <section className="py-16 border-b border-slate-800/60 bg-[#070b12]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border-2 border-amber-500/40 shadow-2xl">

              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-2">// SIVILIZE_CORP_ECOSYSTEM</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase">
                  Butuh Website atau Software?
                </h2>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                  <strong>PT SIVILIZE CORP INDONESIA</strong> juga menaungi unit bisnis teknologi:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-5 rounded-xl bg-[#070b12] border border-slate-800 hover:border-amber-500/40 transition-all">
                  <span className="text-amber-400 font-mono text-[10px] font-bold block mb-1">[ ENTERPRISE SOFTWARE ]</span>
                  <h3 className="text-base font-bold text-white uppercase mb-2">Sivilize Software</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Pengembangan sistem software enterprise custom, ERP, CRM, SIMRS rumah sakit, &amp; integrasi AI/ML.
                  </p>
                  <a
                    href="http://localhost:3000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs font-bold hover:underline"
                  >
                    Kunjungi Sivilize Software &rarr;
                  </a>
                </div>

                <div className="p-5 rounded-xl bg-[#070b12] border border-slate-800 hover:border-amber-500/40 transition-all">
                  <span className="text-emerald-400 font-mono text-[10px] font-bold block mb-1">[ WEB &amp; LANDING PAGE ]</span>
                  <h3 className="text-base font-bold text-white uppercase mb-2">SiWeb Production</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Pembuatan landing page, website profil UMKM, cafe, &amp; toko online terintegrasi WhatsApp.
                  </p>
                  <a
                    href="https://github.com/muhamadadrian210-debug/portfolio-adrian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold hover:underline"
                  >
                    Kunjungi SiWeb Production &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 5. KEUNGGULAN */}
        <section className="py-16 border-b border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-2">// COMMITMENT_&amp;_QUALITY</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase">Mengapa Bekerja Sama Dengan Kami</h2>
              <p className="text-slate-400 text-xs mt-2">Komitmen pengerjaan profesional dengan standar kualitas tinggi.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: "01", title: "Harga Transparan", sub: "Rincian Jelas", desc: "Penawaran sesuai ruang lingkup pengerjaan tanpa biaya tersembunyi." },
                { num: "02", title: "Tim Dedikatif", sub: "Berpengalaman", desc: "Sinematografer, fotografer studio, dan desainer grafis profesional." },
                { num: "03", title: "Tepat Waktu", sub: "Sesuai Jadwal", desc: "Proses editing dan penyerahan materi sesuai komitmen yang disepakati." },
                { num: "04", title: "Garansi Revisi", sub: "Terstruktur", desc: "Jatah revisi minor yang jelas agar hasil sesuai ekspektasi Anda." },
                { num: "05", title: "Standar Tinggi", sub: "Kualitas Terbaik", desc: "Kamera sinema 4K, lighting studio profesional, &amp; retouching terkonsep." },
                { num: "06", title: "Terintegrasi", sub: "Sinergi Ekosistem", desc: "Konten visual siap diintegrasikan langsung ke platform digital Sivilize." },
              ].map((item) => (
                <div key={item.num} className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                  <strong className="text-amber-400 text-[10px] block mb-1 font-mono">{item.num} / {item.title}</strong>
                  <span className="text-white font-bold block text-xs mb-1">{item.sub}</span>
                  <p className="text-slate-400 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA BANNER */}
        <section className="py-16 bg-slate-900/40">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#070b12] border-2 border-amber-500/60 shadow-2xl relative overflow-hidden">
              <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-2">// CONSULTATION_&amp;_PROPOSAL</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase mb-3">
                Konsultasikan Rencana Media &amp; Branding Anda
              </h2>
              <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed mb-6">
                Diskusikan rencana produksi video, dokumentasi event, fotografi produk, atau identitas visual langsung bersama CMO kami.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/6282347058055?text=${rfpWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
                >
                  <span>💬 WA CMO: Shatrya Dhimar (+62 823-4705-8055)</span>
                </a>
                <Link
                  href="/kontak"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs px-6 py-3.5 rounded-xl border border-slate-700 transition-all"
                >
                  <span>📋 Form Penawaran</span>
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
