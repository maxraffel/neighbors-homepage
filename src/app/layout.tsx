import type { Metadata } from "next";
import { Geist, Geist_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { Footer3 } from "@/components/footer-3";
import { LpNavbar1 } from "@/components/lp-navbar-1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const crimsonPro2 = Crimson_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Neighbors Wealth Management",
  icons: {
    icon: "/NeighborDefaultLogoSmall.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} ${crimsonPro2.variable} antialiased`}
      >
        <LpNavbar1 />
        {children}
        <Footer3 />
      </body>
    </html>
  );
}
