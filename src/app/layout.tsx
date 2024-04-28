import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getters } from "@/config";
import { ModalContextProvider } from "@/wrappers";
import { ReduxProvider } from "@/redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: getters.geti18ns().ROOT.TITLE,
  description: getters.geti18ns().ROOT.DESCRIPTION,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang={getters.getCurrentLanguage()}>
      <body className={inter.className}>
        <section id="portal" />
        <ReduxProvider>
          <ModalContextProvider>
            <>{children}</>
          </ModalContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
