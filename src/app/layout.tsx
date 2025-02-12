import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

// Configuramos Poppins
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Auto.com",
  description: "Venta de vehículos nuevos y usados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased`}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
