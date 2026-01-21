// Complete portfolio data with real logos and full CV experience

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
    
    challenge: "The AI tools market exploded with thousands of products. People were drowning in options with no good way to discover, compare, or choose the right tools. Every search led to listicles and affiliate spam. Users needed a trusted, curated platform.",
    
    whatIBuilt: "Full-stack discovery platform with 630+ curated tools, smart natural language search, verified user reviews, admin panel for content management, automated blog posting for SEO, advanced filtering (Pro plan), and tool submission portal. Built with React frontend, FastAPI backend, MongoDB database.",
    
    impact: [
      "🚀 1,000+ users in first month (100% organic traffic)",
      "📈 #1 Google ranking for 'AI tools directory' and related keywords",
      "🌍 60% traffic from US market, 25% from Europe",
      "💼 Multiple partnership enquiries from AI companies",
      "⭐ 630+ tools with verified ratings and real user reviews",
      "📝 Automated content system generating SEO-optimized blogs",
      "💰 Built for $0 marketing budget—pure organic growth"
    ],
    
    metrics: [
      { label: "Users (Month 1)", value: "1,000+" },
      { label: "Tools Listed", value: "630+" },
      { label: "US Traffic", value: "60%" },
      { label: "Google Rank", value: "Page 1" },
      { label: "Conversion Rate", value: "3.2%" },
      { label: "Daily Visitors", value: "200+" }
    ],
    
    tech: ["React", "FastAPI", "MongoDB", "SEO Automation", "Admin Panel", "Analytics", "Content System"],
    
    link: "https://aikaptan.com",
    
    images: [
      { 
        url: "https://static.prod-images.emergentagent.com/jobs/31c66a46-85c1-4314-b6c2-c9e0361cfca0/images/72df14d4f117e51bd729b56e6d0624a9af12e74bcae7bff6d87e9f03ba0a9db1.png", 
        caption: "AI Kaptan Homepage - Clean discovery interface with smart search",
        fallback: "🚀"
      },
      { 
        url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/kpzygqg9_image.png", 
        caption: "Admin Dashboard - Content management and analytics",
        fallback: "📊"
      }
    ],
    
    story: "Started with a simple question: Why is finding the right AI tool so hard? I was drowning in options myself. Built the answer in 4 weeks—a clean, curated directory with real reviews. Launched with 50 tools. Community started submitting more. Added automated blog posting for SEO. Content started ranking. Google noticed. Page 1 in 30 days. Users came organically. Now at 1000+ users and growing daily.",
    
    keyFeatures: [
      { title: "Smart Search", description: "Natural language search powered by intelligent filtering. Describe what you need, find the right tool." },
      { title: "630+ Curated Tools", description: "Hand-picked and verified AI tools across all categories—from image generation to code assistants." },
      { title: "User Reviews", description: "Real reviews from real users. See what actually works before you commit." },
      { title: "Advanced Filtering", description: "Filter by category, pricing, features, use case. Pro plan unlocks powerful search." },
      { title: "Tool Submission", description: "Community-driven growth. Makers can submit their tools for visibility." },
      { title: "SEO Content Engine", description: "Automated blog system that ranks and drives organic discovery." }
    ],
    
    learnings: [
      "SEO compounds exponentially if you nail the fundamentals—first page ranking changed everything",
      "Community-driven content scales better than manual curation—users know what they want",
      "Admin panels are worth every hour of upfront investment—managing 630+ tools manually would be impossible",
      "Content automation works when you maintain quality—our blogs rank because they're actually useful",
      "Page 1 Google ranking is the difference between 10 visitors and 200+ daily"
    ]
  },
  {
    id: 2,
    name: "Emareach AI",
    tagline: "Email Outreach Without the Spam",
    type: "SaaS Product • Full-Stack • LLM Integration",
    shortDescription: "Smart email outreach platform with sequence automation, LLM-powered templates, and anti-spam engineering.",
    tldr: "Born from frustration with Gmail's limits. Built a platform that actually lands in inboxes, not spam folders.",
    
    challenge: "Cold emails go to spam. Gmail accounts get blocked after 50 emails. No way to track opens/clicks. Manual personalization takes hours. Existing tools are expensive and still land in spam. Needed a solution that handles email at scale while maintaining deliverability.",
    
    whatIBuilt: "Full-stack email outreach platform with Gmail OAuth integration, multi-sequence automation, LLM-powered template generation (connect your own OpenAI/Claude/Gemini key), real-time tracking dashboard (opens/clicks/replies), contact management system, and backend engineered specifically to avoid spam filters. Built from scratch solving my own problem.",
    
    impact: [
      "📧 Gmail OAuth integration—secure, no password storage",
      "🤖 LLM-powered template generation—personalization at scale",
      "📊 Real-time tracking dashboard—know exactly what's working",
      "🛡️ Anti-spam backend engineering—deliverability first",
      "🔄 Multi-sequence automation—set it and forget it",
      "📇 Smart contact management—segment and organize",
      "⚡ Currently in live beta with real campaigns running"
    ],
    
    metrics: [
      { label: "Status", value: "Live Beta" },
      { label: "Features Built", value: "15+" },
      { label: "Integrations", value: "3 LLMs" },
      { label: "Deliverability", value: "High" },
      { label: "Development", value: "Active" },
      { label: "Email Tracking", value: "Real-time" }
    ],
    
    tech: ["React", "FastAPI", "Gmail API", "OpenAI/Claude/Gemini", "MongoDB", "Email Tracking", "OAuth"],
    
    status: "In Active Development",
    
    images: [
      { 
        url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/uulk2r6s_image.png", 
        caption: "Campaign Dashboard - Overview of all email campaigns with performance metrics",
        fallback: "📊"
      },
      { 
        url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/fsg0xqxf_image.png", 
        caption: "Email Sequence Builder - Create multi-step campaigns with delays and conditions",
        fallback: "✉️"
      },
      { 
        url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/w2odlfyx_image.png", 
        caption: "Contact Management - Organize and segment your outreach contacts",
        fallback: "📇"
      },
      { 
        url: "https://customer-assets.emergentagent.com/job_4bff5152-f2ea-4058-b31e-c55d148754d9/artifacts/b1kdl78s_image.png", 
        caption: "Analytics & Tracking - Real-time stats on opens, clicks, replies",
        fallback: "📈"
      }
    ],
    
    story: "I needed to send outreach emails for AI Kaptan partnerships. Gmail kept flagging them as spam. Tried existing tools—expensive and still had deliverability issues. Decided to build my own solution. Spent nights and weekends coding. Added Gmail OAuth for security. Integrated LLMs for smart personalization. Engineered the backend specifically for deliverability—proper headers, sending patterns, domain reputation. Now running real campaigns. High inbox rates. Clean tracking. Exactly what I needed.",
    
    keyFeatures: [
      { title: "Gmail Integration", description: "Secure OAuth connection. No passwords stored. Full Gmail API access." },
      { title: "Sequence Automation", description: "Multi-step campaigns with smart delays. Follow-up automatically based on engagement." },
      { title: "LLM Templates", description: "Connect OpenAI, Claude, or Gemini. Generate personalized templates at scale." },
      { title: "Real-time Tracking", description: "See opens, clicks, and replies as they happen. Know what's working." },
      { title: "Contact Management", description: "Import, organize, segment. Keep your lists clean and organized." },
      { title: "Anti-Spam Engineering", description: "Backend built for deliverability. Proper headers, sending patterns, reputation management." }
    ],
    
    learnings: [
      "Email deliverability is 80% backend engineering, 20% content—headers and sending patterns matter more than copy",
      "LLM integration makes personalization scalable—what took hours now takes seconds",
      "Real-time tracking changes how you optimize—you see patterns immediately",
      "Gmail API has quirks but it's powerful—proper OAuth implementation is crucial",
      "Building for yourself ensures you solve real problems—I use this daily"
    ]
  },
  {
    id: 3,
    name: "Ralvie AI Frontdesk",
    tagline: "AI That Answers Every Call",
    type: "Landing Page • Conversion • GTM",
    shortDescription: "Complete landing page for Ralvie's AI phone system handling 50K+ daily calls. Built to convert skeptics into believers.",
    tldr: "Ralvie had revolutionary AI phone tech. Needed a page that could sell it. Built conversion-focused landing page in under a week.",
    
    challenge: "Businesses are deeply skeptical about AI handling customer calls. They've been burned by bad IVR systems. Need to prove that 98% satisfaction rate and 50K+ daily calls isn't marketing fluff. Had to build trust while showcasing technical capabilities.",
    
    whatIBuilt: "High-converting landing page using Lovable (vibe coding). Hero section with bold stats (50K+ calls, 98% satisfaction). Real call examples with audio snippets. Social proof section with customer testimonials. Technical capabilities explained simply. Clear CTA flow. Built and launched in under a week using modern rapid development tools.",
    
    impact: [
      "🎯 Production landing page live and converting",
      "📞 Showcases 50K+ daily calls handled by AI",
      "✨ 98% customer satisfaction prominently displayed",
      "🔥 Real customer testimonials and call examples",
      "⚡ Built in < 1 week using Lovable (vibe coding)",
      "💼 Clear value prop for skeptical B2B buyers",
      "📊 Conversion-optimized layout and messaging"
    ],
    
    metrics: [
      { label: "Built with", value: "Lovable" },
      { label: "Launch Time", value: "< 1 week" },
      { label: "Daily Calls", value: "50K+" },
      { label: "Satisfaction", value: "98%" },
      { label: "Page Sections", value: "7" },
      { label: "Testimonials", value: "Real" }
    ],
    
    tech: ["Lovable", "React", "Landing Page Design", "Conversion Optimization", "Rapid Development"],
    
    link: "https://frontdesk.ralvie.ai/",
    
    images: [
      { 
        url: "https://static.prod-images.emergentagent.com/jobs/31c66a46-85c1-4314-b6c2-c9e0361cfca0/images/fa526b06d7c604ddfb568637408a5f7fff2132f283ac7c5e162713b53f894d08.png", 
        caption: "Hero Section - 50K+ daily calls, 98% satisfaction, AI that sounds human",
        fallback: "📞"
      }
    ],
    
    story: "Ralvie had built incredible AI phone tech. Handling 50K+ calls daily with 98% satisfaction. But no landing page. No way to convert interested buyers. Needed something fast. Used Lovable for rapid development. Vibe coded the entire page based on conversion best practices. Focused on trust signals: real numbers, customer testimonials, call examples. Made technical capabilities accessible. Clear CTA flow. Shipped in days, not weeks. Now driving conversions for enterprise deals.",
    
    keyFeatures: [
      { title: "Bold Hero Stats", description: "50K+ calls, 98% satisfaction—numbers that grab attention and build credibility." },
      { title: "Real Call Examples", description: "Audio snippets of AI handling actual customer calls. Proof it works." },
      { title: "Social Proof", description: "Customer testimonials from real businesses using the system." },
      { title: "Simple Tech Explanation", description: "Complex AI made understandable for non-technical decision makers." },
      { title: "Trust Elements", description: "Security, reliability, uptime guarantees—everything B2B needs to see." },
      { title: "Clear CTA Flow", description: "Book demo → See it work → Get started. No friction." }
    ],
    
    learnings: [
      "Vibe coding tools like Lovable dramatically accelerate shipping—days instead of weeks",
      "B2B landing pages need proof, not promises—real numbers convert",
      "Speed to market matters more than perfection—launch and iterate",
      "Trust signals are everything in AI sales—skepticism is the default",
      "Simple explanations win—don't overwhelm with technical details"
    ]
  },
  {
    id: 4,
    name: "AI Unleashed",
    tagline: "Content Brand That Actually Grows",
    type: "Content Platform • SEO • WordPress",
    shortDescription: "Multi-channel AI content brand: WordPress site, YouTube channel, social media. 16K+ views in month one with zero budget.",
    tldr: "Ralvie needed thought leadership in AI space. Built complete content brand from scratch with $0 budget.",
    
    challenge: "Ralvie needed credibility in the competitive AI space. No existing content property. No marketing budget. Needed to establish thought leadership, attract organic traffic, and build community. Had to make it all happen with zero spend.",
    
    whatIBuilt: "Complete multi-channel content brand: WordPress publishing platform with custom theme, YouTube channel with consistent content, social media presence across platforms, automated content pipeline, SEO optimization, tool listings and tutorials, AI news aggregation. End-to-end content strategy and execution. Built for future monetization through ads and partnerships.",
    
    impact: [
      "📺 16K+ video views in first month (zero promotion budget)",
      "🌐 1,000+ website visits from organic search",
      "💰 $0 spent on ads—pure organic growth",
      "📝 Consistent content pipeline established",
      "🚀 Foundation built for future monetization",
      "🎯 Thought leadership established in AI space",
      "🤝 Multiple partnership opportunities generated"
    ],
    
    metrics: [
      { label: "Views (Month 1)", value: "16K+" },
      { label: "Site Visits", value: "1,000+" },
      { label: "Marketing Budget", value: "$0" },
      { label: "Platform", value: "WordPress" },
      { label: "Social Channels", value: "4" },
      { label: "Content Pieces", value: "50+" }
    ],
    
    tech: ["WordPress", "YouTube", "SEO", "Content Automation", "Social Media", "Elementor"],
    
    link: "https://aiunleashed.ca",
    
    images: [
      { 
        url: "https://static.prod-images.emergentagent.com/jobs/31c66a46-85c1-4314-b6c2-c9e0361cfca0/images/8caa9d9f9b58430b1726b0c011f43893e8f3c3a9cb9401665fd7bce9d7cd6b12.png", 
        caption: "AI Unleashed Homepage - Purple neon theme with AI tools and news",
        fallback: "🌟"
      }
    ],
    
    story: "Ralvie needed credibility. Proposed building a content brand focused on AI education. Got approval but zero budget. No problem. Built WordPress site with custom theme. Started YouTube channel creating tutorials and tool reviews. Set up social media. Created content calendar. Automated where possible. Posted consistently. SEO kicked in. YouTube algorithm picked up videos. 16K views in first month. Website traffic grew organically. Built email list. Created foundation for future monetization. All with $0 spend.",
    
    keyFeatures: [
      { title: "WordPress Platform", description: "Custom-built publishing platform optimized for AI content and SEO." },
      { title: "YouTube Channel", description: "Video tutorials, tool reviews, and AI news. Consistent posting schedule." },
      { title: "Tool Directory", description: "Curated AI tools with detailed descriptions and real use cases." },
      { title: "AI News Hub", description: "Latest developments in AI aggregated and explained simply." },
      { title: "SEO Optimized", description: "Every piece of content optimized for search and discoverability." },
      { title: "Multi-Channel", description: "Coordinated content across WordPress, YouTube, Twitter, LinkedIn." }
    ],
    
    learnings: [
      "Content compounds if you're consistent—every piece builds on the last",
      "WordPress is still powerful for content sites—don't sleep on it",
      "Video content drives discovery better than text—YouTube algorithm is generous",
      "Zero budget forces creative solutions—constraints breed innovation",
      "Community engagement matters more than follower count—quality over quantity"
    ]
  }
];

export const techStack = {
  development: [
    { name: "React", icon: "⚛️", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "FastAPI", icon: "⚡", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "MongoDB", icon: "🍃", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "WordPress", icon: "📝", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Python", icon: "🐍", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "💛", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Emergent", icon: "✨", logo: "https://framerusercontent.com/images/OgCCmotVDAi8Ee4FKm4NHXDc.png" }
  ],
  aiTools: [
    { name: "ChatGPT", icon: "🤖", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Claude", icon: "🧠", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg" },
    { name: "HeyGen", icon: "🎥", logo: "" },
    { name: "Synthesia", icon: "👤", logo: "" },
    { name: "ElevenLabs", icon: "🎙️", logo: "" },
    { name: "Lovable", icon: "💫", logo: "" }
  ],
  marketing: [
    { name: "Google Ads", icon: "📊", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Facebook Ads", icon: "📱", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
    { name: "Semrush", icon: "🔍", logo: "" },
    { name: "Google Analytics", icon: "📈", logo: "" },
    { name: "Canva", icon: "🎨", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "Adobe CS", icon: "🎭", logo: "" }
  ],
  automation: [
    { name: "n8n", icon: "🔄", logo: "" },
    { name: "Zapier", icon: "⚡", logo: "" },
    { name: "Zoho CRM", icon: "📋", logo: "" },
    { name: "Zoho Billing", icon: "💳", logo: "" },
    { name: "Gmail API", icon: "📧", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Slack", icon: "💬", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Discord", icon: "🎮", logo: "" }
  ],
  content: [
    { name: "Loom", icon: "🎬", logo: "" },
    { name: "YouTube", icon: "📺", logo: "" },
    { name: "Elementor", icon: "🏗️", logo: "" }
  ]
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
