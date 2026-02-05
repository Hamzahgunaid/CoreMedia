import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreMedia - Integrated Services",
  description:
    "CoreMedia offers an integrated service ecosystem connecting strategy, execution, and communication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
