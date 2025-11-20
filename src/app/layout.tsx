import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dummy Auth App",
  description: "Auth routing setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Liberation+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-liberation">{children}</body>
    </html>
  );
}
