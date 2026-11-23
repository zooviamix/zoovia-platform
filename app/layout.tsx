import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {title:"ZOOVIA | Verimin Yeni Yolu",description:"Hayvan besleme, premiks çözümleri ve rasyon destek başvurusu."};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="tr"><body><Header />{children}<Footer /></body></html>}
