"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function KepatuhanPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-24 lg:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-1.5">// LEGAL_&_ECOSYSTEM</span>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight uppercase">Legalitas & Ekosistem Perusahaan</h1>
            <p className="text-slate-400 text-[11px] sm:text-xs mt-1.5">
              Sivilize Creative beroperasi secara sah sebagai divisi Creative Agency resmi di bawah naungan PT Sivilize Corp Indonesia.
            </p>
          </div>

          <div className="space-y-5">
            <div className="p-4.5 sm:p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h2 className="text-sm sm:text-base font-bold text-white mb-3 uppercase">Identitas Badan Hukum Perseroan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mb-4">
                <div className="p-3 rounded-lg bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1 text-[10px]">NAMA ENTITAS HUKUM</span>
                  <strong className="text-white font-bold text-xs block">PT SIVILIZE CORP INDONESIA</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1 text-[10px]">NOMOR INDUK BERUSAHA (NIB)</span>
                  <strong className="text-amber-400 font-bold text-xs block">0207260103661</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1 text-[10px]">NPWP PERUSAHAAN</span>
                  <strong className="text-white font-bold text-xs block">1000 0000 1032 4212</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#070b12] border border-slate-800">
                  <span className="text-slate-500 block mb-1 text-[10px]">KBLI PERIZINAN</span>
                  <strong className="text-white font-bold text-xs block">73100 Periklanan & 62199 Software</strong>
                </div>
              </div>

              <p className="text-slate-400 text-[11px] leading-relaxed border-t border-slate-800 pt-3">
                Seluruh proyek produksi video, fotografi, dan branding yang dikerjakan Sivilize Creative dilengkapi bukti faktur pajak resmi perseroan dan lisensi komersial penyerahan hak cipta karya.
              </p>
            </div>

            <div className="p-4.5 sm:p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h2 className="text-sm sm:text-base font-bold text-white mb-2.5 uppercase">Kerja Sama & Kerahasiaan Materi (NDA)</h2>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Untuk proyek iklan komersial launching produk yang belum rilis atau materi rapat internal perusahaan, kami siap menandatangani dokumen kerahasiaan materi *Non-Disclosure Agreement (NDA)* yang sah secara hukum.
              </p>
            </div>

            <div className="p-4.5 sm:p-5 rounded-xl bg-slate-900 border border-amber-500/30">
              <h2 className="text-sm sm:text-base font-bold text-amber-400 mb-3 uppercase">Kebijakan DP, Pembatalan Proyek & Lisensi Raw Footage</h2>
              <div className="space-y-3 text-[11px] leading-relaxed text-slate-300">
                <div className="p-3 rounded-lg bg-[#070b12] border border-slate-800">
                  <strong className="text-white block text-sm mb-1 uppercase font-mono">1. Kebijakan DP 50% &amp; Pembatalan Sepihak (SPK Hitam di Atas Putih)</strong>
                  <p className="text-slate-400">
                    Setiap penugasan wajib diawali pembayaran Down Payment (DP) sebesar 50% di H-3 sebelum jadwal produksi serta penandatanganan SPK/Surat Perjanjian Kerja. Apabila selama kurun H-3 setelah DP klien membatalkan proyek secara sepihak, maka <strong className="text-amber-400">DP 50% HANGUS 100%</strong> tanpa ada pengembalian parsial.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                  <strong className="text-white block text-sm mb-1 uppercase font-mono">2. Penyerahan File Mentahan (Raw Footage)</strong>
                  <p className="text-slate-400">
                    File mentahan video/foto (raw footage) diberikan secara <strong className="text-emerald-400">GRATIS via Google Drive</strong> hanya apabila seluruh pembayaran proyek telah <strong className="text-white">LUNAS 100% (Clear 100%)</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070b12] border border-slate-800">
                  <strong className="text-white block text-sm mb-1 uppercase font-mono">3. Batasan Revisi Karya</strong>
                  <p className="text-slate-400">
                    Setiap paket karya mencakup jatah revisi minor gratis sebanyak <strong className="text-amber-400">maksimal 2x revisi</strong> sesuai dengan brief naskah awal.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
