"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articles30 } from "./data";

export default function BlogPage() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-mono tracking-widest uppercase block mb-2">// 30_SEO_CREATIVE_ARTICLES</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">Artikel &amp; Edukasi Marketing Visual</h1>
            <p className="text-slate-400 text-sm mt-4">
              30 Ide artikel dan panduan strategi konten visual terstruktur untuk tim pemasaran &amp; pemilik bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles30.map((art, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-amber-400 font-bold block">
                      [{String(idx + 1).padStart(2, "0")}] {art.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{art.readTime}</span>
                  </div>

                  <Link href={`/blog/${art.slug}`}>
                    <h2 className="text-lg font-bold text-white mb-3 uppercase leading-snug group-hover:text-amber-400 transition-colors">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{art.date}</span>

                  <Link 
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-1 text-amber-400 font-mono text-xs font-bold group-hover:translate-x-1 transition-transform hover:underline"
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
