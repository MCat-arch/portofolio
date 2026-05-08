import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Fira_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const firaMono = Fira_Mono({ 
  weight: ['400', '500', '700'],
  subsets: ["latin"], 
  variable: "--font-fira" 
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
});

export const metadata: Metadata = {
  title: "Khoerunnisa Utami | Portfolio",
  description: "Personal portfolio of Khoerunnisa Utami (Tami) - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${firaMono.variable} font-jakarta min-h-screen selection:bg-primary/30`}>
        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
