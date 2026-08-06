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

  const cmoNumber = "6282347058055";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin mengajukan Request Proposal (RFP) / Konsultasi Pengerjaan Konten Kreatif:\n\n👤 Nama: ${formData.nama}\n🏢 Perusahaan/Instansi: ${formData.perusahaan}\n📌 Kategori Layanan: ${formData.layanan}\n💰 Perkiraan Anggaran: ${formData.anggaran}\n📝 Catatan Brief: ${formData.pesan}\n\nMohon dibantu koordinasi awalnya. Terima kasih.`
    );
    window.open(`https://wa.me/${cmoNumber}?text=${text}`, "_blank");
  };

  const quickActions = [
    {
      title: "Request Proposal Resmi Usaha",
      desc: "Pengajuan RFP & penawaran resmi untuk perusahaan atau instansi.",
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya mau mengajukan Request Proposal (RFP) resmi untuk proyek pembuatan media / video perusahaan kami.\n\nBoleh dibantu jadwal meeting brief & dokumen penawarannya? Terima kasih."
    },
    {
      title: "Booking Dokumentasi Event & Wedding",
      desc: "Pengecekan ketersediaan tanggal tim videografer untuk acara pernikahan atau event.",
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud mengecek ketersediaan tanggal & booking tim dokumentasi acara kami (Wedding / Event Corporate).\n\nBoleh dibantu koordinasi tanggal & paketnya? Terima kasih."
    },
    {
      title: "Konsultasi Foto Studio & Branding",
      desc: "Diskusi pemotretan produk katalog studio atau perancangan identitas brand baru.",
      waMessage: "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud berkonsultasi mengenai sesi Foto Produk Studio & perancangan Brand Identity untuk bisnis saya.\n\nBoleh dibantu form brief & jadwal penyerahan sampel produknya? Terima kasih."
    }
  ];

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl lg:max-w-2xl mx-auto mb-8 lg:mb-10">
            <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-1.5">// REQUEST_PROPOSAL</span>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight uppercase">Hubungi Tim Creative</h1>
            <p className="text-slate-400 text-[11px] sm:text-xs lg:text-sm mt-1.5">
              Setiap opsi tombol di halaman ini terhubung langsung ke WhatsApp CMO Shatrya Dhimar (+62 823-4705-8055) dengan format pesan otomatis yang disesuaikan secara spesifik.
            </p>
          </div>

          {/* QUICK ACTION BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-8 lg:mb-10">
            {quickActions.map((act, idx) => (
              <div key={idx} className="p-6 lg:p-7 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition-all">
                <div>
                  <span className="text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider block mb-2">
                    [ QUICK_ACTION 0{idx + 1} ]
                  </span>
                  <h3 className="text-base lg:text-lg font-bold text-white uppercase mb-2">{act.title}</h3>
                  <p className="text-slate-400 text-xs lg:text-sm leading-relaxed mb-6">{act.desc}</p>
                </div>

                <a
                  href={`https://wa.me/${cmoNumber}?text=${encodeURIComponent(act.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20"
                >
                  💬 Chat WA {act.title.split(" ")[0]} &rarr;
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* FORM */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              <div className="mb-6">
                <span className="text-amber-400 font-mono text-xs font-bold block mb-1">[ FORM BRIEF ONLINE ]</span>
                <h2 className="text-xl font-bold text-white uppercase">Isi Detail Kebutuhan Konten</h2>
              </div>

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
                    <option value="Business Video Promosi">Business Video Promosi &amp; Company Profile</option>
                    <option value="Event Documentation">Event Documentation (Wedding / Wisuda / Seminar)</option>
                    <option value="Commercial Photography">Commercial Photography (Foto Produk / Menu)</option>
                    <option value="Logo & Brand Identity">Logo &amp; Brand Identity Guidelines</option>
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
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Catatan Brief &amp; Lokasi Shooting *</label>
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
                  🚀 Kirim Form Brief Ke WA CMO (+62 823-4705-8055) &rarr;
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
                  Mengoordinasikan penawaran harga proposal, strategi kampanye visual, &amp; dokumen lisensi karya.
                </p>
                <a
                  href={`https://wa.me/${cmoNumber}?text=${encodeURIComponent(
                    "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin mengajukan pertanyaan langsung mengenai layanan media & video produksi Sivilize Creative.\n\nBoleh dibantu konsultasinya? Terima kasih."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs transition-all"
                >
                  💬 WA Direct CMO (+62 823-4705-8055) &rarr;
                </a>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4 font-mono">
                PT SIVILIZE CORP INDONESIA<br />
                NIB: 2510240092537 | KBLI: 62199 &amp; 62019
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
