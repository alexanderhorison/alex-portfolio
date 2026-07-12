export type PathData = string | [number, number, number];

export interface Project {
  id: string;
  name: string;
  short: string;
  client: string;
  period: string;
  live: boolean;
  comingSoon?: boolean;
  category: "product" | "ai";
  iconKey: string;
  intro: string;
  challenge: string[];
  solution: string[];
  results: string[];
  conclusion: string;
  quote?: string;
  quoteBy?: string;
  quoteRole?: string;
  quoteInitials?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  current: boolean;
  desc: string;
}

export interface AiStackItem {
  name: string;
  tagline: string;
  initials: string;
  color: string;
  textColor: string;
}

export interface LearningItem {
  name: string;
  meta: string;
  iconKey: string;
}

export interface Service {
  name: string;
  desc: string;
  price: string;
  free: boolean;
  iconKey: string;
}

export interface Testimonial {
  quote: string;
  by: string;
  role: string;
  initials: string;
}

export const ICONS: Record<string, PathData[]> = {
  send: ["m22 2-7 20-4-9-9-4Z", "M22 2 11 13"],
  megaphone: ["m3 11 18-5v12L3 14v-3z", "M11.6 16.8a3 3 0 1 1-5.8-1.6"],
  droplet: ["M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C4 11.1 3 13 3 15a7 7 0 0 0 7 7z"],
  bag: ["M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"],
  car: ["M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2", [7, 17, 2], [17, 17, 2]],
  chat: ["M7.9 20A9 9 0 1 0 4 16.1L2 22Z"],
  calendar: ["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"],
  trending: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"],
  layers: ["m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z", "M2 12l8.58 3.91a2 2 0 0 0 1.66 0L21 12", "M2 17l8.58 3.91a2 2 0 0 0 1.66 0L21 17"],
  building: ["M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18", "M2 22h20", "M10 6h4", "M10 10h4", "M10 14h4"],
  cap: ["M22 10v6", "M2 10l10-5 10 5-10 5z", "M6 12v5c3 3 9 3 12 0v-5"],
  search: [[11, 11, 8], "m21 21-4.3-4.3"],
  bulb: ["M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5", "M9 18h6", "M10 22h4"],
  receipt: ["M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", "M16 8H8", "M16 12H8"],
  cross: ["M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"],
  fileText: ["M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", "M14 2v4a2 2 0 0 0 2 2h4", "M16 13H8", "M16 17H8", "M10 9H8"],
  clock: [[12, 12, 10], "M12 6v6l4 2"],
  clipboardCheck: ["M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", "M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z", "m9 14 2 2 4-4"],
  mic: ["M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", "M19 10v2a7 7 0 0 1-14 0v-2", "M12 19v3"],
  edit: ["M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"],
  workflow: ["M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M7 11v4a2 2 0 0 0 2 2h4", "M13 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"],
  code: ["m16 18 6-6-6-6", "m8 6-6 6 6 6"],
  cloud: ["M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"],
};

export const TOOLS = ["Claude", "ChatGPT", "Cursor", "n8n", "Figma", "Framer", "Webflow", "Retool", "Filament", "Glide apps", "Jira", "Confluence", "Slack", "WordPress", "VS Code"];

export const EXPERIENCE: Experience[] = [
  { title: "Engineering Manager", company: "Bithealth", period: "Mar 2023 – Present", current: true, desc: "Lead and manage 30+ engineers across product and platform delivery. Shipped 20+ internal tools and automation systems — including invoice reconciliation, pharmacy reconciliation, PDF generation, timesheet automation, and Jira auditing — saving over 100 person-hours per month across finance, HR, and operations." },
  { title: "IT Operation Manager", company: "Halosis", period: "Sep 2020 – Mar 2023", current: false, desc: "Owned client product operations and led development of a WhatsApp social-commerce platform from scratch — business processes, engineering, and implementation — serving 20+ small business clients processing 200–300 transactions per month." },
  { title: "Head of Technology", company: "Snapinn Global Asia", period: "May 2018 – Sep 2020", current: false, desc: "Led a 10-person engineering team building a property rental platform from the ground up — reaching 200+ active listings and 30 monthly bookings, partnering with design and business across the full product lifecycle." },
  { title: "Co-Founder", company: "Homecare24.id", period: "May 2017 – Apr 2018", current: false, desc: "Co-founded and built the full technology stack from scratch — mobile app, web platform, and healthcare marketplace — growing to 100+ healthcare providers on the platform." },
  { title: "Java Developer", company: "Global Pay Indonesia", period: "Sep 2016 – Apr 2017", current: false, desc: "Built the Uangku e-money website and backend payment request APIs, supporting 100+ monthly transactions for an Indonesian fintech platform." },
  { title: "Website Developer", company: "Rumah123.com", period: "Jan 2015 – Sep 2016", current: false, desc: "Developed and maintained features across frontend and backend APIs for Rumah123.com — one of Indonesia's largest property portals — contributing to both the consumer website and the APIs powering web and mobile." },
];

export const EDUCATION = { school: "Bina Nusantara University", degree: "Bachelor's Degree in Information Technology" };

export const LEARNING: LearningItem[] = [
  { name: "n8n Workflow Automation", meta: "Course", iconKey: "workflow" },
  { name: "Claude Code", meta: "Course · Anthropic", iconKey: "code" },
  { name: "Generative AI", meta: "Google Cloud Event", iconKey: "cloud" },
];

export const AI_STACK: AiStackItem[] = [
  { name: "n8n", tagline: "Workflow automation", initials: "n8n", color: "#FF6540", textColor: "#fff" },
  { name: "Antigravity", tagline: "AI developer browser", initials: "AG", color: "#0D1117", textColor: "#A78BFA" },
  { name: "Claude Code", tagline: "AI coding assistant", initials: "CC", color: "#D97757", textColor: "#fff" },
  { name: "Retool", tagline: "Internal tools builder", initials: "Re", color: "#F36B24", textColor: "#fff" },
  { name: "Claude Design", tagline: "AI design studio", initials: "CD", color: "#B87333", textColor: "#fff" },
  { name: "Gemini", tagline: "Google AI model", initials: "Ge", color: "#4285F4", textColor: "#fff" },
  { name: "Kiro", tagline: "Spec-driven AI IDE", initials: "Ki", color: "#FF9900", textColor: "#fff" },
  { name: "9 Router", tagline: "AI model routing", initials: "9R", color: "#6366F1", textColor: "#fff" },
  { name: "Paperclip", tagline: "AI agent platform", initials: "PC", color: "#1C1C1C", textColor: "#A3E635" },
];

export const SERVICES: Service[] = [
  { name: "Business Analyst Services", desc: "Map processes & requirements", price: "FREE", free: true, iconKey: "search" },
  { name: "Consulting", desc: "Strategy & technical advice", price: "FREE", free: true, iconKey: "bulb" },
  { name: "Create & Implement Solutions", desc: "AI, automation & full builds", price: "IDR 2.000K/mo", free: false, iconKey: "send" },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Alex works in a very timely manner and always ensures that you are fully satisfied with the results!", by: "Michael Santoso", role: "Owner, Tjahaya Berkat Abadi", initials: "MS" },
  { quote: "Working with Alex was an absolute game-changer for my operational process. That helped me save a lot of time.", by: "Jefri Wijaya", role: "Operational Manager, KKHome", initials: "JW" },
];

export const CONTACT = {
  email: "alexanderhorison@gmail.com",
  whatsapp: "+62 812 8183 7477",
  whatsappLink: "https://wa.me/6281281837477",
  linkedin: "https://www.linkedin.com/in/alexander-horison/",
};

export const PROJECTS: Project[] = [
  {
    id: "wa-broadcast",
    name: "WA Broadcast",
    short: "WhatsApp Broadcast CMS",
    client: "Zenith Tech",
    period: "2025–Now",
    live: true,
    category: "product",
    iconKey: "send",
    intro: "A mobile-first WhatsApp broadcast CMS for premier-banking relationship managers. Compose a personal message, attach an image, select customer groups or individuals, and reach 100+ contacts in a single send — with full per-recipient delivery tracking from one clean console.",
    challenge: [
      "4 hours per broadcast cycle — one chat at a time",
      "WhatsApp Business had zero native broadcast capability",
      "No visibility into who actually received a message",
    ],
    solution: [
      "Select groups or individuals — reach 100+ in one send",
      "Image-attached composer up to 4,096 characters",
      "Per-recipient delivery tracking: success / failed / partial",
    ],
    results: [
      "100+ customers per send vs 4-hr manual process",
      "0% → 100% delivery (unlocked a capability that didn't exist)",
      "Higher engagement with personal-feeling messages at scale",
    ],
    conclusion: "WA Broadcast unlocked a capability that didn't exist before — turning a 4-hour manual chore into a single send for 100+ customers.",
  },
  {
    id: "invoice-reconcile",
    name: "Invoice Reconcile Automation",
    short: "Finance Automation",
    client: "Bithealth",
    period: "2024–Now",
    live: true,
    category: "ai",
    iconKey: "receipt",
    intro: "An automation engine that reconciles invoices from 50 partner companies against payments and internal records — replacing 24 person-hours of manual spreadsheet matching with a 20-minute automated run every month.",
    challenge: [
      "50 companies matched by hand — 24 person-hrs/month",
      "High error rate; discrepancies caught late at month-end",
      "Spreadsheet matching didn't scale with transaction volume",
    ],
    solution: [
      "Automated invoice matching against payment & ledger records",
      "Exception flagging — only mismatches need human review",
      "Scheduled runs with a clear, auditable report in 20 min",
    ],
    results: [
      "24 person-hrs/month → 20-min automated run",
      "Discrepancies caught early, not at month-end",
      "Zero manual spreadsheet matching across 50 companies",
    ],
    conclusion: "Turned a 24-person-hour monthly grind into a 20-minute automated run — and gave the finance team their time back.",
  },
  {
    id: "enterprise-resource-planning",
    name: "Enterprise Resource Planning",
    short: "Enterprise Platform",
    client: "Tjahaya Berkat Abadi",
    period: "2024–Now",
    live: true,
    category: "product",
    iconKey: "layers",
    intro: "A comprehensive ERP for Tjahaya Berkat Abadi — a cigarette manufacturing and distribution business. Replaced a standalone Moka POS with a fully integrated system covering inventory, purchase orders, sales orders, point-of-sale, and accounting — all 5 modules live.",
    challenge: [
      "Moka POS only — no inventory, procurement, or finance integration",
      "Complex inventory across units with no central tracking",
      "Manual PO/SO handling, no accounting visibility",
    ],
    solution: [
      "Real-time centralized inventory across all units",
      "Automated purchase & sales orders",
      "5 modules live: inventory, PO, SO, POS, and accounting",
    ],
    results: [
      "Standalone POS → complete 5-module ERP for 10-person team",
      "First unified system across the entire business",
      "Real-time financial & operational visibility",
    ],
    conclusion: "A complete operational transformation — from a single POS to a full ERP that runs the entire business.",
    quote: "Alex works in a very timely manner and always ensures that you are fully satisfied with the results!",
    quoteBy: "Michael Santoso",
    quoteRole: "Owner, Tjahaya Berkat Abadi",
    quoteInitials: "MS",
  },
  {
    id: "pixelwise",
    name: "Pixelwise",
    short: "Tech & AI Publication",
    client: "Personal Project",
    period: "Coming Soon",
    live: false,
    comingSoon: true,
    category: "product",
    iconKey: "edit",
    intro: "Pixelwise is a tech and AI publication in the works — writing about building with AI, automation, and modern product engineering, translating 10+ years of hands-on experience into practical articles for builders.",
    challenge: [
      "Hard-won lessons from real projects stay undocumented",
      "AI tooling moves fast and is poorly explained for builders",
      "No personal platform to share a public point of view",
    ],
    solution: [
      "Focused publication on tech, AI, and building in practice",
      "Articles grounded in real projects, not theory",
      "Clean reading experience built for a builder audience",
    ],
    results: [
      "Demonstrates expertise — doesn't just claim it",
      "Practical AI writing from 10+ years of real project work",
      "A channel that compounds reach and credibility over time",
    ],
    conclusion: "Pixelwise will turn 10+ years of building into a public point of view on tech and AI — launching soon.",
  },
  {
    id: "pharmacy-reconcile",
    name: "Pharmacy Delivery Reconcile",
    short: "Healthcare Finance Automation",
    client: "Bithealth",
    period: "2025–Now",
    live: true,
    category: "ai",
    iconKey: "cross",
    intro: "A specialized reconciliation system for pharmacy deliveries to 40 hospitals — matching delivered items, orders, and invoices so finance and operations stay aligned across a high-volume medical supply chain.",
    challenge: [
      "40 hospitals reconciled manually — 24 person-hrs/month",
      "Orders, deliveries & invoices tracked across separate spreadsheets",
      "Errors in medical supply chains carry real cost and risk",
    ],
    solution: [
      "Automated 3-way matching: orders × deliveries × invoices",
      "Exception flagging for shortfalls and mismatches only",
      "10 min per unit — 40 units done in ~7 hrs automated",
    ],
    results: [
      "24 person-hrs/month → ~7-hr automated run",
      "Discrepancies caught before they became disputes",
      "Auditable records across 40 hospital supply chains",
    ],
    conclusion: "24 person-hours of manual pharmacy reconciliation reduced to a 7-hour automated run across 40 hospitals.",
  },
  {
    id: "property-monitoring-management",
    name: "Property Monitoring Management",
    short: "Operations Dashboard",
    client: "KK Home",
    period: "2024–Now",
    live: true,
    category: "product",
    iconKey: "building",
    intro: "A property rental report system managing 30+ properties for KK Home — replacing manual Excel tracking with centralized financial reporting that cuts report preparation from 3 days to 1.",
    challenge: [
      "30+ properties tracked manually in Excel",
      "Financial reports took 3 days to compile per cycle",
      "No real-time visibility for owners or the ops team",
    ],
    solution: [
      "Centralized transaction management — single source of truth",
      "Automated reporting: 3 days → 1 day per cycle",
      "Owner dashboards with data validation and encryption",
    ],
    results: [
      "Reporting cut from 3 days → 1 day (67% faster)",
      "3-person team managing 30+ properties from one system",
      "Real-time financial transparency for property owners",
    ],
    conclusion: "Turned 3 days of Excel-based reporting into 1-day automated reports — across 30+ properties.",
    quote: "Working with Alex was an absolute game-changer for my operational process. That helped me save a lot of time.",
    quoteBy: "Jefri Wijaya",
    quoteRole: "Operational Manager, KKHome",
    quoteInitials: "JW",
  },
  {
    id: "auto-invoice-pdf",
    name: "Auto Invoice PDF for Partners",
    short: "Document Automation",
    client: "Bithealth",
    period: "2024",
    live: false,
    category: "ai",
    iconKey: "fileText",
    intro: "Generates 80 partner invoices per month as polished, ready-to-send PDFs directly from billing data — cutting per-invoice time from 5 minutes to 30 seconds and saving ~6 person-hours of staff work every month.",
    challenge: [
      "80 invoices built by hand every month — ~6 person-hrs",
      "Manual entry caused formatting and figure errors",
      "Repetitive, high-volume task with no room to scale",
    ],
    solution: [
      "Automated PDF generation from billing data",
      "Consistent branded templates — same every time",
      "Batch run for all 80 partners at once",
    ],
    results: [
      "5 min → 30 sec per invoice (90% faster)",
      "~6 person-hrs/month eliminated",
      "Zero copy-paste or formatting errors",
    ],
    conclusion: "Turned 6 monthly hours of manual invoice preparation into a single automated batch — 80 invoices, minutes to complete.",
  },
  {
    id: "talenta-timesheet",
    name: "Talenta Timesheet Generator",
    short: "HR Automation",
    client: "Bithealth",
    period: "2024",
    live: false,
    category: "ai",
    iconKey: "clock",
    intro: "Generates timesheets for 130 employees in a 20-minute automated batch — replacing ~11 hours of monthly HR work at 5 minutes per employee by hand. Still in active daily use.",
    challenge: [
      "130 employees × 5 min each = ~11 hrs manual HR work/month",
      "Formatting inconsistent across staff",
      "Same recurring task consuming the team every cycle",
    ],
    solution: [
      "Direct attendance pull from Talenta",
      "130 PDFs generated in one 20-min batch",
      "Consistent payroll-ready layout every time",
    ],
    results: [
      "~11 person-hrs/month → 20-min automated batch",
      "130 timesheets, consistent format, every cycle",
      "Still in active daily use",
    ],
    conclusion: "Reduced 11 hours of monthly HR timesheet work to a 20-minute automated batch for 130 employees.",
  },
  {
    id: "jira-timesheet-checker",
    name: "Jira Timesheet Checker",
    short: "Engineering Ops Tool",
    client: "Bithealth",
    period: "2024",
    live: false,
    category: "ai",
    iconKey: "clipboardCheck",
    intro: "Audits time logs for 100+ engineers bi-weekly — replacing 2 full days of manual Jira trawling per cycle and saving ~4 manager days per month. Still in active use.",
    challenge: [
      "100+ engineers — 2 full days of manual Jira auditing per cycle",
      "Managers chasing missing entries one by one",
      "No quick view of who was under- or over-logged",
    ],
    solution: [
      "Automated Jira worklog scan vs expected hours",
      "Flags only missing or anomalous entries — no noise",
      "Per-person summary report, run bi-weekly",
    ],
    results: [
      "2 days/cycle → automated in minutes",
      "~4 manager days saved per month",
      "Still in active use",
    ],
    conclusion: "Saved 4 manager days per month by automating bi-weekly Jira timesheet audits for 100+ engineers.",
  },
  {
    id: "daily-notes-reminder",
    name: "Daily Notes & Voice Reminder",
    short: "Productivity App",
    client: "Personal Project",
    period: "2025",
    live: false,
    category: "ai",
    iconKey: "mic",
    intro: "A personal PWA that turns Telegram voice messages into tasks and daily reminders — built with React and Supabase. Record a thought while on the move, and it's automatically converted into a scheduled task. In active daily use.",
    challenge: [
      "Quick thoughts lost between apps and notebooks",
      "Typing mid-task is friction — voice is faster",
      "Reminders and notes live in separate tools",
    ],
    solution: [
      "Telegram voice → task, completely hands-free",
      "Built-in reminders tied to each captured note",
      "PWA (React + Supabase) — lives on your home screen",
    ],
    results: [
      "Thoughts captured in seconds by voice",
      "Notes and reminders in one place",
      "In active daily personal use",
    ],
    conclusion: "A personal PWA that converts Telegram voice messages into scheduled tasks — built and used daily.",
  },
  {
    id: "lovelo-room",
    name: "Lovelo Room",
    short: "Shopify E-commerce",
    client: "Lovelo Room",
    period: "2024–Now",
    live: true,
    category: "product",
    iconKey: "bag",
    intro: "Loveloroom.com is a premier destination for luxury fashion — designer bags, shoes, accessories and apparel. Moved the brand from Instagram DM and WhatsApp selling to a full Shopify storefront, establishing a professional checkout experience and a growing base of repeat buyers.",
    challenge: [
      "Sales via Instagram DM & WhatsApp — no storefront or checkout",
      "Luxury feel needed to match the product quality",
      "Secure e-commerce for high-value transactions",
    ],
    solution: [
      "Full Shopify storefront with real-time inventory",
      "Sophisticated visuals — high-quality pages by category",
      "Mobile-first, minimalist design",
    ],
    results: [
      "DM selling → professional e-commerce storefront",
      "Repeat buyers — customers return without prompting",
      "Secure checkout for high-value luxury orders",
    ],
    conclusion: "Transformed Instagram DM selling into a professional e-commerce storefront — with a growing repeat buyer base.",
  },
  {
    id: "hydroclean",
    name: "Hydroclean",
    short: "Shopify E-commerce",
    client: "Hydroclean",
    period: "2022–Now",
    live: true,
    category: "product",
    iconKey: "droplet",
    intro: "HydroClean.id offers professional vacuuming for mattresses, carpets and upholstery — eliminating dust mites and allergens. Moved the business from phone and Instagram bookings to a Shopify-powered site, growing to 50+ jobs per month with a 30–50% increase in bookings.",
    challenge: [
      "All bookings through phone & Instagram — no online option",
      "Niche service most consumers don't know exists",
      "Advanced tech (MicroTech-Ray™) needed credible explanation",
    ],
    solution: [
      "Shopify with service packages as bookable products",
      "Content strategy focused on health benefits",
      "Educational blog, testimonials & certifications for trust",
    ],
    results: [
      "30–50% booking increase after launch",
      "50+ jobs/month and growing",
      "Online booking replaced phone & Instagram coordination",
    ],
    conclusion: "Took Hydroclean from phone and Instagram bookings to 50+ monthly jobs — a 30–50% booking increase.",
  },
  {
    id: "learning-management-system",
    name: "Learning Management System",
    short: "Education Platform",
    client: "Bithealth",
    period: "2024",
    live: false,
    category: "product",
    iconKey: "cap",
    intro: "A corporate LMS for Bithealth's team — centralizing 20 courses for 10 employees into one tracked platform, replacing Google Drive content sharing with progress tracking, time logging, and certifications. Delivered a 30% improvement in HR productivity.",
    challenge: [
      "Training content scattered across Google Drive — no tracking",
      "No visibility into employee progress or completion",
      "Time-consuming to administer with no analytics",
    ],
    solution: [
      "20 courses centralized for 10 employees",
      "Progress tracking, time logging & certifications",
      "Real-time HR reporting and analytics",
    ],
    results: [
      "30% HR productivity improvement",
      "Full course completion visibility per employee",
      "Replaced Google Drive distribution entirely",
    ],
    conclusion: "Replaced Google Drive content sharing with a tracked LMS — improving HR productivity by 30% for a 10-person team.",
  },
  {
    id: "joinan",
    name: "JOINAN",
    short: "Securities Crowdfunding",
    client: "JOINAN",
    period: "2022–2024",
    live: false,
    category: "product",
    iconKey: "trending",
    intro: "JOINAN is a securities-crowdfunding platform connecting businesses seeking capital with investors. Served as Tech Lead for backend and API development — building the real-time transaction infrastructure and data visualization layer serving 10+ active investors and businesses.",
    challenge: [
      "Limited capital access through traditional banking",
      "Investors needed real-time transparency and insights",
      "Secondary-market trading required seamless data visualization",
    ],
    solution: [
      "Backend APIs for real-time crowdfunding transactions",
      "Secondary-market infrastructure with live availability",
      "Dynamic analytics with compliance and encryption",
    ],
    results: [
      "10+ investors and businesses actively transacting",
      "Real-time secondary-market trading live",
      "Full investment transparency for all participants",
    ],
    conclusion: "Built the backend and APIs powering a securities crowdfunding platform serving 10+ investors and businesses.",
  },
  {
    id: "halosis",
    name: "Halosis",
    short: "WhatsApp Chatbot API",
    client: "Halosis",
    period: "2020–2022",
    live: false,
    category: "product",
    iconKey: "chat",
    intro: "Halosis is a pioneering Indonesian platform simplifying social commerce for small businesses, built on the WhatsApp Business API. Built from scratch — business process, development, and implementation — serving 20+ small business clients processing 200–300 transactions per month.",
    challenge: [
      "Fragmented tools slowing down small business operations",
      "Manual order processing — error-prone and doesn't scale",
      "No automation for growing inquiry and transaction volume",
    ],
    solution: [
      "WhatsApp Business API with auto-responses & product catalogs",
      "Order automation, CRM, and broadcast messaging",
      "Integrated payments, shipping & AI chatbots",
    ],
    results: [
      "20+ small business clients on the platform",
      "200–300 transactions/month through automated flows",
      "Sellers scaled without adding manual effort",
    ],
    conclusion: "Built Halosis from scratch — a WhatsApp social-commerce platform processing 200–300 monthly transactions for 20+ Indonesian small businesses.",
  },
  {
    id: "snapinn",
    name: "Snapinn",
    short: "Booking System",
    client: "Snapinn",
    period: "2019–2021",
    live: false,
    category: "product",
    iconKey: "calendar",
    intro: "Snapinn is a property rental management platform built end-to-end — led a 10-person engineering team to reach 200+ active property listings and 30 bookings per month, with secure payments and real-time calendar sync.",
    challenge: [
      "Listings, availability & host-guest comms in separate tools",
      "Fragmented booking and payment processes",
      "Needed flexibility and performance to scale",
    ],
    solution: [
      "Feature-rich host dashboard with customizable templates",
      "Centralized booking, real-time availability & calendar sync",
      "Secure payments: VA, cards, e-wallets",
    ],
    results: [
      "200+ active property listings at peak",
      "30 bookings/month",
      "10-person team led from product to deployment",
    ],
    conclusion: "Led a 10-person team to build a property booking platform with 200+ listings and 30 monthly bookings.",
  },
  {
    id: "jp-auto-sports",
    name: "JP Auto Sports",
    short: "Company Profile & Catalog",
    client: "JP Auto Sports",
    period: "2018",
    live: true,
    category: "product",
    iconKey: "car",
    intro: "JP 4X4 Auto Sport supplies high-quality 4x4 accessories for double-cabins, SUVs, Jeeps and off-road vehicles. Built on Webflow — a professional company profile and product catalog that is still live today, driving product inquiries for off-road enthusiasts.",
    challenge: [
      "Expansive catalog across vehicle types with no clear structure",
      "Needed professional presence to build brand authority",
      "Non-technical buyers needed an intuitive browsing experience",
    ],
    solution: [
      "Clear categories: Bumpers, Lighting, Outdoor, Winches, Mining",
      "Search & filter by vehicle type, brand and price",
      "Fully responsive Webflow design",
    ],
    results: [
      "Catalog still live and active today",
      "Higher product inquiries and brand credibility",
      "Easy to find the right accessory by vehicle type",
    ],
    conclusion: "A Webflow catalog and company profile for a 4x4 accessories supplier — still live and driving product inquiries.",
  },
  {
    id: "aerate",
    name: "Aerate",
    short: "Company Profile",
    client: "Aerate",
    period: "2022",
    live: false,
    category: "product",
    iconKey: "megaphone",
    intro: "Aerate provides antimicrobial coating services that improve indoor hygiene and air quality — for air conditioners, high-touch surfaces and vehicle interiors. Built on Webflow — a polished company profile that increased leads and inquiries by 50%.",
    challenge: [
      "Inconsistent content across multiple stakeholders",
      "Limited customization within Webflow templates",
    ],
    solution: [
      "Content strategy & brand guide for services, benefits, testimonials",
      "Optimized UI within Webflow — custom imagery and interactions",
      "Structured stakeholder feedback with clear approval process",
    ],
    results: [
      "50% increase in leads and inquiries",
      "Cohesive site aligned to Aerate's brand identity",
      "Responsive across desktop and mobile",
    ],
    conclusion: "A Webflow company profile that delivered a 50% increase in leads and inquiries for an antimicrobial coating service.",
  },
];
