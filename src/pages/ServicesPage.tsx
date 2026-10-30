import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "../data";
import { Icon } from "../components/ui";
import { PageHero, PageShell } from "../components/Page";

export function ServicesPage() {
  const cats = ["All", ...Array.from(new Set(services.map((s) => s.category)))];
  const [cat, setCat] = useState("All");
  const list = services.filter((s) => cat === "All" || s.category === cat);
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="Every compliance you need, handled."
        sub="From registration to representation — labour law, payroll, licences and HR under one roof across Delhi NCR, Bangalore and Pan India."
        crumbs={[{ label: "Services" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2.5 text-xs font-bold ${cat === c ? "bg-navy-900 text-white" : "border border-line bg-cream text-mutedfg"}`}>
                {c}
              </button>
            ))}
          </div>
          <Link to="/labour-law-consultants" className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-line bg-cream px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-navy-900 hover:bg-white">
            Read our labour law consultancy guide <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-7 transition hover:-translate-y-1 hover:border-navy-900 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="mt-5 text-[10px] font-bold tracking-wider text-crimson-600 uppercase">{s.category}</span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-mutedfg">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-900">
                  Explore service <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
