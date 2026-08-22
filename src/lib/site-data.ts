export const BRAND = {
  name: "Microweb Solution",
  tagline: "We Make Brands Impossible to Ignore.",
  email: "hello@microwebsolution.com",
  phone: "+91 98765 43210",
  location: "India",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
] as const;

export const MARQUEE_WORDS = [
  "Digital Marketing",
  "SEO",
  "Branding",
  "Social Media",
  "Performance Ads",
  "Web Development",
  "Content Strategy",
  "Growth",
];

export const CLIENTS = [
  "NOVA",
  "VERTEX",
  "LUMORA",
  "AURA",
  "MONO",
  "ORBIT",
  "HELIX",
  "KOVA",
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Brands Scaled" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "/5", label: "Client Satisfaction", decimals: 1 },
];

export const SERVICES = [
  {
    num: "01",
    title: "Digital Marketing",
    icon: "Rocket",
    short: "Strategy, campaigns, content and growth systems.",
    long: "Build a complete digital growth engine around your brand — from positioning to full-funnel execution.",
    features: ["Full-funnel strategy", "Campaign planning", "Content systems", "Channel mix", "Analytics"],
  },
  {
    num: "02",
    title: "Search Engine Optimization",
    icon: "Search",
    short: "Technical SEO, content strategy and organic growth.",
    long: "Own the searches that matter with technical excellence, topical authority and compounding organic traffic.",
    features: ["Technical audits", "Keyword architecture", "Content clusters", "Link authority", "Local SEO"],
  },
  {
    num: "03",
    title: "Social Media Marketing",
    icon: "Share2",
    short: "Social strategy, content, community and campaigns.",
    long: "Turn feeds into funnels with scroll-stopping creative and always-on community building.",
    features: ["Content calendars", "Short-form video", "Community management", "Influencer collabs", "Reporting"],
  },
  {
    num: "04",
    title: "Performance Marketing",
    icon: "Target",
    short: "Google Ads, Meta Ads and ROI-focused campaigns.",
    long: "Paid media engineered around unit economics — every rupee tracked to revenue.",
    features: ["Google Ads", "Meta Ads", "Creative testing", "CRO", "ROAS modelling"],
  },
  {
    num: "05",
    title: "Web Development",
    icon: "Code2",
    short: "High-performance websites and digital experiences.",
    long: "Fast, accessible, conversion-ready builds with motion that makes brands feel alive.",
    features: ["Design systems", "Headless builds", "Core Web Vitals", "Landing pages", "E-commerce"],
  },
  {
    num: "06",
    title: "Branding & Creative",
    icon: "Palette",
    short: "Identity, visual systems, campaigns and direction.",
    long: "Identity systems with a point of view — built to be recognised in a crowded feed.",
    features: ["Brand strategy", "Visual identity", "Art direction", "Campaign concepts", "Guidelines"],
  },
  {
    num: "07",
    title: "Content Marketing",
    icon: "PenTool",
    short: "Content designed to attract, educate and convert.",
    long: "Editorial thinking applied to demand — narrative that earns attention and trust.",
    features: ["Editorial strategy", "Long-form", "Video scripts", "Email", "Distribution"],
  },
  {
    num: "08",
    title: "Analytics & Growth",
    icon: "LineChart",
    short: "Data analysis, tracking and continuous optimization.",
    long: "Clean data, honest dashboards and an experiment cadence that keeps growth compounding.",
    features: ["GA4 & tracking", "Dashboards", "Attribution", "Experimentation", "Growth sprints"],
  },
];

export const PROCESS = [
  { num: "01", title: "Discover", copy: "Deep-dive into your market, audience, data and competitive white space." },
  { num: "02", title: "Strategize", copy: "Positioning, channel mix and a measurable roadmap tied to business goals." },
  { num: "03", title: "Create", copy: "Creative systems, content and experiences built to stop the scroll." },
  { num: "04", title: "Launch", copy: "Coordinated go-live across paid, organic, social and owned channels." },
  { num: "05", title: "Optimize", copy: "Weekly experiments on creative, targeting, funnels and messaging." },
  { num: "06", title: "Scale", copy: "Double down on what compounds and expand into new growth surfaces." },
];

export const WHY = [
  { title: "Creative Thinking", copy: "Ideas that earn attention instead of buying it twice.", icon: "Sparkles" },
  { title: "Data Driven", copy: "Every decision backed by numbers you can actually see.", icon: "BarChart3" },
  { title: "Performance Focused", copy: "Pipeline and revenue, not vanity impressions.", icon: "Target" },
  { title: "Technology First", copy: "Modern stacks, automation and fast builds by default.", icon: "Cpu" },
  { title: "Transparent Collaboration", copy: "Shared dashboards, clear comms, no black boxes.", icon: "Handshake" },
  { title: "Growth Obsessed", copy: "We optimise until the curve bends — then keep going.", icon: "TrendingUp" },
];

export const TEAM = [
  { name: "Aarav Mehta", role: "Founder & Strategy", initials: "AM" },
  { name: "Ishita Rao", role: "Creative Director", initials: "IR" },
  { name: "Kabir Shah", role: "Performance Marketing Lead", initials: "KS" },
  { name: "Neha Verma", role: "Technology Lead", initials: "NV" },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  filter: string;
  description: string;
  result: string;
  image: "nova" | "vertex" | "lumora";
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Nova",
    category: "E-commerce Growth",
    filter: "SEO",
    description: "Rebuilt the organic engine for a D2C skincare brand with a scalable content architecture.",
    result: "+187% Organic Traffic",
    image: "nova",
  },
  {
    id: "02",
    name: "Vertex",
    category: "SaaS Growth Campaign",
    filter: "PERFORMANCE",
    description: "Full-funnel demand program pairing paid search with product-led content.",
    result: "+142% Qualified Leads",
    image: "vertex",
  },
  {
    id: "03",
    name: "Lumora",
    category: "Brand Transformation",
    filter: "BRANDING",
    description: "A complete identity system and campaign platform for a lifestyle challenger brand.",
    result: "+210% Social Engagement",
    image: "lumora",
  },
  {
    id: "04",
    name: "Aura",
    category: "Performance Marketing",
    filter: "PERFORMANCE",
    description: "Creative testing framework and offer engineering across Meta and Google.",
    result: "3.8X ROAS",
    image: "vertex",
  },
  {
    id: "05",
    name: "Mono",
    category: "Website Transformation",
    filter: "WEB",
    description: "High-performance site rebuild with a motion-led design system and CRO program.",
    result: "+68% Conversion Rate",
    image: "lumora",
  },
  {
    id: "06",
    name: "Orbit",
    category: "Social Growth",
    filter: "SOCIAL",
    description: "Short-form content engine and community strategy for a fintech app.",
    result: "+320% Engagement",
    image: "nova",
  },
];

export const WORK_FILTERS = ["ALL", "BRANDING", "SEO", "SOCIAL", "PERFORMANCE", "WEB"];

export const FAQS = [
  {
    q: "What services do you provide?",
    a: "Digital marketing strategy, SEO, social media marketing, performance marketing, web development, branding and creative, content marketing, and analytics and growth consulting.",
  },
  {
    q: "How long does a project take?",
    a: "A focused website or brand sprint typically runs 3–6 weeks. Ongoing marketing engagements are structured in monthly cycles with a 90-day first roadmap.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. A large share of our work is with early and growth-stage teams who need senior thinking without a full in-house department.",
  },
  {
    q: "Do you offer monthly marketing plans?",
    a: "We do. Retainers are scoped around channels, creative volume and growth targets, and reviewed every quarter.",
  },
  {
    q: "How do you measure campaign success?",
    a: "Against business metrics: qualified pipeline, revenue, CAC, ROAS and conversion rate — reported in a shared dashboard you can open any time.",
  },
  {
    q: "How can we start working together?",
    a: "Send an inquiry through the contact form. We reply within one business day with a short discovery call and a scoped proposal.",
  },
];

export const BUDGETS = ["Under ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+", "Not sure yet"];
