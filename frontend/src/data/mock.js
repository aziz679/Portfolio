// Mock data for Mohammed Azizuddin's Portfolio

export const personalInfo = {
  name: "Mohammed Azizuddin",
  title: "Product Marketing Specialist",
  tagline: "I turn chaos into conversions (and save money while doing it)",
  email: "aziziddinmohd7@gmail.com",
  phone: "+91-9535151254",
  linkedin: "https://www.linkedin.com/in/mohammed-azizuddin-701434288/",
  github: "https://github.com",
  location: "Bangalore, India"
};

export const about = {
  summary: "Product Marketing Professional with 3 years of turning 'impossible' into 'done'. I've streamlined operations to cut response times by 70%, designed pricing models that boosted conversions by 7%, and built marketing systems that saved ₹84,000 annually. When I'm not optimizing workflows or building AI-powered platforms, I'm probably automating something that definitely didn't need automating (but should have been).",
  highlights: [
    { metric: "70%", label: "Faster Response Time" },
    { metric: "₹84K+", label: "Annual Cost Savings" },
    { metric: "16K+", label: "Views in First Month" },
    { metric: "1000+", label: "Users Acquired Organically" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Ralvie AI",
    role: "Product Marketing Specialist",
    location: "Bangalore, India",
    period: "Jan 2024 - Present",
    description: "First marketing hire leading a team of 2, turning a startup into a well-oiled marketing machine.",
    achievements: [
      {
        title: "Onboarded Zoho CRM & Billing",
        description: "When I joined, leads were collected via email and manually recorded. Billing was done using a basic plugin. I identified the chaos and implemented Zoho CRM & Billing, setting up automation flows for lead capture, region-based assignment (UAE, US, India), and billing.",
        impact: "Reduced lead response time by 70% (hours to under 10 minutes), saved 8+ hours/week, achieved 40% cost saving vs. HubSpot, eliminated manual invoicing with 100% automation."
      },
      {
        title: "Built Content Creation Powerhouse",
        description: "Created a cost-effective content stack using Canva, ChatGPT, Synthesia, HeyGen, ElevenLabs, and Adobe Creative Suite. Produced daily content for Ralvie AI and AI Unleashed, scripted video demos, and managed all tool billing.",
        impact: "Published 150+ content pieces and 10+ training videos in 6 months, boosted engagement by 60%, increased demo requests by 7%, cut turnaround time by 50%, saved ₹1-1.2 lakhs/month."
      },
      {
        title: "Built Ralvie's Website & Client Portal",
        description: "Collaborated with WordPress developer to architect the entire website including Home, Product, Pricing, Contact, Integrations, and Blog. Integrated with Zoho CRM and Billing for automated lead capture, demo requests, and subscription workflows.",
        impact: "Launched in 4 weeks, improved lead capture by 70%, enabled 24/7 automated lead collection."
      },
      {
        title: "Replaced Hootsuite with Custom n8n Automation",
        description: "Initially using Hootsuite (₹24K/year), I discovered n8n and built a custom automation workflow using available templates integrated with Google Sheets for social media scheduling.",
        impact: "Saved ₹24,000 annually, enabled more flexible scheduling."
      },
      {
        title: "Executed SaaS Reseller Outreach",
        description: "Conducted research to identify SaaS resellers and affiliate networks. Used LinkedIn, Lusha, and PowerLead to extract contacts. Created personalized pitches for Ralvie's reseller program.",
        impact: "Reached 150+ qualified partners, generated 12+ warm leads, 4 active onboardings in progress."
      },
      {
        title: "Designed Credit-Based Pricing Model",
        description: "Proposed and implemented a credit system to monetize AI agent usage. Defined credit-to-action mappings and integrated with subscription tiers (Freemium, Premium, Enterprise).",
        impact: "Launched functional credit-based model, 7% of freemium users upgraded within first month, improved resource control."
      },
      {
        title: "Launched AI Unleashed",
        description: "Proposed and launched a multi-channel content brand including YouTube channel and WordPress publishing platform offering AI news, tool listings, and tutorials. Managed end-to-end from branding to scripting, editing, and publishing.",
        impact: "16K+ video views, 1000+ website visits, built foundation for future monetization with ₹0 budget."
      },
      {
        title: "Managed All Marketing Spend",
        description: "Created centralized tracker for all marketing tools and subscriptions. Managed vendor onboarding, billing approvals, and coordinated with finance team for monthly reports.",
        impact: "100% spend visibility, saved ₹60,000 annually by replacing high-cost tools."
      }
    ]
  },
  {
    id: 2,
    company: "ISBM",
    role: "Marketing Executive",
    location: "Bangalore, India",
    period: "Aug 2023 - Dec 2023",
    description: "Streamlined vendor coordination and executed college outreach campaigns.",
    achievements: [
      {
        title: "College Outreach & Events",
        description: "Designed and executed college campaigns, led 20+ seminars/workshops engaging 1,000+ students.",
        impact: "Generated qualified leads, increased engagement by 40% in 3 months."
      },
      {
        title: "Education Publisher Partnerships",
        description: "Led partnerships managing CPL, CPA, and admission-based models.",
        impact: "Reduced cost per admission by 15-20%, boosted inquiries by 30%."
      }
    ]
  },
  {
    id: 3,
    company: "Presenova Management Solution LLP",
    role: "Digital Marketing Executive",
    location: "Bangalore, India",
    period: "Sep 2022 - Jul 2023",
    description: "Managed large-scale education marketing campaigns.",
    achievements: [
      {
        title: "Publisher Spend Management",
        description: "Led ₹6 Cr annual spend across 10+ education platforms.",
        impact: "Improved ROI by 18%, sustained 25-30% lead-to-application conversion."
      },
      {
        title: "Paid Campaigns",
        description: "Designed search, display, and video campaigns with ₹2 Cr annual budget.",
        impact: "Optimized CPL by 20%, drove lead flow and brand visibility."
      }
    ]
  }
];

export const projects = [
  {
    id: 1,
    name: "AI Kaptan",
    tagline: "Your AI Discovery Companion",
    description: "A comprehensive AI tools directory and discovery engine that helps people and businesses discover, compare, and choose the right artificial intelligence tools for their needs. Think of it as a curated, searchable catalog of AI products.",
    link: "https://aikaptan.com",
    features: [
      "🔍 Smart AI Tool Discovery & Natural Language Search",
      "⭐ Verified Ratings & User Reviews for 630+ Tools",
      "📊 Advanced Comparison & Filtering (Pro Plan)",
      "📌 Community-Driven with Tool Submission Portal",
      "💾 Save & Organize Your Favorite Tools",
      "🤖 Automated Blog Posting & SEO Optimization"
    ],
    results: [
      "Grew from 0 to 1,000+ users in first month (100% organic)",
      "Ranked on first page of Google search results",
      "60% of users from US region",
      "Received organic enquiries for tool listings",
      "630+ AI tools catalogued"
    ],
    techStack: ["React", "FastAPI", "MongoDB", "SEO", "Content Automation", "Admin Panel"]
  },
  {
    id: 2,
    name: "Emareach AI",
    tagline: "Email Outreach, Minus the Spam",
    description: "Built from personal frustration with Gmail outreach limitations. Emareach AI is a smart email outreach tool that connects with Gmail, creates sequences, tracks everything, and uses LLM to generate templates—all while ensuring emails land in inbox, not spam.",
    link: "#",
    features: [
      "📧 Gmail Account Integration",
      "🔄 Email Sequence Creation & Automation",
      "📝 LLM-Powered Template Generation",
      "📊 Advanced Tracking (Opens, Clicks, Replies, Sent)",
      "📇 Contact Management & Organization",
      "🛡️ Anti-Spam Backend Best Practices"
    ],
    results: [
      "Solves personal pain point of Gmail limitations",
      "Backend engineered for deliverability",
      "LLM integration for smart content generation",
      "Currently in active development"
    ],
    techStack: ["React", "FastAPI", "Gmail API", "LLM Integration", "Email Tracking", "MongoDB"]
  }
];

export const techStack = {
  design: [
    { name: "Canva", category: "design" },
    { name: "Adobe Creative Suite", category: "design" }
  ],
  aiAutomation: [
    { name: "ChatGPT", category: "ai" },
    { name: "Synthesia", category: "ai" },
    { name: "HeyGen", category: "ai" },
    { name: "ElevenLabs", category: "ai" },
    { name: "n8n", category: "automation" },
    { name: "Zapier", category: "automation" }
  ],
  marketing: [
    { name: "Google Ads", category: "marketing" },
    { name: "Facebook Ads", category: "marketing" },
    { name: "Semrush", category: "marketing" },
    { name: "Google Analytics", category: "marketing" }
  ],
  tools: [
    { name: "Zoho CRM", category: "crm" },
    { name: "Zoho Billing", category: "crm" },
    { name: "WordPress", category: "web" },
    { name: "Elementor", category: "web" },
    { name: "Slack", category: "communication" },
    { name: "Loom", category: "video" },
    { name: "Lusha", category: "tools" },
    { name: "PowerLead", category: "tools" }
  ],
  development: [
    { name: "Emergent", category: "development" },
    { name: "GitHub", category: "development" },
    { name: "API Integration", category: "development" },
    { name: "React", category: "development" },
    { name: "FastAPI", category: "development" },
    { name: "MongoDB", category: "development" }
  ]
};

export const education = {
  degree: "Bachelor of Computer Application",
  institution: "Presidency College",
  year: "2023",
  location: "Bangalore, India"
};

export const certifications = [
  "Google Search Advertising",
  "Google Display Advertising",
  "Google AI Powered Shopping Ads",
  "Sales Funnel",
  "Business Analysis Basics",
  "SEO Basics",
  "Flipkart Search Advertising",
  "Marketing Strategy: Competitive Intelligence"
];
