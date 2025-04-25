
import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Сладкоежка</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary transition">
            Главная
          </Link>
          <Link to="/catalog" className="font-medium text-gray-700 hover:text-primary transition">
            Каталог
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition">
            О нас
          </Link>
          <Link to="/contacts" className="font-medium text-gray-700 hover:text-primary transition">
            Контакты
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <User size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="font-medium text-gray-700 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-700 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="font-medium text-gray-700 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="flex items-center space-x-4 py-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <User size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
