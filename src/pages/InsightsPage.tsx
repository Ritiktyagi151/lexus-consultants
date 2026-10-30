import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { insights } from "../data";
import { SectionHead } from "../components/ui";
import { PageHero, PageShell } from "../components/Page";
import { LegalUpdates } from "../components/home/LegalUpdates";

export function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Labour law updates & employer insights."
        sub="Track dated regulatory changes with official sources, then explore practical guides for your compliance and HR teams."
        crumbs={[{ label: "Insights" }]}
      />
      <LegalUpdates />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead compact center={false} eyebrow="Guides & Explainers" title="Practical employer guidance." sub="Background and action-oriented reading on labour law compliance." />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((a) => (
            <Link key={a.slug} to={`/insights/${a.slug}`} className="group flex flex-col rounded-2xl border border-line bg-cream p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between text-[11px]">
                <span className="border-l-2 border-crimson-600 pl-2 font-bold tracking-wider text-crimson-700 uppercase">{a.tag}</span>
                <span className="text-mutedfg">{a.date}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink group-hover:text-navy-800">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-mutedfg">{a.desc}</p>
              <span className="mt-5 text-xs font-bold text-navy-900">{a.read} →</span>
            </Link>
          ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function InsightDetailPage() {
  const { slug } = useParams();
  const a = insights.find((x) => x.slug === slug);
  if (!a) return <Navigate to="/insights" replace />;
  return (
    <PageShell>
      <PageHero eyebrow={a.tag} title={a.title} sub={a.desc} crumbs={[{ label: "Insights", to: "/insights" }, { label: a.title }]} />
      <article className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold tracking-wider text-mutedfg uppercase">{a.date} · {a.read}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink">{a.body}</p>
          <p className="mt-6 leading-relaxed text-mutedfg">
            This note is general guidance drawn from Lexus practice in Delhi NCR, Bangalore and Pan India — not legal advice on your
            specific facts. Speak to a consultant before you act.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">
            Discuss with a consultant <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
