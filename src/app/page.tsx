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
  Star,
  ExternalLink,
  ChevronRight
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

  const portfolios = siteData?.portfolios?.filter((p: any) => p.featured) || [];
  const services = siteData?.services || [];
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
              <span>SIVILIZE CREATIVE — PRODUCTION HOUSE PT SIVILIZE CORP</span>
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
                href="/harga"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#111622] hover:bg-[#182030] text-slate-200 font-bold text-sm border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Paket & Kalkulator Biaya</span>
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

        {/* 2. SERVICES SECTION */}
        <section className="py-20 border-b border-slate-800/80 bg-[#07090e]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-amber-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
                LAYANAN UNGGULAN CREATIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Solusi Visual Sinematik Terpadu
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Diproduksi langsung oleh tim videografer, pilot drone, & fotografer profesional bersertifikat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc: any) => (
                <div
                  key={svc.id}
                  className="p-6 rounded-2xl bg-[#111622] border border-slate-800/80 hover:border-amber-500/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                      <Film className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{svc.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{svc.description}</p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-slate-800/80">
                    {svc.bulletPoints?.map((bp: string, i: number) => (
                      <li key={i} className="text-[11px] text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FEATURED PORTFOLIO SECTION */}
        <section className="py-20 border-b border-slate-800/80 bg-[#0b0f17]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-amber-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
                  PORTOFOLIO TERBANYAK
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Karya Sinematik Klien Kami
                </h2>
              </div>
              <Link
                href="/portofolio"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
              >
                <span>Lihat Semua Portofolio</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolios.map((item: any) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#111622] border border-slate-800/80 overflow-hidden hover:border-amber-500/40 transition-all group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-extrabold uppercase">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Klien: {item.client}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
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
                    href="/harga#all_in_one"
                    className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-700/80 transition"
                  >
                    Paket Bundling All-in-One (Rp 1.499.000)
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
