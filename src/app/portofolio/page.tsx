"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const showcaseItems = [
  { title: "Video Commercial Cafe & Restoran", category: "BUSINESS VIDEO", client: "Culinary Brand", desc: "Produksi video promosi kuliner sinematik dengan b-roll lighting studio dan audio atmosferik." },
  { title: "Video Profile Perumahan Properti", category: "DRONE & AERIAL", client: "Property Developer", desc: "Pengambilan gambar udara drone 4K dan tur interior rumah contoh." },
  { title: "Foto Produk Katalog E-Commerce", category: "STUDIO PHOTOGRAPHY", client: "Fashion & Skincare", desc: "Pemotretan produk studio latar bersih dengan retouching tekstur produk." },
  { title: "Wedding Highlight Video Sinematik", category: "EVENT DOCUMENTATION", client: "Private Client", desc: "Rangkuman momen bahagia pernikahan akad & resepsi seharian penuh." },
  { title: "Brand Identity Guidelines Corporate", category: "BRANDING DESIGN", client: "Logistik & Transport", desc: "Perancangan logo vektor, panduan warna, tipografi, & desain stationery kantor." },
  { title: "Dokumentasi Seminar Nasional", category: "CORPORATE EVENT", client: "BUMN & Instansi", desc: "Dokumentasi foto & video aftermovie acara seminar berkapasitas 500+ peserta." },
];

export default function PortofolioPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl lg:max-w-2xl mx-auto mb-8 lg:mb-10">
            <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-1.5">// CREATIVE_SHOWCASE</span>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight uppercase">Showcase Portofolio Karya</h1>
            <p className="text-slate-400 text-[11px] sm:text-xs lg:text-sm mt-1.5">
              Bukti komitmen kualitas karya visual, video sinematik, fotografi studio, dan desain branding Sivilize Creative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {showcaseItems.map((item, idx) => (
              <div key={idx} className="p-4.5 sm:p-5 lg:p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-amber-400">[{item.category}]</span>
                    <span className="text-[10px] font-mono text-slate-500">{item.client}</span>
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-white mb-2 uppercase leading-snug">{item.title}</h3>
                  <p className="text-slate-400 text-[11px] lg:text-xs leading-relaxed mb-4">{item.desc}</p>
                </div>
                <a
                  href={`https://wa.me/6285137743321?text=${encodeURIComponent(`Halo Pak Briand (COO Sivilize Creative),\nSaya ingin melihat sampel portofolio *${item.title}*.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-mono text-[11px] font-bold hover:underline"
                >
                  Minta Sampel Portofolio WA &rarr;
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
