"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { CupSoda } from "lucide-react";
import Image from "next/image";

export function Hero() {
  useEffect(() => {
    // Split the text manually by wrapping each character in a span for the second line
    const heroText = document.querySelector(".hero-content h1") as HTMLElement;
    const heroDesc = document.querySelector(".hero-content p") as HTMLElement;

    // Split hero title into characters (first line)
    if (heroText) {
      heroText.innerHTML = heroText.innerText
        .split("")
        .map((char: string) => `<span class="char">${char}</span>`)
        .join("");
    }

    // Split hero description into characters (second line) for typewriter effect
    if (heroDesc) {
      heroDesc.innerHTML = heroDesc.innerText
        .split("")
        .map((char: string) => `<span class="char">${char}</span>`)
        .join("");
    }

    // GSAP animation for the hero content (first line)
    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        scale: 0.9,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.03,
        ease: "power4.out",
      }
    );

    // Animate the hero title characters for the first line (Experience the Finest Assam Tea)
    gsap.from(".hero-content h1 .char", {
      opacity: 0,
      x: 20,
      duration: 0.1,
      stagger: 0.05,
      ease: "power4.out",
    });

    // Animate the description text characters (second line) like a typewriter effect
    gsap.from(".hero-content p .char", {
      opacity: 0,
      y: 20, // Slightly move up while fading in, for a typewriter effect
      duration: 0.1,
      stagger: 0.1, // Stagger the animation of each character
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
      <Image
          src="https://images.unsplash.com/photo-1531877038798-51499a9eedf0?q=80&w=2070&auto=format&fit=max"
          alt="Tea plantation in Assam"
          className="object-cover w-full h-full"
          width={2070} // Specify the width of the image
          height={1380} // Specify the height of the image
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="hero-content">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experience the Finest Assam Tea
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the rich heritage and exquisite flavors of premium tea from the heart of Assam
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <CupSoda className="mr-2" /> Shop Now
            </Button>
            <Button size="lg" className="text-white bg-lime-700 hover:bg-lime-900">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
