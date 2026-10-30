import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { faqs, extraFaqs } from "../data";
import { PageHero, PageShell } from "../components/Page";

export function FaqsPage() {
  const all = [...faqs, ...extraFaqs];
  const [open, setOpen] = useState(0);
  const [q, setQ] = useState("");
  const list = all.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase()));
  return (
    <PageShell>
      <PageHero
        eyebrow="Frequently Asked"
        title="Everything you wanted to know about compliance."
        sub="Straight answers from Lexus consultants — on PF, ESIC, labour law, licences, payroll and pricing."
        crumbs={[{ label: "FAQs" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 flex items-center gap-3 rounded-xl border border-line bg-cream px-4 py-3">
            <Search className="h-4 w-4 text-mutedfg" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search FAQs…" className="w-full bg-transparent text-sm outline-none" />
          </div>
          <div className="space-y-3">
            {list.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-line bg-cream">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-display font-bold text-ink">{f.q}</span>
                  <span className="text-navy-900">{open === i ? "–" : "+"}</span>
                </button>
                {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-mutedfg">{f.a}</p>}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-mutedfg">
            Didn't find your answer? <Link to="/contact" className="font-bold text-navy-900 underline">Ask a consultant</Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
