import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { contact, services, serviceProcesses } from "../data";
import { PageHero, PageShell } from "../components/Page";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/services" replace />;
  const process = serviceProcesses[s.slug];
  return (
    <PageShell>
      <PageHero
        eyebrow={s.category}
        title={`${s.title} in Delhi NCR, Bangalore & Pan India`}
        sub={s.desc}
        crumbs={[{ label: "Services", to: "/services" }, { label: s.title }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-2xl font-bold text-ink">How we support {s.title.toLowerCase()}</h2>
            <p className="mt-3 text-mutedfg">
              {process.overview}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 rounded-xl border border-line bg-cream p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" /> {p}
                </li>
              ))}
            </ul>
            {s.deliverables && (
              <div className="mt-10 rounded-2xl border border-line bg-cream p-6 md:p-7">
                <h2 className="font-display text-xl font-bold text-ink">{s.deliverablesHeading ?? "Engagement deliverables"}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mutedfg">A clear set of records, review outputs and follow-up actions tailored to this engagement.</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" /> {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <h2 className="mt-12 font-display text-2xl font-bold text-ink">Our {s.title.toLowerCase()} process</h2>
            <ol className="mt-6 space-y-4">
              {process.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-display font-bold text-ink">{step.title}</div>
                    <p className="text-sm text-mutedfg">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-line bg-cream p-5 sm:p-7 lg:sticky lg:top-36">
              <h3 className="font-display text-lg font-bold text-ink">Talk to a consultant</h3>
              <p className="mt-2 text-sm text-mutedfg">Contact our team to discuss your {s.title.toLowerCase()} requirements.</p>
              <Link to="/contact" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-3 text-sm font-bold text-white">
                Discuss this service <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={contact.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-navy-900">
                <Phone className="h-4 w-4 text-crimson-600" /> {contact.phone}
              </a>
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-xs font-bold tracking-wider text-mutedfg uppercase">Related services</p>
                <ul className="mt-3 space-y-2">
                  {services.filter((x) => x.slug !== s.slug).slice(0, 4).map((x) => (
                    <li key={x.slug}>
                      <Link to={`/services/${x.slug}`} className="text-sm font-medium text-navy-900 hover:text-crimson-600">{x.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
