import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://hunghsun.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hung-Hsun Han | Enterprise AI Engineer",
  description:
    "Enterprise AI Engineer specializing in Agentic AI, RAG, Computer Vision, Azure, and production AI systems.",
  keywords: [
    "AI Engineer",
    "Enterprise AI",
    "Agentic AI",
    "RAG",
    "LLM",
    "Computer Vision",
    "Azure AI",
    "Databricks",
    "AI Agents",
    "LangGraph",
    "Taiwan AI Engineer",
  ],
  authors: [{ name: "Hung-Hsun Han" }],
  creator: "Hung-Hsun Han",
  openGraph: {
    title: "Hung-Hsun Han | Enterprise AI Engineer",
    description:
      "Enterprise AI Engineer specializing in Agentic AI, RAG, Computer Vision, Azure, and production AI systems.",
    url: siteUrl,
    siteName: "Hung-Hsun Han",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Hung-Hsun Han — Enterprise AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hung-Hsun Han | Enterprise AI Engineer",
    description:
      "Enterprise AI Engineer specializing in Agentic AI, RAG, Computer Vision, Azure, and production AI systems.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
