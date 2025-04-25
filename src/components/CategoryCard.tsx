import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  count: number;
}

const CategoryCard = ({ id, name, image, count }: CategoryCardProps) => {
  return (
    <Link 
      to={`/catalog?category=${id}`} 
      className="group relative block h-60 rounded-lg overflow-hidden hover-card"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-semibold mb-1">{name}</h3>
        <p className="text-white/80 text-sm">{count} товаров</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
