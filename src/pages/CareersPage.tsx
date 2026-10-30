import { Link } from "react-router-dom";
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
              <img src="/images/office/operations-team.jpg" alt="Lexus Operations Workstations" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-wider text-crimson-600 uppercase">Operations Hub</span>
                <h4 className="mt-1 font-display font-bold text-navy-900">Compliance & Payroll Operations</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-mutedfg">Full-time specialists processing monthly returns, statutory registers, and client audit dossiers.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <img src="/images/office/consultants-desk.jpg" alt="Lexus Advisory & Legal Drafting Team" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-wider text-crimson-600 uppercase">Legal Drafting</span>
                <h4 className="mt-1 font-display font-bold text-navy-900">Advisory & Case Preparation</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-mutedfg">Collaborative work pods reviewing employment agreements, show-cause notices and policy handbooks.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <img src="/images/office/law-library.jpg" alt="Lexus Central Law Library" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-wider text-crimson-600 uppercase">Precedent Library</span>
                <h4 className="mt-1 font-display font-bold text-navy-900">Central Statutory Law Library</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-mutedfg">Over 1,000 treatises and case digests spanning 29 Central laws, the Labour Codes, and tribunal awards.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-navy-950 p-6 text-white md:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="text-xs font-bold tracking-wider text-gold-400 uppercase">Office Walkthrough</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">Experience our firm atmosphere</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Watch our office walkthrough tour to see the layout of our client conference chambers, research desks, and compliance operations center.
                </p>
                <Link to="/#office-gallery" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-gold-300 hover:text-white">
                  View high-definition video walkthroughs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/office/executive-chamber.jpg"
                  className="aspect-video w-full object-cover"
                >
                  <source src="/images/office/office-tour-1.mp4" type="video/mp4" />
                </video>
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
