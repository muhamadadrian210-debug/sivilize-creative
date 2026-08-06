"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Video,
  LayoutDashboard,
  Palette,
  Briefcase,
  DollarSign,
  Calculator as CalcIcon,
  HelpCircle,
  ShieldCheck,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Save,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  RefreshCw,
  Eye
} from "lucide-react";
import { SiteData } from "@/lib/siteData";

export default function AdminDashboardPage() {
  const [data, setData] = useState<SiteData | null>(null);
  const [activeTab, setActiveTab] = useState("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const router = useRouter();

  // Temporary state for editing items
  const [editingPortfolio, setEditingPortfolio] = useState<any | null>(null);
  const [editingPricing, setEditingPricing] = useState<any | null>(null);
  const [editingFaq, setEditingFaq] = useState<any | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/data");
      const result = await res.json();
      setData(result);
    } catch (err) {
      showToast("Gagal memuat data admin.", "error");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSave = async (updatedFields?: Partial<SiteData>) => {
    if (!data) return;
    setSaving(true);
    const payload = updatedFields ? { ...data, ...updatedFields } : data;

    try {
      const res = await fetch("/api/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();
      if (resData.success) {
        setData(resData.data);
        showToast("✨ Perubahan berhasil disimpan & LIVE seketika di website!", "success");
      } else {
        showToast("Gagal menyimpan perubahan.", "error");
      }
    } catch (err) {
      showToast("Gagal menghubungi server.", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#07090e] text-white flex flex-col items-center justify-center font-sans">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 text-sm animate-pulse">Memuat Dashboard CMS Sivilize Creative...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans flex flex-col md:flex-row">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 px-5 py-3.5 rounded-xl shadow-2xl border flex items-center gap-3 animate-bounce ${
          toast.type === "success"
            ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-300 backdrop-blur-md"
            : "bg-red-950/90 border-red-500/40 text-red-300 backdrop-blur-md"
        }`}>
          {toast.type === "success" ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <AlertCircle className="w-5 h-5 text-red-400" />}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-[#0b0e17] border-b md:border-b-0 md:border-r border-slate-800/80 p-4 md:p-6 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-white text-base tracking-wide uppercase">{data.navbar.logoText}</h2>
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest block">ADMIN PANEL CMO</span>
            </div>
          </div>

          {/* User Status */}
          <div className="mb-6 p-3.5 rounded-xl bg-[#111622] border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-xs">
              SD
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">{data.admin.cmoName}</div>
              <div className="text-[11px] text-slate-400 truncate">{data.admin.cmoRole}</div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { id: "hero", label: "Beranda & Hero", icon: LayoutDashboard },
              { id: "navbar", label: "Navbar & Tema UI", icon: Palette },
              { id: "portfolio", label: "Portofolio (CRUD)", icon: Briefcase },
              { id: "pricing", label: "Paket & Harga", icon: DollarSign },
              { id: "calculator", label: "Kalkulator Custom", icon: CalcIcon },
              { id: "services", label: "Layanan", icon: Sparkles },
              { id: "faq", label: "FAQ & Testimoni", icon: HelpCircle },
              { id: "terms", label: "Kepatuhan & SPK", icon: ShieldCheck },
              { id: "account", label: "Pengaturan & Kontak", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    active
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Buttons */}
        <div className="mt-8 space-y-2 pt-4 border-t border-slate-800/80">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition border border-slate-700/50"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            Pratinjau Web Live
            <ExternalLink className="w-3 h-3 opacity-60" />
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold transition border border-red-500/20"
          >
            <LogOut className="w-3.5 h-3.5" />
            Keluar (Logout)
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-5xl">
        {/* Top Header Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              Management Dashboard
              <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-extrabold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                LIVE & INSTANT
              </span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">Semua perubahan tersimpan langsung tanpa perlu push kodingan.</p>
          </div>

          <button
            onClick={() => handleSave()}
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {saving ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Menyimpan...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                SIMPAN SEMUA PERUBAHAN
              </>
            )}
          </button>
        </div>

        {/* TAB 1: HERO & BERANDA */}
        {activeTab === "hero" && (
          <div className="space-y-6">
            <div className="bg-[#111622] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-amber-400" /> Teks Hero Utama (Beranda)
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Judul Utama (Heading Baris 1)</label>
                  <input
                    type="text"
                    value={data.hero.headingMain}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, headingMain: e.target.value } })}
                    className="w-full px-4 py-3 bg-[#07090e] border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Judul Highlight Warna (Heading Baris 2)</label>
                  <input
                    type="text"
                    value={data.hero.headingHighlight}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, headingHighlight: e.target.value } })}
                    className="w-full px-4 py-3 bg-[#07090e] border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500 text-amber-400 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Deskripsi Subtitle Hero</label>
                  <textarea
                    rows={3}
                    value={data.hero.subtitle}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, subtitle: e.target.value } })}
                    className="w-full px-4 py-3 bg-[#07090e] border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Stats Counter */}
            <div className="bg-[#111622] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-4">Statistik Keunggulan (4 Poin Hero)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.hero.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 bg-[#07090e] border border-slate-800 rounded-xl space-y-2">
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...data.hero.stats];
                        newStats[idx].value = e.target.value;
                        setData({ ...data, hero: { ...data.hero, stats: newStats } });
                      }}
                      className="w-full px-3 py-1.5 bg-[#111622] border border-slate-700 rounded-lg text-sm text-amber-400 font-bold"
                      placeholder="Nilai Stat (ex: 100%)"
                    />
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...data.hero.stats];
                        newStats[idx].label = e.target.value;
                        setData({ ...data, hero: { ...data.hero, stats: newStats } });
                      }}
                      className="w-full px-3 py-1.5 bg-[#111622] border border-slate-700 rounded-lg text-xs text-slate-300"
                      placeholder="Label Stat (ex: Resolusi 4K)"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NAVBAR & TEMA UI */}
        {activeTab === "navbar" && (
          <div className="space-y-6">
            <div className="bg-[#111622] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Palette className="w-5 h-5 text-amber-400" /> Pengaturan Logo & Tombol CTA Navbar
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Teks Logo Navbar</label>
                  <input
                    type="text"
                    value={data.navbar.logoText}
                    onChange={(e) => setData({ ...data, navbar: { ...data.navbar, logoText: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700/80 rounded-xl text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Teks Badge Samping Logo</label>
                  <input
                    type="text"
                    value={data.navbar.badgeText}
                    onChange={(e) => setData({ ...data, navbar: { ...data.navbar, badgeText: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700/80 rounded-xl text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Teks Tombol CTA Navbar</label>
                  <input
                    type="text"
                    value={data.navbar.ctaText}
                    onChange={(e) => setData({ ...data, navbar: { ...data.navbar, ctaText: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700/80 rounded-xl text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Pilihan Tema Warna Visual</label>
                  <select
                    value={data.navbar.themeColor}
                    onChange={(e) => setData({ ...data, navbar: { ...data.navbar, themeColor: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700/80 rounded-xl text-sm text-white capitalize"
                  >
                    <option value="amber">Amber Gold (Default Premium)</option>
                    <option value="emerald">Emerald Green (Modern Clean)</option>
                    <option value="indigo">Indigo Blue (Tech Enterprise)</option>
                    <option value="purple">Purple Cyber (Creative Studio)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Pesan Otomatis WA CMO dari Navbar</label>
                <textarea
                  rows={3}
                  value={data.navbar.ctaWaMsg}
                  onChange={(e) => setData({ ...data, navbar: { ...data.navbar, ctaWaMsg: e.target.value } })}
                  className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700/80 rounded-xl text-xs text-white"
                />
              </div>
            </div>

            {/* Nav Links Manager */}
            <div className="bg-[#111622] border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white">Daftar Link Menu Navbar</h3>
                <button
                  onClick={() => {
                    const newItems = [...data.navbar.navItems, { label: "Menu Baru", href: "/layanan" }];
                    setData({ ...data, navbar: { ...data.navbar, navItems: newItems } });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 text-xs font-bold flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Tambah Menu
                </button>
              </div>

              <div className="space-y-3">
                {data.navbar.navItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#07090e] border border-slate-800 rounded-xl">
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => {
                        const updated = [...data.navbar.navItems];
                        updated[idx].label = e.target.value;
                        setData({ ...data, navbar: { ...data.navbar, navItems: updated } });
                      }}
                      placeholder="Label Menu"
                      className="w-1/3 px-3 py-1.5 bg-[#111622] border border-slate-700 rounded-lg text-xs text-white"
                    />
                    <input
                      type="text"
                      value={item.href}
                      onChange={(e) => {
                        const updated = [...data.navbar.navItems];
                        updated[idx].href = e.target.value;
                        setData({ ...data, navbar: { ...data.navbar, navItems: updated } });
                      }}
                      placeholder="Link Href (/layanan)"
                      className="flex-1 px-3 py-1.5 bg-[#111622] border border-slate-700 rounded-lg text-xs text-white"
                    />
                    <button
                      onClick={() => {
                        const updated = data.navbar.navItems.filter((_, i) => i !== idx);
                        setData({ ...data, navbar: { ...data.navbar, navItems: updated } });
                      }}
                      className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PORTOFOLIO (CRUD) */}
        {activeTab === "portfolio" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-400" /> Daftar Portofolio ({data.portfolios.length} Item)
              </h3>
              <button
                onClick={() => {
                  const newItem = {
                    id: "p_" + Date.now(),
                    title: "Proyek Portofolio Baru",
                    category: "Reels & TikTok",
                    client: "Nama Klien / Instansi",
                    description: "Deskripsi singkat hasil karya shooting / desain.",
                    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
                    videoUrl: "",
                    featured: true,
                  };
                  setData({ ...data, portfolios: [newItem, ...data.portfolios] });
                }}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-400"
              >
                <Plus className="w-4 h-4" /> Tambah Portofolio Baru
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.portfolios.map((item, idx) => (
                <div key={item.id} className="p-5 bg-[#111622] border border-slate-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <label className="text-[11px] text-slate-400 flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.featured}
                          onChange={(e) => {
                            const updated = [...data.portfolios];
                            updated[idx].featured = e.target.checked;
                            setData({ ...data, portfolios: updated });
                          }}
                          className="rounded border-slate-700 text-amber-500 focus:ring-amber-500"
                        />
                        Beranda
                      </label>
                      <button
                        onClick={() => {
                          const updated = data.portfolios.filter((p) => p.id !== item.id);
                          setData({ ...data, portfolios: updated });
                        }}
                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Judul Karya</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...data.portfolios];
                        updated[idx].title = e.target.value;
                        setData({ ...data, portfolios: updated });
                      }}
                      className="w-full px-3 py-2 bg-[#07090e] border border-slate-700 rounded-lg text-xs text-white font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Kategori</label>
                      <select
                        value={item.category}
                        onChange={(e) => {
                          const updated = [...data.portfolios];
                          updated[idx].category = e.target.value;
                          setData({ ...data, portfolios: updated });
                        }}
                        className="w-full px-3 py-2 bg-[#07090e] border border-slate-700 rounded-lg text-xs text-white"
                      >
                        <option value="Company Profile">Company Profile</option>
                        <option value="Reels & TikTok">Reels & TikTok</option>
                        <option value="Commercial Photography">Commercial Photography</option>
                        <option value="Branding & Design">Branding & Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Nama Klien</label>
                      <input
                        type="text"
                        value={item.client}
                        onChange={(e) => {
                          const updated = [...data.portfolios];
                          updated[idx].client = e.target.value;
                          setData({ ...data, portfolios: updated });
                        }}
                        className="w-full px-3 py-2 bg-[#07090e] border border-slate-700 rounded-lg text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">URL Cover Image (Thumbnail)</label>
                    <input
                      type="text"
                      value={item.thumbnail}
                      onChange={(e) => {
                        const updated = [...data.portfolios];
                        updated[idx].thumbnail = e.target.value;
                        setData({ ...data, portfolios: updated });
                      }}
                      className="w-full px-3 py-2 bg-[#07090e] border border-slate-700 rounded-lg text-xs text-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Link Embed Video (YouTube / Vimeo / GDrive)</label>
                    <input
                      type="text"
                      value={item.videoUrl}
                      onChange={(e) => {
                        const updated = [...data.portfolios];
                        updated[idx].videoUrl = e.target.value;
                        setData({ ...data, portfolios: updated });
                      }}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full px-3 py-2 bg-[#07090e] border border-slate-700 rounded-lg text-xs text-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PAKET & HARGA */}
        {activeTab === "pricing" && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-400" /> Manajer Kartu Paket & Harga
            </h3>

            <div className="space-y-6">
              {data.pricing.map((pkg, idx) => (
                <div key={pkg.id} className="p-6 bg-[#111622] border border-slate-800 rounded-2xl space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nama Paket</label>
                      <input
                        type="text"
                        value={pkg.name}
                        onChange={(e) => {
                          const updated = [...data.pricing];
                          updated[idx].name = e.target.value;
                          setData({ ...data, pricing: updated });
                        }}
                        className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-white font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Harga Resmi</label>
                      <input
                        type="text"
                        value={pkg.price}
                        onChange={(e) => {
                          const updated = [...data.pricing];
                          updated[idx].price = e.target.value;
                          setData({ ...data, pricing: updated });
                        }}
                        className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-amber-400 font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Badge Kartu</label>
                      <input
                        type="text"
                        value={pkg.badge}
                        onChange={(e) => {
                          const updated = [...data.pricing];
                          updated[idx].badge = e.target.value;
                          setData({ ...data, pricing: updated });
                        }}
                        className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Deskripsi Paket</label>
                    <input
                      type="text"
                      value={pkg.description}
                      onChange={(e) => {
                        const updated = [...data.pricing];
                        updated[idx].description = e.target.value;
                        setData({ ...data, pricing: updated });
                      }}
                      className="w-full px-4 py-2 bg-[#07090e] border border-slate-700 rounded-xl text-xs text-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Fitur (1 Baris Per Poin)</label>
                    <textarea
                      rows={4}
                      value={pkg.features.join("\n")}
                      onChange={(e) => {
                        const updated = [...data.pricing];
                        updated[idx].features = e.target.value.split("\n");
                        setData({ ...data, pricing: updated });
                      }}
                      className="w-full px-4 py-3 bg-[#07090e] border border-slate-700 rounded-xl text-xs text-slate-200 leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: KALKULATOR CUSTOM */}
        {activeTab === "calculator" && (
          <div className="space-y-6">
            <div className="bg-[#111622] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CalcIcon className="w-5 h-5 text-amber-400" /> Pengaturan Kalkulator Estimasi Custom
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Harga Dasar Per Single Video 4K (Rp)</label>
                <input
                  type="number"
                  value={data.calculator.videoUnitPrice}
                  onChange={(e) => setData({ ...data, calculator: { ...data.calculator, videoUnitPrice: Number(e.target.value) } })}
                  className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-amber-400 font-bold"
                />
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Daftar Add-On Pilihan Klien</h4>
                {data.calculator.addOns.map((addon, idx) => (
                  <div key={addon.id} className="flex items-center gap-3 p-3.5 bg-[#07090e] border border-slate-800 rounded-xl">
                    <input
                      type="text"
                      value={addon.label}
                      onChange={(e) => {
                        const updated = [...data.calculator.addOns];
                        updated[idx].label = e.target.value;
                        setData({ ...data, calculator: { ...data.calculator, addOns: updated } });
                      }}
                      className="flex-1 px-3 py-1.5 bg-[#111622] border border-slate-700 rounded-lg text-xs text-white"
                    />
                    <div className="w-36 flex items-center gap-1.5">
                      <span className="text-xs text-slate-500">Rp</span>
                      <input
                        type="number"
                        value={addon.price}
                        onChange={(e) => {
                          const updated = [...data.calculator.addOns];
                          updated[idx].price = Number(e.target.value);
                          setData({ ...data, calculator: { ...data.calculator, addOns: updated } });
                        }}
                        className="w-full px-3 py-1.5 bg-[#111622] border border-slate-700 rounded-lg text-xs text-amber-400 font-bold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 9: PENGATURAN & KONTAK */}
        {activeTab === "account" && (
          <div className="space-y-6">
            <div className="bg-[#111622] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-400" /> Kontak WhatsApp CMO & Informasi Legal PT
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nama CMO</label>
                  <input
                    type="text"
                    value={data.admin.cmoName}
                    onChange={(e) => setData({ ...data, admin: { ...data.admin, cmoName: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nomor WhatsApp CMO (Format +628...)</label>
                  <input
                    type="text"
                    value={data.admin.cmoPhone}
                    onChange={(e) => setData({ ...data, admin: { ...data.admin, cmoPhone: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-emerald-400 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Email Resmi PT</label>
                  <input
                    type="email"
                    value={data.admin.officialEmail}
                    onChange={(e) => setData({ ...data, admin: { ...data.admin, officialEmail: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Email Aset Creative PT</label>
                  <input
                    type="email"
                    value={data.admin.assetsEmail}
                    onChange={(e) => setData({ ...data, admin: { ...data.admin, assetsEmail: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-white"
                  />
                </div>
              </div>
            </div>

            {/* Password Change Box */}
            <div className="bg-[#111622] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> Kredensial Login Admin CMO
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Username Admin</label>
                  <input
                    type="text"
                    value={data.admin.username}
                    onChange={(e) => setData({ ...data, admin: { ...data.admin, username: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Password Admin</label>
                  <input
                    type="text"
                    value={data.admin.password}
                    onChange={(e) => setData({ ...data, admin: { ...data.admin, password: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-[#07090e] border border-slate-700 rounded-xl text-sm text-amber-400 font-mono font-bold"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
