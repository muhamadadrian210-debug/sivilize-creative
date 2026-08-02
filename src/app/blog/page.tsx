"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const articles30 = [
  { title: "Panduan Membangun Brand Identity Yang Kuat Untuk UMKM", category: "BRANDING", desc: "Langkah penyusunan identitas visual agar produk UMKM tampil lebih kredibel." },
  { title: "Pentingnya Video Company Profile Dalam Meningkatkan Kepercayaan Klien", category: "BUSINESS VIDEO", desc: "Manfaat video profil 3-5 menit untuk presentasi investor dan pitching." },
  { title: "7 Tips Fotografi Produk Makanan Agar Terlihat Lezat Dan Menarik", category: "FOOD PHOTO", desc: "Trik pencahayaan studio dan penataan sudut pengambilan foto kuliner." },
  { title: "Cara Menyusun Content Calendar Instagram Reels & TikTok Untuk Bisnis", category: "SOCIAL MEDIA", desc: "Strategi rilis konten berkala untuk menjaga grafik engagement audiens." },
  { title: "Perbedaan Logo Vektor vs Raster Dan Mengapa Logo Harus Versatile", category: "DESIGN", desc: "Pentingnya file logo format AI/EPS untuk cetak media besar." },
  { title: "Panduan Dokumentasi Event Corporate: Dari Teaser Hingga Aftermovie", category: "EVENT COVERAGE", desc: "Tahapan produksi liputan acara seminar, launching produk, & konser." },
  { title: "Cara Memilih Konsep Video Iklan Yang Konversi Penjualannya Tinggi", category: "COMMERCIAL AD", desc: "Penyusunan naskah iklik persuasif yang mendorong keputusan beli." },
  { title: "Tips Fotografi Interior Untuk Cafe, Restoran, Dan Hotel", category: "INTERIOR PHOTO", desc: "Pengambilan sudut arsitektur dan suasana ruangan untuk promosi penginapan." },
  { title: "Mengapa Social Media Design Harus Konsisten Dengan Warna Brand", category: "BRAND IDENTITY", desc: "Membangun ingatan kolektif konsumen melalui konsistensi palette warna." },
  { title: "Strategi Video Promosi Properti Untuk Mempercepat Penjualan Rumah", category: "REAL ESTATE", desc: "Kombinasi drone footage dan tur walkthrough ruangan perumahan." },
  { title: "Cara Menyusun Brief Fotografi Produk Sebelum Sesi Pemotretan", category: "STUDIO PROTOCOL", desc: "Persiapan props, moodboard visual, dan daftar varian produk." },
  { title: "5 Elemen Wajib Dalam Desain Menu Restoran Yang Meningkatkan Omset", category: "MENU DESIGN", desc: "Psikologi tata letak menu makanan untuk menaikkan average order value." },
  { title: "Pentingnya Video Wisuda Dan Momen Dokumentasi Kelulusan", category: "EVENT DOCS", desc: "Mengabadikan kenangan momen berharga kelulusan secara sinematik." },
  { title: "Cara Memanfaatkan Drone Footage Untuk Video Promosi Pariwisata", category: "AERIAL FOOTAGE", desc: "Pengambilan lanskap alam dan pemandangan luas untuk destinasi wisata." },
  { title: "Strategi Personal Branding Fotografi Untuk Eksekutif & Founder", category: "PERSONAL BRANDING", desc: "Portret profesional direksi untuk kebutuhan pers, media, & LinkedIn." },
  { title: "Panduan Memilih Typeface Dan Palette Warna Untuk Brand Baru", category: "TYPOGRAPHY", desc: "Memilih kombinasi font sans-serif dan serif yang sesuai kepribadian bisnis." },
  { title: "Cara Membuat Video TikTok Viral Tanpa Menghilangkan Kesan Profesional", category: "SHORT VIDEO", desc: "Memanfaatkan musik tren tanpa mengorbankan pesan utama brand." },
  { title: "Pentingnya Konten Video Dalam Strategi Marketing B2B", category: "B2B MARKETING", desc: "Studi kasus efektifitas video animasi & testimoni dalam penjualan B2B." },
  { title: "10 Kesalahan Umum Dalam Pembuatan Video Promosi UMKM", category: "VIDEO PRODUCTION", desc: "Menghindari durasi terlalu panjang dan pencahayaan yang redup." },
  { title: "Panduan Dokumentasi Pernikahan (Wedding Highlight vs Full Day)", category: "WEDDING DOCS", desc: "Perbandingan jangkauan liputan video pernikahan sesuai kebutuhan pasangan." },
  { title: "Cara Mengukur Return of Investment (ROI) Dari Konten Visual Bisnis", category: "ROI ANALYSIS", desc: "Menghitung pertumbuhan leads & engagement dari materi promosi kreatif." },
  { title: "Tips Pengambilan Foto Menu Makanan Dengan Pencahayaan Alami", category: "PHOTOGRAPHY TIPS", desc: "Memanfaatkan cahaya jendela untuk tekstur makanan yang natural." },
  { title: "Mengapa Desain Kemasan (Packaging) Sangat Mempengaruhi Keputusan Beli", category: "PACKAGING DESIGN", desc: "Daya tarik kemasan produk di rak toko & tampilan foto online." },
  { title: "Panduan Menyusun Content Strategy Untuk Akun Bisnis Baru", category: "CONTENT STRATEGY", desc: "Penentuan target audiens, topik konten, dan frekuensi unggahan." },
  { title: "Peran Visual Branding Dalam Menaikkan Nilai Jual Produk UMKM", category: "UMKM BRANDING", desc: "Transformasi kemasan & logo sederhana menjadi brand bernilai tinggi." },
  { title: "Cara Menyiapkan Sesi Pemotretan Foto Company Profile Direksi", category: "CORPORATE PHOTO", desc: "Persiapan pakaian, lokasi ruangan, dan pengarahan pose gaya." },
  { title: "Panduan Pembuatan Video Teaser Product Launching", category: "TEASER VIDEO", desc: "Membangun rasa penasaran calon pembeli menjelang peluncuran produk." },
  { title: "Sinergi Antara Sistem Website Dan Konten Visual Dari Sivilize Corp", category: "ECOSYSTEM SYNERGY", desc: "Keunggulan integrasi kodingan software dan konten foto/video resmi." },
  { title: "Alasan Utama Mengapa Bisnis Anda Membutuhkan Creative Agency", category: "AGENCY ADVANTAGE", desc: "Efisiensi biaya dan hasil profesional dibanding mengurus tim internal." },
  { title: "Panduan Lengkap Memilih Paket Layanan Sivilize Creative", category: "SERVICE GUIDE", desc: "Menyesuaikan anggaran dan skala produksi visual bagi organisasi Anda." },
];

export default function BlogPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// 30_SEO_CREATIVE_ARTICLES</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Artikel & Edukasi Marketing Visual</h1>
            <p className="text-slate-400 text-sm mt-4">
              30 Ide artikel dan panduan strategi konten visual terstruktur untuk tim pemasaran & pemilik bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles30.map((art, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 block mb-2">[{String(idx + 1).padStart(2, "0")}] {art.category}</span>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase leading-snug">{art.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{art.desc}</p>
                </div>
                <span className="text-amber-400 font-mono text-xs font-bold hover:underline cursor-pointer">
                  Baca Artikel Lengkap &rarr;
                </span>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
