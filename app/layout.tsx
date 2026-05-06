import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Sava Statkov | AI Researcher & Software Engineer",
    template: "%s | Sava Statkov"
  },
  description:
    "Premium portfolio for an AI researcher and software engineer focused on machine learning systems, product engineering, and intelligent automation.",
  keywords: [
    "AI researcher",
    "software engineer",
    "machine learning",
    "portfolio",
    "Next.js",
    "distributed systems"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
