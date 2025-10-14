"use client";
import { useEffect } from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

const HeroMockData = {
  title: "Tanzil Islam",
  tags: [
    { title: "Full Stack Developer" },
    { title: "Vue JS / Nuxt JS Developer" },
    { title: "React JS / Next JS Developer" },
    { title: "Supabase & PostgreSQL Developer" },
    { title: "SaaS & Dashboard Builder" },
  ],
  profile_summary:
    "I am a passionate Full Stack Developer focused on building scalable SaaS applications, admin dashboards, and responsive websites. Skilled in Vue, React, Supabase, and modern frontend ecosystems, I enjoy solving complex problems with clean, efficient code and delivering user-friendly digital experiences.",
  social_links: [
    { title: "GitHub", link: "https://github.com/TanzilIslam" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/tanzil-islam" },
  ],
};

const AboutMockData = {
  journey:
    "My journey into the world of technology began with a deep curiosity about how things work. I started with simple HTML and CSS and soon discovered the endless possibilities of JavaScript. Over the years, I have worked on a wide range of projects, from small business websites to large-scale enterprise applications. Each project has been a learning opportunity, helping me grow as a developer, problem solver, and lifelong learner. I also hold a BSc in Computer Science and Engineering (CSE), which laid a strong foundation for my technical skills.",

  stats: [
    {
      count: "3",
      title: "Years of Experience",
    },
    {
      count: "15",
      title: "Projects Completed",
    },
    {
      count: "10",
      title: "Technologies Mastered",
    },
    {
      count: "500",
      title: "Commits This Year",
    },
  ],

  drives_me: [
    {
      icon: "💡",
      title: "Innovation",
      subtitle: "Creating novel solutions",
    },
    {
      icon: "🚀",
      title: "Performance",
      subtitle: "Building fast and efficient applications",
    },
    {
      icon: "🎨",
      title: "Design",
      subtitle: "Crafting beautiful user experiences",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      subtitle: "Working together to achieve goals",
    },
  ],
};

const SkillsMockData = {
  skills: [
    {
      title: "JavaScript",
      percentage: 95,
      tags: "ES6+, TypeScript, Node.js, DOM Manipulation",
    },
    {
      title: "React & Next.js",
      percentage: 90,
      tags: "Hooks, Context API, Redux, Server-Side Rendering",
    },
    {
      title: "Vue & Nuxt.js",
      percentage: 85,
      tags: "Composition API, Vuex, Nuxt Modules",
    },
    {
      title: "CSS & TailwindCSS",
      percentage: 95,
      tags: "Responsive Design, Animations, Flexbox & Grid",
    },
  ],
  technologies: [
    { icon: "💻", title: "VS Code" },
    { icon: "🎨", title: "Figma" },
    { icon: "🚀", title: "Git & GitHub" },
    { icon: "🌐", title: "Vercel" },
    { icon: "🔥", title: "Firebase" },
    { icon: "☁️", title: "Supabase" },
  ],
};

const ProjectsMockData = {
  projects: [
    {
      screenshot:
        "https://ynzsmoosawwxwpgpfrzy.supabase.co/storage/v1/object/public/portfolio/Screenshot%202025-10-01%20201437.png",
      title: "Recruix",
      details:
        "Recruix is a SaaS platform for recruiters to manage their recruitment process",
      techstack: "Dashboard : Vue JS, Landing Page: Nuxt JS",
      link: "https://recruix.com/",
    },
    {
      screenshot:
        "https://ynzsmoosawwxwpgpfrzy.supabase.co/storage/v1/object/public/portfolio/4.2.png",
      title: "Halal Explore",
      details:
        "Halal explore is a platform for halal hotels,activity and holidays,cruise and tours",
      techstack:
        "Dashboard : Vue JS | Vuetify,Landing Page: Next JS | Tailwind CSS",
      link: "https://halalexplore.com/",
    },
    {
      screenshot:
        "https://ynzsmoosawwxwpgpfrzy.supabase.co/storage/v1/object/public/portfolio/Screenshot%202025-10-01%20200526.png",
      title: "Banke",
      details: "Banke is a platform for project and property finder in Dubai",
      techstack:
        "Dashboard : Vue JS | Prime Vue, Landing Page: Nuxt JS | Shadcn Vue",
      link: "https://banke.one/",
    },
    {
      screenshot:
        "https://ynzsmoosawwxwpgpfrzy.supabase.co/storage/v1/object/public/portfolio/Screenshot%202025-10-01%20200836.png",
      title: "Pro Tech Engineer",
      details:
        "Pro Tech Engineer is a platform for industrial spare parts supply",
      techstack: "Dashboard : Vue JS | Vuetify, Landing Page: Next JS | Shadcn",
      link: "https://pro-tech-product.vercel.app/",
    },
    {
      screenshot:
        "https://ynzsmoosawwxwpgpfrzy.supabase.co/storage/v1/object/public/portfolio/Screenshot%202025-10-01%20200901.png",
      title: "Cycle Shop",
      details: "Cycle Shop is a platform for cycle shop",
      techstack:
        "Dashboard : Vue JS | Vuetify, Landing Page: Nuxt JS | Primevue",
      link: " https://cycle-shop-public.netlify.app/",
    },
  ],
};

const ContactMockData = {
  contacts_info: [
    {
      icon: "✉️",
      title: "Email",
      value: "tanjilislam90@gmail.com",
      link: "mailto:tanjilislam90@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+8801617573729",
      link: "tel:+8801617573729",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Bhola, Bangladesh",
      link: null,
    },
  ],
};

const handleAnchorClick = (event) => {
  const anchor = event.target.closest("a");
  const href = anchor?.getAttribute("href");

  if (anchor && href?.startsWith("#")) {
    event.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
};

const Home = () => {
  useEffect(() => {
    document.body.addEventListener("click", handleAnchorClick);

    return () => document.body.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <Hero details={HeroMockData} />
      <About details={AboutMockData} />
      <Skills details={SkillsMockData} />
      <Projects details={ProjectsMockData} />
      <Contact details={ContactMockData} />
    </>
  );
};

export default Home;
