import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { BagProvider } from "@/context/BagContext";

const fraunces = Fraunces({
  variable: "--font-wild-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-wild-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wild Soul",
    template: "%s | Wild Soul",
  },
  description:
    "Wild Soul creates considered body, bath and recovery products for the five minutes you didn't know you needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
  <BagProvider>{children}</BagProvider>
</body>
    </html>
  );
}