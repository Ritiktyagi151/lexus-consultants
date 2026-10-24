import { industries } from "../../data";

/* ============================ SECTOR MARQUEE ============================ */
export function IndustriesMarquee() {
  const list = [...industries, ...industries];
  return (
    <section className="border-y border-line bg-muted/60 py-8">
      <div className="mx-auto mb-5 flex max-w-7xl flex-col items-start justify-between gap-2 px-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
        <p className="text-[10px] font-bold tracking-[0.16em] text-mutedfg uppercase sm:text-[11px] sm:tracking-[0.2em]">
          Trusted by Businesses Across India
        </p>
        <span className="text-[11px] font-medium text-mutedfg sm:text-xs">16+ Diverse Industrial Sectors</span>
      </div>
      <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee motion-reduce:animate-none flex w-max items-center gap-8">
          {list.map((i, idx) => (
            <span key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-[15px] font-semibold text-navy-950">{i}</span>
              <span className="h-px w-8 bg-crimson-500/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
