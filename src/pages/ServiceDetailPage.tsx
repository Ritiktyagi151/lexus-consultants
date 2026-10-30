import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { contact, services } from "../data";
import { PageHero, PageShell } from "../components/Page";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/services" replace />;
  const steps = ["Consultation", "Document collection", "Verification", "Application filing", "Authority processing", "Approval", "Post-approval compliance"];
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
            <h2 className="font-display text-2xl font-bold text-ink">What this engagement covers</h2>
            <p className="mt-3 text-mutedfg">
              Lexus Consultants provides this service from its New Delhi base and supports clients in locations including Bangalore, Mumbai, Chennai and Chandigarh. The work is tailored to the applicable requirements and your organisation's needs.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 rounded-xl border border-line bg-cream p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" /> {p}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-2xl font-bold text-ink">How the process works</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((st, i) => (
                <li key={st} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-display font-bold text-ink">{st}</div>
                    <p className="text-sm text-mutedfg">The exact steps depend on the service, applicable requirements and information available for your organisation.</p>
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
                Book compliance audit <ArrowRight className="h-4 w-4" />
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
