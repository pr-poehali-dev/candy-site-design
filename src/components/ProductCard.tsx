
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating?: number;
}

const ProductCard = ({ name, price, image, rating }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover-card overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <button 
          className={`absolute top-3 right-3 p-2 rounded-full ${isLiked ? 'bg-primary text-white' : 'bg-white/80 text-gray-600'} transition-colors duration-300 hover:bg-primary hover:text-white`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-4">
        {rating && (
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 text-sm">
              ★★★★★
            </div>
            <span className="text-gray-500 text-sm ml-1">{rating}</span>
          </div>
        )}
        
        <h3 className="font-medium text-gray-800 mb-1">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-gray-900">{price} ₽</span>
          <button className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
