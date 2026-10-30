import { MapPin, Building2 } from "lucide-react";
import { contact, offices, cities } from "../data";
import { PageHero, PageShell } from "../components/Page";

export function LocationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pan India Presence"
        title="Headquartered in Delhi. Serving all of India."
        sub="Lexus publishes its head-office and branch contact details, and describes its labour law consultancy support as Pan India."
        crumbs={[{ label: "Locations" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-line bg-cream p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400"><Building2 className="h-6 w-6" /></span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">Head office — Vikas Puri, New Delhi</h3>
                  <p className="mt-2 text-mutedfg">{contact.address.join(" ")}</p>
                  <p className="mt-1 text-sm">{contact.phone} · {contact.mobile} · {contact.email}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-navy-950 border border-line">Executive Chambers</span>
                    <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-navy-950 border border-line">Central Law Library</span>
                    <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-navy-950 border border-line">Filing Operations Hub</span>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-md">
                <img src="/images/office/executive-chamber.jpg" alt="Vikas Puri Head Office consultation chamber" className="aspect-video w-full object-cover" />
                <div className="p-3 text-center text-xs font-semibold text-navy-900">
                  Client Consultation Chamber · Vikas Puri HQ
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {offices.filter((office) => !office.primary).map((office) => (
              <article key={office.city} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display font-bold text-navy-900">{office.city}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedfg">{office.address}</p>
              </article>
            ))}
          </div>
          <h3 className="mt-12 font-display text-xl font-bold text-ink">Service locations</h3>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {cities.map((c) => (
              <div key={c} className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink">
                <MapPin className="h-4 w-4 text-crimson-600" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
