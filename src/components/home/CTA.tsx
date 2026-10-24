import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { contact } from "../../data";
import { WhatsAppIcon } from "../WhatsAppIcon";

/* ============================ CLOSING CTA BANNER ============================ */
export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-14 md:py-18 text-white border-t border-white/10">
      <div className="grid-lines absolute inset-0 opacity-40 pointer-events-none" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-crimson-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-300">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
            Confidential Labour Law Evaluation
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
            Turn statutory compliance into a strategic corporate asset.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Consult directly with a senior Lexus labour law advocate. Zero obligation, full attorney-client confidentiality, and clear Pan-India compliance roadmap.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <Link
            to="/contact"
            className="group shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-crimson-600 px-8 py-4 text-xs font-bold text-white shadow-xl shadow-crimson-600/30 transition hover:bg-crimson-500"
          >
            <span>Book Chamber Consultation</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

          <a
            href={contact.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            <span>{contact.phone}</span>
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-xs font-bold text-white shadow-lg transition hover:brightness-105"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4 text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
