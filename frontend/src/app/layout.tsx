import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Production-ready frontend foundation for a travel agency website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
