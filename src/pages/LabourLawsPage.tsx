import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { labourCodes, laws, advisory } from "../data";
import { SectionHead } from "../components/ui";
import { PageHero, PageShell } from "../components/Page";

export function LabourLawsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Labour laws and compliance"
        title="Understand the rules that shape your workplace."
        sub="Lexus advises businesses on labour legislation, statutory compliance, employee matters and representation. Requirements depend on your workforce, operations and location."
        crumbs={[{ label: "Labour Laws" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="India's Labour Codes" title="Four Codes, a consolidated framework." sub="The four Labour Codes came into force on 21 November 2025. State rules and transition requirements may affect what applies to a particular establishment." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {labourCodes.map((code, i) => (
              <article key={code.title} className="rounded-2xl border border-line bg-cream p-6 md:p-7">
                <span className="text-xs font-bold tracking-[0.15em] text-crimson-600 uppercase">Code 0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-900">{code.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mutedfg">{code.desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-mutedfg">The list below names legislation and subject areas reflected in Lexus's published service information. Several central enactments have been consolidated into the Labour Codes; applicability and current transition rules should be checked for each workplace and state.</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-navy-900 underline">
            <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2200433&lang=1&reg=3" target="_blank" rel="noreferrer">Government of India: Labour Codes announcement</a>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHead center={false} eyebrow="Legislation and subject areas" title="Compliance coverage" sub="Support spans registrations, periodic filings, registers, returns, inspection support and advice on employment matters." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {laws.map((law) => <li key={law} className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink">{law}</li>)}
            </ul>
          </div>
          <div>
            <SectionHead center={false} eyebrow="Advisory and representation" title="Workplace matters we advise on" />
            <ul className="mt-8 space-y-3">
              {advisory.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-line bg-white p-4 text-sm text-ink"><CheckCircle2 className="h-5 w-5 shrink-0 text-crimson-600" />{item}</li>)}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">Discuss your requirements <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
