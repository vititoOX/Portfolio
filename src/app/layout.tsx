import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.vercel.app"),
  title: { default: "Víctor Pérez Sosa | Full Stack Developer", template: "%s | Víctor Pérez Sosa" },
  description: "Portfolio de Víctor Pérez Sosa, desarrollador de software Full Stack Junior en Gran Canaria.",
  openGraph: {
    title: "Víctor Pérez Sosa | Full Stack Developer",
    description: "Desarrollador de software Full Stack Junior en Gran Canaria.",
    type: "website",
    locale: "es_ES",
    siteName: "Portfolio de Víctor Pérez Sosa",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Víctor Pérez Sosa — Full Stack Developer Junior" }],
  },
  twitter: { card: "summary_large_image", title: "Víctor Pérez Sosa | Full Stack Developer", description: "Desarrollador de software Full Stack Junior en Gran Canaria.", images: ["/og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#2f6bff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head><ThemeScript /></head>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        <div id="contenido">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
