import { NextResponse } from "next/server";
import { getSiteData } from "@/lib/siteData";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const siteData = getSiteData();

    if (
      username === siteData.admin.username &&
      password === siteData.admin.password
    ) {
      const response = NextResponse.json({
        success: true,
        message: "Login Berhasil! Selamat datang CMO Shatrya Dhimar.",
        user: {
          username: siteData.admin.username,
          name: siteData.admin.cmoName,
          role: siteData.admin.cmoRole,
        },
      });

      // Set cookie for session authentication
      response.cookies.set("sc_admin_session", "authenticated_cmo_token_2026", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Username atau Password Admin Salah!" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server." },
      { status: 500 }
    );
  }
}
