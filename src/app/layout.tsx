import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";


export const metadata: Metadata = {
  title: "Gvkss HR portal",
  description: "Gvkss Software for HR portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto py-4 px-8">
        {children}
        </main>
        
      </body>
    </html>
  );
}
