
import React from "react";
import TestimonialCard from "./TestimonialCard";

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

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
