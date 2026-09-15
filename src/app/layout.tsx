import type { Metadata } from "next";


import { Geist, Geist_Mono } from "next/font/google";


import "./globals.css";


import Navbar from "@/components/Navbar";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",        // título que sale en la pestaña del navegador
  description: "Explora experiencias de viaje únicas",
};

export default function RootLayout({
  children,                            // children = cada página que se renderiza dentro
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* ← LÍNEA NUEVA: pinta la barra en TODAS las páginas, arriba de todo. */}

        {children}
        {/* Aquí se renderiza el contenido de cada página. Ya estaba. */}
      </body>
    </html>
  );
}