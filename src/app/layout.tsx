import type { Metadata } from "next";
import "./globals.scss";
import SiteNav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <div className={styles.main}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Vue Du Vallon Chambres d'hôtes",
  description: "Vue Du Vallon Chambres d'hôtes",
};
