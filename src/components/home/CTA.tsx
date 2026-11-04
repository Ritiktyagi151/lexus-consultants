import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { contact } from "../../data";
import { WhatsAppIcon } from "../WhatsAppIcon";

/* ============================ CLOSING CTA BANNER ============================ */
export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-navy-950 py-10 text-white md:py-18">
      <div className="grid-lines absolute inset-0 opacity-40 pointer-events-none" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-crimson-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:gap-8 sm:px-6 lg:flex-row">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300 sm:px-3.5 sm:text-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
            Confidential Labour Law Evaluation
          </div>
          <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-white sm:mt-4 sm:text-2xl md:text-4xl">
            Turn statutory compliance into a strategic corporate asset.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-300 sm:mt-3 sm:text-sm md:text-base">
            Consult directly with a senior Lexus labour law advocate. Zero obligation, full attorney-client confidentiality, and clear Pan-India compliance roadmap.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:items-center sm:gap-3.5">
          <Link
            to="/contact"
            className="group col-span-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson-600 px-5 py-3 text-[11px] font-bold text-white shadow-xl shadow-crimson-600/30 transition hover:bg-crimson-500 sm:col-span-1 sm:w-auto sm:px-8 sm:py-4 sm:text-xs"
          >
            <span>Book Chamber Consultation</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

          <a
            href={contact.phoneHref}
            className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2 py-3 text-[9px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto sm:gap-2 sm:px-6 sm:py-4 sm:text-xs"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            <span>{contact.phone}</span>
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-2 py-3 text-[10px] font-bold text-white shadow-lg transition hover:brightness-105 sm:w-auto sm:gap-2 sm:px-5 sm:py-4 sm:text-xs"
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
