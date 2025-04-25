import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <div className="bg-background rounded-lg overflow-hidden border border-border shadow-sm hover-card">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-base mb-2 line-clamp-2 h-12">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{price} ₽</span>
          <Button size="sm" className="gap-1">
            <ShoppingCart size={16} />
            <span className="sr-only md:not-sr-only md:inline">В корзину</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
