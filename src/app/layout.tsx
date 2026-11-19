import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Barlow_Condensed } from "next/font/google";
import { siteConfig } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { CallTracking } from "@/components/CallTracking";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.businessName} | 24-Hour Truck Repair in ${siteConfig.city}, ${siteConfig.state}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} provides 24-hour commercial truck repair, diagnostics, fleet maintenance, and roadside assistance in ${siteConfig.city}, ${siteConfig.state}. Call ${siteConfig.phoneDisplay}.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const autoRepairSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.businessName,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  areaServed: {
    "@type": "State",
    name: "Michigan",
    containedInPlace: {
      "@type": "Country",
      name: "US",
    },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: siteConfig.sameAs,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.businessName,
  url: siteConfig.url,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <head>
        <script defer src="https://www.alignandacquire.com/t/s/big-bear-truck-repair.js"></script>
      </head>
      <body className="min-h-dvh bg-bone font-body text-asphalt antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18373116344"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18373116344');`}
        </Script>
        <CallTracking />
        <JsonLd data={autoRepairSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallBar />
        {/* Bottom padding so mobile call bar doesn't cover content */}
        <div className="h-16 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
