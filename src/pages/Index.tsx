import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { mockUserData } from "@/data/mockUser";
import { useToast } from "@/components/ui/use-toast";

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
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?fit=crop&w=800&h=800",
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userData", JSON.stringify(mockUserData));
      toast({
        title: "Welcome back!",
        description: `Logged in as ${mockUserData.name}`,
      });
      setIsLoading(false);
      navigate("/profile");
    }, 1000);
  };

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
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Explore Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
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
            <h2 className="mb-8 text-3xl font-bold">Get Personalized Help</h2>
            <div className="mb-8 space-y-4">
              <p className="text-lg">
                Connect with our medical professionals or try our AI-powered
                Virtual Migraine Assistant.
              </p>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-semibold">
                  Virtual Migraine Assistant
                </h3>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center justify-center gap-2">
                    <span>✓</span> Quick preliminary diagnosis
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span>✓</span> Personalized product recommendations
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span>✓</span> Interactive migraine assessment tests
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span>✓</span> 24/7 instant assistance
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#25D366]/90"
                onClick={() => window.open('https://wa.me/1555054750', '_blank')}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9946 23.7911H12C18.5518 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95357 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1589C2.63571 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6786 2.00893 17.1911 3.0375 19.0929 4.94464C20.9946 6.85179 22.0018 9.36429 21.9964 11.8982C21.9964 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3786C17.1214 14.2286 15.6589 13.5107 15.3857 13.4089C15.1125 13.3071 14.9143 13.2589 14.7161 13.5536C14.5179 13.8482 13.95 14.5179 13.7732 14.7161C13.5964 14.9143 13.4196 14.9357 13.125 14.7857C12.8304 14.6357 11.8929 14.3196 10.7893 13.3339C9.92143 12.5625 9.33214 11.6089 9.15536 11.3143C8.97857 11.0196 9.135 10.8536 9.28393 10.7036C9.42857 10.5589 9.58929 10.3339 9.74464 10.1571C9.9 9.98036 9.94821 9.85179 10.05 9.65357C10.1518 9.45536 10.1036 9.27857 10.0286 9.12857C9.95357 8.97857 9.36429 7.51607 9.11786 6.92679C8.87679 6.35357 8.63036 6.42857 8.44286 6.42321C8.26607 6.41786 8.06786 6.41786 7.86964 6.41786C7.67143 6.41786 7.35 6.49286 7.07679 6.7875C6.80357 7.08214 6.03214 7.80536 6.03214 9.26786C6.03214 10.7304 7.1625 12.1446 7.31786 12.3429C7.47321 12.5411 9.44464 15.5839 12.4607 16.8804C13.1518 17.1857 13.6929 17.3625 14.1161 17.4964C14.8125 17.7161 15.4446 17.6839 15.9429 17.6089C16.4929 17.525 17.6625 16.8857 17.9089 16.1946C18.1554 15.5036 18.1554 14.9143 18.0804 14.7857C18.0054 14.6571 17.7107 14.5286 17.4161 14.3786Z"
                  />
                </svg>
                Chat with AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
