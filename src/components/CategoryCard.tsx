import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, description, image, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="block group">
      <div className="rounded-2xl overflow-hidden shadow-lg hover-card">
        <div className="relative h-60">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
