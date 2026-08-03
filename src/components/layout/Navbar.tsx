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
          padding: 16px 24px;
          display: flex;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .creative-nav {
          width: 100%;
          max-width: 1280px;
          height: 60px;
          background: rgba(19, 27, 46, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
          transition: all 0.3s ease;
        }
        .creative-nav--scrolled .creative-nav {
          background: rgba(11, 15, 23, 0.95);
          border-color: rgba(245, 158, 11, 0.3);
          box-shadow: 0 20px 45px -10px rgba(245, 158, 11, 0.25);
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .camera-emblem {
          width: 32px;
          height: 32px;
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
          font-size: 1.05rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          color: #ffffff;
          text-transform: uppercase;
        }
        .brand-badge {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
          font-size: 0.6rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link-a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.82rem;
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
          font-size: 0.78rem;
          font-weight: 800;
          padding: 9px 18px;
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
        @media (max-width: 1100px) {
          .nav-links, .nav-cta {
            display: none;
          }
          .nav-burger {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .creative-nav-container {
            padding: 10px 12px;
          }
          .creative-nav {
            height: 52px;
            padding: 0 14px;
          }
          .brand-badge {
            display: none;
          }
          .brand-logo-text {
            font-size: 0.88rem;
          }
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
            <span className="brand-badge">CREATIVE AGENCY</span>
          </Link>
          
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`nav-link-a ${pathname === item.href ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a 
            href={`https://wa.me/6282347058055?text=${emergencyWaMessage}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
          >
            📸 Konsultasi Creative (CMO WA)
          </a>

          <button className="nav-burger" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span style={{ transform: mobileMenuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <span style={{ transform: mobileMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", inset: "0", zIndex: "999", background: "#0b0f17", paddingTop: "100px", paddingLeft: "30px", paddingRight: "30px", display: "flex", flexDirection: "column", gap: "16px", overflowY: "auto" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: pathname === item.href ? "#f59e0b" : "#fff", fontSize: "0.95rem", textDecoration: "none", fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/6282347058055?text=${emergencyWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "#f59e0b", color: "#ffffff", fontSize: "0.9rem", fontWeight: 800, padding: "14px", borderRadius: "12px", textDecoration: "none", textAlign: "center", marginTop: "10px" }}
          >
            📸 Konsultasi Creative Direct CMO (+62 823-4705-8055)
          </a>
        </div>
      )}
    </>
  );
}
