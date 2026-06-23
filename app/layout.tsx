import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techsoft-web.vercel.app"),
  icons: {
    icon: "/brand/techsoft-logo.svg",
    shortcut: "/brand/techsoft-logo.svg",
  },
  title: {
    default: "TechSoft Solutions | Estudio de software y productos digitales",
    template: "%s | TechSoft Solutions",
  },
  description:
    "TechSoft Solutions diseña, desarrolla y escala software a medida, productos empresariales y experiencias digitales listas para crecer con tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} min-h-full antialiased`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
