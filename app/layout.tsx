import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Av IT",
  description: "För hemtentan",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 border-b">
          <h1 className="text-xl font-bold my-2">Test Av IT</h1>
        </header>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="/" className="navbar-link">
                Hem
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/login" className="navbar-link">
                Logga in
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto p-4">
          <main className="box">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
