import { monthlyDues, annualDues } from "../data";
import { PageHero, PageShell } from "../components/Page";

export function CalendarPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Compliance Calendar"
        title="Plan recurring compliance work with clarity."
        sub="A planning checklist for payroll, registrations, records and periodic returns. Specific obligations and deadlines vary by law, state and establishment."
        crumbs={[{ label: "Compliance Calendar" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-xl font-bold text-ink">Recurring compliance activities</h2>
          <p className="mt-2 text-sm leading-relaxed text-mutedfg">Use this as a planning prompt, not a due-date calendar. Confirm applicable dates and requirements for each state and establishment before filing.</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr><th className="px-4 py-3">Cadence</th><th className="px-4 py-3">Task</th><th className="px-4 py-3">Law</th></tr>
              </thead>
              <tbody>
                {monthlyDues.map((r) => (
                  <tr key={r.task} className="border-t border-line odd:bg-cream">
                    <td className="px-4 py-3 font-bold text-navy-900">{r.day}</td>
                    <td className="px-4 py-3">{r.task}</td>
                    <td className="px-4 py-3 text-mutedfg">{r.law}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="mt-12 font-display text-xl font-bold text-ink">Periodic reviews and filings</h2>
          <ul className="mt-4 space-y-3">
            {annualDues.map((r) => (
              <li key={r.task} className="flex justify-between gap-4 rounded-xl border border-line bg-cream px-5 py-4 text-sm">
                <span className="font-medium text-ink">{r.task}</span>
                <span className="shrink-0 font-bold text-crimson-600">{r.when}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
