import { useEffect, useRef, useState } from "react";
import { Users, Star, Award, Coffee } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Happy Customers",
    value: 5000,
    icon: Users,
  },
  {
    id: 2,
    title: "Years of Excellence",
    value: 25,
    icon: Star,
  },
  {
    id: 3,
    title: "Quality Awards",
    value: 15,
    icon: Award,
  },
  {
    id: 4,
    title: "Tea Varieties",
    value: 30,
    icon: Coffee,
  },
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentStatsRef = statsRef.current; // Create a stable reference
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []); // Dependency array is kept empty since it doesn't depend on external variables

  return (
    <section ref={statsRef} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center fade-in">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-amber-600" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {isVisible ? stat.value : 0}+  {/* Show actual value when visible */}
              </div>
              <div className="text-gray-600">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
