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
    image: "https://migrawell.com/_next/image?url=https%3A%2F%2Fcdn.durable.co%2Fblocks%2FeIx8f3m84ImfSFWvpdGQGZbwGvtyoKlNOGE55bFK1JwKT99Ww6JNqh9HA9zbmIJf.png&w=1920&q=90",
    longDescription: "Our Rapid Relief Migraine Tablets are specifically formulated to provide quick relief from acute migraine attacks. These tablets contain a carefully balanced combination of active ingredients that target multiple migraine symptoms while minimizing potential side effects. The fast-dissolving formula ensures rapid absorption for immediate relief when you need it most.",
  },
  {
    id: 5,
    title: "Gut-Brain Support",
    price: "$34.99",
    description: "Specialized medication targeting migraine-related nausea and dizziness.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?fit=crop&w=800&h=800",
    longDescription: "Find adjunct support with Migra QWell gut brain botanical which provides soothing support when you need it the most. Can be safely combined with over the counter pain meds to improve tolerance and efficacy.",
  },
  {
    id: 6,
    title: "Nutrient rich sleep aid",
    price: "$39.99",
    description: "Daily supplement to reduce migraine frequency and intensity.",
    image: "https://migrawell.com/_next/image?url=https%3A%2F%2Fcdn.durable.co%2Fblocks%2F1zZimkawsN7ar9H4CSGZLKicwc2XOF8rWoDSGTXLZ8XxMwad3ADCOPO1heh1aKD7.png&w=1920&q=90",
    longDescription: "Find sleep & key nutrient support in Migra-Well PM. Riboflavin (Vitamin B2), PharmaGABA and relaxing magnesium bisglycinate and a small but potent dose of melatonin which supports sleep and promotes prevention.",
  },
  {
    id: 7,
    title: "Methylated Multivitamin",
    price: "$27.99",
    description: "Premium methylated multivitamin with bioavailable nutrients to support brain health and energy levels.",
    image: "https://migrawell.com/_next/image?url=https%3A%2F%2Fcdn.durable.co%2Fblocks%2F39pku3TlglU9JETxfaABI1HviFwrgoQpIamraJOC6dGeNsyUiYEllLcm9vtRS92a.png&w=1920&q=90",
    longDescription: "Migra-Well AM, a premium methylated multivitamin, delivers bioavailable vitamins, minerals, and antioxidants, including 5-MTHF folate and methylcobalamin B12, to support brain and nerve health, close nutrient gaps, and sustain energy all day.",
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
