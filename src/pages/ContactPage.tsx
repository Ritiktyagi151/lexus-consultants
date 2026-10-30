import { useState, type FormEvent } from "react";
import { ArrowUpRight, MapPin, Phone, Mail, Send, Link2 } from "lucide-react";
import { contact, offices, socialLinks, services } from "../data";
import { PageHero, PageShell } from "../components/Page";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}%0D%0ACompany: ${d.get("company")}%0D%0APhone: ${d.get("phone")}%0D%0AEmail: ${d.get("email")}%0D%0AService: ${d.get("service")}%0D%0A%0D%0A${d.get("message")}`;
    window.location.href = `mailto:${contact.email}?subject=Consultation - ${d.get("name")}&body=${body}`;
    setSent(true);
  };
  const input = "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-navy-900 focus:bg-white";
  const mapEmbedUrl = `${contact.maps.replace("maps.google.com/?q=", "maps.google.com/maps?q=")}&output=embed`;
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Lexus"
        title="Talk to a compliance expert."
        sub="Tell us about your business and compliance requirements. Our team will get in touch to understand how we can help."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {[
              { icon: MapPin, l: "Delhi — Head Office", v: `${contact.company} · ${contact.address.join(" ")}`, href: contact.maps, external: true },
              { icon: Phone, l: "Call", v: `${contact.phone} · ${contact.mobile}`, href: contact.phoneHref },
              { icon: Mail, l: "Email", v: contact.email, href: `mailto:${contact.email}` },
            ].map((c) => (
              <a key={c.l} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noreferrer" : undefined} className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-400"><c.icon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-[11px] font-bold tracking-wider text-mutedfg uppercase">{c.l}</span>
                  <span className="mt-1 block font-semibold text-ink">{c.v}</span>
                </span>
              </a>
            ))}
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white"><WhatsAppIcon className="h-5 w-5" /></span>
              <span><span className="block text-[11px] font-bold tracking-wider text-mutedfg uppercase">WhatsApp</span><span className="mt-1 block font-semibold text-ink">{contact.mobile}</span></span>
            </a>
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="relative">
                <img src="/images/office/executive-chamber.jpg" alt="Lexus Head Office Consultation Chambers" className="aspect-video w-full object-cover" />
                <div className="absolute top-3 left-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-[10px] font-bold text-gold-300 uppercase backdrop-blur-md">
                  Vikas Puri Chambers
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display text-sm font-bold text-navy-900">Head Office Consultation Chambers</h4>
                <p className="mt-1 text-xs leading-relaxed text-mutedfg">
                  Clients and corporate delegations are welcomed at our Vikas Puri chambers for in-person dispute conciliation, compliance audits, and legal retainers.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-cream">
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div>
                  <h3 className="font-display font-bold text-navy-900">Find our Delhi office</h3>
                  <p className="mt-1 text-xs text-mutedfg">Vikas Puri, New Delhi 110018</p>
                </div>
                <MapPin className="h-5 w-5 shrink-0 text-crimson-600" aria-hidden="true" />
              </div>
              <iframe
                title="Map to Lexus Consultants head office in Vikas Puri, New Delhi"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 sm:h-64"
              />
              <a href={contact.maps} target="_blank" rel="noreferrer" className="block border-t border-line bg-white px-5 py-3 text-xs font-bold text-navy-900 transition hover:text-crimson-600">
                Open directions in Google Maps <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-cream p-5">
              <h3 className="font-display font-bold text-navy-900">Additional office addresses</h3>
              <p className="mt-1 text-xs leading-relaxed text-mutedfg">Other addresses published on the official Lexus contact page:</p>
              <ul className="mt-4 space-y-4">
                {offices.filter((office) => !office.primary).map((office) => (
                  <li key={office.city}>
                    <span className="block text-xs font-bold text-ink">{office.city}</span>
                    <span className="mt-1 block text-sm text-mutedfg">{office.address}</span>
                  </li>
                ))}
              </ul>

            </div>
            <div className="rounded-2xl border border-line bg-cream p-5">
              <h3 className="font-display font-bold text-navy-900">Connect with Lexus</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-900"><Link2 className="h-4 w-4" />{social.label}</a>)}
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-3xl border border-line p-8 shadow-xl lg:col-span-7">
            <h3 className="max-w-full break-words font-display text-xl leading-tight font-bold text-ink sm:text-2xl">Request a consultation</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Full name *" className={input} />
              <input name="company" placeholder="Company" className={input} />
              <input required name="phone" placeholder="Phone *" className={input} />
              <input name="email" type="email" placeholder="Email" className={input} />
              <select name="service" className={`${input} sm:col-span-2`} defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
              <textarea name="message" rows={4} placeholder="How can we help?" className={`${input} sm:col-span-2`} />
            </div>
            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 py-3.5 text-sm font-bold text-white">
              <Send className="h-4 w-4 text-gold-400" /> Submit evaluation request
            </button>
            {sent && <p className="mt-3 text-center text-sm text-emerald-700">Your email client is ready to send the enquiry.</p>}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
