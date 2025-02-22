
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
