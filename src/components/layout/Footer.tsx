import Link from "next/link";

export function Footer() {
  const footerWaMessage = encodeURIComponent(
    "Halo Mas Shatrya Dhimar (CMO Sivilize Creative),\n\nSaya ingin mengajukan konsultasi / penawaran layanan produksi video & konten kreatif PT Sivilize Corp Indonesia.\n\nBoleh dibantu koordinasinya? Terima kasih."
  );

  return (
    <>
      <style>{`
        .creative-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #0b0f17;
          padding: 48px 24px 32px;
          position: relative;
          z-index: 10;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr repeat(4, 1fr);
          gap: 28px;
          margin-bottom: 36px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo-title {
          font-size: 1.2rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-logo-emblem {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(245, 158, 11, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-tagline {
          font-size: 0.82rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
          max-width: 300px;
        }
        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 800;
          color: #f1f5f9;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-link-a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s;
        }
        .footer-link-a:hover {
          color: #f59e0b;
        }
        .footer-legal-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-legal-text {
          font-size: 0.72rem;
          line-height: 1.65;
          color: #475569;
          margin: 0;
        }
        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #475569;
          margin-top: 10px;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom-row {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
        }
      `}</style>
      <footer className="creative-footer">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link href="/" style={{ textDecoration: "none" }}>
                <span className="footer-logo-title">
                  <div className="footer-logo-emblem">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="8" width="24" height="18" rx="4" stroke="#F59E0B" strokeWidth="2.5" />
                      <circle cx="16" cy="17" r="5" stroke="#F59E0B" strokeWidth="2" />
                    </svg>
                  </div>
                  Sivilize<span style={{ color: "#f59e0b" }}>Creative</span>
                </span>
              </Link>
              <p className="footer-tagline">
                Divisi Creative Agency & Produksi Konten Visual Resmi di Bawah PT Sivilize Corp Indonesia.
              </p>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
                <strong>Executive Marketing Contact:</strong><br />
                Shatrya Dhimar — Chief Marketing Officer (CMO)<br />
                💬 <a href={`https://wa.me/6282347058055?text=${footerWaMessage}`} target="_blank" rel="noopener noreferrer" style={{ color: "#f59e0b", fontWeight: 700 }}>+62 823-4705-8055</a>
              </div>
            </div>
            
            {/* Col 1 */}
            <div>
              <h4 className="footer-col-title">Layanan Utama</h4>
              <ul className="footer-links">
                <li><Link href="/layanan" className="footer-link-a">Business Content Video</Link></li>
                <li><Link href="/layanan" className="footer-link-a">Event Documentation</Link></li>
                <li><Link href="/layanan" className="footer-link-a">Commercial Photography</Link></li>
                <li><Link href="/layanan" className="footer-link-a">Logo & Brand Identity</Link></li>
                <li><Link href="/layanan" className="footer-link-a">Social Media Retainer</Link></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="footer-col-title">Harga & Paket</h4>
              <ul className="footer-links">
                <li><Link href="/harga" className="footer-link-a">Video Promosi UMKM</Link></li>
                <li><Link href="/harga" className="footer-link-a">Company Profile Video</Link></li>
                <li><Link href="/harga" className="footer-link-a">Dokumentasi Wedding</Link></li>
                <li><Link href="/harga" className="footer-link-a">Foto Produk & Menu</Link></li>
                <li><Link href="/harga" className="footer-link-a">Desain Logo & Branding</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="footer-col-title">Ekosistem Sivilize</h4>
              <ul className="footer-links">
                <li><a href="https://sivilizecorp.com" target="_blank" rel="noopener noreferrer" className="footer-link-a">PT Sivilize Corp Indonesia (Induk)</a></li>
                <li><a href="https://software.sivilizecorp.com" target="_blank" rel="noopener noreferrer" className="footer-link-a">Sivilize Software (ERP/SIMRS)</a></li>
                <li><a href="https://sivilizecorp.my.id" target="_blank" rel="noopener noreferrer" className="footer-link-a">SiWeb Production (Web UMKM)</a></li>
                <li><a href="https://aegis.sivilizecorp.com" target="_blank" rel="noopener noreferrer" className="footer-link-a">Sivilize Aegis (Cybersecurity)</a></li>
                <li><Link href="/kepatuhan" className="footer-link-a">Legalitas PT Sivilize Corp</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="footer-col-title">Informasi & Blog</h4>
              <ul className="footer-links">
                <li><Link href="/blog" className="footer-link-a">30 Artikel Marketing & Visual</Link></li>
                <li><Link href="/faq" className="footer-link-a">20+ Creative FAQs</Link></li>
                <li><Link href="/portofolio" className="footer-link-a">Showcase Portofolio</Link></li>
                <li><Link href="/kontak" className="footer-link-a">Form Request Proposal</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-legal-bar">
            <p className="footer-legal-text">
              <strong>SIVILIZE CREATIVE</strong> — Divisi Creative Agency Milik <strong>PT SIVILIZE CORP INDONESIA</strong>. Terdaftar Sah di Kemenkumham RI.
              <br />
              NIB: 0207260103661 | NPWP: 1000 0000 1032 4212 | KBLI: 62199 & 73100 (Periklanan & Aktivitas Pemrograman).
            </p>
            
            <div className="footer-bottom-row">
              <span>© {new Date().getFullYear()} Sivilize Creative x PT Sivilize Corp Indonesia. All Rights Reserved.</span>
              <span>Visual Branding & Agency Standards in Indonesia 🇮🇩</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
