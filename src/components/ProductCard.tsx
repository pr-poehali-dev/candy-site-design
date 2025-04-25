import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-full">
          {category}
        </span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/60 hover:bg-background/80 backdrop-blur-sm"
        >
          <Heart size={16} className="text-muted-foreground hover:text-primary" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium text-base line-clamp-2 mb-1 min-h-[48px]">{name}</h3>
        <p className="font-bold text-lg">{price} ₽</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingCart size={16} />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
