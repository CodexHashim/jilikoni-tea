"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Assam Black Tea",
    description: "Rich, malty flavor with a deep amber color",
    price: 20,
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Premium Gold Tips",
    description: "Smooth, honeyed notes with golden tips",
    price: 50,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=2067&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Organic Green Tea",
    description: "Light, refreshing with subtle sweetness",
    price: 120,
    image: "https://images.unsplash.com/photo-1492778297155-7be4c83960c7?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Products() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (!isClient) {
    return null; // Avoid hydration errors by rendering only a placeholder during server rendering.
  }

  const handleAddToCart = (product: { id?: number; name: any; description?: string; price: any; image?: string; }) => {
    const whatsappMessage = `Check out this product!\n\nName: ${product.name}\nPrice: ₹${product.price}`;
    const whatsappLink = `https://wa.me/916900503979?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Premium Teas</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="rounded-lg shadow-md">
              {loading ? (
                <Skeleton className="h-48 w-full rounded-t-lg" />
              ) : (
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-t-lg"
                  width={2070} // Specify the width of the image
                  height={1380} // Specify the height of the image
                />
              )}
              <CardHeader>
                <CardTitle>{loading ? <Skeleton className="h-6 w-3/4" /> : product.name}</CardTitle>
                <CardDescription>
                  {loading ? (
                    <Skeleton className="h-4 w-full" />
                  ) : (
                    product.description
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <Skeleton className="h-6 w-24" />
                ) : (
                  <p className="text-2xl font-bold">₹{product.price}</p>
                )}
              </CardContent>
              <CardFooter>
                {loading ? (
                  <Skeleton className="h-10 w-full rounded" />
                ) : (
                  <Button className="w-full py-2 sm:py-3 text-sm sm:text-base rounded-md" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
