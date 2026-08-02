"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const faq20 = [
  { q: "Apa itu Sivilize Creative?", a: "Sivilize Creative adalah divisi Creative Agency resmi di bawah PT SIVILIZE CORP INDONESIA yang berfokus pada produksi video bisnis, dokumentasi event, fotografi commercial, desain logo/branding, dan pengelolaan media sosial." },
  { q: "Apakah Sivilize Creative bagian resmi dari PT Sivilize Corp Indonesia?", a: "Ya, Sivilize Creative beroperasi secara sah di bawah badan hukum PT SIVILIZE CORP INDONESIA (NIB: 0207260103661, KBLI: 73100 & 62199)." },
  { q: "Apa perbedaan Sivilize Creative, Sivilize Software, dan SiWeb Production?", a: "Sivilize Software membangun sistem software enterprise/ERP/SIMRS. SiWeb Production membuat landing page & website UMKM. Sivilize Creative khusus membangun citra visual bisnis melalui video, foto, & desain branding." },
  { q: "Mengapa bisnis harus berinvestasi pada citra visual dan video profesional?", a: "Konten visual dan video profesional meningkatkan tingkat kepercayaan calon klien hingga 80%, memperjelas nilai jual produk, dan membedakan bisnis Anda dari pesaing." },
  { q: "Berapa lama proses pembuatan Video Company Profile?", a: "Proses pembuatan Video Company Profile (mulai dari pra-produksi, shooting, hingga editing & color grading) umumnya memakan waktu 5-10 hari kerja." },
  { q: "Apakah Sivilize Creative melayani pengerjaan di luar kota?", a: "Ya. Tim produksi kami siap melakukan perjalanan pengembilan gambar (shooting) ke seluruh kota di Indonesia sesuai koordinasi proyek." },
  { q: "Berapa kali jatah revisi yang didapatkan klien?", a: "Setiap paket produksi mendapatkan jatah revisi minor gratis sebanyak 2 hingga 3 kali untuk memastikan hasil akhir sesuai dengan brief awal." },
  { q: "Apakah file mentah (raw footage / raw photo) diberikan kepada klien?", a: "File mentah dapat diberikan atas permintaan khusus sesuai dengan perjanjian lisensi penyerahan karya dalam kontrak kerja sama." },
  { q: "Bagaimana alur pembayaran dan komitmen pengerjaan?", a: "Pengerjaan diawali dengan pembayaran Down Payment (DP) sebesar 50% saat penandatanganan kontrak/brief, dan pelunasan 50% setelah hasil akhir disetujui." },
  { q: "Apakah Sivilize Creative melayani dokumentasi event pernikahan (Wedding)?", a: "Ya. Kami melayani liputan foto dan video highlight sinematik untuk acara Wedding, Engagement, Prewedding, serta acara keluarga." },
  { q: "Apakah Sivilize Creative melayani pembuatan konten rutin TikTok & Reels?", a: "Ya. Kami menyediakan paket retainer bulanan untuk pembuatan video pendek (Short Video) khusus platform TikTok, Instagram Reels, & YouTube Shorts." },
  { q: "Bagaimana alur pembuatan Logo & Brand Identity?", a: "Proses dimulai dari riset kompetitor & filosofi brand, pembuatan 3 opsi visual logo vektor, hingga penyusunan buku panduan Brand Identity Guidelines." },
  { q: "Apakah ada garansi kualitas hasil foto dan video?", a: "Ya. Kami menjamin hasil akhir foto dan video diproduksi menggunakan kamera sinema 4K, lighting studio profesional, & color grading editorial berstandar tinggi." },
  { q: "Berapa tarif pengambilan video menggunakan Drone?", a: "Layanan pengambilan gambar udara (Drone Aerial Footage) dimulai dari Rp 500.000 per sesi tergantung pada lokasi dan durasi penerbangan." },
  { q: "Apakah Sivilize Creative menyediakan model atau talent video?", a: "Ya. Kami dapat menyediakan talent/model komersial, voice over artist, dan MUA profesional sesuai dengan kebutuhan konsep video Anda." },
  { q: "Bagaimana cara mengajukan custom proposal untuk event besar?", a: "Anda dapat mengisi Form Request Proposal di halaman Kontak atau menghubungi langsung COO Briand Jivencha Therik via WhatsApp di +62 851-3774-3321." },
  { q: "Apakah ada paket bundling jika membutuhkan website sekaligus video promosi?", a: "Ada. Karena kami terintegrasi dengan ekosistem PT Sivilize Corp Indonesia, kami menyediakan paket bundling khusus pembuatan website + video promosi komersial." },
  { q: "Siapa penanggung jawab operasional di Sivilize Creative?", a: "Chief Operating Officer (COO) Briand Jivencha Therik memimpin langsung pengawasan produksi kreatif dan penawaran proposal resmi." },
  { q: "Apakah dokumen NDA kerahasiaan materi dapat ditandatangani?", a: "Ya. Untuk produk yang belum rilis atau materi internal corporate, kami siap menandatangani dokumen Non-Disclosure Agreement (NDA) yang sah secara hukum." },
  { q: "Bagaimana cara memesan layanan Sivilize Creative?", a: "Klik tombol WhatsApp di website ini untuk berkonsultasi langsung dengan tim eksekutif kami dan mendiskusikan jadwal produksi." },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// KNOWLEDGE_BASE_FAQ</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">20+ Pertanyaan Sering Diajukan</h1>
            <p className="text-slate-400 text-sm mt-4">
              Jawaban resmi mengenai layanan, alur pengerjaan, lisensi karya, dan legalitas Sivilize Creative.
            </p>
          </div>

          <div className="space-y-4">
            {faq20.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full text-left font-bold text-white text-sm sm:text-base uppercase flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span>[{String(idx + 1).padStart(2, "0")}] {item.q}</span>
                  <span className="text-amber-400 font-mono text-lg">{openIdx === idx ? "−" : "+"}</span>
                </button>
                {openIdx === idx && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
