"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const KupangTag = () => (
  <span style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    background: "rgba(245, 158, 11, 0.12)",
    border: "1px solid rgba(245, 158, 11, 0.4)",
    color: "#f59e0b",
    fontSize: "0.62rem",
    fontWeight: 800,
    padding: "2px 8px",
    borderRadius: "6px",
    letterSpacing: "0.4px",
    fontFamily: "monospace",
    whiteSpace: "nowrap",
  }}>
    📍 Kupang &amp; Sekitarnya
  </span>
);

const cmoWaNumber = "6282347058055";

const getServiceWaLink = (serviceName: string, categoryName: string) => {
  const text = `Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud mengajukan konsultasi & penawaran khusus untuk layanan *${serviceName}* (Kategori: ${categoryName}).\n\nBoleh dibantu alur brief, estimasi biaya, dan jadwal pengerjaannya? Terima kasih.`;
  return `https://wa.me/${cmoWaNumber}?text=${encodeURIComponent(text)}`;
};

const serviceCategories = [
  {
    category: "BUSINESS CONTENT",
    onLocation: true,
    title: "Produksi Video Promosi & Komersial",
    desc: "Pembuatan konten video kreatif skala usaha untuk meningkatkan konversi penjualan dan reputasi brand.",
    items: [
      { name: "Video Promosi UMKM", detail: "Video singkat kreatif untuk menaikkan penjualan usaha kecil menengah." },
      { name: "Video Cafe & Restoran", detail: "Sinematografi kuliner yang menggugah selera untuk menarik pengunjung." },
      { name: "Video Hotel & Resort", detail: "Tur visual fasilitas hotel dan penginapan berstandar internasional." },
      { name: "Video Properti & Perumahan", detail: "Drone footage dan interior tour lokasi perumahan & unit apartemen." },
      { name: "Video Company Profile", detail: "Video profil perusahaan berdurasi 3-5 menit untuk kebutuhan pitching & investor." },
      { name: "Video Iklan & Commercial", detail: "Iklan komersial profesional untuk kampanye media digital & TV." },
      { name: "TikTok / Reels / Shorts", detail: "Video vertikal tren terkini yang ramah algoritma TikTok, Reels, & Shorts." },
      { name: "Drone Aerial Footage", detail: "Pengambilan gambar udara berkualitas 4K untuk perspektif sinematik." }
    ]
  },
  {
    category: "EVENT DOCUMENTATION",
    onLocation: true,
    title: "Dokumentasi Acara & Momen Kritis",
    desc: "Liputan foto dan video profesional untuk mengabadikan setiap momen penting secara estetis.",
    items: [
      { name: "Wedding & Prewedding", detail: "Highlight video sinematik dan foto dokumentasi hari bahagia Anda." },
      { name: "Wisuda & Kelulusan", detail: "Sesi foto personal & keluarga memperingati momen kelulusan." },
      { name: "Seminar & Workshop", detail: "Dokumentasi lengkap acara edukasi, konferensi, dan pelatihan." },
      { name: "Launching Produk & Opening", detail: "Liputan acara peluncuran produk baru dan peresmian toko." },
      { name: "Konser & Gathering", detail: "Dokumentasi panggung hiburan, konser musik, dan gathering perusahaan." }
    ]
  },
  {
    category: "COMMERCIAL PHOTOGRAPHY",
    onLocation: true,
    title: "Fotografi Studio & On-Location",
    desc: "Sesi pemotretan berkualitas tinggi dengan lighting studio profesional dan retouching mendalam.",
    items: [
      { name: "Foto Produk Studio", detail: "Pemotretan produk berlatar bersih untuk katalog e-commerce & marketplace." },
      { name: "Foto Menu Makanan", detail: "Food photography profesional untuk daftar menu cetak & aplikasi ojek online." },
      { name: "Foto Interior & Eksterior", detail: "Fotografi arsitektur bangunan, cafe, kantor, dan fasilitas properti." },
      { name: "Foto Company & Direksi", detail: "Sesi foto profil jajaran manajemen untuk laporan tahunan & website." },
      { name: "Foto Personal Branding", detail: "Portret profesional untuk eksekutif, influencer, & founder bisnis." }
    ]
  },
  {
    category: "BRANDING & DESIGN",
    title: "Identitas Visual & Desain Grafis",
    desc: "Perancangan identitas brand yang konsisten, modern, dan mudah diingat oleh audiens target Anda.",
    items: [
      { name: "Desain Logo Vektor", detail: "Perancangan logo unik yang serbaguna di berbagai media aplikasi." },
      { name: "Brand Identity Guidelines", detail: "Buku panduan warna, tipografi, elemen grafis, dan aturan penggunaan brand." },
      { name: "Desain Banner & Poster", detail: "Materi promosi cetak dan digital untuk event, pameran, & baliho." },
      { name: "Desain Menu & Packaging", detail: "Perancangan tata letak menu restoran dan desain kemasan produk menarik." }
    ]
  },
  {
    category: "SOCIAL MEDIA MANAGEMENT",
    title: "Manajemen & Strategi Konten",
    desc: "Pengelolaan berkala akun media sosial bisnis untuk membangun audiens loyal dan menaikkan keterlibatan.",
    items: [
      { name: "Content Planning & Strategy", detail: "Penyusunan pilar konten dan analisis audiens yang relevan bagi bisnis." },
      { name: "Content Calendar Regular", detail: "Penjadwalan posting rutin mingguan agar akun media sosial tetap aktif." },
      { name: "Copywriting Caption", detail: "Penulisan teks caption persuasif yang mendorong konversi dan diskusi." },
      { name: "Short Video Editing", detail: "Editing video Reels & TikTok berkala dengan musik tren dan subtitle menarik." }
    ]
  }
];

export default function LayananPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl lg:max-w-2xl mx-auto mb-8 lg:mb-10">
            <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-1.5">// CREATIVE_SERVICES</span>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight uppercase">Katalog Layanan Kreatif</h1>
            <p className="text-slate-400 text-[11px] sm:text-xs lg:text-sm mt-1.5 max-w-md lg:max-w-lg mx-auto">
              Setiap tombol konsultasi terhubung langsung ke WhatsApp CMO Shatrya Dhimar (+62 823-4705-8055) dengan pesan otomatis yang disesuaikan secara spesifik.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="p-4 sm:p-5 lg:p-6 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-amber-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                    [{String(idx + 1).padStart(2, "0")}] {cat.category}
                  </span>
                  {cat.onLocation && <KupangTag />}
                </div>
                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-white uppercase mb-1.5">{cat.title}</h2>
                <p className="text-slate-400 text-[11px] sm:text-xs lg:text-sm mb-4 leading-relaxed">{cat.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="p-3 sm:p-3.5 rounded-lg bg-[#070b12] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                      <div>
                        <strong className="text-white font-bold text-xs block mb-1 font-sans">{item.name}</strong>
                        <p className="text-slate-400 text-[11px] leading-relaxed mb-3">{item.detail}</p>
                      </div>
                      <a
                        href={getServiceWaLink(item.name, cat.category)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-center py-1.5 px-2.5 rounded-md bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 text-amber-400 hover:text-white font-mono text-[11px] font-bold transition-all truncate w-full"
                      >
                        Konsultasi WA &rarr;
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
