export interface OfficePhoto {
  id: string;
  src: string;
  title: string;
  category: "all" | "leadership" | "chambers" | "library" | "operations";
  categoryLabel: string;
  roleOrLocation: string;
  description: string;
  featured?: boolean;
}

export interface OfficeVideo {
  id: string;
  src: string;
  title: string;
  poster: string;
  categoryLabel: string;
  duration: string;
  description: string;
}

export const officePhotos: OfficePhoto[] = [
  {
    id: "managing-partner",
    src: "/images/office/managing-partner.jpg",
    title: "Managing Partner & Legal Counsel",
    category: "leadership",
    categoryLabel: "Leadership & Advocacy",
    roleOrLocation: "Senior Advocate · Lexus Consultants",
    description: "Leading the institutional labour law practice with over three decades of legal expertise in industrial disputes, compliance audits, and employer representation.",
    featured: true,
  },
  {
    id: "executive-chamber",
    src: "/images/office/executive-chamber.jpg",
    title: "Executive Consultation Chamber",
    category: "chambers",
    categoryLabel: "Private Chambers",
    roleOrLocation: "Head Office · Vikas Puri, New Delhi",
    description: "Confidential meeting chamber designed for private corporate consultations, strategic labour negotiations, and domestic enquiry hearings.",
    featured: true,
  },
  {
    id: "law-library",
    src: "/images/office/law-library.jpg",
    title: "Central Labour Law Library & Case Archive",
    category: "library",
    categoryLabel: "Legal Library",
    roleOrLocation: "Head Office Law Wing",
    description: "Houses comprehensive volumes of Supreme Court and High Court labour decisions, Factory Acts, Service Cases Today, and the new 4 Labour Codes commentaries.",
    featured: true,
  },
  {
    id: "operations-team",
    src: "/images/office/operations-team.jpg",
    title: "Statutory Compliance & Operations Center",
    category: "operations",
    categoryLabel: "Compliance Operations",
    roleOrLocation: "Operations Department",
    description: "Dedicated team of compliance analysts and payroll specialists processing monthly PF, ESI, Professional Tax, Labour Welfare Fund filings, and statutory registers.",
    featured: true,
  },
  {
    id: "consultants-desk",
    src: "/images/office/consultants-desk.jpg",
    title: "Labour Law Advisory & Drafting Desks",
    category: "operations",
    categoryLabel: "Compliance Operations",
    roleOrLocation: "Advisory & Research Wing",
    description: "Specialists preparing formal replies to show-cause notices, drafting employment agreements, and reviewing workforce compliance standards.",
  },
  {
    id: "office-corridor",
    src: "/images/office/office-corridor.jpg",
    title: "Client Lounge & Reference Corridor",
    category: "chambers",
    categoryLabel: "Private Chambers",
    roleOrLocation: "Reception & Consultation Wing",
    description: "Comfortable receiving lounge and reference shelves welcoming corporate HR directors, factory managers, and enterprise leadership.",
  },
];

export const officeVideos: OfficeVideo[] = [
  {
    id: "office-tour-1",
    src: "/images/office/office-tour-1.mp4",
    title: "Lexus Headquarters & Consultation Chambers Tour",
    poster: "/images/office/executive-chamber.jpg",
    categoryLabel: "Head Office Walkthrough",
    duration: "Office Tour · Part 1",
    description: "A comprehensive look inside our Vikas Puri New Delhi headquarters, showing client meeting suites and collaborative practice zones.",
  },
  {
    id: "office-tour-2",
    src: "/images/office/office-tour-2.mp4",
    title: "Legal Research Library & Operations Center",
    poster: "/images/office/law-library.jpg",
    categoryLabel: "Research & Operations",
    duration: "Office Tour · Part 2",
    description: "Inside the library archive and active operations floor handling monthly statutory filings and inspections for clients across India.",
  },
];
