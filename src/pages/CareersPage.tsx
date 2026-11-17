import { ArrowRight } from "lucide-react";
import { contact } from "../data";
import { SectionHead } from "../components/ui";
import { PageHero, PageShell } from "../components/Page";

export function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers at Lexus"
        title="Build a career in compliance that actually matters."
        sub="Almost three decades of practice. Real ownership from day one — with the mentorship to grow into a partner."
        crumbs={[{ label: "Careers" }]}
      />
      {/* Workplace Showcase */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Workplace & Culture"
            title="Inside Our Delhi Chambers & Operations Floor"
            sub="See where our compliance consultants, legal researchers and statutory analysts collaborate every day."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <img src="/images/office/operations-team.jpg" alt="Executive consultation chamber" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-wider text-crimson-600 uppercase">Consultation Suite</span>
                <h4 className="mt-1 font-display font-bold text-navy-900">Executive Consultation Chamber</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-mutedfg">Private, confidential chambers for high-stakes corporate discussions, union conciliation strategy, and domestic enquiry hearings.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <img src="/images/office/law-library.jpg" alt="Statutory law library" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-wider text-crimson-600 uppercase">Precedent Archive</span>
                <h4 className="mt-1 font-display font-bold text-navy-900">Central Law Library</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-mutedfg">Houses over 1,000 treatises and case digests spanning 29 Central laws, the 4 new Labour Codes, and decades of industrial tribunal awards.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <img src="/images/office/operations-team-working.jpeg" alt="Compliance team working together in the operations room" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-wider text-crimson-600 uppercase">Filing &amp; Payroll Center</span>
                <h4 className="mt-1 font-display font-bold text-navy-900">Statutory Operations Team</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-mutedfg">Full-time compliance officers preparing monthly ECR files, PF/ESI challans, Professional Tax returns, and audit documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-cream p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold text-navy-900">Interested in working with Lexus?</h2>
            <p className="mt-4 text-sm leading-relaxed text-mutedfg">Lexus describes its work culture as an important part of the employee experience. For career enquiries, share your background and area of interest with the team.</p>
            <a href={`mailto:${contact.email}?subject=Career%20enquiry`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">Email a career enquiry <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
