import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import localfont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
const gotham = localfont({
  src: [
    {
      path: "../public/fonts/Gotham-Bold.otf",
      weight: "700"
    },
    {
      path: "../public/fonts/Gotham-Book.otf",
      weight: "600"
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
      weight: "500"
    },
    {
      path: "../public/fonts/Gotham-Light.otf",
      weight: "400"
    },
    {
      path: "../public/fonts/Gotham-Thin.otf",
      weight: "300"
    },
  ],
})


export const metadata: Metadata = {
  title: "Anna Kampmann | Dermatologia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gotham.className} overflow-x-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
