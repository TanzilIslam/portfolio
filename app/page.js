"use client";
import { useEffect, useState } from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import { supabaseClient } from "@/config/supabaseClient";

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
  const [details, setDetails] = useState(null);
  useEffect(() => {
    document.body.addEventListener("click", handleAnchorClick);

    return () => document.body.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    supabaseClient
      .from("portfolio")
      .select("*")
      .eq("id", 4)
      .single()
      .then(({ data }) => {
        setDetails(data);
      });
  }, []);

  return (
    <>
      <Hero details={details} />
      <About details={details} />
      <Skills details={details} />
      <Projects details={details} />
      <Contact />
    </>
  );
};

export default Home;
