"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Video, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navData, setNavData] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("/api/admin/data")
      .then((res) => res.json())
      .then((data) => setNavData(data))
      .catch(() => {});
  }, []);

  const logoText = navData?.navbar?.logoText || "SIVILIZE CREATIVE";
  const badgeText = navData?.navbar?.badgeText || "PT SIVILIZE CORP";
  const ctaText = navData?.navbar?.ctaText || "Konsultasi WA CMO";
  const ctaWaMsg = navData?.navbar?.ctaWaMsg || "Halo Mas Shatrya Dhimar (CMO Sivilize Creative), saya mau berkonsultasi mengenai layanan video promosi / branding.";
  const cmoPhone = navData?.admin?.cmoPhone || "+6281246821279";

  const defaultNavItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Paket & Harga", href: "/harga" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Tentang", href: "/tentang" },
    { label: "Software ↗", href: "https://software.sivilizecorp.com", isExternal: true },
    { label: "Kepatuhan", href: "/kepatuhan" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Kontak", href: "/kontak" },
  ];

  const navItems = navData?.navbar?.navItems || defaultNavItems;
  const waCleanPhone = cmoPhone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${waCleanPhone}?text=${encodeURIComponent(ctaWaMsg)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 flex justify-center transition-all duration-300">
      <div
        className={`w-full max-w-7xl h-14 sm:h-16 rounded-full px-4 sm:px-6 flex items-center justify-between transition-all duration-300 backdrop-blur-xl border ${
          isScrolled
            ? "bg-[#07090e]/95 border-amber-500/35 shadow-2xl shadow-amber-500/20"
            : "bg-[#111622]/85 border-white/10 shadow-xl shadow-black/80"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b0f17] rounded-[10px] flex items-center justify-center">
              <Video className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white group-hover:text-amber-400 transition-colors">
              {logoText}
            </span>
            <span className="text-[9px] font-bold text-amber-400/90 tracking-widest uppercase -mt-0.5">
              {badgeText}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item: any, idx: number) => {
            const isActive = pathname === item.href;
            return item.isExternal ? (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 transition flex items-center gap-1"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                  isActive
                    ? "text-amber-400 bg-amber-500/10 font-bold border border-amber-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Admin Link */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="/admin"
            className="px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition"
          >
            Admin Panel
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs transition shadow-lg shadow-amber-500/20 flex items-center gap-1.5 group"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
            <span>{ctaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-white hover:bg-slate-700 transition"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-20 bg-[#0b0f17]/98 border border-amber-500/30 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl z-50 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:bg-amber-500/10 hover:text-amber-400 transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition"
            >
              🔒 Admin Portal CMO
            </Link>
          </nav>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            {ctaText}
          </a>
        </div>
      )}
    </header>
  );
}
