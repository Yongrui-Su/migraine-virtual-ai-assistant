
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Premium Migraine Relief Pack",
    price: "$49.99",
    description: "Complete solution including cooling patches, aromatherapy roll-on, and eye mask.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&h=800",
    longDescription: "Our Premium Migraine Relief Pack is a comprehensive solution designed to provide immediate and lasting relief from migraine symptoms. This carefully curated set includes cooling patches that provide instant relief, a specially formulated aromatherapy roll-on with essential oils known for their headache-relieving properties, and a light-blocking eye mask for optimal rest during migraine episodes.",
  },
  {
    id: 2,
    title: "Therapeutic Headache Balm",
    price: "$24.99",
    description: "Natural blend of essential oils for quick migraine relief.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=800&h=800",
    longDescription: "Our Therapeutic Headache Balm combines powerful natural ingredients with proven effectiveness in relieving migraine pain. This specially formulated balm includes peppermint, lavender, and eucalyptus essential oils that work together to provide quick and effective relief from headache symptoms.",
  },
  {
    id: 3,
    title: "Digital Pressure Point Guide",
    price: "$19.99",
    description: "Expert-curated guide for migraine pressure point therapy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=800&h=800",
    longDescription: "Our Digital Pressure Point Guide is a comprehensive resource that teaches you effective self-administered pressure point therapy techniques for migraine relief. Created by medical experts, this guide includes detailed instructions, video demonstrations, and anatomical diagrams to help you master these proven relief methods.",
  },
  {
    id: 4,
    title: "Rapid Relief Migraine Tablets",
    price: "$29.99",
    description: "Fast-acting tablets for acute migraine relief with minimal side effects.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?fit=crop&w=800&h=800",
    longDescription: "Our Rapid Relief Migraine Tablets are specifically formulated to provide quick relief from acute migraine attacks. These tablets contain a carefully balanced combination of active ingredients that target multiple migraine symptoms while minimizing potential side effects. The fast-dissolving formula ensures rapid absorption for immediate relief when you need it most.",
  },
  {
    id: 5,
    title: "Anti-Nausea Migraine Solution",
    price: "$34.99",
    description: "Specialized medication targeting migraine-related nausea and dizziness.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?fit=crop&w=800&h=800",
    longDescription: "Our Anti-Nausea Migraine Solution is specifically designed to address the often-overlooked symptoms of migraine-related nausea and dizziness. This unique formula combines anti-nausea medication with gentle migraine relief compounds to provide comprehensive comfort during migraine episodes.",
  },
  {
    id: 6,
    title: "Preventive Migraine Capsules",
    price: "$39.99",
    description: "Daily supplement to reduce migraine frequency and intensity.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?fit=crop&w=800&h=800",
    longDescription: "Our Preventive Migraine Capsules are formulated for daily use to help reduce the frequency and intensity of migraine attacks. These capsules contain a blend of clinically-proven ingredients including magnesium, riboflavin, and CoQ10, which work together to help prevent migraines before they start.",
  },
  {
    id: 7,
    title: "Light Sensitivity Relief Drops",
    price: "$27.99",
    description: "Eye drops specifically formulated for photophobia during migraines.",
    image: "https://images.unsplash.com/photo-1571707696525-c4484d79e39c?fit=crop&w=800&h=800",
    longDescription: "Our Light Sensitivity Relief Drops are specially formulated to provide relief from photophobia during migraine episodes. These soothing eye drops contain natural ingredients that help reduce light sensitivity and eye strain, making it easier to function during a migraine attack.",
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-2xl font-bold text-primary">{product.price}</p>
            <div className="space-y-4">
              <p className="text-gray-600">{product.longDescription}</p>
            </div>
            <Button size="lg" className="w-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
