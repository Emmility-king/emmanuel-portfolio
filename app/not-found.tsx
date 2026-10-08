import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="route-shell">
      <header className="route-header">
        <div className="route-header-inner">
          <Link href="/" className="back-link">← Back home</Link>
          <span className="route-tag">Error / 404</span>
        </div>
        <h1>This page doesn&apos;t exist.</h1>
        <p>The link may be broken or the page may have moved. Head back home to explore the rest of the portfolio.</p>
      </header>
    </main>
  );
}
