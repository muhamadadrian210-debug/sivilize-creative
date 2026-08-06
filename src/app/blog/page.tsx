"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articles30 } from "./data";

export default function BlogPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl lg:max-w-2xl mx-auto mb-8 lg:mb-10">
            <span className="text-amber-400 text-[10px] font-mono tracking-widest uppercase block mb-1.5">// 30_SEO_CREATIVE_ARTICLES</span>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight uppercase">Artikel &amp; Edukasi Marketing Visual</h1>
            <p className="text-slate-400 text-[11px] sm:text-xs lg:text-sm mt-1.5">
              30 Ide artikel dan panduan strategi konten visual terstruktur untuk tim pemasaran &amp; pemilik bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {articles30.map((art, idx) => (
              <div 
                key={idx} 
                className="p-4.5 sm:p-5 lg:p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-amber-400 font-bold block">
                      [{String(idx + 1).padStart(2, "0")}] {art.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{art.readTime}</span>
                  </div>

                  <Link href={`/blog/${art.slug}`}>
                    <h2 className="text-sm font-bold text-white mb-2 uppercase leading-snug group-hover:text-amber-400 transition-colors">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-slate-400 text-[11px] leading-relaxed mb-4">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">{art.date}</span>

                  <Link 
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-1 text-amber-400 font-mono text-[11px] font-bold group-hover:translate-x-1 transition-transform hover:underline"
                  >
                    Baca Artikel Lengkap &rarr;
                  </Link>
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
