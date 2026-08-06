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
    <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-3 flex justify-center transition-all duration-300">
      <div
        className={`w-full max-w-6xl h-12 lg:h-13 rounded-full px-3.5 sm:px-5 flex items-center justify-between transition-all duration-300 backdrop-blur-xl border ${
          isScrolled
            ? "bg-[#07090e]/95 border-amber-500/35 shadow-xl shadow-amber-500/15"
            : "bg-[#111622]/85 border-white/10 shadow-lg shadow-black/80"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-[#0b0f17] rounded-[7px] flex items-center justify-center">
              <Video className="w-3.5 h-3.5 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-white group-hover:text-amber-400 transition-colors truncate max-w-[120px] min-[400px]:max-w-none">
              {logoText}
            </span>
            <span className="text-[8px] font-bold text-amber-400/90 tracking-widest uppercase -mt-0.5 truncate max-w-[120px] min-[400px]:max-w-none">
              {badgeText}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navItems.map((item: any, idx: number) => {
            const isActive = pathname === item.href;
            return item.isExternal ? (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 transition flex items-center gap-1"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition ${
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

        {/* CTA Button (No public Admin link) */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-[11px] transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-1 group shrink-0 active:scale-95"
          >
            <MessageCircle className="w-3 h-3 fill-slate-950 shrink-0" />
            <span className="truncate tracking-tight">{ctaText}</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>

        {/* Mobile & Tablet Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#111622]/90 text-amber-400 hover:bg-amber-500/20 transition shrink-0 relative z-50 border border-amber-500/30 shadow-lg flex items-center justify-center cursor-pointer ml-2 active:scale-95"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-20 bg-[#07090e]/98 border border-amber-500/40 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-3xl z-50 space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest px-2 font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            SIVILIZE CREATIVE NAVIGATION
          </div>
          <nav className="flex flex-col space-y-1 pt-1 border-t border-white/5">
            {navItems.map((item: any, idx: number) =>
              item.isExternal ? (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-xs font-semibold text-slate-200 hover:bg-amber-500/10 hover:text-amber-400 transition flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </a>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-xs font-semibold transition flex items-center justify-between ${
                    pathname === item.href
                      ? "bg-amber-500/15 text-amber-400 font-extrabold border border-amber-500/30"
                      : "text-slate-300 hover:bg-amber-500/10 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {pathname === item.href && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
                </Link>
              )
            )}
          </nav>

          <div className="pt-2 border-t border-white/5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
