"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Paket & Harga", href: "/harga" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Software ↗", href: "https://software.sivilizecorp.com", isExternal: true },
    { label: "Kepatuhan", href: "/kepatuhan" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Kontak", href: "/kontak" },
  ];

  const emergencyWaMessage = encodeURIComponent(
    "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya bermaksud berkonsultasi mengenai pengajuan Request Proposal (RFP) / Layanan Konten Visual & Video Promosi untuk perusahaan/instansi kami.\n\nBoleh dibantu koordinasi awal? Terima kasih."
  );

  return (
    <>
      <style>{`
        .creative-nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 14px 16px;
          display: flex;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .creative-nav {
          width: 100%;
          max-width: 1360px;
          height: 58px;
          background: rgba(19, 27, 46, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8);
          transition: all 0.3s ease;
        }
        .creative-nav--scrolled .creative-nav {
          background: rgba(11, 15, 23, 0.96);
          border-color: rgba(245, 158, 11, 0.35);
          box-shadow: 0 20px 45px -10px rgba(245, 158, 11, 0.25);
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .camera-emblem {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(245, 158, 11, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);
          transition: all 0.3s ease;
        }
        .brand-logo-text {
          font-size: 0.95rem;
          font-weight: 900;
          letter-spacing: 0.3px;
          color: #ffffff;
          text-transform: uppercase;
        }
        .brand-badge {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
          font-size: 0.55rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 12px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link-a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 600;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .nav-link-a:hover, .nav-link-a.active {
          color: #f59e0b;
        }
        .nav-cta {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #ffffff;
          font-size: 0.74rem;
          font-weight: 800;
          padding: 8px 14px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.35);
          flex-shrink: 0;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.5);
        }
        .nav-burger {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 5px;
        }
        .nav-burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.2s;
        }
        @media (max-width: 1200px) {
          .nav-links {
            display: none;
          }
          .nav-cta {
            display: none;
          }
          .nav-burger {
            display: flex;
            padding: 8px;
            z-index: 1001;
          }
          .nav-burger span {
            width: 24px;
            height: 2.5px;
          }
        }
        .mobile-drawer {
          position: fixed;
          top: 80px;
          left: 16px;
          right: 16px;
          background: rgba(11, 15, 23, 0.98);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 20px;
          padding: 24px;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9);
        }
      `}</style>

      <div className={`creative-nav-container ${isScrolled ? "creative-nav--scrolled" : ""}`}>
        <nav className="creative-nav">
          <Link href="/" className="brand-logo" aria-label="Sivilize Creative Home">
            <div className="camera-emblem">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="24" height="18" rx="4" stroke="url(#creative_lens_grad)" strokeWidth="2.5" />
                <circle cx="16" cy="17" r="5" stroke="url(#creative_lens_grad)" strokeWidth="2" />
                <path d="M11 8L13 4H19L21 8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="23" cy="12" r="1.5" fill="#F59E0B" />
                <defs>
                  <linearGradient id="creative_lens_grad" x1="4" y1="4" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F59E0B" />
                    <stop offset="0.5" stopColor="#D97706" />
                    <stop offset="1" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <span className="brand-logo-text">Sivilize<span style={{ color: "#f59e0b" }}>Creative</span></span>
            <span className="brand-badge">AGENCY</span>
          </Link>
          
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-a text-purple-400 font-bold hover:text-purple-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    href={item.href} 
                    className={`nav-link-a ${pathname === item.href ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a 
            href={`https://wa.me/6282347058055?text=${emergencyWaMessage}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
          >
            📸 Konsultasi CMO WA
          </a>

          <button 
            className="nav-burger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-purple-400 font-bold text-sm"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-slate-300 font-semibold text-sm ${pathname === item.href ? "text-amber-400 font-extrabold" : ""}`}
              >
                {item.label}
              </Link>
            )
          ))}
          <a
            href={`https://wa.me/6282347058055?text=${emergencyWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-amber-500 text-white font-extrabold text-xs uppercase tracking-wider mt-2 shadow-lg"
          >
            📸 Konsultasi CMO WA
          </a>
        </div>
      )}
    </>
  );
}
