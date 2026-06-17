export type PathData = string | [number, number, number];

export interface Project {
  id: string;
  name: string;
  short: string;
  client: string;
  period: string;
  live: boolean;
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
  { title: "Engineering Manager", company: "Bithealth", period: "Mar 2023 – Present", current: true, desc: "Lead engineering delivery and team growth. Build internal AI and automation tools — invoice reconciliation, document generation and timesheet systems — that measurably cut manual work across finance, HR and operations." },
  { title: "IT Operation Manager", company: "Halosis", period: "Sep 2020 – Mar 2023", current: false, desc: "Owned client product operations and led new-product delivery with stakeholders and the board, scaling a WhatsApp-based social-commerce platform." },
  { title: "Head of Technology", company: "Snapinn Global Asia", period: "May 2018 – Sep 2020", current: false, desc: "Led web and mobile development for a property-booking platform end-to-end, partnering with design and business teams." },
  { title: "Founding Team", company: "Homecare24.id", period: "May 2017 – Apr 2018", current: false, desc: "Built the technology stack from scratch and shaped product direction with the founding board." },
  { title: "Java Developer", company: "Global Pay Indonesia", period: "Sep 2016 – Apr 2017", current: false, desc: "Built the company website and responsive frontend, plus backend APIs for e-money applications." },
  { title: "Website Developer", company: "Rumah123.com", period: "Jan 2015 – Sep 2016", current: false, desc: "Developed and maintained high-traffic property websites and built APIs powering web and mobile." },
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
  { id: "wa-broadcast", name: "WA Broadcast", short: "WhatsApp Broadcast CMS", client: "Zenith Tech", period: "2025–Now", live: true, category: "product", iconKey: "send",
    intro: "A mobile-first WhatsApp broadcast CMS for premier-banking relationship managers. Compose a personal message, attach an image, select customer groups or individuals, send at scale, and track per-recipient delivery — all from one clean console.",
    challenge: ["Relationship managers messaged customers one chat at a time.", "No visibility into who actually received a broadcast.", "Messaging needed to stay personal, not feel like spam."],
    solution: ["Group and individual recipient selection with a live recipient count.", "Image-attached broadcasts with a 4,096-character composer.", "Per-recipient delivery tracking with success / failed / partial status."],
    results: ["Hundreds of customers reached in a single send instead of one-by-one.", "Full delivery transparency for every broadcast.", "Warm, concierge-style messaging preserved at scale."],
    conclusion: "WA Broadcast turns a manual, one-at-a-time chore into a tracked, scalable channel — and is the very product this design system is built from." },
  { id: "invoice-reconcile", name: "Invoice Reconcile Automation", short: "Finance Automation", client: "Bithealth", period: "2024–Now", live: true, category: "ai", iconKey: "receipt",
    intro: "An automation engine that reconciles invoices against payments and internal records — replacing hours of manual, line-by-line matching with an instant, auditable result.",
    challenge: ["Finance matched invoices to payments by hand across spreadsheets.", "Mismatches were caught late, delaying the monthly close.", "The process didn't scale with transaction volume."],
    solution: ["Automated matching of invoices against payment and ledger records.", "Exception flagging that surfaces only the lines needing a human.", "Scheduled runs producing a clear, auditable reconciliation report."],
    results: ["Reconciliation time cut from hours to minutes.", "Discrepancies caught early instead of at month-end.", "A repeatable, audit-ready process."],
    conclusion: "A clear example of using automation to remove a recurring, error-prone manual task — and give the finance team their time back." },
  { id: "enterprise-resource-planning", name: "Enterprise Resource Planning", short: "Enterprise Platform", client: "Tjahaya Berkat Abadi", period: "2024–Now", live: true, category: "product", iconKey: "layers",
    intro: "A comprehensive ERP for Tjahaya Berkat Abadi — a cigarette manufacturing and distribution business. It integrates inventory, purchase orders, sales orders and point-of-sale, with an accounting module planned for a complete end-to-end solution.",
    challenge: ["Fragmented processes with no centralized system.", "Complex inventory across units and multiple locations.", "Manual PO/SO handling plus POS integration needs."],
    solution: ["Real-time centralized inventory management.", "Automated purchase and sales orders.", "Integrated POS synced with inventory and sales; scalable design with custom reporting."],
    results: ["Improved efficiency and productivity across departments.", "Real-time insights and enhanced accuracy.", "Seamless transactions on a future-ready platform."],
    conclusion: "The ERP is transforming operations — a critical foundation for the company's continued growth and operational excellence.",
    quote: "Alex works in a very timely manner and always ensures that you are fully satisfied with the results!", quoteBy: "Michael Santoso", quoteRole: "Owner, Tjahaya Berkat Abadi", quoteInitials: "MS" },
  { id: "pixelwise", name: "Pixelwise", short: "Tech & AI Publication", client: "Personal Project", period: "2025–Now", live: true, category: "product", iconKey: "edit",
    intro: "Pixelwise is a tech and AI publication — writing about building with AI, automation, and modern product engineering, translating hands-on experience into accessible articles for builders.",
    challenge: ["Hard-won lessons from building stayed undocumented.", "AI tooling moves fast and is poorly explained for builders.", "No personal platform to share a point of view."],
    solution: ["A focused blog on tech, AI, and building in practice.", "Articles grounded in real projects, not theory.", "A clean reading experience for a builder audience."],
    results: ["A growing library of practical AI and tech writing.", "A platform that demonstrates expertise, not just claims it.", "A channel that compounds reach over time."],
    conclusion: "Pixelwise turns thirteen-plus years of building into a public point of view on tech and AI." },
  { id: "pharmacy-reconcile", name: "Pharmacy Delivery Reconcile", short: "Healthcare Finance Automation", client: "Bithealth", period: "2025–Now", live: true, category: "ai", iconKey: "cross",
    intro: "A specialized reconciliation system for pharmacy deliveries to hospitals — matching delivered items, orders, and invoices so finance and operations stay aligned across a high-volume medical supply chain.",
    challenge: ["Pharmacy deliveries to hospitals were reconciled manually.", "Order, delivery and invoice records lived in different places.", "Errors in a medical supply chain carry real cost and risk."],
    solution: ["Automated three-way matching of orders, deliveries and invoices.", "Exception flagging for shortfalls and mismatches.", "A reconciliation view tailored to hospital pharmacy flows."],
    results: ["Faster, more accurate reconciliation across hospitals.", "Discrepancies caught before they became disputes.", "Reliable records across the supply chain."],
    conclusion: "Bringing automation to a complex healthcare supply chain — accuracy where it matters most." },
  { id: "property-monitoring-management", name: "Property Monitoring Management", short: "Operations Dashboard", client: "KK Home", period: "2024–Now", live: true, category: "product", iconKey: "building",
    intro: "The Property Rental Report System gives owners clear, accurate financial reports. By tracking income and expenses, it offers an organized view of property performance — ensuring transparency and better financial decisions.",
    challenge: ["Manual financial tracking via spreadsheets and paper.", "Lack of real-time insights delaying decisions.", "Error-prone, time-consuming reporting."],
    solution: ["Centralized transaction management as a single source of truth.", "Automated financial reporting with customizable formats.", "Data validation and encryption; intuitive dashboards."],
    results: ["Financial reporting time reduced by over 50%.", "Enhanced owner transparency and trust.", "Reliable data and scalability across multiple properties."],
    conclusion: "The system bridges property management and financial transparency — empowering owners with the insights to optimize their investments.",
    quote: "Working with Alex was an absolute game-changer for my operational process. That helped me save a lot of time.", quoteBy: "Jefri Wijaya", quoteRole: "Operational Manager, KKHome", quoteInitials: "JW" },
  { id: "auto-invoice-pdf", name: "Auto Invoice PDF for Partners", short: "Document Automation", client: "Bithealth", period: "2024", live: false, category: "ai", iconKey: "fileText",
    intro: "A tool that generates partner invoices as polished, ready-to-send PDFs directly from billing data — no manual document assembly, no copy-paste errors.",
    challenge: ["Partner invoices were built by hand in document editors.", "Manual entry introduced formatting and figure errors.", "Volume made the task slow and repetitive."],
    solution: ["Automated PDF generation from structured billing data.", "Consistent, branded invoice templates every time.", "Batch generation for many partners at once."],
    results: ["Invoice preparation reduced to a single action.", "Eliminated copy-paste and formatting mistakes.", "Consistent, professional documents for every partner."],
    conclusion: "Document automation that turns billing data into send-ready PDFs — accuracy and hours saved on every cycle." },
  { id: "talenta-timesheet", name: "Talenta Timesheet Generator", short: "HR Automation", client: "Bithealth", period: "2024", live: false, category: "ai", iconKey: "clock",
    intro: "An automation that pulls attendance from Talenta and generates a clean timesheet PDF for each employee — turning a tedious HR export into a one-click, per-person document set.",
    challenge: ["HR compiled per-employee timesheets from Talenta by hand.", "Formatting each document was slow and inconsistent.", "Monthly volume made it a recurring time sink."],
    solution: ["Direct pull of attendance data from Talenta.", "Per-employee timesheet PDFs generated in one batch.", "Consistent layout ready for payroll and approval."],
    results: ["A full team's timesheets generated in one run.", "Consistent, payroll-ready documents.", "Hours of manual HR work removed each month."],
    conclusion: "Connecting Talenta to automated PDF generation turned a monthly grind into a single click." },
  { id: "jira-timesheet-checker", name: "Jira Timesheet Checker", short: "Engineering Ops Tool", client: "Bithealth", period: "2024", live: false, category: "ai", iconKey: "clipboardCheck",
    intro: "A checker that audits logged hours in Jira against expectations and flags gaps — so managers see incomplete or inconsistent time logging without trawling through tickets.",
    challenge: ["Logged hours in Jira were inconsistent and hard to audit.", "Managers manually chased missing time entries.", "No quick view of who was under- or over-logged."],
    solution: ["Automated scan of Jira worklogs against expected hours.", "Clear flags for missing, low, or anomalous logging.", "A summary view per person and per period."],
    results: ["Missing time logs surfaced automatically.", "Less manual chasing for managers.", "Cleaner, more reliable timesheet data."],
    conclusion: "A focused ops tool that keeps Jira time data honest — and saves managers from manual auditing." },
  { id: "daily-notes-reminder", name: "Daily Notes & Voice Reminder", short: "Productivity App", client: "Personal Project", period: "2025", live: false, category: "ai", iconKey: "mic",
    intro: "A daily notes and reminder app with built-in voice recording — capture a thought by speaking, get reminded at the right time, and keep a running daily log without breaking flow.",
    challenge: ["Quick thoughts get lost between apps and notebooks.", "Typing notes mid-task is friction.", "Reminders and notes usually live in separate tools."],
    solution: ["Voice recording to capture notes hands-free.", "A daily note log with built-in reminders.", "A fast, single-purpose capture flow."],
    results: ["Thoughts captured in seconds by voice.", "Notes and reminders in one place.", "A frictionless daily habit."],
    conclusion: "A productivity app built around the fastest possible capture — speak, and it's saved and scheduled." },
  { id: "lovelo-room", name: "Lovelo Room", short: "Shopify E-commerce", client: "Lovelo Room", period: "2024–Now", live: true, category: "product", iconKey: "bag",
    intro: "Loveloroom.com is a premier destination for luxury fashion — designer bags, shoes, accessories and apparel from iconic houses. The mission: a seamless, secure and exclusive online shopping experience for discerning customers worldwide.",
    challenge: ["Presenting luxury products in a way that conveys quality and exclusivity.", "Delivering a high-end experience that matches customer expectations.", "Implementing secure e-commerce for high-value transactions."],
    solution: ["Sophisticated visual design with high-quality imagery and detailed product pages.", "Elegant, minimalist navigation organized by category with smart filters.", "Shopify with secure gateways, real-time inventory and mobile-first responsive design."],
    results: ["Elevated brand image — a luxury-boutique feel online.", "Increased engagement and reduced cart abandonment.", "Global reach via secure international payments and retention features."],
    conclusion: "A luxurious, seamless e-commerce platform that elevates the brand and drives sales and loyalty." },
  { id: "hydroclean", name: "Hydroclean", short: "Shopify E-commerce", client: "Hydroclean", period: "2022–Now", live: true, category: "product", iconKey: "droplet",
    intro: "HydroClean.id offers professional vacuuming for mattresses, carpets and upholstery — eliminating dust mites and allergens for healthier indoor air. The site educates clients, showcases services, and enables booking and payment via a Shopify-powered engine.",
    challenge: ["Building trust in a niche allergen-removal service many consumers don't know.", "Needing e-commerce to streamline booking and payment.", "Communicating advanced cleaning technology (MicroTech-Ray™)."],
    solution: ["Shopify with service packages as bookable products and secure payments.", "Content strategy emphasizing health benefits and the cleaning process.", "Educational blog plus testimonials and certifications to build trust."],
    results: ["Increased service bookings and higher conversion rates.", "Seamless, hassle-free experience encouraging repeat business.", "Efficient website management for the team."],
    conclusion: "A service-oriented site that educates visitors and streamlines booking — boosting bookings and customer satisfaction." },
  { id: "learning-management-system", name: "Learning Management System", short: "Education Platform", client: "Bithealth", period: "2024", live: false, category: "product", iconKey: "cap",
    intro: "A robust LMS that enhances corporate training. Admins upload and manage courses; employees access materials, track progress and log time per course — fostering continuous learning and professional development.",
    challenge: ["Disorganized, decentralized training content.", "Difficult employee progress tracking.", "Limited insight into training impact; time-consuming admin."],
    solution: ["Centralized course management in one platform.", "Employee progress tracking with time logging.", "Interactive quizzes and certifications plus real-time reporting and analytics."],
    results: ["Streamlined training management that saves significant time.", "Improved learning outcomes and transparency.", "Data-driven decisions and reduced administrative overhead."],
    conclusion: "A game-changer for corporate training — the foundation for a skilled, engaged and future-ready workforce." },
  { id: "joinan", name: "JOINAN", short: "Securities Crowdfunding", client: "JOINAN", period: "2022–2024", live: false, category: "product", iconKey: "trending",
    intro: "JOINAN is a securities-crowdfunding platform connecting businesses seeking capital with investors. Real-time transactions and detailed graphical analysis for the secondary market deliver a transparent, efficient investment experience.",
    challenge: ["Limited funding access through traditional banking barriers.", "Demand for transparency and real-time investor insights.", "Smooth secondary-market trading and accessible data visualization."],
    solution: ["Crowdfunding platform with transparent details on returns, risk and timelines.", "Real-time secondary-market transactions.", "Dynamic graphical analytics plus strict compliance and encryption."],
    results: ["Broader investor access for businesses raising capital.", "Empowered investors via real-time data and insights.", "Efficient secondary-market liquidity and scalable growth."],
    conclusion: "JOINAN bridges businesses and investors — fostering growth, transparency and trust in the financial ecosystem." },
  { id: "halosis", name: "Halosis", short: "WhatsApp Chatbot API", client: "Halosis", period: "2020–2022", live: false, category: "product", iconKey: "chat",
    intro: "Halosis is a pioneering Indonesian platform simplifying social commerce for small businesses, built on the WhatsApp Business API. It streamlines operations, improves engagement, and helps sellers scale seamlessly.",
    challenge: ["Fragmented communication across multiple tools.", "Manual, error-prone order processing.", "Limited automation for growing inquiry and transaction volumes."],
    solution: ["WhatsApp Business API with automated responses and interactive catalogs.", "Order automation, CRM, and broadcast / marketing messaging.", "Integrated payments and shipping plus AI-powered chatbots."],
    results: ["Professional, seamless customer interactions and faster responses.", "Scalable sales operations without added manual effort.", "Higher conversion and richer business insights."],
    conclusion: "Halosis redefined social commerce for Indonesian entrepreneurs — a leader in social-commerce innovation." },
  { id: "snapinn", name: "Snapinn", short: "Booking System", client: "Snapinn", period: "2019–2021", live: false, category: "product", iconKey: "calendar",
    intro: "Snapinn is a tailored platform that simplifies property rental management for hosts and guests — a comprehensive solution to list, manage and book properties efficiently with a user-centric design.",
    challenge: ["Handling listings, availability and communication seamlessly.", "Unifying fragmented booking and payment processes.", "Flexibility and scalable performance as the user base grows."],
    solution: ["Customizable templates and a feature-rich host dashboard.", "Centralized booking with real-time availability and calendar sync.", "Secure payments (VA, cards, e-wallets) and scalable, responsive architecture."],
    results: ["Streamlined operations that automate critical host tasks.", "Seamless guest journey and higher satisfaction.", "Increased revenue opportunities and consistent branding."],
    conclusion: "Snapinn redefines rental management — scalable, user-friendly, and built for confident growth in the rental market." },
  { id: "jp-auto-sports", name: "JP Auto Sports", short: "Company Profile & Catalog", client: "JP Auto Sports", period: "2018", live: false, category: "product", iconKey: "car",
    intro: "JP 4X4 Auto Sport supplies high-quality 4x4 accessories for double-cabins, SUVs, Jeeps and off-road vehicles — bumpers, winches, lighting, rooftop tents and more. The site equips off-road enthusiasts with a professional catalog and brand presence.",
    challenge: ["Organizing an expansive, multi-category catalog by vehicle compatibility.", "Establishing a professional online presence and authority.", "Creating an intuitive experience for non-technical and international buyers."],
    solution: ["Clear categories (Bumpers & Bars, Lighting, Outdoor, Winches, Mining Kits) with rich detail.", "Dynamic search and filtering by vehicle type, category, brand and price.", "Fully responsive design across all devices."],
    results: ["A polished, professional presence and stronger reputation.", "Higher engagement and product inquiries.", "Streamlined operations and increased SEO-driven reach."],
    conclusion: "A transformative step for JP 4X4's digital footprint — a go-to destination for off-road enthusiasts." },
  { id: "aerate", name: "Aerate", short: "Company Profile", client: "Aerate", period: "2022", live: false, category: "product", iconKey: "megaphone",
    intro: "Aerate provides antimicrobial coating services that improve indoor hygiene and air quality — for air conditioners, high-touch surfaces and vehicle interiors, with up to 90 days of active protection. The goal: a digital presence that showcases their commitment to health.",
    challenge: ["Inconsistent content across multiple stakeholders with differing opinions.", "Limited customization within Webflow's template-based structure."],
    solution: ["A clear content strategy and brand guide organizing services, benefits and testimonials.", "Optimized UI within Webflow's constraints — custom imagery, icons and interactions.", "Structured stakeholder feedback with a clear approval process."],
    results: ["A polished, cohesive site aligned to Aerate's brand identity.", "Responsive experience across desktop and mobile.", "Unified messaging and an easy-to-manage CMS for the team."],
    conclusion: "Strategic planning and thoughtful design overcame technical limits and stakeholder challenges — now a key asset in Aerate's marketing." },
];
