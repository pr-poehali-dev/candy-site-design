import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Filter, SlidersHorizontal, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Пример данных для категорий
  const categories = [
    { id: 1, name: "Торты", count: 24 },
    { id: 2, name: "Эклеры", count: 18 },
    { id: 3, name: "Макаруны", count: 15 },
    { id: 4, name: "Пирожные", count: 12 },
    { id: 5, name: "Печенье", count: 10 },
  ];

  // Пример данных для продуктов
  const products = [
    { id: 1, name: "Шоколадный торт 'Брауни'", price: 1500, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=3387&auto=format&fit=crop", category: "Торты" },
    { id: 2, name: "Эклеры с ванильным кремом", price: 180, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2982&auto=format&fit=crop", category: "Эклеры" },
    { id: 3, name: "Макаруны 'Малина'", price: 220, image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?q=80&w=3270&auto=format&fit=crop", category: "Макаруны" },
    { id: 4, name: "Торт 'Красный бархат'", price: 1800, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=3342&auto=format&fit=crop", category: "Торты" },
    { id: 5, name: "Шоколадный эклер", price: 190, image: "https://images.unsplash.com/photo-1558326567-98166e50193d?q=80&w=3279&auto=format&fit=crop", category: "Эклеры" },
    { id: 6, name: "Пирожное 'Тирамису'", price: 280, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=3387&auto=format&fit=crop", category: "Пирожные" },
    { id: 7, name: "Торт 'Медовик'", price: 1700, image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=3356&auto=format&fit=crop", category: "Торты" },
    { id: 8, name: "Ванильные макаруны", price: 210, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=3270&auto=format&fit=crop", category: "Макаруны" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-accent py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Каталог</h1>
          <div className="flex items-center text-muted-foreground">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <span className="mx-2">•</span>
            <span>Каталог</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex justify-between items-center"
            >
              <span className="flex items-center">
                <Filter size={16} className="mr-2" />
                Фильтры
              </span>
              <SlidersHorizontal size={16} />
            </Button>
          </div>

          {/* Filters - Desktop always visible, Mobile conditional */}
          <div className={`${isMobileFilterOpen || 'hidden md:block'} w-full md:w-64 space-y-8 animate-fade-in`}>
            {/* Search */}
            <div>
              <h3 className="font-medium mb-3">Поиск</h3>
              <div className="relative">
                <Input 
                  placeholder="Найти товар..." 
                  className="pr-8 bg-muted"
                />
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-medium mb-3">Категории</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox id={`category-${category.id}`} />
                    <label htmlFor={`category-${category.id}`} className="ml-2 text-sm cursor-pointer flex-grow">
                      {category.name}
                    </label>
                    <span className="text-xs text-muted-foreground">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-3">Цена</h3>
              <Slider 
                defaultValue={[0, 5000]} 
                max={5000} 
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-6"
              />
              <div className="flex items-center justify-between">
                <span>{priceRange[0]} ₽</span>
                <span>{priceRange[1]} ₽</span>
              </div>
            </div>

            {/* Apply Filters Button (Mobile only) */}
            <div className="md:hidden">
              <Button className="w-full">Применить фильтры</Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">Показано {products.length} товаров</p>
              <select className="bg-muted p-2 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary">
                <option>По популярности</option>
                <option>По возрастанию цены</option>
                <option>По убыванию цены</option>
                <option>По названию А-Я</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  id={product.id} 
                  name={product.name} 
                  price={product.price} 
                  image={product.image} 
                  category={product.category} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-secondary to-accent mt-auto border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Сладкоежка</h3>
              <p className="text-muted-foreground mb-4">Вкусные десерты для любого события</p>
              <p className="text-sm text-muted-foreground">© 2023 Сладкоежка. Все права защищены.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="mb-2">Телефон: +7 (999) 123-45-67</p>
              <p className="mb-2">Email: info@sweetshop.ru</p>
              <p>Адрес: г. Москва, ул. Сладкая, д. 10</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
                </li>
                <li>
                  <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
                </li>
                <li>
                  <Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
