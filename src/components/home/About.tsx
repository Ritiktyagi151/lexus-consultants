import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../ui";
import { Reveal, WordReveal } from "../motion";

/* ============================ ABOUT (SafePoint Tempo) ============================ */
export function About() {
  const principles = [
    ["30 Years Practice", "Advocates & consultants with deep roots in Delhi NCR and Bangalore."],
    ["The Compliance Alarm Clock", "Proactive tracking before deadlines become damages or notices."],
    ["Single Accountability Partner", "All registers, challans, audits, and returns handled under one roof."],
    ["Value-Led Retainers", "Clear scope, transparent pricing, and zero hidden costs."],
  ];

  return (
    <section id="about" className="bg-white py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="relative lg:sticky lg:top-28 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl bg-navy-900 shadow-[0_30px_70px_-34px_rgba(9,23,61,0.4)] border border-navy-800">
              <img
                src="/new-img-vid/Confident Advocate in a Law Office.png"
                alt="Senior Advocate & Principal Consultant at Lexus Consultants"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4 rounded-full border border-gold-400/40 bg-navy-950/90 px-3 py-1 text-[11px] font-bold tracking-wider text-gold-300 uppercase backdrop-blur-md">
                Senior Advocate Leadership
              </div>

              <a
                href="#office-gallery"
                className="absolute right-4 bottom-4 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-navy-950/90 p-2 pr-3.5 backdrop-blur-md transition hover:border-gold-400 hover:bg-navy-900"
              >
                <img
                  src="/images/office/executive-chamber.jpg"
                  alt="Executive Consultation Chamber"
                  className="h-10 w-10 rounded-xl object-cover"
                />
                <div className="text-left">
                  <div className="text-[10px] font-bold tracking-wider text-gold-300 uppercase">View Chambers</div>
                  <div className="text-xs font-semibold text-white">Vikas Puri, New Delhi</div>
                </div>
              </a>
            </div>
            <figcaption className="mt-4 flex items-center justify-between border-b border-line pb-4 text-[11px] font-semibold tracking-[0.12em] text-mutedfg uppercase">
              <span>Advocates &amp; Industrial Consultants</span>
              <span>New Delhi · Pan India</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-7 lg:pt-3">
            <Reveal><Eyebrow>About Lexus Consultants</Eyebrow></Reveal>
            <h2 className="mt-4 max-w-2xl font-display text-[1.75rem] leading-[1.12] font-bold tracking-tight text-ink md:text-[2.3rem]">
              <WordReveal text="Three decades of trusted labour law advocacy." />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mutedfg md:text-base">
                We help employers, HR leaders and finance teams stay compliant with Indian labour legislation through hands-on statutory retainers, inspection defense, and tribunal representation.
              </p>
            </Reveal>

            <div className="mt-8 border-t border-line">
              {principles.map(([title, desc], i) => (
                <Reveal key={title} delay={i * 0.05}>
                  <div className="grid gap-2 border-b border-line py-4 sm:grid-cols-[48px_1fr] sm:items-center">
                    <span className="font-display text-base font-bold text-crimson-600">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">{title}</h3>
                      <p className="mt-0.5 max-w-xl text-xs leading-relaxed text-mutedfg sm:text-sm">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition hover:text-crimson-600">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
