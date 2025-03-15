import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zael Portfolio",
  description: "Welcome to my professional portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-secondary text-white">

        {children}
      </body>
    </html>
  );
}
