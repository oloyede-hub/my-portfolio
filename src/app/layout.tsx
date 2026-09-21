import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sodiq Oloyede | Full-Stack Engineer",
  description:
    "Full-stack engineer building software across healthcare, artificial intelligence and real-time collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}