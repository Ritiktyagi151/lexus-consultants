import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqs } from "../../data";
import { SectionHead } from "../ui";
import { motion, EASE } from "../motion";

/* ============================ FAQS ============================ */
export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faqs" className="bg-muted py-14 md:py-18">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHead
          compact
          eyebrow="Frequently Asked Questions"
          title="Common Questions Answered."
          sub="Clear, straightforward answers on labour compliance retainers, audits, and statutory requirements."
        />

        <div className="mt-8 space-y-3">
          {faqs.slice(0, 4).map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition duration-200 ${
                  isOpen ? "border-navy-900 bg-white shadow-md" : "border-line bg-white/80 hover:border-navy-900/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left md:p-5"
                >
                  <span className="font-display text-sm font-bold text-ink sm:text-[15px]">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-navy-900">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                    >
                      <p className="px-4 pb-4 text-xs leading-relaxed text-mutedfg md:px-5 md:pb-5 sm:text-sm">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/faqs"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-2.5 text-xs font-bold text-navy-900 shadow-sm transition hover:border-navy-900 hover:bg-gold-50"
          >
            <span>View all questions &amp; answers</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
