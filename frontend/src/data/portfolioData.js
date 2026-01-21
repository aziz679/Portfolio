// Complete portfolio data with Mark Progano-style messaging

export const hero = {
  greeting: "Make Marketing Work.",
  subtitle: "I build products people actually use and create marketing systems that drive real growth.",
  name: "Mohammed Azizuddin",
  description: "Product marketer who codes. I've taken AI Kaptan from 0→1000+ users in 30 days, saved companies ₹84K through automation, and built systems that scale. I sit between product, marketing, and engineering so everything moves forward."
};

export const introduction = {
  greeting: "Hello 👋 I'm Mohammed,",
  tagline: "a marketing-minded product builder with an eye for growth, automation, and making things that just work.",
  traits: [
    {
      title: "Builder",
      description: "I ship real products. AI Kaptan serves 1000+ users. Emareach AI handles email campaigns. Ralvie's sites convert visitors. Not concepts—working software."
    },
    {
      title: "Bridge",
      description: "I translate between marketing goals and technical execution. Led teams across design, content, and automation. Everyone stays aligned, nothing gets lost."
    },
    {
      title: "Systems",
      description: "I care about what's under the hood. Replaced Hootsuite with n8n. Cut costs by ₹84K. Built CRM flows that work across timezones. Marketing with engineering discipline."
    }
  ],
  cta: "Open to New Projects"
};

export const capabilities = [
  {
    title: "0→1 Product Launches",
    description: "When you need someone who can build AND market a product, I handle the full stack: product strategy, development, GTM execution, and growth loops that compound. Took AI Kaptan from idea to 1000+ organic users in month one.",
    icon: "🚀"
  },
  {
    title: "Marketing Systems That Scale",
    description: "When your marketing feels like duct tape and hope, I build proper systems. Content engines producing 150+ assets. Pricing models increasing conversions 7%. Automation saving ₹84K annually. This is marketing with measurable ROI.",
    icon: "⚡"
  },
  {
    title: "Technical Marketing",
    description: "When you need marketing that speaks engineering, I'm fluent in both. Implement CRMs. Build automation workflows. Integrate LLMs. Create admin panels. I bridge the gap so technical products get proper marketing.",
    icon: "🛠️"
  },
  {
    title: "Growth Through Content",
    description: "When organic growth feels impossible, I make it systematic. Ranked AI Kaptan on Google page 1 in 30 days. Grew AI Unleashed to 16K+ views with zero ad spend. SEO, content, and distribution that actually works.",
    icon: "📈"
  }
];

export const projects = [
  {
    id: 1,
    name: "AI Kaptan",
    tagline: "The AI Directory That Actually Works",
    type: "Product Launch • SEO • Community",
    shortDescription: "Comprehensive AI tools discovery platform serving 1000+ users. From idea to #1 Google ranking in 30 days.",
    tldr: "Built a product that solved a real problem: finding the right AI tools in an ocean of options. Result? 1000+ organic users in month one.",
    
    challenge: "The AI tools market exploded with thousands of products. People were drowning in options with no good way to discover, compare, or choose the right tools.",
    
    whatIBuilt: "Full-stack discovery platform with 630+ curated tools, smart search, verified reviews, admin panel, and automated SEO. Not just a directory—a complete system.",
    
    impact: [
      "🚀 1,000+ users in first month (100% organic)",
      "📈 #1 Google ranking for competitive keywords",
      "🌍 60% traffic from US market",
      "💼 Multiple partnership enquiries",
      "⭐ 630+ tools with verified ratings"
    ],
    
    metrics: [
      { label: "Users (Month 1)", value: "1,000+" },
      { label: "Tools Listed", value: "630+" },
      { label: "US Traffic", value: "60%" },
      { label: "Google Rank", value: "Page 1" },
      { label: "Conversion Rate", value: "3.2%" }
    ],
    
    tech: ["React", "FastAPI", "MongoDB", "SEO Automation", "Admin Panel", "Analytics"],
    
    link: "https://aikaptan.com",
    
    images: [
      { url: "/projects/aikaptan_home.png", caption: "AI Kaptan Homepage - Clean discovery interface" },
      { url: "/projects/aikaptan_tools.png", caption: "630+ Tools with Smart Filtering" },
      { url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/kpzygqg9_image.png", caption: "Admin Dashboard" }
    ],
    
    story: "Started with a question: Why is finding AI tools so hard? Built the answer in 4 weeks. Launched with 50 tools. Community started submitting more. SEO kicked in. Ranked page 1. Users came organically. Now at 1000+ users and growing.",
    
    learnings: [
      "SEO compounds if you nail the fundamentals",
      "Community-driven content scales better than manual curation",
      "Admin panels are worth the upfront investment",
      "First page Google ranking changes everything"
    ]
  },
  {
    id: 2,
    name: "Emareach AI",
    tagline: "Email Outreach Without the Spam",
    type: "SaaS Product • Full-Stack • LLM Integration",
    shortDescription: "Smart email outreach platform with sequence automation, LLM-powered templates, and anti-spam engineering.",
    tldr: "Born from frustration with Gmail's limits. Built a platform that actually lands in inboxes.",
    
    challenge: "Cold emails go to spam. Accounts get blocked. No tracking. Manual personalization is hell. Gmail wasn't built for outreach at scale.",
    
    whatIBuilt: "Full-stack platform with Gmail API integration, sequence automation, LLM template generation, real-time tracking (opens/clicks/replies), and backend architecture designed to beat spam filters.",
    
    impact: [
      "📧 Gmail OAuth integration",
      "🤖 LLM-powered templates",
      "📊 Real-time tracking dashboard",
      "🛡️ Anti-spam backend",
      "🔄 Multi-sequence automation"
    ],
    
    metrics: [
      { label: "Status", value: "Live Beta" },
      { label: "Features", value: "15+" },
      { label: "Integrations", value: "3" },
      { label: "Deliverability", value: "High" }
    ],
    
    tech: ["React", "FastAPI", "Gmail API", "LLM Integration", "MongoDB", "Email Tracking"],
    
    status: "In Active Development",
    
    images: [
      { url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/uulk2r6s_image.png", caption: "Campaign Dashboard" },
      { url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/fsg0xqxf_image.png", caption: "Email Sequence Builder" },
      { url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/w2odlfyx_image.png", caption: "Contact Management" },
      { url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/b1kdl78s_image.png", caption: "Analytics & Tracking" }
    ],
    
    story: "Needed to send outreach emails. Gmail kept flagging them. Built Emareach AI over nights and weekends. Added LLM for personalization. Engineered the backend for deliverability. Now in beta with real campaigns running.",
    
    learnings: [
      "Email deliverability is 80% backend engineering",
      "LLM integration makes personalization scalable",
      "Real-time tracking changes how you optimize",
      "Gmail API has quirks but it's powerful"
    ]
  },
  {
    id: 3,
    name: "Ralvie AI Frontdesk",
    tagline: "AI That Answers Every Call",
    type: "Landing Page • Conversion • GTM",
    shortDescription: "Complete landing page for Ralvie's AI phone system. Built to convert skeptics into believers.",
    tldr: "Ralvie needed to sell AI phone systems to businesses. Built a landing page that does the convincing.",
    
    challenge: "Businesses are skeptical about AI handling customer calls. Need to prove 98% satisfaction and 50K+ daily calls isn't just marketing fluff.",
    
    whatIBuilt: "High-converting landing page using Lovable (vibe coding). Real call examples. Social proof. Trust-building elements. Clear value prop. Built in under a week.",
    
    impact: [
      "🎯 Production landing page",
      "📞 Showcases 50K+ daily calls",
      "✨ 98% satisfaction highlighted",
      "🔥 Real customer testimonials",
      "⚡ Rapid deployment"
    ],
    
    metrics: [
      { label: "Built with", value: "Lovable" },
      { label: "Launch Time", value: "< 1 week" },
      { label: "Calls/Day", value: "50K+" },
      { label: "Satisfaction", value: "98%" }
    ],
    
    tech: ["Lovable", "React", "Landing Page Design", "Conversion Optimization"],
    
    link: "https://frontdesk.ralvie.ai/",
    
    images: [
      { url: "/projects/ralvie_frontdesk.png", caption: "Ralvie Frontdesk Landing Page" }
    ],
    
    story: "Ralvie had the tech. Needed the page. Used Lovable for rapid development. Focused on trust signals and proof points. Shipped in days. Now driving conversions.",
    
    learnings: [
      "Vibe coding tools like Lovable accelerate shipping",
      "B2B landing pages need proof, not promises",
      "Speed to market matters more than perfection",
      "Real numbers convert better than marketing copy"
    ]
  },
  {
    id: 4,
    name: "AI Unleashed",
    tagline: "Content Brand That Actually Grows",
    type: "Content Platform • SEO • WordPress",
    shortDescription: "Multi-channel AI content brand with 16K+ views. WordPress site, YouTube channel, and community.",
    tldr: "Needed thought leadership in AI. Built a content brand from scratch with zero budget.",
    
    challenge: "Ralvie needed credibility in the AI space. No content property. No budget. Just needed to make it happen.",
    
    whatIBuilt: "Complete content brand: WordPress publishing platform, YouTube channel, social media presence. Automated content pipeline. SEO optimization. Built for future monetization.",
    
    impact: [
      "📺 16K+ video views (Month 1)",
      "🌐 1,000+ website visits",
      "💰 ₹0 ad spend",
      "📝 Consistent content pipeline",
      "🚀 Foundation for partnerships"
    ],
    
    metrics: [
      { label: "Views (Month 1)", value: "16K+" },
      { label: "Site Visits", value: "1,000+" },
      { label: "Budget", value: "₹0" },
      { label: "Platform", value: "WordPress" }
    ],
    
    tech: ["WordPress", "YouTube", "SEO", "Content Automation", "Social Media"],
    
    link: "https://aiunleashed.ca",
    
    images: [
      { url: "/projects/aiunleashed_home.png", caption: "AI Unleashed Homepage" },
      { url: "/projects/aiunleashed_content.png", caption: "Content Hub" }
    ],
    
    story: "Proposed the idea. Got approval. Built WordPress site. Started YouTube channel. Created content calendar. Automated where possible. Launched. 16K views in month one. Zero budget. Pure execution.",
    
    learnings: [
      "Content compounds if you're consistent",
      "WordPress is still powerful for content",
      "Video content drives discovery better than text",
      "Zero budget forces creative solutions"
    ]
  }
];

export const techStack = {
  development: [
    { name: "React", icon: "⚛️" },
    { name: "FastAPI", icon: "⚡" },
    { name: "MongoDB", icon: "🍃" },
    { name: "WordPress", icon: "📝" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "💛" }
  ],
  aiTools: [
    { name: "ChatGPT", icon: "🤖" },
    { name: "Claude", icon: "🧠" },
    { name: "HeyGen", icon: "🎥" },
    { name: "Synthesia", icon: "👤" },
    { name: "ElevenLabs", icon: "🎙️" },
    { name: "Lovable", icon: "💫" }
  ],
  marketing: [
    { name: "Google Ads", icon: "📊" },
    { name: "Facebook Ads", icon: "📱" },
    { name: "Semrush", icon: "🔍" },
    { name: "Google Analytics", icon: "📈" },
    { name: "Canva", icon: "🎨" },
    { name: "Adobe CS", icon: "🎭" }
  ],
  automation: [
    { name: "n8n", icon: "🔄" },
    { name: "Zapier", icon: "⚡" },
    { name: "Zoho CRM", icon: "📋" },
    { name: "Zoho Billing", icon: "💳" },
    { name: "Gmail API", icon: "📧" },
    { name: "Slack", icon: "💬" }
  ],
  content: [
    { name: "Loom", icon: "🎬" },
    { name: "YouTube", icon: "📺" },
    { name: "WordPress", icon: "📰" },
    { name: "Elementor", icon: "🏗️" }
  ]
};

export const workExperience = {
  ralvie: {
    company: "Ralvie AI",
    role: "First Marketing Hire → Product Marketing Specialist",
    period: "Jan 2024 - Present",
    type: "Startup • AI/Automation",
    context: "Joined as employee #1 in marketing. No systems, no processes, no content. Just a product and a vision.",
    
    bigWins: [
      {
        title: "Built Marketing from Zero",
        subtitle: "The first 90 days",
        story: "Walked into chaos. Leads in email threads. Manual invoicing. No tracking. Three timezones. Zero marketing infrastructure. Most people would panic. I built a plan.",
        actions: [
          "Audited everything: leads, tools, processes, costs",
          "Researched solutions that could scale",
          "Built the case for Zoho vs HubSpot (40% cheaper, 90% of features)",
          "Implemented CRM + Billing in 2 weeks",
          "Set up automation: lead capture → routing → follow-up → invoicing",
          "Trained 3 teams across timezones"
        ],
        impact: "70% faster response time (hours → 10 mins) • 8 hrs/week saved • ₹60K saved vs HubSpot • 100% billing automation",
        tools: ["Zoho CRM", "Zoho Billing", "Automation Workflows"]
      },
      {
        title: "The Content Machine",
        subtitle: "150+ assets in 6 months",
        story: "Two brands. Zero content team. Limited budget. Needed high-quality videos, graphics, training materials. The usual answer: hire an agency. My answer: build the system.",
        actions: [
          "Built content tech stack: Canva, ChatGPT, HeyGen, ElevenLabs, Adobe CS",
          "Created production workflows and quality standards",
          "Trained team on tools and processes",
          "Established content calendars for both brands",
          "Directed and scripted 10+ demo/training videos",
          "Produced 150+ assets while managing all tool budgets"
        ],
        impact: "60% engagement boost • 7% demo increase • 50% faster turnaround • ₹1.2L/month agency savings",
        tools: ["Canva", "ChatGPT", "HeyGen", "Synthesia", "ElevenLabs", "Adobe"]
      },
      {
        title: "The Great Cost Purge",
        subtitle: "₹84K saved annually",
        story: "Marketing tools were piling up. Hootsuite: ₹24K/year. Multiple subscriptions with overlap. No tracking. No accountability. Time to optimize.",
        actions: [
          "Created centralized subscription tracker",
          "Audited every tool: usage, cost, alternatives",
          "Replaced Hootsuite with custom n8n workflow (weekend project)",
          "Eliminated redundant tools",
          "Built automated spend reporting for finance",
          "Negotiated better rates where we couldn't replace"
        ],
        impact: "₹24K saved (Hootsuite) • ₹60K total annual savings • 100% spend visibility • Better functionality",
        tools: ["n8n", "Google Sheets", "Custom Automation"]
      },
      {
        title: "Pricing That Converts",
        subtitle: "7% freemium → paid",
        story: "Unlimited AI usage was unsustainable. Users had no sense of value. No upgrade pressure. Economics didn't work. Needed a pricing model that fixed all three.",
        actions: [
          "Analyzed usage patterns across user segments",
          "Designed credit-based system with action mapping",
          "Worked with engineering on implementation",
          "Built upgrade nudges into product flow",
          "Created billing automation and reporting",
          "Launched with clear value communication"
        ],
        impact: "7% freemium → paid (Month 1) • Better resource control • Usage visibility • Sustainable economics",
        tools: ["Product Strategy", "Pricing Design", "Technical Coordination"]
      },
      {
        title: "AI Unleashed Launch",
        subtitle: "16K views, ₹0 budget",
        story: "Needed thought leadership in AI. No content property. Zero budget. Just 'make it happen.' So I did.",
        actions: [
          "Proposed and got buy-in for content brand strategy",
          "Built WordPress publishing platform",
          "Launched YouTube channel with consistent content",
          "Created social media presence across platforms",
          "Optimized for SEO and discoverability",
          "Managed everything: strategy, production, distribution"
        ],
        impact: "16K+ views • 1K+ site visits • ₹0 budget • Foundation for monetization • Thought leadership established",
        tools: ["WordPress", "YouTube", "SEO", "Content Strategy"]
      },
      {
        title: "Reseller Program GTM",
        subtitle: "4 active onboardings",
        story: "No partner program. No reseller outreach process. Just a goal: acquire resellers at zero CAC. Built the entire GTM from scratch.",
        actions: [
          "Researched and identified 150+ qualified SaaS resellers",
          "Used LinkedIn, Lusha, PowerLead for contact extraction",
          "Created personalized outreach messaging",
          "Built partnership materials and pitch decks",
          "Managed outreach campaigns and follow-ups",
          "Tracked everything in custom pipeline"
        ],
        impact: "150+ outreach • 12 warm leads • 4 active onboardings • Near-zero CAC acquisition channel",
        tools: ["LinkedIn", "Lusha", "PowerLead", "CRM"]
      }
    ],
    
    metrics: [
      { label: "Response Time", value: "70% faster" },
      { label: "Annual Savings", value: "₹84K+" },
      { label: "Content Produced", value: "150+" },
      { label: "Team Size", value: "Led 2" }
    ]
  },
  
  previous: {
    headline: "Before Ralvie: The Foundation",
    summary: "Cut my teeth managing ₹8Cr in ad spend across education clients. Learned how marketing works at scale.",
    
    experience: [
      {
        company: "ISBM",
        role: "Marketing Executive",
        period: "Aug 2023 - Dec 2023",
        type: "Education",
        highlights: [
          "Led 20+ campus seminars, engaged 1,000+ students",
          "Managed education publisher partnerships",
          "Reduced cost per admission 15-20%",
          "Boosted inquiries 30% through targeted campaigns"
        ]
      },
      {
        company: "Presenova",
        role: "Digital Marketing Executive",
        period: "Sep 2022 - Jul 2023",
        type: "Agency",
        highlights: [
          "Managed ₹8Cr annual spend (₹6Cr publishers + ₹2Cr paid ads)",
          "Improved ROI 18% across 10+ platforms",
          "Maintained 25-30% lead-to-application conversion",
          "Optimized CPL 20% through campaign refinement",
          "Produced 50+ monthly creatives"
        ]
      }
    ]
  }
};

export const personalInfo = {
  name: "Mohammed Azizuddin",
  title: "Product Marketer & Builder",
  email: "aziziddinmohd7@gmail.com",
  phone: "+91-9535151254",
  linkedin: "https://www.linkedin.com/in/mohammed-azizuddin-701434288/",
  github: "https://github.com",
  location: "Bangalore, India"
};
