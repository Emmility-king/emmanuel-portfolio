import Link from "next/link";
import type { ReactNode } from "react";
import { sectionNumber, type SectionHref } from "@/lib/site";

type RouteHeaderProps = {
  href: SectionHref;
  tag: string;
  className?: string;
  children?: ReactNode;
};

export function RouteHeader({ href, tag, className, children }: RouteHeaderProps) {
  return (
    <header className={className ? `route-header ${className}` : "route-header"}>
      <div className="route-header-inner">
        <Link href="/" className="back-link">← Back home</Link>
        <span className="route-tag">{tag} / {sectionNumber(href)}</span>
      </div>
      {children}
    </header>
  );
}
