"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Map } from "@/components/map";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Stats } from "@/components/stats";
import { gsap } from "gsap";
import "gsap/ScrollTrigger";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const sections = document.querySelectorAll(".fade-in");
      gsap.fromTo(
        sections,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,  // Slight stagger effect
          scrollTrigger: {
            trigger: sections,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.globalTimeline.clear();
      };
    })();
  }, []);

  if (!isClient) {
    // Prevent hydration mismatch by rendering a placeholder during SSR.
    return null;
  }

  return (
    <div className="min-h-screen space-y-10">
      <Hero />
      <Stats />
      <section className="fade-in">
        <Products />
      </section>
      <section className="fade-in">
        <About />
      </section>
      <section className="fade-in">
        <Testimonials />
      </section>
      <section className="fade-in">
        <Map />
      </section>
      <section className="fade-in">
        <Contact />
      </section>
      <section className="fade-in">
        <Newsletter />
      </section>
    </div>
  );
}
