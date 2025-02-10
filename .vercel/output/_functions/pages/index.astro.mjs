/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderSlot, f as createAstro, g as renderComponent, h as renderHead } from '../chunks/astro/server_BjSn9fij.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DJDULXSO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Section;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(href, "id")} class="py-24"> <h2 class="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-white mb-14"> ${text} </h2> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/Section.astro", void 0);

const $$Astro$7 = createAstro();
const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Technologies;
  const { technologies } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Technologies", "href": "technologies" }, { "default": ($$result2) => renderTemplate`${technologies.map(({ type, stack }) => renderTemplate`${maybeRenderHead()}<div class="mb-10"> <div class="flex flex-col items-start pb-5"> <h4 class="text-2xl font-serif text-primary font-medium mb-0.5"> ${type} </h4> </div> ${Array.isArray(stack) ? renderTemplate`<ul class="grid grid-cols-2 gap-4 list-none"> ${stack.map((log) => renderTemplate`<li class="text-base relative text-neutral pl-8 mb-3 before:absolute before:left-0 before:top-1 before:content-[url(/check.svg)]"> ${log} </li>`)} </ul>` : renderTemplate`<p class="text-base text-neutral">${stack}</p>`} </div>`)}` })}`;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/Technologies.astro", void 0);

const SITE_CONFIG = {
  title: "Aakarsh Beohar — Fullstack Developer",
  author: "Aakarsh Beohar",
  description: "Full-Stack Developer specializing in scalable systems, high-performance backends, and real-time applications. Passionate about building efficient, future-ready solutions.",
  lang: "en",
  siteLogo: "/aakarsh-small.jpeg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Achievements", href: "#achievements" },
    { text: "Projects", href: "#projects" },
    { text: "Technologies", href: "#technologies" }
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/beoharr" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/aakarsh-beohar" },
    { text: "Github", href: "https://github.com/aakarsh-2004" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://aakarshh.in"
};
const SITE_CONTENT = {
  hero: {
    name: "Aakarsh Beohar",
    specialty: "Fullstack + Devops Engineer",
    summary: "Full-Stack Developer specializing in scalable systems, high-performance backends, and real-time applications. Passionate about building efficient, future-ready solutions.",
    email: "aakarshbeohar2004@gmail.com"
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
      ]
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
      ]
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
    }
  ],
  projects: [
    {
      name: "Police FRT System",
      summary: "Built a real-time facial recognition system for law enforcement, enabling instant suspect and missing person detection through live CCTV analysis.",
      linkPreview: "https://frt-system-client.vercel.app",
      linkSource: "https://github.com/aakarsh-2004/police-frt-system/",
      image: "/spotifu.png"
    },
    {
      name: "We-Hangout",
      summary: "An app to interact with random people, just like omegle. Talk, See each other and have fun!",
      linkPreview: "https://we-hangout.vercel.app/",
      linkSource: "https://github.com/aakarsh-2004/we-hangout",
      image: "/we-hangout2.png"
    },
    {
      name: "Pay.me",
      summary: "App to manage and send money to your friends. Built with Monorepo architecture. Replicating transactions in database, row locking mechanism and bank webhooks. NextAuth for auth.",
      linkPreview: "/",
      linkSource: "https://github.com/aakarsh-2004/pay.me",
      image: "/pay-me.png"
    }
  ],
  about: {
    description: `
      Hi, I’m Aakarsh Beohar, a Full-Stack Developer passionate about building scalable, high-performance applications.

      Specializing in backend architecture, microservices, and database optimization, I craft robust, efficient systems using Next.js, Node.js, TypeScript, PostgreSQL, and Redis. I thrive on solving complex problems, from designing scalable infrastructures to implementing real-time solutions with WebSockets and WebRTC.

      As a Smart India Hackathon 2024 winner and active open-source contributor, I’m always pushing boundaries—whether in development or competitive programming. Excited to tackle new challenges and build impactful solutions.🚀
    `,
    image: "/aakarsh.jpeg"
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
    },
    {
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
    },
    {
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
    },
    {
      type: "Realtime Systems",
      stack: [
        "WebRTC",
        "WebSockets"
      ]
    }
  ]
};

const $$Astro$6 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, specialty, summary, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 md:py-32" id="#hero"> <h1 class="text-7xl font-serif mb-1.5 sm:text-8xl md:text-9xl md:mb-0 text-white font-bold tracking-tightest"> ${name} </h1> <p class="text-4xl sm:text-5xl leading-[46px] md:text-6xl font-serif text-primary font-bold tracking-tighter mb-9"> ${specialty} </p> <p class="text-neutral font-normal text-base md:text-lg mb-16"> ${summary} </p> <div class="flex w-full gap-3"> <a class="text-sm py-3 px-4 text-[#fff] inline-block font-medium leading-5 bg-primary rounded-full sm:py-5 sm:px-8"${addAttribute(`mailto:${email}`, "href")}>Get in Touch</a> <a class="text-sm py-3 px-4 text-[#fff] inline-block font-medium leading-5 bg-primary rounded-full sm:py-5 sm:px-8" href="https://docs.google.com/document/d/1M0_x9a2embsQju7VbXdAh_V2iqlnxk9N/edit?tab=t.0" target="_blank">Resume </a> </div> </section>`;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/Hero.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>`;
}, "/home/aakarsh/Portfolio/astro-zen/src/icons/Menu.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteLogo, navLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="max-w-5xl mx-auto flex justify-between px-5 py-6 top-0 z-50 sticky bg-black animate-slideIn" data-astro-cid-3ef6ksr2> <a href="/" aria-label="Home link" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-full", "src": siteLogo, "width": "45", "height": "45", "alt": "website logo", "data-astro-cid-3ef6ksr2": true })} </a> <button type="button" id="menu-button" class="sm:hidden text-neutral px-1.5" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true })} </button> <nav class="hidden text-neutral border absolute right-5 top-20 bg-black border-neutral/40 py-5 px-4 rounded-xl sm:block sm:border-0 sm:p-0 sm:static sm:bg-transparent" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="sm:flex gap-2" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li class="relative" data-astro-cid-3ef6ksr2> <a${addAttribute(`font-medium text-sm p-2 block hover:text-white duration-500 transition-all nav-item relative after:absolute after:opacity-0 after:content-['\u2022'] after:w-1 after:h-2 after:bottom-0 after:left-2/4 after:-translate-x-2/4  after:text-primary`, "class")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.text} </a> </li>`)} </ul> </nav> </header>  `;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const { author, socialLinks } = Astro2.props;
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="text-white w-full text-center pb-8 pt-5 px-5 border-t border-neutral/20"> <ul class="flex flex-wrap gap-x-5 justify-center mb-5 text-xs"> ${socialLinks.map(({ text, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" class="hover:text-primary inline-block py-3 px-4 after:relative after:bottom-[-4px] after:content-[url(/external.svg)]"> ${text} </a> </li>`)} </ul> </footer>`;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    siteLogo,
    navLinks,
    lang,
    author,
    socialLinks,
    socialImage,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href
  } = SITE_CONFIG;
  const ogImgUrl = canonicalURL + socialImage;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-smooth scroll-pt-16"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/aakarsh-small.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(ogImgUrl, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImgUrl, "content")}>${renderHead()}</head> <body class="font-sans bg-black"> ${renderComponent($$result, "Header", $$Header, { "siteLogo": siteLogo, "navLinks": navLinks })} <main class="max-w-3xl px-5 mx-auto"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "author": author, "socialLinks": socialLinks })} </body></html>`;
}, "/home/aakarsh/Portfolio/astro-zen/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Achievements = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Achievements;
  const { achievements } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Achievements", "href": "achievements" }, { "default": ($$result2) => renderTemplate`${achievements.map(({ company, position, startDate, endDate, summary }) => renderTemplate`${maybeRenderHead()}<div class="mb-10"> <h3 class="text-2xl font-serif font-semibold text-white mb-1.5"> ${company} </h3> <div class="flex flex-col items-start pb-5"> <h4 class="text-2xl font-serif text-primary font-medium mb-0.5"> ${position} </h4> <span class="text-sm text-white/70 pb-[2px]"> ${startDate} — ${endDate} </span> </div> ${Array.isArray(summary) ? renderTemplate`<ul class="list-none"> ${summary.map((log) => renderTemplate`<li class="text-base relative text-neutral pl-8 mb-3 before:absolute before:left-0 before:top-1 before:content-[url(/check.svg)]"> ${log} </li>`)} </ul>` : renderTemplate`<p class="text-base text-neutral">${summary}</p>`} </div>`)}` })}`;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/Achievements.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const { projects } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Featured Projects", "href": "projects" }, { "default": ($$result2) => renderTemplate`${projects.map(({ name, summary, image, linkPreview, linkSource }, index) => {
    const top = 98 + index * 40;
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(`top: ${top}px;`, "style")} class="sticky rounded-2xl border border-neutral/20 bg-black mb-12"> <div class="w-full h-[580px] md:h-96 relative z-[1] bg-[#1c232d]/85 bg-difu before:content-[''] before:rounded-2xl before:absolute before:z-[-1] before:opacity-[5%] before:inset-0 before:bg-[url(/raja.png)] before:bg-repeat before:bg-[length:128px] rounded-2xl grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2"> <div class="px-6 pt-12"> <h3 class="text-3xl font-medium font-serif mb-5 text-primary"> ${name} </h3> <p class="text-neutral text-base">${summary}</p> <div class="pt-10 flex gap-5 text-white"> <a${addAttribute(linkSource, "href")} target="_blank" class="hover:underline after:content-[url(/external.svg)] after:relative after:bottom-[-5px]">
Source
</a> <a${addAttribute(linkPreview, "href")} target="_blank" class="hover:underline after:content-[url(/external.svg)] after:relative after:bottom-[-5px]">
Preview
</a> </div> </div> <div class="flex items-end justify-end overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-[95%] sm:w-full h-full sm:h-[85%] object-contain object-center rounded-ss-xl rounded-ee-2xl", "src": image, "alt": name, "width": "736", "height": "483" })} </div> </div> </div>`;
  })}` })}`;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/Projects.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { description, image, name } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "About Me", "href": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-12 md:gap-8 flex-col items-center md:flex-row"> <p class="text-neutral w-auto text-base md:pr-5">${description}</p> <div class="w-64 h-80 bg-white p-4 flex-shrink-0 rotate-[5deg] md:rotate-[7deg]"> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover", "src": image, "width": "260", "height": "260", "alt": name })} </div> </div> ` })}`;
}, "/home/aakarsh/Portfolio/astro-zen/src/components/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { ...SITE_CONTENT.hero })} ${renderComponent($$result2, "About", $$About, { ...SITE_CONTENT.about, "name": SITE_CONTENT.hero.name })} ${renderComponent($$result2, "Experience", $$Achievements, { "achievements": SITE_CONTENT.achievements })} ${renderComponent($$result2, "Projects", $$Projects, { "projects": SITE_CONTENT.projects })} ${renderComponent($$result2, "Technologies", $$Technologies, { "technologies": SITE_CONTENT.technologies })} ` })}`;
}, "/home/aakarsh/Portfolio/astro-zen/src/pages/index.astro", void 0);

const $$file = "/home/aakarsh/Portfolio/astro-zen/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
