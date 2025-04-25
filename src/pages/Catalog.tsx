import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { Sliders, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 3000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Пример данных для каталога товаров
  const products = [
    { id: 1, name: "Шоколадный торт 'Брауни'", price: 1500, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=3387&auto=format&fit=crop", category: "Торты" },
    { id: 2, name: "Эклеры с ванильным кремом", price: 180, image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=3280&auto=format&fit=crop", category: "Эклеры" },
    { id: 3, name: "Макаруны 'Малина'", price: 220, image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?q=80&w=3270&auto=format&fit=crop", category: "Макаруны" },
    { id: 4, name: "Торт 'Красный бархат'", price: 1800, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=3342&auto=format&fit=crop", category: "Торты" },
    { id: 5, name: "Ванильные эклеры", price: 190, image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?q=80&w=3270&auto=format&fit=crop", category: "Эклеры" },
    { id: 6, name: "Шоколадные кексы", price: 150, image: "https://images.unsplash.com/photo-1606188074044-fcd750f6996a?q=80&w=3270&auto=format&fit=crop", category: "Кексы" },
    { id: 7, name: "Лимонный торт", price: 1700, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=3270&auto=format&fit=crop", category: "Торты" },
    { id: 8, name: "Фисташковые макаруны", price: 250, image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=3269&auto=format&fit=crop", category: "Макаруны" }
  ];

  // Категории для фильтрации
  const categories = ["Торты", "Эклеры", "Макаруны", "Кексы"];

  // Фильтрация товаров
  const filteredProducts = products.filter(product => {
    // Фильтр по категории
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    
    // Фильтр по цене
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Заголовок страницы */}
      <div className="bg-secondary/50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Каталог товаров</h1>
          <p className="text-muted-foreground mt-2">Выберите сладости на любой вкус</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Фильтры (мобильный вид) */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="flex items-center gap-2">
                <Sliders size={16} />
                Фильтры
              </span>
              <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? "transform rotate-180" : ""}`} />
            </Button>
            
            {isFilterOpen && (
              <div className="border rounded-md p-4 mt-2 bg-card">
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-mobile-${category}`} 
                          checked={selectedCategory === category}
                          onCheckedChange={() => {
                            setSelectedCategory(selectedCategory === category ? null : category);
                          }}
                        />
                        <label 
                          htmlFor={`category-mobile-${category}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Цена</h3>
                  <Slider 
                    value={priceRange} 
                    min={0} 
                    max={3000} 
                    step={100} 
                    onValueChange={setPriceRange} 
                    className="mb-4" 
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Боковые фильтры (десктоп) */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="border rounded-md p-4 bg-card sticky top-24">
              <div className="mb-6">
                <h3 className="font-medium mb-3">Категории</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category}`} 
                        checked={selectedCategory === category}
                        onCheckedChange={() => {
                          setSelectedCategory(selectedCategory === category ? null : category);
                        }}
                      />
                      <label 
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Цена</h3>
                <Slider 
                  value={priceRange} 
                  min={0} 
                  max={3000} 
                  step={100} 
                  onValueChange={setPriceRange} 
                  className="mb-4" 
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{priceRange[0]} ₽</span>
                  <span>{priceRange[1]} ₽</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Список товаров */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">Найдено товаров: {filteredProducts.length}</p>
              <select className="bg-background border rounded-md px-3 py-2 text-sm">
                <option>По популярности</option>
                <option>По цене (мин.)</option>
                <option>По цене (макс.)</option>
                <option>По названию (А-Я)</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    id={product.id} 
                    name={product.name} 
                    price={product.price} 
                    image={product.image} 
                    category={product.category} 
                  />
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-muted-foreground mb-4">По вашему запросу ничего не найдено</p>
                  <Button 
                    onClick={() => {
                      setSelectedCategory(null);
                      setPriceRange([0, 3000]);
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border mt-auto">
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
                  <a href="/about" className="hover:text-primary transition-colors">О нас</a>
                </li>
                <li>
                  <a href="/delivery" className="hover:text-primary transition-colors">Доставка и оплата</a>
                </li>
                <li>
                  <a href="/reviews" className="hover:text-primary transition-colors">Отзывы</a>
                </li>
                <li>
                  <a href="/contacts" className="hover:text-primary transition-colors">Контакты</a>
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
