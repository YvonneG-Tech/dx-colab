import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Latest font optimization
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Latest font optimization
});

export const metadata: Metadata = {
  title: "Slack Clone - Real-time Team Communication",
  description: "A modern Slack clone built with Next.js 15, React 19, Tailwind CSS v4, and Auth.js",
  keywords: ["slack clone", "team chat", "real-time messaging", "nextjs"],
  authors: [{ name: "Your Name" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'),
  openGraph: {
    title: "Slack Clone - Real-time Team Communication",
    description: "A modern Slack clone built with Next.js 15",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased h-full bg-white text-black selection:bg-blue-100`}
        suppressHydrationWarning
      >
        {/* Main app container with full height for Slack-like layout */}
        <div className="h-full flex flex-col">
          {children}
        </div>
        
        {/* Optional: Add theme script for dark mode support */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </body>
    </html>
  );
}