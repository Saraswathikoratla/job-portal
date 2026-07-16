import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Job Board",
  description: "Find your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}