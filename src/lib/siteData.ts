import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "siteData.json");

export type SiteData = {
  admin: {
    username: string;
    password: string;
    cmoName: string;
    cmoRole: string;
    cmoPhone: string;
    ceoName: string;
    ceoRole: string;
    companyName: string;
    companyNib: string;
    companyNpwp: string;
    companyAddress: string;
    officialEmail: string;
    assetsEmail: string;
    websiteUrl: string;
  };
  navbar: {
    logoText: string;
    badgeText: string;
    themeColor: string;
    ctaText: string;
    ctaWaMsg: string;
    navItems: Array<{ label: string; href: string; isExternal?: boolean }>;
  };
  hero: {
    headingMain: string;
    headingHighlight: string;
    subtitle: string;
    ctaPrimaryText: string;
    ctaPrimaryHref: string;
    ctaSecondaryText: string;
    ctaSecondaryHref: string;
    stats: Array<{ value: string; label: string }>;
  };
  calculator: {
    title: string;
    subtitle: string;
    videoUnitPrice: number;
    videoUnitLabel: string;
    addOns: Array<{ id: string; label: string; price: number; checked: boolean; isFree?: boolean }>;
  };
  pricing: Array<{
    id: string;
    name: string;
    price: string;
    period: string;
    badge: string;
    popular: boolean;
    description: string;
    features: string[];
    whatsappMsg: string;
  }>;
  portfolios: Array<{
    id: string;
    title: string;
    category: string;
    client: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    featured: boolean;
  }>;
  services: Array<{
    id: string;
    title: string;
    icon: string;
    description: string;
    bulletPoints: string[];
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    id: string;
    clientName: string;
    clientRole: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
  }>;
  terms: {
    dpPolicy: string;
    cancellationPolicy: string;
    rawFootagePolicy: string;
    revisionPolicy: string;
  };
};

export function getSiteData(): SiteData {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error("Error reading siteData.json:", error);
  }
  
  // Fallback default
  return require("../data/siteData.json");
}

export function updateSiteData(newData: Partial<SiteData>): boolean {
  try {
    const currentData = getSiteData();
    const mergedData = { ...currentData, ...newData };
    fs.writeFileSync(dataFilePath, JSON.stringify(mergedData, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error updating siteData.json:", error);
    return false;
  }
}
