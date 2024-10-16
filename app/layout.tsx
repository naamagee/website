import Script from 'next/script'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: ":3 | colon3",
  description: "Creating apps for all to use",
  keywords: "apps, development, software, colon3, design agency",
  authors: [{name: "Colon3 Team", url: "https://colon3.io"}],
  openGraph: {
    title: ":3 | colon3",
    description: "Creating apps for all to use",
    type: "website",
    url: "https://colon3.io",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-LMH243F3W6" />
      <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "colon3",
              "url": "https://colon3.io",
              "logo": "https://colon3/colon3logo_1.png",
              "sameAs": [
                "https://github.com/naamagee"
              ]
            }
          `}
        </Script>
    </html >
  );
}
