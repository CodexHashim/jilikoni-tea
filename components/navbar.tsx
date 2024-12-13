"use client"; // Ensure this file is treated as a client-side component

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Image component

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <Link href="/" className="flex items-center space-x-2">
        <Image
              src="/ji1.png"
              alt="JILIKONI Logo"
              width={50} // Required width
              height={50} // Required height
              className="h-16 w-auto" // Controlling height and maintaining aspect ratio with 'w-auto'
            />
            {/* <span className="font-bold text-2xl">JILIKONI</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#products" className=" hover:text-amber-400/100 transition-colors">
              Products
            </Link>
            <Link href="#about" className=" hover:text-amber-400/100 transition-colors">
              About
            </Link>
            <Link href="#contact" className="g hover:text-amber-400/100 transition-colors">
              Contact
            </Link>
            <Button>Shop Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              href="#products"
              className="block px-3 py-2 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full">Shop Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
