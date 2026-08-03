import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articles30 } from "../data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles30.map((art) => ({
    slug: art.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles30.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  const cmoWaNumber = "6282347058055";
  const waMessage = encodeURIComponent(
    `Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya telah membaca artikel *"${article.title}"* dan mau berkonsultasi mengenai strategi konten visual untuk bisnis kami.\n\nBoleh dibantu jadwal pengerjaannya? Terima kasih.`
  );

  return (
    <div className="page-wrapper min-h-screen flex flex-col font-sans bg-[#0b0f17] text-slate-300">
      <Navbar />

      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs font-bold hover:underline mb-6"
            >
              &larr; Kembali ke Daftar Artikel
            </Link>

            <div className="flex items-center gap-3 flex-wrap mb-4 font-mono text-xs">
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold rounded-lg uppercase">
                {article.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{article.date}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Estimasi Baca: {article.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-snug mb-6">
              {article.title}
            </h1>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
              Penulis: <strong className="text-amber-400 font-bold">{article.author}</strong>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-12 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium border-l-4 border-amber-500 pl-4 py-1 italic">
              "{article.desc}"
            </p>

            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA ARTICLE END */}
          <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-extrabold text-white uppercase mb-2">
              Tertarik Mengaplikasikan Strategi Visual Ini?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
              Tim Sivilize Creative siap membantu merencanakan dan memproduksi konten video, fotografi studio, atau identitas brand bisnis Anda.
            </p>
            <a
              href={`https://wa.me/${cmoWaNumber}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
            >
              💬 Konsultasi Strategi Konten via CMO WA &rarr;
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
