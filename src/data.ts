export const contact = {
  company: "Lexus Consultants Pvt. Ltd.",
  phone: "+91-11-45110704",
  phoneHref: "tel:+911145110704",
  mobile: "+91-9818111609",
  mobileHref: "tel:+919818111609",
  whatsapp: "https://wa.me/919818111609",
  email: "info@lexusconsultants.in",
  address: ["GG-1-23 B, Vikas Puri,", "New Delhi - 110018"],
  web: "www.lexusconsultants.in",
  maps: "https://maps.google.com/?q=GG-1-23+B,+Vikas+Puri,+New+Delhi+110018",
};

export const offices = [
  { city: "Delhi — Head Office", address: "GG-1-23 B, Vikas Puri, New Delhi - 110018", primary: true },
  { city: "Delhi — Okhla Office", address: "C 95, 2nd Floor, Okhla Industrial Area, Phase 1, New Delhi" },
  { city: "Mumbai Office", address: "No. 501, Building 4, Pocket II, Shivai Chowk, Near Abhyudaya Bank, Kannamwar Nagar 2, Vikhroli (East), Mumbai – 400083" },
  { city: "Chandigarh Office", address: "H. No. 776, Opposite Shiv Thakur Dwara Mandir, Manimajra, Chandigarh" },
  { city: "Bangalore Office", address: "No. 44/1, 2nd Floor, 2nd Main, Opp. Anand Co-operative Bank, Sheshadripuram, Bangalore – 560020" },
  { city: "Chennai Office", address: "No. 4/2, GNV Building, 34th Street, 4th Avenue, Ashok Nagar, Chennai – 600083, Tamil Nadu, India" },
  { city: "Hyderabad Office", address: "19-2-81/B/1 Khaja Pahadi Tadban Bahadurpura, Hyderabad – 500064" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lexus-consultants/" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Labour Laws", href: "/labour-laws" },
  { label: "Payroll & Benefits", href: "/calculators" },
  { label: "Locations", href: "/locations" },
  { label: "Calendar", href: "/calendar" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  practice: [
    { label: "About Lexus", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Labour Laws", href: "/labour-laws" },
    { label: "Locations", href: "/locations" },
    { label: "Careers", href: "/careers" },
  ],
  tools: [
    { label: "Compliance Planning", href: "/calendar" },
    { label: "Payroll & Benefits", href: "/calculators" },
    { label: "Insights", href: "/insights" },
    { label: "FAQs", href: "/faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export const stats = [
  { value: 29, suffix: "", label: "Central laws consolidated into the Codes" },
  { value: 4, suffix: "", label: "Labour Codes in force" },
  { value: 16, suffix: "+", label: "Industries represented" },
  { value: 25, suffix: "+", label: "Locations in the official service network" },
];

export type Service = {
  icon: string;
  title: string;
  slug: string;
  category: string;
  desc: string;
  points: string[];
  deliverables?: string[];
  deliverablesHeading?: string;
};

export const services: Service[] = [
  {
    icon: "Scale",
    title: "Labour & Employment Laws",
    slug: "labour-employment-laws",
    category: "Core Compliance",
    desc: "Substantial experience across labour-management relations, fair employment practices, benefit planning and litigation.",
    points: [
      "Cases in Labour Courts",
      "Employee Disputes",
      "Domestic Enquiry",
      "Trade Union issues",
      "Employment Connected agreements",
      "Drafting rules & regulations",
    ],
  },
  {
    icon: "Building2",
    title: "Establishment Compliance Management",
    slug: "establishment-compliance",
    category: "Core Compliance",
    desc: "End-to-end compliance for offices, shops and commercial establishments so the alarm clock always rings on time.",
    points: [
      "Shop & Establishment registration",
      "PF, ESI, PT & LWF filings",
      "Statutory registers & records",
      "Inspection support",
    ],
  },
  {
    icon: "Factory",
    title: "Factory Labour Compliance",
    slug: "factory-compliance",
    category: "Core Compliance",
    desc: "Complete Factories Act and allied compliance for manufacturing units across India.",
    points: [
      "Labour Compliances Pan India",
      "Registrations and Renewals",
      "Trade Licenses",
      "Statutory Registers and Records",
      "Manpower Audit",
      "Annual Returns and Reports",
    ],
  },

  {
    icon: "Users",
    title: "Manpower Outsourcing",
    slug: "manpower-outsourcing",
    category: "Workforce & Payroll",
    desc: "Delegate non-core functions and get skilled manpower with adequate professional qualification.",
    points: [
      "Flexibility in Hiring",
      "Cost and Time Saving",
      "Staff for Short Duration",
      "Focus on Core Business",
      "Team of Compliance Experts",
      "Control of Overheads",
    ],
  },
  {
    icon: "Calculator",
    title: "Payroll Management",
    slug: "payroll-management",
    category: "Workforce & Payroll",
    desc: "Monthly payroll administration from validated attendance and salary inputs through net pay, payslips, statutory deductions and payroll records.",
    points: [
      "Monthly salary calculations and payroll review",
      "Attendance, leave, overtime and loss-of-pay reconciliation",
      "PF, ESI, Professional Tax and Labour Welfare Fund deductions as applicable",
      "New-joiner, exit and full-and-final settlement processing",
      "Payroll registers, payslips and bank transfer statements",
      "TDS return and Form 16 support",
    ],
    deliverables: [
      "Reviewed monthly payroll and employee-wise net pay statement",
      "Payslips and bank transfer statement for the payroll cycle",
      "Payroll register and statutory deduction summaries",
      "PF, ESI, PT and LWF filing or payment support, where applicable",
      "Full-and-final settlement calculations for exiting employees",
      "Quarterly TDS return (24Q) and annual Form 16 support",
    ],
    deliverablesHeading: "Payroll cycle deliverables",
  },
  {
    icon: "HeartHandshake",
    title: "Employer Welfare & Benefits",
    slug: "employee-welfare-benefits",
    category: "Employee Welfare & Benefits",
    desc: "Practical support to map employee benefit obligations and administer statutory welfare processes across PF, ESI, gratuity, maternity benefits and workplace welfare.",
    points: [
      "Employee and establishment coverage reviews for applicable PF and ESI requirements",
      "Support with employee enrolment, contribution records and benefit administration workflows",
      "Gratuity eligibility reviews, calculations and exit-payment documentation",
      "Maternity benefit eligibility, leave and payment record guidance",
      "Employees’ compensation incident and claim documentation support",
      "Workplace welfare requirement reviews and employee benefit policy advice",
    ],
    deliverables: [
      "Location and workforce benefit applicability matrix",
      "PF and ESI coverage, enrolment and contribution review checklist",
      "Gratuity eligibility and calculation records for employee exits",
      "Maternity benefit leave, payment and recordkeeping checklist",
      "Employees’ compensation incident documentation checklist",
      "Workplace welfare and benefit policy action plan with owners and review dates",
    ],
    deliverablesHeading: "Employee welfare deliverables",
  },
  {
    icon: "ShieldCheck",
    title: "Labour Law Audits & Compliance Health Checks",
    slug: "labour-law-audits",
    category: "Core Compliance",
    desc: "Review compliance records, identify gaps, plan corrective steps and prepare for statutory inspections.",
    points: ["Review records and documentation", "Identify compliance gaps", "Corrective action guidance", "Inspection readiness", "Compliance calendar planning"],
  },
  {
    icon: "Users",
    title: "Contract Labour Management",
    slug: "contract-labour-management",
    category: "Workforce & Payroll",
    desc: "Support principal employers and contractors with registrations, records, wage practices, licence renewals and responsibilities.",
    points: ["Principal employer and contractor registrations", "Statutory registers and records", "Wage compliance support", "Licence renewals", "Guidance on employer responsibilities"],
  },

  {
    icon: "Scale",
    title: "Labour Disputes & Grievances",
    slug: "labour-disputes-grievances",
    category: "Advisory & Representation",
    desc: "Advice and representation for employment disputes, domestic enquiries, industrial relations and labour court matters.",
    points: ["Employee disputes and grievances", "Domestic enquiries", "Trade union issues", "Full and final settlements", "Representation before labour authorities and courts"],
  },
  {
    icon: "Building2",
    title: "HR Policy & Documentation Support",
    slug: "hr-policy-documentation",
    category: "Advisory & Representation",
    desc: "Review and prepare employment documentation, workplace policies, appointment letters and connected agreements.",
    points: ["Appointment letters", "Employment agreements", "HR policies and rules", "Workplace documentation", "Policy and process review"],
  },
  {
    icon: "MapPin",
    title: "Liaison with Government Authorities",
    slug: "government-liaison",
    category: "Advisory & Representation",
    desc: "Support for registrations, inspections, statutory filings and communication with relevant labour authorities.",
    points: ["Registration and licensing follow-up", "Inspection support", "Statutory filing assistance", "Labour authority representation"],
  },
  {
    icon: "Calculator",
    title: "Accounting Services",
    slug: "accounting-services",
    category: "Accounting",
    desc: "An integrated suite of services designed to solve all accounting and bookkeeping needs.",
    points: [
      "General accounting & budgeting",
      "Financial reporting & analysis",
      "Vendor reconciliation",
      "Accounts payable / receivable",
      "Past years' reconciliation",
    ],
  },
  {
    icon: "Flame",
    title: "Fire NOC Consultant",
    slug: "fire-noc",
    category: "Licensing",
    desc: "Trusted and genuine Fire NOC consultancy — get your Fire NOC licence in minimum days.",
    points: ["Documentation", "Application filing", "Follow-up with authorities"],
  },
  {
    icon: "Store",
    title: "Shop Act Consultants",
    slug: "shop-act",
    category: "Licensing",
    desc: "Get your Shop Act licence in minimum days with ease and minimal steps.",
    points: ["New registration", "Renewals & amendments", "Complete consultation"],
  },
  {
    icon: "UtensilsCrossed",
    title: "FSSAI License Consultants",
    slug: "fssai-license",
    category: "Licensing",
    desc: "Acquire your FSSAI licence officially granted by the Food Safety and Standards Authority of India.",
    points: ["Basic / State / Central licence", "Renewals", "Eating House licence"],
  },
  {
    icon: "ShieldCheck",
    title: "Labour Codes Implementation",
    slug: "labour-codes-implementation",
    category: "Core Compliance",
    desc: "Prepare your workplace policies, payroll and statutory records for the requirements of India's four Labour Codes.",
    points: ["Readiness and gap assessment", "Wage structure and payroll review", "Policy and document updates", "Implementation support"],
  },
];

export type ServiceProcessStep = { title: string; description: string };

export const serviceProcesses: Record<string, { overview: string; steps: ServiceProcessStep[] }> = {
  "labour-employment-laws": {
    overview: "We assess the employment issue, applicable laws and available records, then advise on a practical response or represent the organisation before the relevant forum.",
    steps: [
      { title: "Define the employment issue", description: "Review the dispute, workplace concern or proposed employment action and identify the people and decisions involved." },
      { title: "Map the applicable law", description: "Identify the relevant statutes, agreements, policies and procedural requirements for the matter." },
      { title: "Prepare the response", description: "Develop the advice, documentation, enquiry plan or settlement position suited to the facts." },
      { title: "Represent and follow through", description: "Support discussions or proceedings and track the actions required to close or manage the matter." },
    ],
  },
  "establishment-compliance": {
    overview: "For offices, shops and commercial establishments, we map the applicable state requirements, set up registrations and records, and organise recurring filings around the establishment's operations.",
    steps: [
      { title: "Map each establishment", description: "Collect location, workforce and business activity details to determine applicable state and central obligations." },
      { title: "Complete registrations", description: "Prepare and submit applicable establishment registrations, amendments or renewals using verified entity details." },
      { title: "Set up records and calendar", description: "Identify required registers, notices and returns, then map their owners and due dates." },
      { title: "Run recurring compliance", description: "Coordinate filing inputs, review records and address inspection or status queries as they arise." },
    ],
  },
  "factory-compliance": {
    overview: "Factory support starts with the unit's activity, workforce and site details. We map factory and allied obligations, coordinate licence requirements and maintain the reporting cycle.",
    steps: [
      { title: "Profile the factory", description: "Review site particulars, manufacturing activity, installed capacity and workforce to scope applicable requirements." },
      { title: "Plan licences and registrations", description: "List new applications, renewals and amendments, and gather the technical and entity records each requires." },
      { title: "Organise shop-floor records", description: "Map registers, notices, safety and employment records to responsible teams and operating routines." },
      { title: "Manage returns and inspections", description: "Track periodic reports and filings, prepare supporting records and coordinate responses to authority visits." },
    ],
  },
  "manpower-outsourcing": {
    overview: "We clarify the roles and service levels needed, source suitable personnel and coordinate onboarding and ongoing workforce administration with the client.",
    steps: [
      { title: "Specify the workforce need", description: "Confirm role profiles, skills, headcount, work location, duration and supervision expectations." },
      { title: "Source and screen candidates", description: "Identify available candidates against the agreed qualifications, experience and deployment timeline." },
      { title: "Coordinate deployment", description: "Complete agreed joining documentation and align start dates, reporting lines and site induction." },
      { title: "Review service delivery", description: "Monitor attendance, replacement needs and client feedback against the agreed staffing arrangement." },
    ],
  },
  "payroll-management": {
    overview: "We coordinate each payroll cycle from approved employee data through salary calculations, deductions and payroll outputs. The workflow includes review points for HR or finance before pay statements and statutory summaries are finalised.",
    steps: [
      { title: "Set up payroll rules and employee records", description: "Confirm salary structures, employee master data, pay dates, attendance inputs and applicable deduction settings." },
      { title: "Validate monthly changes", description: "Reconcile attendance, leave, overtime, incentives, new joiners, exits and approved salary changes against source records." },
      { title: "Calculate and review payroll", description: "Compute earnings, loss of pay, statutory deductions and net pay, then share exception and variance checks for approval." },
      { title: "Release payroll outputs and close the cycle", description: "Prepare payslips, bank transfer statements, payroll registers and agreed statutory filing or payment summaries." },
    ],
  },
  "employee-welfare-benefits": {
    overview: "We help employers understand which social security and welfare benefits apply to each establishment and employee group, then set up records and review workflows for enrolment, contributions, qualifying events and employee claims.",
    steps: [
      { title: "Map benefit coverage", description: "Review locations, workforce categories and establishment details to scope relevant PF, ESI, gratuity, maternity and welfare requirements." },
      { title: "Check eligibility and records", description: "Compare employee data, service history, wage records and existing benefit processes with the applicable coverage criteria." },
      { title: "Set up administration workflows", description: "Define how enrolments, contribution records, leave events, claims, gratuity cases and supporting documents move between HR, payroll and employees." },
      { title: "Review cases and ongoing compliance", description: "Support benefit calculations or documentation for employee events, reconcile recurring records and track agreed corrective actions." },
    ],
  },
  "labour-law-audits": {
    overview: "A compliance health check compares selected records and practices with applicable obligations, prioritises gaps by urgency and gives the team a practical correction plan.",
    steps: [
      { title: "Set the audit scope", description: "Agree the entities, locations, workforce groups, laws and review period to include in the assessment." },
      { title: "Examine evidence", description: "Review registrations, payroll inputs, returns, registers, policies and supporting payment records." },
      { title: "Rate findings and exposure", description: "Record missing, inconsistent or overdue items and distinguish urgent corrections from process improvements." },
      { title: "Issue a corrective action plan", description: "Assign practical actions, owners and target dates, with a follow-up review to track closure." },
    ],
  },
  "contract-labour-management": {
    overview: "We help principal employers and contractors coordinate licensing, workforce records and wage-related responsibilities for contract labour at each covered site.",
    steps: [
      { title: "Map parties and sites", description: "Identify principal employers, contractors, work locations, contract scope and deployed headcount." },
      { title: "Check licence and registration needs", description: "Review applicable thresholds and site requirements, then plan registrations, licences or renewals." },
      { title: "Align wage and attendance records", description: "Set expectations for attendance, wage evidence, deductions and supporting contractor submissions." },
      { title: "Reconcile monthly compliance", description: "Review site records and contractor evidence, flag gaps and document follow-up actions." },
    ],
  },
  "labour-disputes-grievances": {
    overview: "For employee grievances and industrial disputes, we establish the facts and procedural position, advise on options and support negotiation, enquiry or representation as needed.",
    steps: [
      { title: "Receive and classify the matter", description: "Capture the grievance or dispute, key dates, parties, requested outcome and any immediate workplace risks." },
      { title: "Build the factual record", description: "Review correspondence, employment records, policies and witness information relevant to the issue." },
      { title: "Choose a resolution route", description: "Assess internal resolution, conciliation, enquiry or formal proceedings and prepare the required position." },
      { title: "Conduct follow-up", description: "Support meetings or hearings, track commitments and advise on closure or next procedural steps." },
    ],
  },
  "hr-policy-documentation": {
    overview: "We review how people processes operate, identify the documents needed and draft or revise policies and employment terms for clarity and legal alignment.",
    steps: [
      { title: "Understand current practice", description: "Discuss workforce structure, existing policies, approval flows and the employment scenarios to address." },
      { title: "Identify document gaps", description: "Compare current letters, rules and procedures with operational needs and applicable requirements." },
      { title: "Draft and review", description: "Prepare tailored policy or agreement language and resolve comments with the designated stakeholders." },
      { title: "Plan adoption", description: "Provide a rollout checklist covering approvals, employee communication, acknowledgements and version control." },
    ],
  },
  "government-liaison": {
    overview: "We help organise submissions and follow-up with relevant labour authorities, keeping the organisation informed about document requests, status and next actions.",
    steps: [
      { title: "Identify the authority and purpose", description: "Confirm the office, application or notice involved, the issue to resolve and any stated response deadline." },
      { title: "Assemble a complete submission", description: "Collect the prescribed forms and supporting records, check consistency and prepare a submission index." },
      { title: "Coordinate filing and follow-up", description: "Submit through the appropriate channel and maintain a log of acknowledgement, queries and status updates." },
      { title: "Resolve outstanding requests", description: "Coordinate additional information or meetings and document the authority's direction and remaining actions." },
    ],
  },
  "accounting-services": {
    overview: "Accounting support begins with the client's books and reporting needs. We organise transaction records, reconcile balances and prepare agreed management or financial reports.",
    steps: [
      { title: "Agree the accounting scope", description: "Confirm entities, periods, accounting systems, reporting deadlines and the records the client will provide." },
      { title: "Organise and post transactions", description: "Classify invoices, receipts, expenses and other source records in the agreed bookkeeping structure." },
      { title: "Reconcile key balances", description: "Compare bank, vendor and customer balances with supporting statements and resolve noted differences." },
      { title: "Prepare review reports", description: "Compile agreed summaries, highlight unusual movements and list open items for client confirmation." },
    ],
  },
  "fire-noc": {
    overview: "Fire NOC assistance focuses on the premises, occupancy and applicable fire-safety requirements, followed by preparation of the application and coordination of authority queries or inspection steps.",
    steps: [
      { title: "Review premises and requirement", description: "Collect building use, occupancy, layout and existing fire-safety information to clarify the applicable NOC route." },
      { title: "Compile technical documents", description: "Coordinate available plans, ownership or tenancy records and fire-system details needed for the submission." },
      { title: "Prepare and submit the application", description: "Complete the relevant application set and track acknowledgement, scrutiny and any inspection request." },
      { title: "Address observations", description: "Help organise responses or additional evidence requested by the authority and track the resulting status." },
    ],
  },
  "shop-act": {
    overview: "Shop Act support covers the applicable establishment registration and subsequent changes, based on the state, business details and workforce information supplied.",
    steps: [
      { title: "Confirm state and establishment details", description: "Verify the operating address, business activity, commencement date and employee particulars." },
      { title: "Prepare registration information", description: "Check prescribed forms and supporting documents against the details to be filed." },
      { title: "File and monitor the application", description: "Submit through the applicable channel and follow up on acknowledgements or clarification requests." },
      { title: "Record certificate and future changes", description: "Share the issued certificate details and note renewal, amendment or display obligations that apply." },
    ],
  },
  "fssai-license": {
    overview: "FSSAI licensing support identifies the appropriate licence category for the food business and helps prepare the application, supporting evidence and renewal or amendment requests.",
    steps: [
      { title: "Classify the food business", description: "Review business activity, premises, scale and product or service type to identify the likely licence category." },
      { title: "Gather operator and premises records", description: "Collect identity, address, business constitution and food-safety documents relevant to the application." },
      { title: "Submit the licence application", description: "Prepare the application particulars, file them through the relevant system and track authority queries." },
      { title: "Manage issue and renewal dates", description: "Record licence conditions and validity, and plan updates or renewal submissions before expiry." },
    ],
  },
  "labour-codes-implementation": {
    overview: "We translate the four Labour Codes into a readiness review for the organisation, then help update wage structures, policies, records and operating practices where required.",
    steps: [
      { title: "Assess current-state readiness", description: "Map entities, workforce categories, payroll components and existing policies against relevant Code provisions." },
      { title: "Identify design and data changes", description: "Flag potential wage-definition, benefit, recordkeeping and policy impacts for legal and business review." },
      { title: "Prepare revised frameworks", description: "Develop recommended payroll, contract, policy and compliance-calendar changes for stakeholder approval." },
      { title: "Support implementation checks", description: "Coordinate approved updates and review sample records or payroll outputs for consistency." },
    ],
  },
};

export const industries = [
  "Telecom",
  "BPO's",
  "Financial Institutions",
  "Information & Technology",
  "Logistics",
  "Hospitals",
  "Schools",
  "Educational Institutions",
  "Manufacturing",
  "Retail",
  "Insurance",
  "Event Management",
  "Public Sector Undertaking",
  "Airlines",
  "Restaurants / Bar",
  "Automobile",
];

export const laws = [
  "Apprentices Act, 1961",
  "Contract Labour Act",
  "EPF & MP Act, 1952",
  "ESI Act",
  "Factories Act, 1948",
  "Employment Exchanges Act",
  "Industrial Disputes Act",
  "Industrial Employment Act",
  "Maternity Benefit Act",
  "Minimum Wages Act",
  "Shops & Establishment Act",
  "Trade Unions Act",
  "Payment of Bonus Act",
  "Payment of Gratuity Act",
  "Payment of Wages Act",
  "Employee Compensation Act",
  "Labour Welfare Funds",
  "Professional Tax Act",
];

export const labourCodes = [
  {
    title: "Code on Wages, 2019",
    desc: "Wages, minimum wages, timely payment and bonus provisions within the consolidated framework.",
  },
  {
    title: "Industrial Relations Code, 2020",
    desc: "Industrial relations, trade unions, standing orders and dispute resolution matters.",
  },
  {
    title: "Code on Social Security, 2020",
    desc: "Social security provisions covering areas including provident fund, ESI, gratuity and maternity benefits.",
  },
  {
    title: "Occupational Safety, Health and Working Conditions Code, 2020",
    desc: "Workplace health, safety and working conditions, including provisions relevant to factories and contract labour.",
  },
];

export const advisory = [
  "Employment and connected agreements",
  "Discrimination",
  "Health and Safety Legislation",
  "Trade Union issues",
  "Industrial issues in mergers and acquisitions",
  "Employee Disputes",
  "Employment of Contract labour",
  "Full and Final settlement with employees",
  "Representation before Labour Authorities, Labour Court and High Court",
  "Conducting Domestic Enquiry against delinquent employees",
];

export const whyUs = [
  {
    icon: "Award",
    title: "Almost three decades of expertise",
    desc: "We are Advocates and Management Consultants for Industrial Matters — almost three decades old labour law consultancy firm.",
  },
  {
    icon: "MapPin",
    title: "Pan-India delivery",
    desc: "Personalised attention, quick and quality service to every client on a Pan India basis — Delhi NCR, Bangalore, Mumbai, Chennai and beyond.",
  },
  {
    icon: "BadgeIndianRupee",
    title: "Value pricing",
    desc: "Complete end-to-end labour law consultancy at value price, with complete satisfaction whatever the situation may be.",
  },
  {
    icon: "ShieldCheck",
    title: "Proactive compliance support",
    desc: "Timely guidance, compliance management and clear communication help businesses address obligations and reduce avoidable risks.",
  },
];

export const process = [
  {
    title: "Assess",
    desc: "A structured review of your current compliance posture — registrations, registers, returns and pending notices.",
  },
  {
    title: "Plan",
    desc: "A tailored compliance calendar mapped to every applicable Act, location and workforce category.",
  },
  {
    title: "Execute",
    desc: "Registrations, monthly payroll, PF/ESI/PT filings, licences and annual returns — handled end-to-end.",
  },
  {
    title: "Represent",
    desc: "Inspection support, domestic enquiries and representation before Labour Authorities, Labour Court and High Court.",
  },
];

export const benefits = [
  "Avoid penalties and legal action from regulatory authorities",
  "Protect your reputation and brand credibility",
  "Build employee trust and a healthy company culture",
  "Single point of contact for every labour Act",
  "Timely PF, ESI, PT & LWF deposits and returns",
  "Expert representation in disputes and inspections",
];

export const cities = [
  "Delhi / NCR",
  "Bangalore",
  "Mumbai",
  "Chennai",
  "Chandigarh",
  "Kolkata",
  "Ahmedabad",
  "Bhopal",
  "Bihar",
  "Kochi",
  "Guwahati",
  "Hyderabad",
  "Bhubaneswar",
  "Lucknow",
  "Andhra Pradesh (AP)",
  "Pune",
  "Jaipur",
  "Punjab",
];

export const faqs = [
  {
    q: "What does a labour law consultant do?",
    a: "A labour law consultant helps businesses comply with applicable labour legislation — statutory registrations, PF/ESI/PT filings, maintenance of registers, payroll compliance, licences and representation in disputes and inspections. Lexus Consultants provides all of this end-to-end.",
  },
  {
    q: "Which businesses do you work with?",
    a: "We help businesses of all sizes — startups, SMEs, manufacturing units and large corporates — across sectors such as Telecom, BPOs, Financial Institutions, IT, Logistics, Hospitals, Schools, Retail, Insurance, Airlines, Restaurants and Automobile.",
  },
  {
    q: "Do you provide services outside Delhi?",
    a: "Yes. While we are headquartered in Vikas Puri, New Delhi, we serve clients on a Pan India basis including Bangalore, Mumbai, Chennai, Chandigarh, Kolkata, Ahmedabad, Hyderabad, Lucknow and more.",
  },
  {
    q: "What are the four Labour Codes, and what should employers do?",
    a: "The Code on Wages, 2019, Industrial Relations Code, 2020, Code on Social Security, 2020, and Occupational Safety, Health and Working Conditions Code, 2020 came into force on 21 November 2025. Employers should review contracts, appointment letters, payroll, HR policies and records against the requirements that apply to each state and location.",
  },
  {
    q: "What happens if my business is non-compliant?",
    a: "A minor violation or inadvertent delay in complying with a statutory requirement can result not only in levy of damages but also prosecution — often of the top executives. Non-compliance can also hurt employee trust and brand credibility.",
  },
  {
    q: "Can you handle our complete payroll?",
    a: "Yes. We process monthly payroll, issue payslips, prepare bank transfer statements, compute statutory deductions (PF, ESI, PT, LWF), handle TDS returns (24Q), generate Form 16 and manage full & final settlements.",
  },
  {
    q: "Do you help with licences like Shop Act, FSSAI and Fire NOC?",
    a: "Absolutely. We are Shop Act consultants, FSSAI licence consultants, Fire NOC consultants and Eating House licence consultants, helping you obtain licences in minimum days with minimal steps.",
  },
];

export const journey = [
  {
    phase: "Practice roots",
    title: "Advocates and Management Consultants for Industrial Matters",
    desc: "The practice focuses on labour-management relations, fair employment practices, benefit planning and litigation.",
    tags: ["Labour Courts", "Industrial Matters", "Delhi roots"],
  },
  {
    phase: "Broader support",
    title: "Compliance, payroll and workforce services",
    desc: "The service range includes establishment and factory compliance, manpower audits, legal opinions on labour legislation and payroll processing.",
    tags: ["Establishments", "Factories", "Manpower Audit"],
  },
  {
    phase: "Regional presence",
    title: "Serving clients across multiple locations",
    desc: "Lexus lists Delhi NCR, Bangalore, Mumbai, Chennai and Chandigarh among its service locations.",
    tags: ["Bangalore", "Mumbai", "Chennai"],
  },
  {
    phase: "Current practice",
    title: "Labour law consultancy across India",
    desc: "Support includes registrations, compliance management, payroll, licences and representation before labour authorities and courts.",
    tags: ["Pan India", "Payroll", "Licences"],
  },
];

export const healthQuestions = [
  {
    q: "Are PF, ESI, PT & LWF deposits and returns filed on time, every month?",
    hint: "Monthly challans, ECRs and half-yearly returns",
  },
  {
    q: "Are your Shops & Establishment / Factory licences and renewals valid?",
    hint: "Registrations, renewals, trade licences & displays",
  },
  {
    q: "Are statutory registers, wage records and annual returns up to date?",
    hint: "Registers, wage & leave records, annual filings",
  },
  {
    q: "Is payroll TDS (24Q), Form 16 and full & final settlement handled cleanly?",
    hint: "TDS returns, Form 16 / 12BA, F&F letters",
  },
  {
    q: "Do you have expert cover for inspections, notices and disputes?",
    hint: "Inspection support, domestic enquiry, court representation",
  },
];

export const insights = [
  {
    slug: "four-labour-codes-employer-guide",
    tag: "Labour Codes",
    date: "Employer guide",
    title: "The four Labour Codes: what every business should review",
    desc: "A practical overview of the consolidated framework and the employment records, policies and processes employers should review.",
    read: "Employer guide",
    body: "The Code on Wages, 2019; Industrial Relations Code, 2020; Code on Social Security, 2020; and Occupational Safety, Health and Working Conditions Code, 2020 came into force on 21 November 2025. Employers should review employee classifications, appointment letters, wages, social security, safety practices, contracts, HR policies and registers. Labour is a concurrent subject, and state rules and implementation details can vary. Check the requirements that apply to each location before changing payroll or employment terms.",
  },
  {
    slug: "why-labour-law-compliance-matters",
    tag: "Compliance basics",
    date: "Business guide",
    title: "Why labour law compliance matters for your business",
    desc: "Compliance helps businesses manage legal exposure, protect trust and keep day-to-day operations on track.",
    read: "Business guide",
    body: "Labour laws set responsibilities for employers in areas such as wages, working hours, employee benefits, workplace safety, social security and dispute resolution. Missing a requirement can lead to penalties, legal disputes and reputational harm. Good records and timely filings help organisations prepare for audits and inspections, support employee trust and reduce the chance of unexpected disruption.",
  },
  {
    slug: "labour-code-transition-readiness",
    tag: "Employer readiness",
    date: "Compliance guide",
    title: "Prepare your contracts, payroll and HR records",
    desc: "Review employment documents and compliance processes against the Labour Codes and the rules applicable to each state.",
    read: "Compliance guide",
    body: "The transition affects multiple parts of the employment relationship, including wages, contracts, safety and social security. Review appointment letters, existing registrations, HR policies, payroll systems and statutory records. Requirements can vary by location as supporting state rules and implementation details evolve. A structured compliance review can help identify gaps and prioritise practical corrective steps.",
  },
];

// Add new verified notifications here. Keep the source link and dates with each update.
export const legalUpdates = [
  {
    id: "epfo-wage-ceiling-2026",
    publishedAt: "2026-09-16",
    effectiveAt: "2026-09-17",
    tag: "EPFO · Central",
    title: "EPFO mandatory coverage wage ceiling raised to ₹25,000",
    summary: "The Ministry of Labour & Employment announced that the mandatory EPFO coverage ceiling increased from ₹15,000 to ₹25,000 per month, effective 17 September 2026.",
    employerAction: "Review new-joiner eligibility, payroll setup and ECR processes. Confirm membership and contribution treatment against the applicable EPF rules for each employee.",
    sourceLabel: "Ministry of Labour & Employment (PIB)",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310973&lang=1&reg=3",
  },
  {
    id: "epfo-vishwas-2026",
    publishedAt: "2026-09-03",
    effectiveAt: "2026-06-29",
    tag: "EPFO · Time-bound scheme",
    title: "VISHWAS 2026: eligible EPF damages cases can be reviewed until 28 December",
    summary: "The Ministry says the one-time VISHWAS 2026 scheme covers specified eligible damages and penalty cases, and remains open through 28 December 2026.",
    employerAction: "If an EPF damages matter is pending, check the official scheme conditions, case eligibility and interest payment requirements before applying.",
    sourceLabel: "Ministry of Labour & Employment (PIB)",
    sourceUrl: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2306438&lang=2&reg=48",
  },
];

export const monthlyDues = [
  { day: "Monthly", task: "Payroll processing and payslips", law: "Payroll and employment requirements" },
  { day: "Monthly / as applicable", task: "PF and ESI contribution review and filing", law: "Social security requirements" },
  { day: "Monthly / as applicable", task: "Professional Tax and Labour Welfare Fund review", law: "State-specific requirements" },
  { day: "Each payroll cycle", task: "Wage calculations, statutory deductions and records", law: "Wage and payroll requirements" },
  { day: "Ongoing", task: "Track notices, inspections, registrations and renewals", law: "Applicable central and state requirements" },
];

export const annualDues = [
  { when: "Periodic / as applicable", task: "Review statutory registers, records and returns" },
  { when: "At renewal / as applicable", task: "Review establishment and factory registrations, licences and renewals" },
  { when: "Annual review", task: "Check HR policies, appointment letters and employment documentation" },
  { when: "As required", task: "Prepare for statutory inspections and address compliance gaps" },
];

export const extraFaqs = [
  { q: "Is labour law compliance relevant to small businesses?", a: "Requirements depend on the nature of the business, its workforce and the state where it operates. Small businesses should review applicable registrations, wages, employee benefits and workplace obligations." },
  { q: "How often do labour law requirements change?", a: "Requirements can change at both Central and State levels. Employers should monitor updates and review their practices, documentation and filings periodically." },
  { q: "Can Lexus support businesses in more than one state?", a: "Lexus describes its services as Pan India and provides support with state-specific requirements. The applicable obligations should be checked for each location." },
  { q: "How can my business get started?", a: "Contact Lexus with your business details and compliance requirements. The team can understand your needs and discuss an appropriate scope of support." },
];
