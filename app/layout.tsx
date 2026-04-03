import type { Metadata } from "next";
import { Fira_Code, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const bodyFont = Fira_Code({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Share_Tech_Mono({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ElitechWiz | Premium Technology Partner",
  description:
    "ElitechWiz delivers focused, high-integrity technology services for businesses that need confident execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
