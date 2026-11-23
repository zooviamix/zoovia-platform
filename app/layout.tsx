import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingRation from "@/components/FloatingRation";

export const metadata: Metadata = {
  title: "ZOOVIA | Verimin Yeni Yolu",
  description: "Bilimsel hayvan besleme, ürünler ve akıllı rasyon danışmanlığı.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="tr"><body><Header />{children}<FloatingRation /><Footer /></body></html>;
}
