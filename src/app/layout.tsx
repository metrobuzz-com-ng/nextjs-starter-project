import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { getters } from "@/config";
import { ModalContextProvider } from "@/wrappers";
import { ReduxProvider } from "@/redux";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: getters.geti18ns().ROOT.TITLE,
  description: getters.geti18ns().ROOT.DESCRIPTION,
};

const theme = createTheme({
  // Add any theme you want here
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getters.getCurrentLanguage()}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <section id="portal" />
        <MantineProvider theme={theme}>
          <ReduxProvider>
            <ModalContextProvider>
              <>{children}</>
            </ModalContextProvider>
          </ReduxProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
