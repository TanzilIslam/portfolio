"use client";
import { useEffect } from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
