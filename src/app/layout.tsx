import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://creative.sivilizecorp.com"),
  title: "Sivilize Creative — Creative Agency & Visual Branding Division",
  description: "Divisi Creative Agency Resmi PT Sivilize Corp Indonesia. Spesialis Video Promosi UMKM, Company Profile, Wedding Highlight, Foto Produk, & Brand Identity. Executive COO WA: +62 851-3774-3321.",
  keywords: [
    "Sivilize Creative",
    "Creative Agency Indonesia",
    "Video Promosi UMKM",
    "Video Company Profile",
    "Foto Produk Studio",
    "Desain Logo Brand Identity",
    "Dokumentasi Wedding Event",
    "PT Sivilize Corp Indonesia",
  ],
  alternates: {
    canonical: "./",
  },
  authors: [{ name: "PT Sivilize Corp Indonesia" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Sivilize Creative — Creative Agency & Visual Branding",
    description: "Kalau Sivilize Software Membangun Sistem, Maka Sivilize Creative Membangun Citra Bisnis. PT Sivilize Corp Indonesia (NIB 0207260103661).",
    url: "https://creative.sivilizecorp.com",
    siteName: "Sivilize Creative",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sivilize Creative Agency Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sivilize Creative — Creative Agency",
    description: "Video Production, Commercial Photography, & Brand Identity.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sivilize Creative",
    "legalName": "PT SIVILIZE CORP INDONESIA",
    "url": "https://creative.sivilize.com",
    "logo": "https://creative.sivilize.com/icon.svg",
    "image": "https://creative.sivilize.com/og-image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-851-3774-3321",
      "contactType": "Chief Operating Officer",
      "contactOption": "TollFree",
      "areaServed": "ID",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://github.com/muhamadadrian210-debug"
    ]
  };

  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta property="og:image" content="https://creative.sivilize.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-slate-300 font-sans">{children}</body>
    </html>
  );
}
