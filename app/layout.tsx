import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Finding Home",
  description: "Others find properties. We find homes.",
  openGraph: {
    type: "website",
    title: "Home - Finding Home",
    description: "Others find properties. We find homes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Finding Home",
    description: "Others find properties. We find homes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="/production.css" />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html:
              'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-65MY32ZE0V");',
          }}
        />
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-65MY32ZE0V"
          defer
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
