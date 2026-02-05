import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Script from "next/script";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'MrHoward | Motion Graphics, Animation & Creative Design',
  description: 'Creative professional specializing in motion graphics, 3D animation, brand identity, and web design.',
  keywords: 'motion graphics, 3D animation, brand identity, creative design, web design, visual effects, animation',
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  openGraph: {
    title: 'MrHoward | Motion Graphics, Animation & Creative Design',
    description: 'Creative professional specializing in motion graphics, 3D animation, brand identity, and web design.',
    url: 'https://mrhoward.net',
    siteName: 'MrHoward',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'MrHoward Creative Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'MrHoward | Motion Graphics, Animation & Creative Design',
    description: 'Creative professional specializing in motion graphics, 3D animation, brand identity, and web design.',
    images: ['/og-image.jpg'],
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0XXS6YGZVG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XXS6YGZVG');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
