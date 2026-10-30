import { MapPin } from "lucide-react";
import { cities } from "../../data";
import { Eyebrow } from "../ui";

/* ============================ PAN-INDIA PRESENCE ============================ */
export function Presence() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 p-8 text-white md:p-14">
          <div className="grid-lines absolute inset-0 opacity-50" />
          <img src="/images/golden-scales-and-gavel-emblem.png" alt="" aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 z-0 w-[min(58%,32rem)] -translate-y-1/2 object-contain opacity-[0.13]" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow light>Pan India Presence</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-bold md:text-2xl">
                Headquartered in Delhi. Providing services across India.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Personalised attention, quick and quality service to every client on a Pan-India basis at value price.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:col-span-7">
              {cities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-200 transition hover:bg-white hover:text-navy-950"
                >
                  <MapPin className="h-3.5 w-3.5 text-crimson-400" />
                  <span>{c}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
