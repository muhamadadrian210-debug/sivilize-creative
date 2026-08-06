"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Video, Award, Users, ArrowRight, CheckCircle2, Star, Sparkles, Building2, UserCheck, MessageCircle } from "lucide-react";

export default function TentangPage() {
  const cmoPhone = "+6281246821279";
  const ctaWaMsg = "Halo Mas Shatrya Dhimar (CMO Sivilize Creative), saya sudah membaca halaman Tentang Kami dan ingin berkonsultasi mengenai proyek visual / video branding perusahaan kami.";
  const waCleanPhone = cmoPhone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${waCleanPhone}?text=${encodeURIComponent(ctaWaMsg)}`;

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        {/* HERO BANNER */}
        <section className="relative overflow-hidden py-16 border-b border-slate-800/80 bg-gradient-to-b from-[#111622] via-[#0b0f17] to-[#0b0f17]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-1.5 mb-4">
                <Sparkles className="w-3.5 h-3.5" /> DIVISI MEDIA & PRODUCTION HOUSE RESMI PT SIVILIZE CORP
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                Tentang <span className="text-amber-400">Sivilize Creative</span>
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
                Unit bisnis strategis yang bergerak di bidang produksi video sinematik 4K, komersial branding, commercial photography, & drone aerial view di bawah naungan resmi entitas hukum <strong className="text-white">PT SIVILIZE CORP INDONESIA</strong>.
              </p>
            </div>

            {/* QUICK STATS & LEGALITY BADGES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="p-4 rounded-2xl bg-[#111622] border border-slate-800 text-center">
                <span className="text-slate-500 text-[10px] font-mono block uppercase">ENTITAS HUKUM</span>
                <span className="text-white font-bold text-xs sm:text-sm mt-1 block">PT SIVILIZE CORP</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#111622] border border-slate-800 text-center">
                <span className="text-slate-500 text-[10px] font-mono block uppercase">NIB REPUBLIK INDONESIA</span>
                <span className="text-amber-400 font-bold text-xs sm:text-sm mt-1 block font-mono">0207260103661</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#111622] border border-slate-800 text-center">
                <span className="text-slate-500 text-[10px] font-mono block uppercase">STANDAR PRODUKSI</span>
                <span className="text-white font-bold text-xs sm:text-sm mt-1 block">4K Ultra HD Broadcast</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#111622] border border-slate-800 text-center">
                <span className="text-slate-500 text-[10px] font-mono block uppercase">PERLINDUNGAN HUKUM</span>
                <span className="text-emerald-400 font-bold text-xs sm:text-sm mt-1 block">SPK Resmi & Invoice</span>
              </div>
            </div>
          </div>
        </section>

        {/* LATAR BELAKANG & SEJARAH DIVISI */}
        <section className="py-16 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" /> LATAR BELAKANG BERDIRINYA DIVISI
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Menjawab Kebutuhan Visual Berstandar Tinggi Bagi Bisnis & Instansi
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Sivilize Creative didirikan sebagai respon atas tantangan yang dihadapi oleh banyak bisnis, UMKM, korporasi enterprise, hingga instansi pemerintahan di Kota Kupang, Nusa Tenggara Timur (NTT), dan secara Nasional. Banyak entitas memiliki produk atau layanan luar biasa, namun belum mampu menyampaikan pesan mereknya secara optimal karena keterbatasan media promosi berkualitas.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Dengan mengintegrasikan teknologi pengambilan gambar 4K Ultra HD, drone aerial view berlisensi, pencahayaan sinematik, serta strategi narasi persuasif (copywriting sales), Sivilize Creative hadir untuk memastikan setiap karya visual yang kami hasilkan tidak hanya indah secara estetika, namun juga mengkonversi audiens menjadi pelanggan setia.
                </p>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    Seluruh proyek Sivilize Creative dijalankan di bawah payung hukum PT Sivilize Corp Indonesia, memberikan kepastian legalitas, Surat Perjanjian Kerja (SPK), dan bukti faktur resmi untuk kebutuhan audit perusahaan.
                  </span>
                </div>
              </div>

              {/* VISI & MISI */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-3xl bg-[#111622] border border-slate-800 hover:border-amber-500/30 transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Star className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">Visi Utama Divisi</h3>
                  </div>
                  <p className="text-slate-200 text-sm italic leading-relaxed bg-[#070b12] p-4 rounded-xl border border-slate-800">
                    "Menjadi Production House & Media Agency sinematik 4K terdepan di Indonesia yang mengawinkan estetika visual tinggi dengan pertumbuhan bisnis nyata bagi para mitra."
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#111622] border border-slate-800 hover:border-amber-500/30 transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">Misi Operasional Kami</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Kualitas Kinerik 4K:</strong> Menghasilkan konten media beresolusi 4K Ultra HD dengan tata suara broadcast jernih.</span>
                    </li>
                    <li className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Perlindungan Legal SPK:</strong> Menjamin keamanan transaksi mitra melalui Surat Perjanjian Kerja (SPK) resmi PT Sivilize Corp.</span>
                    </li>
                    <li className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Sinergi Ekosistem Software:</strong> Memadukan kekuatan promosi visual dengan sistem software & website Sivilize Corp.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JAJARAN KEPEMIMPINAN PT SIVILIZE CORP & DIVISI CREATIVE */}
        <section className="py-20 border-b border-slate-800/80 bg-[#07090e]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs tracking-widest uppercase inline-block mb-3">
                EXECUTIVE LEADERSHIP & MANAGEMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                Jajaran Kepemimpinan <span className="text-amber-400">PT Sivilize Corp</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">
                Para eksekutif dan penanggung jawab di balik strategi pertumbuhan dan kualitas karya Sivilize Creative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CARD 1: FOUNDER & CEO */}
              <div className="p-8 rounded-3xl bg-[#111622] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#0b0f17] rounded-[14px] flex items-center justify-center text-amber-400 font-black text-xl">
                      MA
                    </div>
                  </div>
                  <span className="text-amber-400 text-[11px] font-mono tracking-widest uppercase font-bold block mb-1">
                    FOUNDER & CHIEF EXECUTIVE OFFICER
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Muhamad Adrian
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Direktur Utama / CEO PT SIVILIZE CORP INDONESIA. Memimpin visi strategis holding perseroan, pengawasan ekosistem teknologi software, serta arah ekspansi bisnis jangka panjang.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>PT SIVILIZE CORP</span>
                  <span className="text-amber-400/90 font-bold">DIREKTUR UTAMA</span>
                </div>
              </div>

              {/* CARD 2: COO */}
              <div className="p-8 rounded-3xl bg-[#111622] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#0b0f17] rounded-[14px] flex items-center justify-center text-amber-400 font-black text-xl">
                      BT
                    </div>
                  </div>
                  <span className="text-amber-400 text-[11px] font-mono tracking-widest uppercase font-bold block mb-1">
                    CHIEF OPERATING OFFICER
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Briand Jivencha Therik
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Chief Operating Officer (COO) PT SIVILIZE CORP INDONESIA. Mengawasi tata kelola operasional perseroan, manajemen kepatuhan legalitas, serta efisiensi pelaksanaan proyek antar divisi.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>PT SIVILIZE CORP</span>
                  <span className="text-amber-400/90 font-bold">COO PERSEROAN</span>
                </div>
              </div>

              {/* CARD 3: CMO & HEAD OF SIVILIZE CREATIVE */}
              <div className="p-8 rounded-3xl bg-[#111622] border border-amber-500/40 hover:border-amber-400 transition-all flex flex-col justify-between group shadow-2xl shadow-amber-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/25 transition-all" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 p-0.5 mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#0b0f17] rounded-[14px] flex items-center justify-center text-amber-300 font-black text-xl">
                      SD
                    </div>
                  </div>
                  <span className="text-amber-400 text-[11px] font-mono tracking-widest uppercase font-bold block mb-1">
                    CMO & HEAD OF SIVILIZE CREATIVE
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Shatrya Dhimar
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Chief Marketing Officer (CMO) PT SIVILIZE CORP sekaligus <strong>Penanggung Jawab Eksekutif Divisi Sivilize Creative</strong>. Memimpin tim kreaftif, pengawasan standar sinematik 4K, & konsultasi pemasaran visual mitra.
                  </p>
                </div>
                <div className="pt-4 border-t border-amber-500/30 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">PENANGGUNG JAWAB CREATIVE</span>
                  <span className="text-amber-400 font-extrabold">CMO PERSEROAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES & WHY CHOOSE US */}
        <section className="py-20 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// CORE_VALUES</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                Keunggulan Utama Bekerja Sama Dengan Sivilize Creative
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#111622] border border-slate-800">
                <Video className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">4K Ultra HD Cinema</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Pengambilan gambar resolusi 4K dengan rasio aspek sinematik, lighting profesional, & color grading siap tayang.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111622] border border-slate-800">
                <ShieldCheck className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Legalitas SPK Sah</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Setiap transaksi dan lisensi karya dilindungi Surat Perjanjian Kerja (SPK) resmi PT Sivilize Corp Indonesia.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111622] border border-slate-800">
                <Users className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Konsultasi Langsung CMO</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Diskusi naskah, konsep visual, dan eksekusi dikawal langsung oleh CMO Sivilize Corp (Shatrya Dhimar).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111622] border border-slate-800">
                <Award className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Garansi Revisi & Master</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Penyimpanan raw footage aman di Google Drive perseroan dengan garansi revisi sesuai kesepakatan SPK.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA CONSULTATION */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#111622] to-amber-500/10 border border-amber-500/30 text-center relative overflow-hidden shadow-2xl">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-widest inline-block mb-4">
                KONSULTASI GRATIS BERSAMA CMO
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Siap Meningkatkan Kualitas Visual Bisnis Anda?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
                Hubungi Mas Shatrya Dhimar (CMO PT Sivilize Corp & Head of Sivilize Creative) untuk merencanakan konsep video promosi 4K, company profile, atau dokumentasi acara perusahaan Anda.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Konsultasi WA CMO (Shatrya Dhimar)</span>
                </a>
                <Link
                  href="/harga"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Lihat Paket & Harga</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
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
