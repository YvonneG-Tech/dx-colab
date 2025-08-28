import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "../components/Convex-Client-Provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DX Colab",
  description: "Real-time team collaboration platform built with Next.js and Convex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <ConvexClientProvider>
          <div className="h-full">
            {children}
          </div>
        </ConvexClientProvider>
      </body>
    </html>
    </ConvexAuthNextjsServerProvider>
  );
}