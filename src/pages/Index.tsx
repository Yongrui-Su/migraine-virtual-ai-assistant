import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Premium Migraine Relief Pack",
    price: "$49.99",
    description: "Complete solution including cooling patches, aromatherapy roll-on, and eye mask.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&h=800",
  },
  {
    id: 2,
    title: "Therapeutic Headache Balm",
    price: "$24.99",
    description: "Natural blend of essential oils for quick migraine relief.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=800&h=800",
  },
  {
    id: 3,
    title: "Digital Pressure Point Guide",
    price: "$19.99",
    description: "Expert-curated guide for migraine pressure point therapy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=800&h=800",
  },
  {
    id: 4,
    title: "Rapid Relief Migraine Tablets",
    price: "$29.99",
    description: "Fast-acting tablets for acute migraine relief with minimal side effects.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?fit=crop&w=800&h=800",
  },
  {
    id: 5,
    title: "Anti-Nausea Migraine Solution",
    price: "$34.99",
    description: "Specialized medication targeting migraine-related nausea and dizziness.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?fit=crop&w=800&h=800",
  },
  {
    id: 6,
    title: "Preventive Migraine Capsules",
    price: "$39.99",
    description: "Daily supplement to reduce migraine frequency and intensity.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?fit=crop&w=800&h=800",
  },
  {
    id: 7,
    title: "Light Sensitivity Relief Drops",
    price: "$27.99",
    description: "Eye drops specifically formulated for photophobia during migraines.",
    image: "https://images.unsplash.com/photo-1571707696525-c4484d79e39c?fit=crop&w=800&h=800",
  }
];

const testimonials = [
  {
    quote: "The migraine relief pack has been a game-changer for my chronic migraines.",
    author: "Sarah Johnson",
    role: "Verified Patient",
  },
  {
    quote: "Dr. Mitchell's approach to migraine treatment is revolutionary.",
    author: "Michael Chen",
    role: "Chronic Migraine Patient",
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white backdrop-blur-sm">
              Professional Migraine Care
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Expert Migraine Solutions for Better Living
            </h1>
            <p className="mb-8 text-lg text-white/90">
              Discover our carefully curated selection of migraine relief products,
              backed by medical expertise and proven results.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Carefully selected solutions for migraine relief and prevention
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                className={`delay-[${index * 100}ms]`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Why Choose Our Products?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="animate-fadeIn opacity-0 delay-100">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Medically Approved
                  </h3>
                  <p className="text-gray-600">
                    All products are tested and approved by medical professionals
                  </p>
                </div>
              </div>
              <div className="animate-fadeIn opacity-0 delay-200">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Natural Ingredients
                  </h3>
                  <p className="text-gray-600">
                    Carefully selected natural ingredients for gentle relief
                  </p>
                </div>
              </div>
              <div className="animate-fadeIn opacity-0 delay-300">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-gray-600">
                    100% money-back guarantee if you're not satisfied
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className={`delay-[${index * 100}ms]`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Need Professional Advice?</h2>
            <p className="mb-8 text-lg">
              Our team of medical professionals is here to help you find the right
              solution for your migraine needs.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
