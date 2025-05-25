/** @format */

import { Skill } from "@/types/types";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Twitch,
  DiscIcon as Discord,
} from "lucide-react";
import { logos } from "public/logos";

export const features = [
  {
    icon: "</>",
    title: "No Code Needed",
    description:
      "Launch your portfolio without writing a single line of code. Just fill a form.",
  },
  {
    icon: "🎨",
    title: "Beautiful Templates",
    description:
      "Pick from professionally designed templates tailored for creatives and techies.",
  },
  {
    icon: "⚙️",
    title: "SEO Optimized",
    description:
      "Get discovered easily on Google and other search engines with built-in SEO.",
  },
  {
    icon: "📱",
    title: "Mobile Responsive",
    description:
      "Your portfolio will look great on all devices — phones, tablets, or desktops.",
  },
];

export const templates = [
  {
    id: "1",
    title: "Tomasz Gajda",
    link: "https://tomaszgajda.dev",
    thumbnail: "/images/steve-vie.webp",
    description:
      "I’m a front-end developer specializing in building modern, responsive web apps with React and TypeScript.",
    features: [
      "React & TypeScript",
      "UI/UX Design",
      "Performance Optimization",
    ],
    price: null,
    available: true,
    rating: "⭐⭐⭐⭐⭐",
    heroSection: {
      headline: "Hi, I'm Tomasz Gajda",
      subHeadline: "Building beautiful, performant web apps",
      ctaText: "View My Portfolio",
    },
    skillsSection: ["React", "TypeScript", "Figma", "Html"],
    projectsSection: [
      {
        id: "p1",
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing projects and skills.",
        thumbnail: "https://example.com/portfolio-thumbnail.png",
        url: "https://tomaszgajda.dev",
      },
      {
        id: "p2",
        title: "E-commerce Platform",
        description:
          "A scalable and responsive e-commerce platform built with React.",
        thumbnail: "https://via.placeholder.com/320x180?text=No+Image",
        url: "https://ecommerce.example.com",
      },
      {
        id: "p3",
        title: "Dashboard UI Kit",
        description: "A reusable UI kit for dashboards and admin panels.",
        thumbnail: "https://via.placeholder.com/320x180?text=No+Image",
        url: "https://dashboard-ui.example.com",
      },
    ],
    otherSections: ["Blog", "Open Source Contributions"],

    about: {
      title: "About Me",
      description:
        "I'm a creative and detail-oriented front-end developer passionate about building excellent user experiences. With a strong background in modern UI design and development, I specialize in translating designs into pixel-perfect code and delivering high-performance interfaces.",
    },
    socials: {
      mail: "mailto:tomasz@example.com",
      github: "https://github.com/tomaszgajda",
      linkedin: "https://linkedin.com/in/tomaszgajda",
      twitter: "https://twitter.com/tomaszgajda",
    },
  },
  {
    id: "2",
    fullName: "Tomasz Gajda",
    role: "Full Stack Developer",
    location: "Warsaw, Poland",
    email: "tomasz@example.com",
    phone: "+48 123 456 789",
    website: "https://tomaszgajda.dev",
    thumbnail: "/images/profile-1.png",
    availableForHire: true,
    preferredWorkType: ["Remote", "Freelance", "Full-Time"],
    rating: "⭐⭐⭐⭐⭐",

    heroSection: {
      headline: "Hi, I'm Tomasz Gajda",
      subHeadline: "Building beautiful, performant web apps",
      ctaText: "View My Portfolio",
      backgroundVideo: "/videos/hero-loop.mp4",
    },

    about: {
      title: "About Me",
      description:
        "Creative full stack developer with a focus on frontend excellence, blending thoughtful UI/UX design with scalable backend solutions. Passionate about modern tech stacks and delivering meaningful digital experiences.",
      yearsOfExperience: 5,
      languages: ["English", "Polish"],
      hobbies: ["Photography", "Gaming", "Tech Blogging"],
    },

    socials: {
      email: "mailto:tomasz@example.com",
      github: "https://github.com/tomaszgajda",
      linkedin: "https://linkedin.com/in/tomaszgajda",
      twitter: "https://twitter.com/tomaszgajda",
      dribbble: "https://dribbble.com/tomaszgajda",
      behance: "https://behance.net/tomaszgajda",
    },
    services: [
      {
        title: "Web App Development",
        description:
          "Build modern and scalable web applications using React, Next.js, Node, and more.",
        price: "From $1000",
      },
      {
        title: "UI/UX Design",
        description:
          "Design clean, user-friendly interfaces with tools like Figma and Adobe XD.",
        price: "From $500",
      },
      {
        title: "SEO & Performance Optimization",
        description:
          "Boost your website's speed and visibility with technical audits and enhancements.",
        price: "From $300",
      },
    ],

    skillsSection: [
      "AI Coding",
      "Debugging",
      "Editor Integration",
      "Product Roadmapping",
      "Market Research",
      "Competitive Analysis",
      "Go-to-Market Strategy",
      "Product-Market Fit",
      "Feature Prioritization",
    ],

    experience: [
      {
        company: "CreativeSoft",
        role: "Frontend Engineer",
        duration: "2021 – Present",
        responsibilities: [
          "Developed responsive UI components using React and Tailwind.",
          "Led the migration from JavaScript to TypeScript.",
        ],
      },
      {
        company: "Freelance",
        role: "Full Stack Developer",
        duration: "2019 – 2021",
        responsibilities: [
          "Delivered 15+ freelance projects for international clients.",
          "Handled UI design, frontend, and backend development.",
        ],
      },
    ],

    education: [
      {
        institution: "Warsaw University of Technology",
        degree: "BSc in Computer Science",
        year: "2015 – 2019",
      },
      {
        institution: "Coursera",
        course: "Meta Front-End Developer Professional Certificate",
        year: "2022",
      },
    ],

    certifications: [
      {
        title: "AWS Certified Developer – Associate",
        issuer: "Amazon",
        year: 2023,
      },
      {
        title: "Google UX Design Certificate",
        issuer: "Google",
        year: 2022,
      },
    ],

    testimonials: [
      {
        name: "Jane Doe",
        title: "Product Manager at Acme Inc.",
        quote:
          "Tomasz is a true professional — fast, reliable, and an absolute joy to work with. He delivered an amazing product under tight deadlines.",
        avatar: "/avatars/jane.jpg",
      },
    ],
    projectsSection: [
      {
        id: "p1",
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing projects and skills.",
        thumbnail: "https://example.com/portfolio-thumbnail.png",
        url: "https://tomaszgajda.dev",
        tags: ["Next.js", "Tailwind", "TypeScript"],
      },
      {
        id: "p2",
        title: "E-commerce Platform",
        description:
          "A scalable and responsive e-commerce platform built with React.",
        thumbnail: "https://via.placeholder.com/320x180?text=No+Image",
        url: "https://ecommerce.example.com",
        tags: ["React", "Redux", "Node.js", "MongoDB"],
      },
      {
        id: "p3",
        title: "Dashboard UI Kit",
        description: "A reusable UI kit for dashboards and admin panels.",
        thumbnail: "https://via.placeholder.com/320x180?text=No+Image",
        url: "https://dashboard-ui.example.com",
      },
    ],

    caseStudies: [
      {
        id: "cs1",
        title: "Boosting Conversion by 40% on E-commerce Redesign",
        overview:
          "Redesigned the entire product page UI/UX for an e-commerce client and improved loading speed, leading to increased conversions.",
        metrics: {
          conversionRate: "↑ 40%",
          pageSpeed: "↓ 1.3s",
        },
        client: "RetailMart Inc.",
        toolsUsed: ["Figma", "React", "Lighthouse"],
      },
    ],

    blog: [
      {
        title: "Understanding React Performance Bottlenecks",
        url: "https://dev.to/tomaszgajda/react-performance",
        publishedAt: "2024-01-15",
      },
      {
        title: "10 UI/UX Principles for Better Product Design",
        url: "https://medium.com/@tomaszgajda/uiux-principles",
        publishedAt: "2024-03-03",
      },
    ],

    faqs: [
      {
        question: "What type of clients do you work with?",
        answer: "I work with startups, agencies, and entrepreneurs globally.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes, I offer maintenance and retainer packages on request.",
      },
    ],

    otherSections: ["Blog", "Certifications", "Open Source Contributions"],
  },

  {
    id: 3,
    title: "DashBoard Portfolio",
    link: "https://my-portfolio-gilt-alpha-40.vercel.app/",
    thumbnail: "/images/preview.png",
    description:
      "A modern dashboard-style portfolio with interactive elements.",
    tools: [
      "ShadCN",
      "Framer-motion",
      "Tailwind CSS",
      "React/Next",
      "Typescript",
    ],
    price: "$19",
    available: true,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    features: ["Hero", "Recommendation", "Projects", "Skills", "Footer"],
    heroSection: {
      headline: "Showcase Your Work in Style",
      subHeadline: "Interactive and clean dashboard portfolio template.",
      ctaText: "View Portfolio",
    },
    skillsSection: ["React", "Tailwind CSS", "Animations", "TypeScript"],
    projectsSection: ["Interactive Projects", "Skill Highlights"],
    otherSections: ["Recommendations", "Contact Form"],
  },
  {
    id: 4,
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    description: "Rogue is a beautiful portfolio template for creatives.",
    features: [
      "Responsive design",
      "Visual portfolio grid",
      "Smooth animations",
    ],
    price: "$21",
    available: false,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    heroSection: {
      headline: "Creative Portfolio Template",
      subHeadline:
        "Show off your portfolio with elegant and responsive design.",
      ctaText: "Explore Rogue",
    },
    skillsSection: ["Responsive UI", "Animations", "Portfolio Grids"],
    projectsSection: ["Visual Portfolio", "Gallery Showcase"],
    otherSections: ["Testimonials", "Contact Section"],
  },
  {
    id: 5,
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    description: "Collaborative writing made simple for teams and individuals.",
    features: ["Real-time editing", "Markdown support", "Version control"],
    price: "$26",
    available: false,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    heroSection: {
      headline: "Simplify Collaborative Writing",
      subHeadline: "Real-time editing with markdown and version control.",
      ctaText: "Start Writing",
    },
    skillsSection: ["Markdown", "Version Control", "Collaboration"],
    projectsSection: ["Team Projects", "Editing History"],
    otherSections: ["Export Options", "User Management"],
  },
  {
    id: 6,
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    description: "AI-powered editor for content creators and marketers.",
    features: ["Content rewriting", "Tone adjustment", "SEO analysis"],
    price: "$32",
    available: false,
    rating: "⭐⭐⭐☆☆", // 3 stars
    heroSection: {
      headline: "AI Editing for Content Creators",
      subHeadline: "Rewrite, adjust tone, and optimize your content with AI.",
      ctaText: "Try Editrix AI",
    },
    skillsSection: ["Content Editing", "SEO Optimization", "AI Tools"],
    projectsSection: ["Content Rewriting", "Tone Customization"],
    otherSections: ["SEO Reports", "Integration Options"],
  },
  {
    id: 7,
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    description: "Design-to-code tool for pixel-perfect UI components.",
    features: ["Figma plugin", "React & Tailwind output", "One-click export"],
    price: "$27",
    available: false,
    rating: "⭐⭐⭐⭐⭐", // 5 stars
    heroSection: {
      headline: "Pixel-Perfect UI Code from Designs",
      subHeadline: "Convert your Figma designs to clean React & Tailwind code.",
      ctaText: "Get Pixel Perfect",
    },
    skillsSection: ["Design to Code", "React", "Tailwind CSS"],
    projectsSection: ["Figma Plugin", "Code Export"],
    otherSections: ["Component Library", "Versioning"],
  },
  {
    id: 8,
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    description: "Crack tech interviews with interactive algorithm questions.",
    features: ["DSA problems", "Mock interviews", "Video solutions"],
    price: "$25",
    available: false,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    heroSection: {
      headline: "Master Algorithms for Interviews",
      subHeadline:
        "Practice with real problems, mocks, and video walkthroughs.",
      ctaText: "Start Practicing",
    },
    skillsSection: ["Algorithms", "Mock Interviews", "Video Learning"],
    projectsSection: ["Problem Sets", "Interview Mocks"],
    otherSections: ["Progress Tracking", "Community Discussions"],
  },
  {
    id: 9,
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    description: "A beautiful UI library built with Tailwind and Headless UI.",
    features: ["50+ components", "Dark mode", "Accessible design"],
    price: "$35",
    available: false,
    rating: "⭐⭐⭐⭐⭐", // 5 stars
    heroSection: {
      headline: "Modern UI Library with Tailwind",
      subHeadline: "50+ accessible components with dark mode support.",
      ctaText: "Explore UI Components",
    },
    skillsSection: ["Tailwind CSS", "Accessibility", "Component Design"],
    projectsSection: ["Component Demos", "Dark Mode"],
    otherSections: ["Customization", "Documentation"],
  },
  {
    id: 10,
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    description: "The ultimate Tailwind component kit for modern devs.",
    features: ["300+ UI blocks", "Copy-paste ready", "Tailwind 3.0 ready"],
    price: "$39",
    available: false,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    heroSection: {
      headline: "Ultimate Tailwind UI Kit",
      subHeadline: "300+ ready-to-use UI blocks for your projects.",
      ctaText: "Get Tailwind Master Kit",
    },
    skillsSection: ["Tailwind CSS", "UI Blocks", "Responsive Design"],
    projectsSection: ["Ready UI Components", "Copy-Paste Usage"],
    otherSections: ["Theme Support", "Regular Updates"],
  },
  {
    id: 12,
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    description:
      "Enterprise-grade bridge software for logistics and transport.",
    features: ["Fleet management", "Real-time tracking", "Mobile app"],
    price: "$45",
    available: false,
    rating: "⭐⭐⭐☆☆", // 3 stars
    heroSection: {
      headline: "Logistics Bridge Software",
      subHeadline: "Manage fleets and track shipments in real time.",
      ctaText: "Learn More",
    },
    skillsSection: ["Fleet Management", "Real-Time Tracking", "Mobile App"],
    projectsSection: ["Logistics Dashboard", "Tracking System"],
    otherSections: ["Alerts & Notifications", "User Roles"],
  },
  {
    id: 13,
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    description: "Studio-quality templates and assets for 3D rendering.",
    features: ["3D models", "Templates", "Animations"],
    price: "$40",
    available: false,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    heroSection: {
      headline: "High-Quality 3D Templates",
      subHeadline: "Enhance your 3D projects with professional assets.",
      ctaText: "Explore Templates",
    },
    skillsSection: ["3D Modeling", "Animation", "Rendering"],
    projectsSection: ["Model Library", "Animation Samples"],
    otherSections: ["Export Options", "Custom Templates"],
  },
  {
    id: 14,
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    description: "Digital agency starter template for showcasing services.",
    features: ["Portfolio ready", "Service sections", "Contact form"],
    price: "$30",
    available: false,
    rating: "⭐⭐⭐☆☆", // 3 stars
    heroSection: {
      headline: "Digital Agency Template",
      subHeadline: "Showcase your services and portfolio professionally.",
      ctaText: "View Demo",
    },
    skillsSection: ["Portfolio", "Service Showcasing", "Contact Forms"],
    projectsSection: ["Portfolio Items", "Service Listings"],
    otherSections: ["Blog Section", "Testimonials"],
  },
  {
    id: 15,
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    description: "Educational template for academies and training centers.",
    features: ["Course listing", "Timetable", "Registration form"],
    price: "$28",
    available: false,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    heroSection: {
      headline: "Academy & Training Template",
      subHeadline: "Manage courses, timetables, and registrations easily.",
      ctaText: "Explore Academy",
    },
    skillsSection: ["Course Management", "Scheduling", "Registration"],
    projectsSection: ["Course Listings", "Timetable View"],
    otherSections: ["Student Dashboard", "Faculty Profiles"],
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    description: "Dark-themed lab-style portfolio for developers.",
    features: ["Code blocks", "Terminal UI", "Minimalist design"],
    price: "$22",
    available: false,
    rating: "⭐⭐⭐⭐☆", // 4 stars
    heroSection: {
      headline: "Developer Portfolio Template",
      subHeadline: "Dark mode, terminal UI, and minimalist design.",
      ctaText: "Check Invoker Labs",
    },
    skillsSection: ["Code Presentation", "UI/UX Design", "Dark Theme"],
    projectsSection: ["Code Blocks", "Portfolio Projects"],
    otherSections: ["Blog", "Contact"],
  },
];

export const testimonials = [
  {
    quote:
      "The credit template made onboarding new users a breeze. The pre-built sections saved us weeks of work and look incredibly polished.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "We’ve tried building our own credit solution in the past — nothing compares to the flexibility and design of this credit-focused template.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "With the credit dashboard and detailed reporting built into the template, we launched our financial tool in half the time.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This template offers everything a credit platform needs — loan modules, transaction logs, user verification flows. It’s a complete solution.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "We needed a scalable credit product fast. The template’s structure allowed us to focus on business logic, not UI scaffolding.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const faqData = [
  {
    id: "what-is-builder",
    question: "📦 What is the Portfolio Template Builder?",
    answer:
      "It is an open-source tool built with Next.js and TypeScript that allows users to preview, edit, and publish portfolio templates easily.",
  },
  {
    id: "inline-editing",
    question: "✏️ How does inline editing work?",
    answer:
      "Simply click on any part of the template while previewing it to edit text or remove sections in real-time.",
  },
  {
    id: "need-code",
    question: "🧑‍💻 Do I need to know how to code?",
    answer:
      "Nope! The builder is designed to work visually without any coding required.",
  },
  // {
  //   id: "contribute",
  //   question: "🚀 Can I contribute to the project?",
  //   answer:
  //     "Yes! It's open source—feel free to fork the repository and submit a pull request with improvements or templates.",
  // },
  {
    id: "template-preview",
    question: "🔍 Can I preview a template before editing?",
    answer:
      "Absolutely. You can click on any template to see a live preview before starting your customization.",
  },
  {
    id: "export-options",
    question: "💾 What are the export options?",
    answer:
      "You can export your portfolio as a complete Next.js project, static HTML/CSS files, or deploy directly to Vercel with one click.",
  },
  {
    id: "custom-domain",
    question: "🌐 Can I use a custom domain?",
    answer:
      "Yes! After deploying your portfolio, you can connect your custom domain through your hosting provider's settings.",
  },
  {
    id: "template-count",
    question: "🎨 How many templates are available?",
    answer:
      "We currently offer 15+ professionally designed templates with more being added regularly by our community.",
  },
  {
    id: "mobile-responsive",
    question: "📱 Are the templates mobile-responsive?",
    answer:
      "All templates are fully responsive and look great on devices of all sizes, from mobile phones to large desktop screens.",
  },
];

export const SOCIAL_PLATFORMS = [
  {
    value: "email",
    label: "Email",
    icon: Mail,
    placeholder: "mailto:your@email.com",
  },
  {
    value: "github",
    label: "GitHub",
    icon: Github,
    placeholder: "https://github.com/username",
  },
  {
    value: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    placeholder: "https://linkedin.com/in/username",
  },
  {
    value: "twitter",
    label: "Twitter",
    icon: Twitter,
    placeholder: "https://twitter.com/username",
  },
  {
    value: "instagram",
    label: "Instagram",
    icon: Instagram,
    placeholder: "https://instagram.com/username",
  },
  {
    value: "facebook",
    label: "Facebook",
    icon: Facebook,
    placeholder: "https://facebook.com/username",
  },
  {
    value: "youtube",
    label: "YouTube",
    icon: Youtube,
    placeholder: "https://youtube.com/@username",
  },
  {
    value: "twitch",
    label: "Twitch",
    icon: Twitch,
    placeholder: "https://twitch.tv/username",
  },
  {
    value: "discord",
    label: "Discord",
    icon: Discord,
    placeholder: "https://discord.gg/invite",
  },
];

export const allSkills: Skill[] = [
  { title: "HTML", icon: logos.html },
  { title: "CSS", icon: logos.css },
  { title: "JavaScript", icon: logos.javascript },
  { title: "TypeScript", icon: logos.typescript },
  { title: "React", icon: logos.react },
  { title: "Next.js", icon: logos.nextjs },
  { title: "Vue.js", icon: null },
  { title: "Angular", icon: null },
  { title: "Tailwind CSS", icon: logos.tailwind },
  { title: "Bootstrap", icon: logos.bootstrap },
  { title: "Sass", icon: logos.sass },

  { title: "Flutter", icon: logos.flutter },
  { title: "React Native", icon: null },
  { title: "Swift", icon: null },
  { title: "Kotlin", icon: null },

  { title: "Figma", icon: logos.figma },
  { title: "Adobe XD", icon: null },
  { title: "UI Design", icon: null },
  { title: "UX Design", icon: null },
  { title: "Wireframing", icon: null },
  { title: "Prototyping", icon: null },
  { title: "Design Systems", icon: null },

  { title: "Node.js", icon: null },
  { title: "Express.js", icon: null },
  { title: "Firebase", icon: logos.firebase },
  { title: "MongoDB", icon: null },
  { title: "PostgreSQL", icon: null },
  { title: "MySQL", icon: null },
  { title: "GraphQL", icon: null },
  { title: "REST API", icon: null },

  { title: "Docker", icon: null },
  { title: "AWS", icon: null },
  { title: "CI/CD", icon: null },
  { title: "GitHub Actions", icon: null },

  { title: "Git", icon: logos.github },
  { title: "Redux", icon: logos.redux },
  { title: "Jest", icon: null },
  { title: "Cypress", icon: null },
  { title: "Notion", icon: null },
  { title: "Trello", icon: null },
  { title: "Slack", icon: null },

  // Marketing & Analytics
  { title: "SEO", icon: null },
  { title: "Google Ads", icon: null },
  { title: "Meta Ads", icon: null },
  { title: "GA4", icon: null },
  { title: "Hotjar", icon: null },

  // Product & Management
  { title: "Product Management", icon: null },
  { title: "Agile Methodology", icon: null },
  { title: "Scrum", icon: null },
  { title: "User Research", icon: null },
  { title: "Stakeholder Management", icon: null },
  { title: "Roadmapping", icon: null },

  // Leadership & Strategy
  { title: "CTO", icon: null },
  { title: "Tech Strategy", icon: null },
  { title: "System Architecture", icon: null },
  { title: "Team Management", icon: null },
  { title: "Mentorship", icon: null },
  { title: "Project Management", icon: null },

  // Soft Skills & Communication
  { title: "Communication", icon: null },
  { title: "Public Speaking", icon: null },
  { title: "Collaboration", icon: null },
  { title: "Empathy", icon: null },
  { title: "Conflict Resolution", icon: null },
  { title: "Presentation Skills", icon: null },
  { title: "Active Listening", icon: null },
  { title: "Feedback Culture", icon: null },

  // Attitude & Character
  { title: "Leadership", icon: null },
  { title: "Integrity", icon: null },
  { title: "Accountability", icon: null },
  { title: "Adaptability", icon: null },
  { title: "Problem Solving", icon: null },
  { title: "Critical Thinking", icon: null },
  { title: "Creativity", icon: null },
  { title: "Proactiveness", icon: null },
  { title: "Ownership", icon: null },
  { title: "Emotional Intelligence", icon: null },
  { title: "Time Management", icon: null },
  { title: "Resilience", icon: null },
  { title: "Work Ethic", icon: null },
  { title: "Growth Mindset", icon: null },
  { title: "Self-Motivation", icon: null },
  { title: "Detail-Oriented", icon: null },

  // Product Strategy & Management
  { title: "Product Roadmapping", icon: null },
  { title: "Market Research", icon: null },
  { title: "Competitive Analysis", icon: null },
  { title: "Go-to-Market Strategy", icon: null },
  { title: "Product-Market Fit", icon: null },
  { title: "Feature Prioritization", icon: null },

  // Analytics & Data
  { title: "Google Analytics", icon: null },
  { title: "Mixpanel", icon: null },
  { title: "A/B Testing", icon: null },
  { title: "SQL", icon: null },
  { title: "Tableau", icon: null },
  { title: "KPI Tracking", icon: null },

  // Design & User Experience
  { title: "User Research", icon: null },
  { title: "Wireframing", icon: null },
  { title: "Figma", icon: null },
  { title: "Design Thinking", icon: null },
  { title: "User Journey Mapping", icon: null },
  { title: "Usability Testing", icon: null },

  // Technical & Tools
  { title: "Jira", icon: null },
  { title: "Confluence", icon: null },
  { title: "Slack", icon: null },
  { title: "GitHub", icon: null },
  { title: "API Documentation", icon: null },
  { title: "Agile/Scrum", icon: null },
];
