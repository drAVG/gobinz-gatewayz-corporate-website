import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gobinzgatewayz.ca"),
  title: "Gobinz Gatewayz | Trusted Canadian Decision Systems",
  description:
    "Discover the Gobinz Gatewayz portfolio of trusted Canadian decision systems, including CoinSwapPro, FinToolBoxPro, and CryptoConverterPro.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Gobinz Gatewayz",
    title: "Trusted Canadian Decision Systems | Gobinz Gatewayz",
    description: "Practical digital tools that turn complex financial information into clearer next steps.",
  },
  twitter: {
    card: "summary",
    title: "Trusted Canadian Decision Systems | Gobinz Gatewayz",
    description: "Explore practical tools from the Gobinz Gatewayz portfolio.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
