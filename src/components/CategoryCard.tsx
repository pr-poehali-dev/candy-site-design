import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  count: number;
}

const CategoryCard = ({ id, name, image, count }: CategoryCardProps) => {
  return (
    <Link to={`/catalog/${id}`}>
      <Card className="overflow-hidden h-44 group relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <CardContent className="p-0 text-white">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm opacity-80">{count} товаров</p>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
