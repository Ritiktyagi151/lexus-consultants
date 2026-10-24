import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bell, CalendarDays, ExternalLink, ShieldAlert, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { legalUpdates } from "../data";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function UpdatesAnnouncement() {
  // Toast popup visibility
  const [showToast, setShowToast] = useState(false);
  // Full detailed modal visibility
  const [modalOpen, setModalOpen] = useState(false);
  // Active selected tab in detailed modal
  const [selectedUpdateIndex, setSelectedUpdateIndex] = useState(0);

  const latestUpdate = legalUpdates[0];

  useEffect(() => {
    // Show toast after a polite delay (1.2 seconds) so page loads cleanly first
    const timer = setTimeout(() => {
      try {
        const dismissed = window.sessionStorage.getItem("lexus-bulletin-dismissed");
        if (!dismissed) {
          setShowToast(true);
        }
      } catch {
        setShowToast(true);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const dismissToast = () => {
    setShowToast(false);
    try {
      window.sessionStorage.setItem("lexus-bulletin-dismissed", "true");
    } catch {
      // Storage unavailable fallback
    }
  };

  const openFullModal = (index = 0) => {
    setSelectedUpdateIndex(index);
    setShowToast(false);
    setModalOpen(true);
  };

  const activeModalUpdate = legalUpdates[selectedUpdateIndex] || latestUpdate;

  return (
    <>
      {/* Floating Trigger Button (Neatly docked in the right action group) */}
      <div className="fixed bottom-[180px] right-5 z-40">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="group relative grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-navy-950 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:text-crimson-600"
          aria-label="View statutory compliance alerts"
          title="View statutory compliance alerts"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-crimson-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
            {legalUpdates.length}
          </span>
        </button>
      </div>

      {/* Sleek Floating Toast Announcement (Non-blocking bottom-left card) */}
      <AnimatePresence>
        {showToast && !modalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-5 left-4 right-4 z-50 max-w-md sm:left-6 sm:right-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-950 p-5 text-white shadow-2xl ring-1 ring-white/15">
              {/* Gold accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-gold-400 to-crimson-600" />

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-crimson-600/30 px-2 py-0.5 text-[10px] font-bold tracking-wider text-crimson-300 uppercase border border-crimson-500/40">
                    <ShieldAlert className="h-3 w-3" /> Gazette Alert
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {formatDate(latestUpdate.publishedAt)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={dismissToast}
                  className="rounded-full p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Dismiss announcement"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <h3 className="mt-2.5 font-display text-sm font-bold leading-snug text-white sm:text-base">
                {latestUpdate.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-300">
                {latestUpdate.summary}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                <button
                  type="button"
                  onClick={() => openFullModal(0)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-gold-300 transition hover:text-gold-200"
                >
                  Read Employer Action Guide <ChevronRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={dismissToast}
                  className="text-[11px] font-semibold text-slate-400 hover:text-slate-200"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Redesigned Executive Detailed Bulletin Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] grid place-items-center overflow-y-auto bg-navy-950/75 p-4 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Executive Dark Header */}
              <div className="bg-navy-950 p-6 text-white sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-gold-400/20 px-3 py-0.5 text-[10px] font-bold tracking-wider text-gold-300 uppercase border border-gold-400/30">
                        Official Legal Advisory
                      </span>
                      <span className="text-xs text-slate-400">Delhi NCR · Pan-India</span>
                    </div>
                    <h2 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                      Statutory Compliance Bulletin
                    </h2>
                    <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                      Official gazette notifications and urgent action items for corporate HR & employers.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-crimson-600"
                    aria-label="Close modal"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Tab selector for multiple updates */}
                {legalUpdates.length > 1 && (
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {legalUpdates.map((update, idx) => (
                      <button
                        key={update.id}
                        onClick={() => setSelectedUpdateIndex(idx)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                          selectedUpdateIndex === idx
                            ? "bg-gold-500 text-navy-950 shadow-md"
                            : "bg-white/10 text-slate-300 hover:bg-white/15"
                        }`}
                      >
                        {update.tag.split("·")[0]} Notice ({formatDate(update.publishedAt)})
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Bulletin Content Body */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
                  <span className="rounded-md bg-gold-50 px-2.5 py-1 text-xs font-bold text-navy-900 border border-gold-200">
                    {activeModalUpdate.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-mutedfg">
                    <CalendarDays className="h-3.5 w-3.5 text-crimson-600" />
                    Effective Date: {formatDate(activeModalUpdate.effectiveAt)}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-navy-950 sm:text-xl">
                  {activeModalUpdate.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mutedfg">
                  {activeModalUpdate.summary}
                </p>

                {/* Actionable Box */}
                <div className="mt-5 rounded-2xl border border-crimson-200 bg-crimson-50/60 p-4 sm:p-5">
                  <h4 className="text-xs font-bold tracking-wider text-crimson-700 uppercase">
                    Mandatory Employer Action:
                  </h4>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-navy-950 sm:text-sm">
                    {activeModalUpdate.employerAction}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={activeModalUpdate.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-crimson-600 transition hover:text-navy-900"
                  >
                    View Official Gazette Release ({activeModalUpdate.sourceLabel}) <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col-reverse gap-3 border-t border-line bg-muted p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-xs font-bold text-navy-900 transition hover:bg-cream"
                >
                  Dismiss Bulletin
                </button>
                <div className="flex items-center gap-2">
                  <Link
                    to="/insights"
                    onClick={() => setModalOpen(false)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-xs font-bold text-navy-900 transition hover:border-navy-900"
                  >
                    All Insights & Guides
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setModalOpen(false)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-crimson-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-crimson-500 shadow-md"
                  >
                    Consult on Compliance <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
