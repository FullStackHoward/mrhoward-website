import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Mr. Howard - Full Stack Developer & Designer",
  description: "Portfolio of Joshua Howard - Full Stack Developer specializing in design, development, motion graphics, and 3D visualization",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
