import type { Metadata } from "next";
import "./globals.scss";
import SiteNav from "@/components/nav/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Vue Du Vallon Chambres d'hôtes",
  description: "Vue Du Vallon Chambres d'hôtes",
};
