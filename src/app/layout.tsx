import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://story-haven-three.vercel.app"),
  title: "Story Haven",
  description:
    "Magical bedtime stories for families everywhere. Discover free stories with immersive ambience, filtering, and narration.",
  openGraph: {
    title: "Story Haven",
    description:
      "Magical bedtime stories for families everywhere. Discover free stories with immersive ambience, filtering, and narration.",
    url: "https://story-haven-three.vercel.app",
    siteName: "Story Haven",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Haven",
    description:
      "Magical bedtime stories for families everywhere. Discover free stories with immersive ambience, filtering, and narration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}