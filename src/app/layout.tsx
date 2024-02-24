import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            "min-h-screen h-screen  overflow-clip  w-full max-h-screen px-3",
            inter.className,
            { "debug-screens": process.env.NODE_ENV === "development" }
          )}
        >
          <Navbar />
          <section className="w-full max-w-7xl mx-auto  h-[calc(100%-64px)] flex  ">
            <Sidebar className=" h-full" />
            <main className="p-3   h-full  w-full overflow-auto  ">
              {children}
            </main>
          </section>
        </body>
      </ThemeProvider>
    </html>
  );
}