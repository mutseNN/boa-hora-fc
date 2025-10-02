import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boa Hora FC",
  description: "Website oficial do Boa Hora FC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen flex flex-col">
        <header className="site-header">
          <h1 className="site-title">Boa Hora FC</h1>

          <nav className="top-nav" aria-label="Main navigation">
            <Link href="/" className="nav-link">Página Principal</Link>
            <Link href="/tenis-de-mesa" className="nav-link">Ténis de Mesa</Link>
            <Link href="/padel" className="nav-link">Padel</Link>
            <Link href="/cross-fit" className="nav-link">Cross-fit</Link>
            <Link href="/cafe-exterior" className="nav-link">Café Exterior</Link>
            <Link href="/campo-futsal" className="nav-link">Campo de Futsal</Link>
            <Link href="/sobre-nos" className="nav-link">Sobre Nós</Link>
            <Link href="/admin" className="login-btn">Log in</Link>
          </nav>
        </header>

        <main className="flex-1 container">{children}</main>

        <footer className="site-footer">
          Guilherme Pereira EFA56 {new Date().getFullYear()}
        </footer>

        /
      </body>
    </html>
  );
}
