import { ShoppingCart, Menu, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary font-bold text-2xl">Сладкоежка</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="font-medium hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/delivery" className="font-medium hover:text-primary transition-colors">
              Доставка
            </Link>
            <Link to="/contacts" className="font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center relative">
              <Input 
                placeholder="Поиск..." 
                className="w-48 pr-8 bg-muted focus-visible:ring-primary"
              />
              <Search size={16} className="absolute right-3 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-primary">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-primary relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-accent hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 border-t mt-4 border-border">
            <div className="flex items-center relative mb-4">
              <Input 
                placeholder="Поиск..." 
                className="w-full pr-8 bg-muted focus-visible:ring-primary"
              />
              <Search size={16} className="absolute right-3 text-muted-foreground" />
            </div>
            <Link to="/" className="block py-2 font-medium hover:text-primary">
              Главная
            </Link>
            <Link to="/catalog" className="block py-2 font-medium hover:text-primary">
              Каталог
            </Link>
            <Link to="/about" className="block py-2 font-medium hover:text-primary">
              О нас
            </Link>
            <Link to="/delivery" className="block py-2 font-medium hover:text-primary">
              Доставка
            </Link>
            <Link to="/contacts" className="block py-2 font-medium hover:text-primary">
              Контакты
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
