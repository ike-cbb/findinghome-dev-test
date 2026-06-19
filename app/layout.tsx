import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="Main_main__ZcYG1 site-container flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
