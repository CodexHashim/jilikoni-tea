"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tea Enthusiast",
    content: "The best Assam tea I've ever tasted. The rich, malty flavor is exactly what I look for in my morning cup.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tea Shop Owner",
    content: "JILIKONI's commitment to quality is evident in every batch. My customers love their teas.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Food Critic",
    content: "A true representation of Assam's finest. The attention to detail in processing and packaging is remarkable.",
    rating: 5,
  },
];

export function Testimonials() {
  useEffect(() => {
    gsap.from(".testimonial-card", {
      opacity: 10,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="testimonial-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}