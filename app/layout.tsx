import type { Metadata } from "next";

//fonts
import { Epilogue } from "next/font/google";

import "./globals.css";

const epilogue = Epilogue({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const openSans = Epilogue({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing - Prototype",
  description: "ED 2.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${epilogue.className} ${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
