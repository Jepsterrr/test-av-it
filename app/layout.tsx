import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Av IT",
  description: "För hemtentan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-timesnewroman">
        <div className="container mx-auto p-4">
          <main className="box">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
