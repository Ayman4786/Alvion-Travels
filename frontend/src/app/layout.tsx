/**
 * Root Layout
 *
 * Provides the shared HTML shell, global styles,
 * and metadata for the full application.
 */

import type { Metadata } from "next";
import "./globals.css";

// Shared metadata for the browser and search engines.
export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Production-ready frontend foundation for a travel agency website.",
};

// Root HTML wrapper for all rendered content.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* Application content */}
      <body className="min-h-full">{children}</body>
    </html>
  );
}
