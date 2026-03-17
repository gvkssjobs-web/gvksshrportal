import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";


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
      <body className="flex flex-col min-h-screen">
        <div className="print:hidden">
          <Navbar />
        </div>
        <main className="container mx-auto py-4 px-8 flex-1">
        {children}
        </main>
        <div className="print:hidden">
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
