
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg",
      "animate-fadeIn opacity-0",
      className
    )}>
      <div className="space-y-4">
        <p className="text-lg italic text-gray-600">&ldquo;{quote}&rdquo;</p>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
