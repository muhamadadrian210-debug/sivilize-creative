"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HargaPage() {
  const cmoWaNumber = "6282347058055";

  const getWaLink = (packageName: string, price: string) => {
    const text = `Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya mau diskusi & order mengenai ${packageName} (${price}).\n\nBoleh dibantu jadwal brief & alur kerjanya? Terima kasih.`;
    return `https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(text)}`;
  };

  const videoProductionItems = [
    { name: "Wedding Documentation", price: "Mulai Rp 3.500.000", desc: "Highlight sinematik & liputan penuh momen pernikahan sakral." },
    { name: "Engagement Event", price: "Mulai Rp 2.500.000", desc: "Dokumentasi momen lamaran & pertunangan sinematik." },
    { name: "Prewedding Film", price: "Mulai Rp 2.500.000", desc: "Konsep cerita pasangan dalam bentuk film pendek & teaser." },
    { name: "Company Profile Video", price: "Mulai Rp 3.000.000", desc: "Profil naratif perusahaan berdurasi 3-5 menit untuk investor & website." },
    { name: "Corporate & Special Event", price: "Mulai Rp 2.000.000", desc: "Liputan acara perusahaan, gala dinner, & gathering." },
    { name: "Seminar & Workshop", price: "Mulai Rp 2.000.000", desc: "Liputan konferensi, edukasi, & sesi pembicara profesional." },
    { name: "Grand Opening Store", price: "Mulai Rp 2.000.000", desc: "Video peluncuran outlet, restoran, atau kantor baru." },
    { name: "Commercial Product Video", price: "Mulai Rp 1.500.000", desc: "Video iklan produk dengan pencahayaan studio komersial." },
    { name: "Drone Aerial Footage (Add-On)", price: "Mulai Rp 750.000", desc: "Pengambilan gambar udara 4K untuk perspektif arsitektur & lokasi." },
  ];

  const photoItems = [
    { name: "Foto Produk Studio", price: "Mulai Rp 750.000", desc: "Sesi foto katalog produk studio dengan penataan lighting pro." },
    { name: "Foto Event & Gathering", price: "Mulai Rp 1.500.000", desc: "Dokumentasi foto momen acara penting & ekspresi tamu." },
    { name: "Foto Wedding Documentation", price: "Mulai Rp 2.500.000", desc: "Album foto fisik & digital momen pernikahan utuh." },
    { name: "Foto Corporate & Direksi", price: "Mulai Rp 2.000.000", desc: "Potret eksekutif, profil jajaran manajemen, & fasilitas kantor." },
  ];

  const designItems = [
    { name: "Desain Logo Vektor", price: "Mulai Rp 500.000", desc: "3 Opsi konsep logo orisinal master file AI, EPS, PNG beresolusi tinggi." },
    { name: "Desain Poster & Flyer", price: "Mulai Rp 150.000", desc: "Materi iklan promo cetak & digital berestetika tinggi." },
    { name: "Desain Feed Instagram", price: "Mulai Rp 150.000", desc: "Desain mikro-konten feeds Instagram yang menarik perhatian." },
    { name: "Desain Banner & Baliho", price: "Mulai Rp 200.000", desc: "Tata letak materi cetak baliho/banner ukuran besar." },
    { name: "Brand Identity Guidelines", price: "Mulai Rp 2.000.000", desc: "Buku panduan visual identitas brand (Logo, Palette, Tipografi)." },
  ];

  const valuePoints = [
    { title: "Waktu & Dedikasi Tim", desc: "Fokus penuh tim profesional dari pra-produksi hingga paska-produksi." },
    { title: "Ide & Konsep Orisinal", desc: "Riset tren & penyusunan skrip narasi yang relevan dengan audiens target." },
    { title: "Produksi Standar Industri", desc: "Penggunaan kamera cinema 4K, lighting studio, & peralatan audio profesional." },
    { title: "Editing & Sound Design", desc: "Color grading sinematik, efek transisi halus, & lisensi musik komersial." },
    { title: "Quality Control Ketat", desc: "Setiap output melewati pemeriksaan standar estetika sebelum diserahkan." },
    { title: "Jaminan Revisi & Siap Rilis", desc: "Bebas dari masalah teknis dan langsung siap diunggah ke semua platform." },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-3">
              // TRANSPARENT_VALUE_PRICING
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
              Paket &amp; Investasi Konten
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Kami tidak sekadar menjual durasi video atau platform. Kami menghadirkan <strong className="text-white font-bold">produksi konten bernilai tinggi</strong>—satu karya video berkualitas dapat Anda publikasikan secara bebas di Instagram Reels, TikTok, Facebook Video, hingga YouTube Shorts.
            </p>
          </div>

          {/* SECTION 1: CONTENT CREATION (CARD SINGLE CONTENT) */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 to-[#0f172a] border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold rounded-lg mb-3">
                    ENTRY LEVEL CONTENT CREATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                    Produksi Konten Satuan
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Solusi fleksibel untuk kebutuhan konten promosi produk atau pengujian respon pasar.
                  </p>
                </div>
                
                <div className="bg-[#070b12] p-6 rounded-2xl border border-slate-800 text-center md:text-right min-w-[240px]">
                  <span className="text-slate-500 text-xs uppercase tracking-wider block font-mono">Mulai Dari</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono my-1">
                    Rp 300.000
                  </div>
                  <span className="text-slate-400 text-xs font-mono block">/ Konten Video</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6">
                  Fitur &amp; Output Yang Anda Dapatkan:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Ide Konten Orisinal",
                    "Briefing & Alur Eksekusi",
                    "Copywriting Naskah / Caption",
                    "Shooting Produk (Jika Termasuk)",
                    "Editing Video Profesional",
                    "Subtitle Dinamis & Captions",
                    "Color Correction Sinematik",
                    "Export Kualitas Tinggi 4K/HD",
                    "Siap Upload (Instagram, TikTok, FB & Shorts)"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">
                        ✓
                      </span>
                      <span className="text-xs text-slate-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
                  <p className="text-slate-500 text-xs font-mono italic">
                    Catatan: Harga dapat berubah sesuai tingkat kesulitan dan kebutuhan produksi.
                  </p>
                  
                  <a
                    href={getWaLink("Produksi Konten Satuan", "Rp 300.000 / Konten")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg shadow-amber-500/20"
                  >
                    Pesan Konten Satuan &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: PAKET BULANAN (3 CARDS) */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">
                // MONTHLY_RETAINER_PACKAGES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Paket Manajemen Konten Bulanan
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Konsistensi adalah kunci utama pertumbuhan media sosial. Pilih paket retainer bulanan sesuai skala bisnis Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* CARD 1: BASIC */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div>
                  <span className="text-slate-400 font-mono text-xs uppercase tracking-wider block mb-2">
                    UMKM &amp; STARTER
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Basic</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Cocok untuk UMKM yang ingin menjaga keberadaan akun media sosial tetap aktif.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#070b12] border border-slate-800 mb-8">
                    <span className="text-3xl font-black text-white font-mono block">Rp 2.000.000</span>
                    <span className="text-slate-500 text-xs font-mono">/ Bulan</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                      Benefit Paket:
                    </span>
                    {[
                      "8 Konten Video Siap Upload",
                      "Kalender Konten Sederhana",
                      "Editing Video Profesional",
                      "Subtitle & Captions Dinamis",
                      "Export File Kualitas HD"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWaLink("Paket Bulanan Basic", "Rp 2.000.000 / Bulan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700"
                >
                  Pilih Paket Basic
                </a>
              </div>

              {/* CARD 2: GROWTH (FEATURED) */}
              <div className="bg-gradient-to-b from-slate-900 via-[#0f172a] to-slate-900 border-2 border-amber-500/80 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative hover:border-amber-400 transition-all transform md:-translate-y-2">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white font-mono text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                  MOST POPULAR
                </div>

                <div>
                  <span className="text-amber-400 font-mono text-xs uppercase tracking-wider block mb-2">
                    ACTIVE SOCIAL BUSINESS
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Growth</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Untuk bisnis yang ingin aktif membangun reputasi &amp; jangkauan penjualan.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#070b12] border border-amber-500/30 mb-8">
                    <span className="text-3xl font-black text-amber-400 font-mono block">Rp 3.500.000</span>
                    <span className="text-slate-500 text-xs font-mono">/ Bulan</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                      Benefit Paket:
                    </span>
                    {[
                      "15 Konten Video Siap Upload",
                      "Content Planning & Strategi",
                      "Copywriting Naskah Persuasif",
                      "Editing Premium & Sound FX",
                      "Subtitle Dinamis & Grafis",
                      "Custom Thumbnail Keren"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-200 font-medium">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWaLink("Paket Bulanan Growth", "Rp 3.500.000 / Bulan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                >
                  Pilih Paket Growth &rarr;
                </a>
              </div>

              {/* CARD 3: BUSINESS */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div>
                  <span className="text-slate-400 font-mono text-xs uppercase tracking-wider block mb-2">
                    CORPORATE &amp; SCALE
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Business</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Untuk perusahaan skala menengah-besar yang membutuhkan dominasi konten digital.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#070b12] border border-slate-800 mb-8">
                    <span className="text-3xl font-black text-white font-mono block">Rp 5.500.000</span>
                    <span className="text-slate-500 text-xs font-mono">/ Bulan</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                      Benefit Paket:
                    </span>
                    {[
                      "25 Konten Video Siap Upload",
                      "Comprehensive Content Planning",
                      "Branding Consultation",
                      "Professional Copywriting",
                      "Premium Editing & Color Grading",
                      "Priority Support & Tim Khusus"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWaLink("Paket Bulanan Business", "Rp 5.500.000 / Bulan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700"
                >
                  Pilih Paket Business
                </a>
              </div>

            </div>
          </div>

          {/* SECTION 3: VIDEO PRODUCTION GRID */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-1">
                  // VIDEO_PRODUCTION_SERVICES
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Layanan Video Production &amp; Event
                </h2>
              </div>
              <p className="text-slate-500 text-xs font-mono">
                📍 Melayani lokasi Kota Kupang &amp; sekitarnya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {videoProductionItems.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white uppercase mb-1">{item.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                    <span className="text-amber-400 font-mono text-xs font-bold">{item.price}</span>
                    <a
                      href={getWaLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-300 hover:text-amber-400 font-bold uppercase tracking-wider transition-colors"
                    >
                      Pesan &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-xs font-mono text-center">
              Catatan: Harga dapat berubah sesuai lokasi, durasi shooting, jumlah kru, serta kebutuhan alat produksi khusus.
            </div>
          </div>

          {/* SECTION 4 & 5: PHOTO & DESIGN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
            
            {/* PHOTO SECTION */}
            <div>
              <div className="mb-6">
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-1">
                  // COMMERCIAL_PHOTOGRAPHY
                </span>
                <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">
                  Commercial Photography
                </h2>
              </div>

              <div className="space-y-4">
                {photoItems.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase">{item.name}</h3>
                      <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <span className="text-amber-400 font-mono text-xs font-bold block mb-1">{item.price}</span>
                      <a
                        href={getWaLink(item.name, item.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-300 font-bold uppercase transition-all inline-block"
                      >
                        Pesan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESIGN SECTION */}
            <div>
              <div className="mb-6">
                <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-1">
                  // BRANDING_&_DESIGN
                </span>
                <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">
                  Branding &amp; Graphic Design
                </h2>
              </div>

              <div className="space-y-4">
                {designItems.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase">{item.name}</h3>
                      <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <span className="text-amber-400 font-mono text-xs font-bold block mb-1">{item.price}</span>
                      <a
                        href={getWaLink(item.name, item.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-300 font-bold uppercase transition-all inline-block"
                      >
                        Pesan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* SECTION 6: KENAPA HARGA KAMI SEPERTI INI? */}
          <div className="mb-24 bg-gradient-to-b from-[#0f172a] to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">
                // TRANSPARENCY_&_VALUE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Kenapa Investasi Konten Kami Seperti Ini?
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Di Sivilize Creative, Anda tidak hanya membayar proses teknis mengedit video. Anda berinvestasi pada <strong className="text-white font-bold">proses kreatif profesional berstandar korporat</strong> yang menjamin reputasi brand Anda terlihat kredibel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuePoints.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 7: CTA SECTION */}
          <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                Siap Meningkatkan Kualitas Konten Bisnis Anda?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                Diskusikan kebutuhan konten Anda bersama tim Sivilize Creative. Kami membantu mulai dari konsep, produksi, hingga hasil akhir yang siap dipublikasikan.
              </p>
              
              <a
                href={`https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(
                  "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin berkonsultasi mengenai rencana pembuatan konten & produksi media untuk bisnis kami.\n\nBoleh dibantu koordinasi awalnya? Terima kasih."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20"
              >
                Hubungi Tim Creative Direct CMO &rarr;
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
