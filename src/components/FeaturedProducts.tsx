
import React from "react";
import ProductCard from "./ProductCard";

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
    title: "Gut-Brain Support",
    price: "$34.99",
    description: "Specialized medication targeting migraine-related nausea and dizziness.",
    image: "https://migrawell.com/_next/image?url=https%3A%2F%2Fcdn.durable.co%2Fblocks%2FeIx8f3m84ImfSFWvpdGQGZbwGvtyoKlNOGE55bFK1JwKT99Ww6JNqh9HA9zbmIJf.png&w=1920&q=90",
  },
  {
    id: 6,
    title: "Nutrient rich sleep aid",
    price: "$39.99",
    description: "Daily supplement to reduce migraine frequency and intensity.",
    image: "https://migrawell.com/_next/image?url=https%3A%2F%2Fcdn.durable.co%2Fblocks%2F1zZimkawsN7ar9H4CSGZLKicwc2XOF8rWoDSGTXLZ8XxMwad3ADCOPO1heh1aKD7.png&w=1920&q=90",
  },
  {
    id: 7,
    title: "Methylated Multivitamin",
    price: "$27.99",
    description: "Premium methylated multivitamin with bioavailable nutrients to support brain health and energy levels.",
    image: "https://migrawell.com/_next/image?url=https%3A%2F%2Fcdn.durable.co%2Fblocks%2F39pku3TlglU9JETxfaABI1HviFwrgoQpIamraJOC6dGeNsyUiYEllLcm9vtRS92a.png&w=1920&q=90",
  }
];

const FeaturedProducts = () => {
  return (
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
  );
};

export default FeaturedProducts;
