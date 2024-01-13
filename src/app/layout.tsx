import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

// Initialize the Inter font from Google Fonts with the Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the page
export const metadata: Metadata = {
  title: "Amit Sen | Software Enthusiast",
  description:
    "Amit Sen is a Senior Software Engineer with 12 years of experience.",
};

// RootLayout component definition
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Setting the language of the document to English
    <html lang="en" className="!scroll-smooth">
      {/* Setting up the body of the document with custom styles */}
      <body
        className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-100 dark:text-opacity-90`}
      >
        {/* Fixed background divs for gradient effect */}
        <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
          {/* First gradient circle */}
          <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          {/* Second gradient circle */}
          <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0a0531]"></div>
        </div>

        {/* Container for main content which is scrollable over the fixed background */}
        <div className="relative z-20">
          <ActiveSectionContextProvider>
            {/* Header component */}
            <Header />
            {/* Children components - the main content of the page */}
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>

          <ThemeSwitch />
        </div>
      </body>
    </html>
  );
}
