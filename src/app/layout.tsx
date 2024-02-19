import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "Isabel Vieira | %s",
    default: "Isabel Vieira",
  },
  description: "Generated by create next app",
  authors: [
    {
      name: "Isabel Vieira",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[1280px] xl:px-0 overflow-hidden">
          {children}
        </div>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
