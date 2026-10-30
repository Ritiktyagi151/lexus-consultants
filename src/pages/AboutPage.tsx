import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whyUs, journey, stats } from "../data";
import { Icon, SectionHead } from "../components/ui";
import { Item, Stagger, Counter } from "../components/motion";
import { PageHero, PageShell } from "../components/Page";

export function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Lexus Consultants"
        title="Built on trust. Driven by compliance."
        sub="Lexus is a professional consultancy helping businesses stay compliant with labour laws and government regulations across India — Advocates and Management Consultants for Industrial Matters."
        crumbs={[{ label: "About" }]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-navy-900/10 bg-navy-950 shadow-2xl">
              <img src="/images/office/law-library.jpg" alt="Statutory Law Library at Lexus Consultants" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-bold tracking-wider text-gold-300 uppercase border border-gold-400/30">
                  Legal Practice
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">Two Decades of Industrial &amp; Labour Advocacy</h3>
                <p className="mt-1 text-xs text-slate-300">Guiding Indian corporate retainers, factory compliance and dispute defense.</p>
              </div>
            </div>
            {/* Inset chamber preview */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block w-48 overflow-hidden rounded-2xl border-2 border-white bg-white shadow-2xl">
              <img src="/images/office/executive-chamber.jpg" alt="Consultation chamber" className="aspect-video w-full object-cover" />
              <div className="p-2.5 text-[10px] font-bold text-navy-900">Vikas Puri Chamber</div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">Compliance shouldn't slow your business down.</h2>
            <p className="mt-4 leading-relaxed text-mutedfg">
              We help businesses in Delhi, Delhi NCR, Bangalore and across India manage labour law compliance and consultancy. A missed requirement can lead to penalties, legal disputes and reputational damage. Our experienced team helps employers understand their obligations and take practical steps to meet them.
            </p>
            <p className="mt-4 leading-relaxed text-mutedfg">
              We work closely with HR teams, business owners and finance departments, tailoring support to each organisation's industry, workforce size and operating needs. Our services include statutory registrations, payroll compliance, labour law audits, contract labour management, employee welfare and representation.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-line bg-cream p-5">
                  <div className="font-display text-3xl font-extrabold text-navy-900">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-mutedfg">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chambers & Facilities Gallery Section */}
      <section className="bg-cream py-16 md:py-20 border-y border-line">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Our Facilities & Chambers"
            title="A closer look inside our practice environment."
            sub="Our Delhi head office brings together confidential advisory chambers, a vast statutory precedent library, and dedicated compliance operations under one roof."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:shadow-xl">
              <div className="overflow-hidden bg-navy-950">
                <img src="/images/office/executive-chamber.jpg" alt="Executive consultation chamber" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold tracking-wider text-crimson-600 uppercase">Consultation Suite</span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-900">Executive Consultation Chamber</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedfg">
                  Private, confidential chambers for high-stakes corporate discussions, union conciliation strategy, and domestic enquiry hearings.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:shadow-xl">
              <div className="overflow-hidden bg-navy-950">
                <img src="/images/office/law-library.jpg" alt="Statutory law library" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold tracking-wider text-crimson-600 uppercase">Precedent Archive</span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-900">Central Law Library</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedfg">
                  Houses over 1,000 treatises and case digests spanning 29 Central laws, the 4 new Labour Codes, and decades of industrial tribunal awards.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:shadow-xl">
              <div className="overflow-hidden bg-navy-950">
                <img src="/images/office/operations-team.jpg" alt="Compliance operations floor" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold tracking-wider text-crimson-600 uppercase">Filing & Payroll Center</span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-900">Statutory Operations Team</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedfg">
                  Full-time compliance officers preparing monthly ECR files, PF/ESI challans, Professional Tax returns, and audit documentation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-4">
              <img src="/images/office/office-corridor.jpg" alt="Lexus reception" className="h-16 w-20 rounded-xl object-cover" />
              <div>
                <h4 className="font-display font-bold text-navy-900">Schedule a visit to our Vikas Puri chambers</h4>
                <p className="text-xs text-mutedfg">Meet our senior advocates and compliance team in person for a confidential case evaluation.</p>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-crimson-600">
              Book a chamber consultation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Why Choose Us" title="Four reasons clients stay with Lexus." />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <Item key={w.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <Icon name={w.icon} className="h-8 w-8 text-crimson-600" />
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm text-mutedfg">{w.desc}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Our History and Practice" title="More Than Two Decades in Labour Law Consultancy." sub="Lexus describes itself as Advocates and Management Consultants for Industrial Matters, combining legal experience with practical compliance support." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {journey.map((item) => (
              <article key={item.phase} className="rounded-2xl border border-line bg-cream p-7">
                <span className="text-xs font-bold tracking-[0.14em] text-crimson-600 uppercase">{item.phase}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mutedfg">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Our Promise" title="Transparent, dedicated, proactive." />
          <ul className="mx-auto mt-10 max-w-2xl space-y-3 text-sm">
            {["In-depth knowledge of Central and State labour laws", "Practical, business-friendly guidance", "Timely and accurate compliance management", "Transparent communication", "A long-term partnership approach", "Representation before labour authorities and courts"].map((t) => (
              <li key={t} className="flex gap-3 rounded-xl border border-line bg-cream p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-crimson-600" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
