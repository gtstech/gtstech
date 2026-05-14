// Futuristic AI Landing Page Configuration
// Centralized settings for easy customization

export const siteConfig = {
  // Brand & SEO
  brand: {
    name: "AIFuture",
    tagline: "Next-Generation AI Platform",
    description: "Experience cutting-edge artificial intelligence with a futuristic interface designed for the next era of technology.",
    url: "https://aifuture.com",
  },

  // Hero Section
  hero: {
    badge: "✨ The Future of AI is Now",
    headline: {
      line1: "Next-Generation",
      line2: "AI Platform",
    },
    subheadline: "Experience cutting-edge artificial intelligence with a futuristic interface designed for the next era of technology",
    ctaButtons: [
      { text: "Get Started", action: "primary", link: "#pricing" },
      { text: "Watch Demo", action: "secondary", link: "#features" },
    ],
  },

  // Features Section
  features: [
    {
      title: "Neural Intelligence",
      description: "Advanced AI algorithms trained on cutting-edge neural networks",
      icon: "🧠",
    },
    {
      title: "Real-time Analytics",
      description: "Instant insights with live data processing and visualization",
      icon: "📊",
    },
    {
      title: "Automation Engine",
      description: "Automate complex workflows with intelligent task management",
      icon: "⚙️",
    },
    {
      title: "Predictive Models",
      description: "Forecast trends and outcomes with machine learning precision",
      icon: "🔮",
    },
    {
      title: "Smart Security",
      description: "Enterprise-grade security with AI-powered threat detection",
      icon: "🛡️",
    },
    {
      title: "API Integration",
      description: "Seamless integration with existing enterprise systems",
      icon: "🔗",
    },
  ],

  // Statistics Section
  statistics: [
    { label: "Active Users", value: 250, suffix: "K+" },
    { label: "AI Models", value: 150, suffix: "+" },
    { label: "Processing Speed", value: 99, suffix: "%" },
    { label: "Uptime", value: 99, suffix: ".9%" },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Chen",
      role: "CEO, TechVenture",
      content: "This platform transformed our AI capabilities. The interface is stunning and the results speak for themselves.",
      emoji: "✨",
    },
    {
      name: "Marcus Johnson",
      role: "CTO, InnovateLabs",
      content: "The best AI SaaS platform we've used. Seamless integration and incredible performance metrics.",
      emoji: "✨",
    },
    {
      name: "Elena Rodriguez",
      role: "Product Director, FutureTech",
      content: "Revolutionary approach to AI. The futuristic design matches the cutting-edge technology underneath.",
      emoji: "✨",
    },
  ],

  // Pricing Plans
  pricing: {
    plans: [
      {
        name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for getting started",
        features: [
          "Up to 10K API calls",
          "Basic AI models",
          "Email support",
          "Dashboard access",
        ],
        popular: false,
        cta: "Get Started",
      },
      {
        name: "Pro",
        price: "$99",
        period: "/month",
        description: "For growing teams",
        features: [
          "Up to 100K API calls",
          "Advanced AI models",
          "Priority support",
          "Custom integrations",
          "Analytics",
        ],
        popular: true,
        cta: "Get Started",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large scale",
        features: [
          "Unlimited API calls",
          "All AI models",
          "24/7 support",
          "Dedicated account",
          "SLA guarantee",
        ],
        popular: false,
        cta: "Contact Sales",
      },
    ],
  },

  // Footer
  footer: {
    brand: {
      name: "AIFuture",
      description: "The next generation of AI technology",
    },
    links: {
      product: [
        { text: "Features", href: "#features" },
        { text: "Pricing", href: "#pricing" },
        { text: "Security", href: "#security" },
      ],
      company: [
        { text: "About", href: "/about" },
        { text: "Blog", href: "/blog" },
        { text: "Careers", href: "/careers" },
      ],
      legal: [
        { text: "Privacy", href: "/privacy" },
        { text: "Terms", href: "/terms" },
        { text: "Contact", href: "/contact" },
      ],
    },
    social: [
      { platform: "GitHub", icon: "SiGithub", url: "https://github.com" },
      { platform: "Twitter", icon: "SiTwitter", url: "https://twitter.com" },
      { platform: "LinkedIn", icon: "SiLinkedin", url: "https://linkedin.com" },
    ],
    copyright: "© 2026 AIFuture. All rights reserved.",
  },

  // Color Scheme (Tailwind colors)
  colors: {
    primary: "#ff0000", // Neon red
    primaryDark: "#b30000", // Dark red
    background: "#0a0a0a", // Near black
    surface: "#111111", // Dark gray
    accent: "red", // Tailwind color name
  },

  // Animation Settings
  animations: {
    particleCount: 30,
    particleSpeed: 8, // Base duration in seconds
    sectionStagger: 0.1, // Delay between items in seconds
    cardHoverScale: 1.05,
  },

  // Gallery/Image Showcase
  gallery: {
    items: [
      { id: 1, title: "Dashboard Preview", placeholder: "🖼️" },
      { id: 2, title: "Analytics View", placeholder: "📸" },
      { id: 3, title: "Reports Interface", placeholder: "🖼️" },
      { id: 4, title: "Settings Panel", placeholder: "📸" },
      { id: 5, title: "Mobile App", placeholder: "🖼️" },
      { id: 6, title: "API Integration", placeholder: "📸" },
    ],
    largeCards: [
      { title: "AI Dashboard", emoji: "🎨" },
      { title: "Analytics Hub", emoji: "📊" },
    ],
  },
};

// Export individual sections for easier access
export const {
  siteConfig: config,
  hero,
  features,
  statistics,
  testimonials,
  pricing,
  footer,
} = {
  siteConfig,
  hero: siteConfig.hero,
  features: siteConfig.features,
  statistics: siteConfig.statistics,
  testimonials: siteConfig.testimonials,
  pricing: siteConfig.pricing,
  footer: siteConfig.footer,
};
