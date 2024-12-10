"use client";
import { useEffect } from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      const href = anchor?.getAttribute("href");
      if (anchor && href?.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    // Restrict event listener to a specific container if possible
    const container = document.body;
    container.addEventListener("click", handleAnchorClick);

    return () => container.removeEventListener("click", handleAnchorClick);
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
