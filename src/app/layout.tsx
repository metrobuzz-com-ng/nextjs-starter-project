import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getters } from "@/config";
import { ModalContextProvider } from "@/wrappers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: getters.geti18ns().ROOT.TITLE,
  description: getters.geti18ns().ROOT.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getters.getCurrentLanguage()}>
      <body className={inter.className}>
        <section id="portal" />
        <ModalContextProvider>
          <>{children}</>
        </ModalContextProvider>
      </body>
    </html>
  );
}
