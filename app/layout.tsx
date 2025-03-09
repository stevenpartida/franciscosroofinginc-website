import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Francisco's Roofing Inc",
  description: "Francisco's Roofing Inc provides high-quality residential and commercial roofing services, specializing in installations, repairs, and maintenance. With expert craftsmanship and durable materials, we ensure long-lasting protection for homes and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
