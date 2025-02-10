import Technologies from "@components/Technologies.astro";
import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Aakarsh Beohar — Fullstack Developer",
  author: "Aakarsh Beohar",
  description:
    "Full-Stack Developer specializing in scalable systems, high-performance backends, and real-time applications. Passionate about building efficient, future-ready solutions.",
  lang: "en",
  siteLogo: "/aakarsh-small.jpeg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Achievements", href: "#achievements" },
    { text: "Projects", href: "#projects" },
    { text: "Technologies", href: "#technologies" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/beoharr" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/aakarsh-beohar" },
    { text: "Github", href: "https://github.com/aakarsh-2004" }
  ],
  socialImage: "/aakarsh-small.jpeg",
  canonicalURL: "https://aakarshh.in",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Aakarsh Beohar",
    specialty: "Fullstack + Devops Engineer",
    summary:
      "Full-Stack Developer specializing in scalable systems, high-performance backends, and real-time applications. Passionate about building efficient, future-ready solutions.",
    email: "aakarshbeohar2004@gmail.com",
  },
  achievements: [
    {
      company: "Smart India Hackathon 2024 - Winner",
      position: "Lead Web Developer",
      startDate: "Oct 2024",
      endDate: "Dec 2024",
      summary: [
        "Designed and built an advanced real-time facial recognition system for law enforcement using face-api.js, enabling instant identification of suspects and missing persons through CCTV integration. Implemented RTSP live monitoring, AI-enhanced image processing, and real-time alerts via WhatsApp and email.",
        "Developed a heatmap-based monitoring system with Mapbox API, allowing authorities to track high-risk areas based on detection density, enhancing situational awareness.",
        "Implemented bilingual support (Hindi/English), making the system accessible to a wider audience and improving adoption among law enforcement agencies.",
        "Engineered a highly scalable backend architecture using Node.js, Redis, and PostgreSQL, ensuring seamless real-time notifications, live graphs, and data visualization.",
        "Built a request-based suspect addition system, enabling both admins and users to suggest new entries, ensuring continuous data enrichment and accuracy."
      ],
    },
    {
      company: "Hacktoberfest - 2024",
      position: "Web Developer",
      startDate: "Oct 2024",
      endDate: "Nov 2024",
      summary: [
        "Successfully completed Hacktoberfest 2024, contributing to multiple open-source projects, including FreeCodeCamp, Excalidraw, and 30 Seconds of Code.",
        "Enhanced existing codebases by optimizing performance, refactoring legacy code, and implementing best coding practices across various repositories.",
        "Collaborated with maintainers and global developers, reviewing PRs, writing documentation, and contributing meaningful fixes that improved project stability."
      ],
    },
    {
      company: "Codeforces",
      position: "Competitive Programming",
      startDate: "Oct 2024",
      endDate: "Curr",
      summary: [
        "Actively improving problem-solving skills through regular participation in Codeforces (1000+ rating) and LeetCode (1500+ rating) contests, focusing on algorithmic efficiency and optimization.",
        "Strengthened expertise in Data Structures & Algorithms (DSA) by solving 500+ problems across topics like graphs, dynamic programming, trees, and advanced searching techniques.",
        "Working towards achieving higher Codeforces ratings, with a goal of becoming a Specialist (1400+) by the end of the year and qualifying for ICPC regionals."
      ]
    },
  ],
  projects: [
    {
      name: "Police FRT System",
      summary: "Built a real-time facial recognition system for law enforcement, enabling instant suspect and missing person detection through live CCTV analysis.",
      linkPreview: "https://frt-system-client.vercel.app",
      linkSource: "https://github.com/aakarsh-2004/police-frt-system/",
      image: "/police-frt.png",
    },
    {
      name: "We-Hangout",
      summary: "An app to interact with random people, just like omegle. Talk, See each other and have fun!",
      linkPreview: "https://we-hangout.vercel.app/",
      linkSource: "https://github.com/aakarsh-2004/we-hangout",
      image: "/we-hangout2.png",
    },
    {
      name: "Pay.me",
      summary: "App to manage and send money to your friends. Built with Monorepo architecture. Replicating transactions in database, row locking mechanism and bank webhooks. NextAuth for auth.",
      linkPreview: "/",
      linkSource: "https://github.com/aakarsh-2004/pay.me",
      image: "/pay-me.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Aakarsh Beohar, a Full-Stack Developer passionate about building scalable, high-performance applications.

      Specializing in backend architecture, microservices, and database optimization, I craft robust, efficient systems using Next.js, Node.js, TypeScript, PostgreSQL, and Redis. I thrive on solving complex problems, from designing scalable infrastructures to implementing real-time solutions with WebSockets and WebRTC.

      As a Smart India Hackathon 2024 winner and active open-source contributor, I’m always pushing boundaries—whether in development or competitive programming. Excited to tackle new challenges and build impactful solutions.🚀
    `,
    image: "/aakarsh.jpeg",
  },
  technologies: [
    {
      type: "Frontend",
      stack: [
        "React.js",
        "Next.js",
        "ShadCN",
        "Recharts",
        "TypeScript",
        "Astro",
        "Tailwind"
      ]
    }, {
      type: "Backend",
      stack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "TypeScript",
        "Prisma",
        "Redis"
      ]
    }, {
      type: "Scalability & Optimization",
      stack: [
        "Indexing",
        "DB Normalization",
        "Load Balancers",
        "Auto Scaling Groups",
        "PubSubs",
        "Messaging Queues",
        "CI/CD",
        "AWS"
      ]
    }, {
      type: "Realtime Systems",
      stack: [
        "WebRTC",
        "WebSockets"
      ]
    }
  ]
};