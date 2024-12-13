"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export function About() {
  useEffect(() => {
    gsap.from(".about-content", {
      opacity: 10,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="about-content">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in the lush tea gardens of Assam, JILIKONI has been crafting exceptional teas for over two decades. Our commitment to quality and sustainability has made us a trusted name in the tea industry.
            </p>
            <p className="text-gray-600 mb-6">
              We work directly with local farmers, ensuring fair trade practices and maintaining the highest standards of tea production. Every leaf is carefully selected and processed to bring you the authentic taste of Assam.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-amber-600">2024</h3>
                <p className="text-gray-600">Year Founded</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-600">100%</h3>
                <p className="text-gray-600">Organic</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] about-content">
          <Image
              src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80"
              alt="Tea plantation workers"
              className="rounded-lg shadow-lg object-cover w-full h-full"
              width={2070} // Specify the width of the image
              height={1380} // Specify the height of the image
            />
          </div>
        </div>
      </div>
    </section>
  );
}