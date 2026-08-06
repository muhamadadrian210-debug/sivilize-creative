import { NextResponse } from "next/server";
import { updateSiteData, getSiteData } from "@/lib/siteData";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updated = updateSiteData(body);

    if (updated) {
      // Instantly revalidate all pages so updates show up in 0.01s!
      try {
        revalidatePath("/", "layout");
        revalidatePath("/harga");
        revalidatePath("/portofolio");
        revalidatePath("/layanan");
        revalidatePath("/faq");
        revalidatePath("/kepatuhan");
        revalidatePath("/kontak");
      } catch (err) {
        console.log("Revalidation notice:", err);
      }

      return NextResponse.json({
        success: true,
        message: "Data website berhasil diperbarui secara instan!",
        data: getSiteData(),
      });
    }

    return NextResponse.json(
      { success: false, message: "Gagal menyimpan perubahan ke siteData.json" },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server saat menyimpan data." },
      { status: 500 }
    );
  }
}
