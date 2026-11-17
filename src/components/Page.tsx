import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./ui";
import { WordReveal } from "./motion";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-[12px] text-mutedfg">
      <Link to="/" className="hover:text-navy-900">Home</Link>
      {items.map((it) => (
        <span key={it.label} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" />
          {it.to ? (
            <Link to={it.to} className="hover:text-navy-900">{it.label}</Link>
          ) : (
            <span className="font-semibold text-navy-900">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  highlight = [],
  crumbs,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  highlight?: string[];
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream pt-36 pb-12 md:pt-44 md:pb-16">
      <div className="grid-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Breadcrumb items={crumbs} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[1.95rem] leading-[1.12] font-bold tracking-tight text-ink md:text-[3.1rem]">
            <WordReveal text={title} highlight={highlight} />
          </h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-mutedfg">{sub}</p>
        </div>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
