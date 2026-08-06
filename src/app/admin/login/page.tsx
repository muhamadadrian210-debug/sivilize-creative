"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, User, Sparkles, ArrowRight, ShieldCheck, Video } from "lucide-react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("cmo.shatrya");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setErrorMsg(data.message || "Login gagal, silakan periksa username & password.");
      }
    } catch (err) {
      setErrorMsg("Koneksi gagal ke server admin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      {/* Dynamic Ambient Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b0f17] rounded-[10px] flex items-center justify-center">
                <Video className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div className="text-left">
              <span className="text-xl font-black tracking-wider uppercase text-white block">SIVILIZE CREATIVE</span>
              <span className="text-xs font-semibold text-amber-400 tracking-widest block">ADMIN PORTAL CMS</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-white tracking-tight mt-2">Selamat Datang, CMO</h1>
          <p className="text-slate-400 text-sm mt-1">Masukkkan kredensial untuk mengelola website Sivilize Creative.</p>
        </div>

        {/* Login Box */}
        <div className="bg-[#111622]/90 border border-slate-800 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/80">
          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Username Admin
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Contoh: cmo.shatrya"
                  className="w-full pl-11 pr-4 py-3 bg-[#0b0e14] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Password Admin
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-[#0b0e14] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-300/90 leading-relaxed">
              <div className="font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Kredensial Default CMO:
              </div>
              <div>Username: <code className="bg-black/40 px-1.5 py-0.5 rounded text-white">cmo.shatrya</code></div>
              <div>Password Default: <code className="bg-black/40 px-1.5 py-0.5 rounded text-white">SivilizeCreative2026!</code></div>
              <div className="text-slate-400 text-[11px] mt-1">*Bisa diubah kapan saja di dalam Dashboard Admin.</div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm hover:from-amber-400 hover:to-amber-500 transition shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  Memverifikasi Akun...
                </>
              ) : (
                <>
                  Masuk Ke Admin Panel CMO
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800/80 text-center">
            <Link href="/" className="text-xs text-slate-400 hover:text-amber-400 transition">
              ← Kembali ke Website Utama Sivilize Creative
            </Link>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-slate-500">
          © 2026 PT Sivilize Corp Indonesia. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
