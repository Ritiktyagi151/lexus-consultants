import { contact } from "../data";
import { PageHero, PageShell } from "../components/Page";

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const privacy = kind === "privacy";
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title={privacy ? "Privacy Policy" : "Terms of Use"}
        sub={privacy ? "How Lexus Consultants handles enquiry data submitted through this website." : "Terms governing use of the Lexus Consultants website and informational materials."}
        crumbs={[{ label: privacy ? "Privacy Policy" : "Terms of Use" }]}
      />
      <article className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-sm leading-relaxed text-mutedfg">
          {privacy ? (
            <>
              <p>Enquiries sent via the contact form or email are used only to respond to your request for labour-law consultancy. We do not sell personal data.</p>
              <p>Contact details (name, company, phone, email) are stored as needed to deliver the requested service and may be used to send compliance updates if you subscribe.</p>
              <p>For questions, write to {contact.email} or visit {contact.address.join(" ")}.</p>
            </>
          ) : (
            <>
              <p>Content on this site is general information on Indian labour law and statutory compliance, not legal advice on your specific facts. Confirm the current position before acting.</p>
              <p>Lexus Consultants is a labour law consultancy practice based at {contact.address.join(" ")}.</p>
              <p>Service engagements are governed by a separate retainer or engagement letter.</p>
            </>
          )}
        </div>
      </article>
    </PageShell>
  );
}
