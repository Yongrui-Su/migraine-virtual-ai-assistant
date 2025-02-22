
import React from "react";

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
