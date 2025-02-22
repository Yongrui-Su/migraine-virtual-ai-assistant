
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  className?: string;
}

const ProductCard = ({ title, price, description, image, className }: ProductCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl",
      "animate-fadeIn opacity-0",
      className
    )}>
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="text-lg font-bold text-primary">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
