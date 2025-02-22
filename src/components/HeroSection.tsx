
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 md:py-32">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
