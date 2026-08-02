"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    layanan: "Business Video Promosi",
    anggaran: "Rp 1.500.000 - Rp 5.000.000",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin mengajukan Request Proposal (RFP) / Konsultasi Pengerjaan Konten Kreatif:\n\n👤 Nama: ${formData.nama}\n🏢 Perusahaan/Instansi: ${formData.perusahaan}\n📌 Kategori Layanan: ${formData.layanan}\n💰 Perkiraan Anggaran: ${formData.anggaran}\n📝 Catatan Brief: ${formData.pesan}\n\nMohon dibantu koordinasi awalnya. Terima kasih.`
    );
    window.open(`https://wa.me/6282347058055?text=${text}`, "_blank");
  };

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// REQUEST_PROPOSAL</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Minta Penawaran Proposal</h1>
            <p className="text-slate-400 text-sm mt-4">
              Isi form berikut untuk mendiskusikan rencana produksi video, fotografi studio, atau desain branding langsung bersama tim CMO kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* FORM */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Nama Lengkap / Jabatan *</label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    placeholder="Contoh: Adrian (Owner / Brand Manager)"
                    className="w-full px-4 py-3 rounded-xl bg-[#070b12] border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Nama Perusahaan / Bisnis *</label>
                  <input
                    type="text"
                    required
                    value={formData.perusahaan}
                    onChange={(e) => setFormData({ ...formData, perusahaan: e.target.value })}
                    placeholder="Contoh: PT Kuliner Nusantara / Cafe Horizon"
                    className="w-full px-4 py-3 rounded-xl bg-[#070b12] border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Kategori Layanan Utama *</label>
                  <select
                    value={formData.layanan}
                    onChange={(e) => setFormData({ ...formData, layanan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070b12] border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  >
                    <option value="Business Video Promosi">Business Video Promosi & Company Profile</option>
                    <option value="Event Documentation">Event Documentation (Wedding / Wisuda / Seminar)</option>
                    <option value="Commercial Photography">Commercial Photography (Foto Produk / Menu)</option>
                    <option value="Logo & Brand Identity">Logo & Brand Identity Guidelines</option>
                    <option value="Social Media Retainer">Social Media Retainer (TikTok / Reels)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Perkiraan Anggaran *</label>
                  <select
                    value={formData.anggaran}
                    onChange={(e) => setFormData({ ...formData, anggaran: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070b12] border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  >
                    <option value="< Rp 1.500.000">Kurang dari Rp 1.500.000</option>
                    <option value="Rp 1.500.000 - Rp 5.000.000">Rp 1.500.000 - Rp 5.000.000</option>
                    <option value="Rp 5.000.000 - Rp 15.000.000">Rp 5.000.000 - Rp 15.000.000</option>
                    <option value="> Rp 15.000.000">Lebih dari Rp 15.000.000 (Custom Enterprise Event)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Catatan Brief & Lokasi Shooting *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    placeholder="Jelaskan secara singkat konsep visual yang Anda inginkan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070b12] border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/30"
                >
                  🚀 Kirim Request Proposal Ke WA CMO &rarr;
                </button>
              </form>
            </div>

            {/* INFO DIRECT */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <span className="text-amber-400 font-mono text-xs font-bold block mb-1">[ DIRECT EXECUTIVE MARKETING ]</span>
              <h3 className="text-xl font-bold text-white uppercase">Penanggung Jawab Pemasaran</h3>
              
              <div className="p-5 rounded-xl bg-[#070b12] border border-amber-500/40">
                <strong className="text-white font-bold text-base block">Shatrya Dhimar</strong>
                <span className="text-amber-400 font-bold text-xs block mb-3">Chief Marketing Officer (CMO) — Sivilize Creative</span>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Mengoordinasikan penawaran harga proposal, strategi kampanye visual, & dokumen lisensi karya.
                </p>
                <a
                  href="https://wa.me/6282347058055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs transition-all"
                >
                  💬 WA Direct: +62 823-4705-8055 &rarr;
                </a>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4 font-mono">
                PT SIVILIZE CORP INDONESIA<br />
                NIB: 0207260103661 | KBLI: 73100 & 62199
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
