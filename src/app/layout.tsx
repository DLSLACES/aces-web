import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";

import { ThemeProvider } from "next-themes";

import AcesBanner from "@/components/assets/aces-banner.png";

const GeistFont = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DLSL ACES",
    template: "%s | DLSL ACES",
  },
  description: "Website for the SHS ACES Club in DLSL.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aces-web.vercel.app",
    siteName: "DLSL ACES",
    images: [
      {
        url: `${AcesBanner.src}`,
        width: 1200,
        height: 630,
        alt: "DLSL ACES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dlsl_aces",
    creator: "@dlsl_aces",
    title: "DLSL ACES",
    description: "Website for the SHS ACES Club in DLSL.",
    images: [`${AcesBanner.src}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(GeistFont.className, "dark:bg-black bg-white scrollbar")}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
