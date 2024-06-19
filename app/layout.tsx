import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const inter_300 = Inter({
  weight: "300",
  subsets: ["latin"],
  variable: "--inter_300",
});

const inter_500 = Inter({
  weight: "500",
  subsets: ["latin"],
  variable: "--inter_500",
});

const inter_600 = Inter({
  weight: "600",
  subsets: ["latin"],
  variable: "--inter_600",
});

export const metadata = {
  title: "Upekka's Personal Portfolio",
  description: "Upekka is a full-stack developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` font-TWKEverett !font-light text-gray-950 relative bg-[#090909] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {children}
      </body>
    </html>
  );
}
