import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JILIKONI - Premium Assam Tea | Buy Authentic Assam Tea Online",
  description: "Discover the rich flavors of authentic Assam tea with JILIKONI. Our premium tea collection brings you the finest tea directly from the gardens of Assam. Shop now for an exquisite tea experience.",
  keywords: ["Assam tea", "premium tea", "Indian tea", "JILIKONI tea", "buy tea online", "authentic tea"],
  openGraph: {
    title: "JILIKONI - Premium Assam Tea",
    description: "Experience the finest Assam tea with JILIKONI. Shop our premium tea collection today.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="16x16 32x32 48x48" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
