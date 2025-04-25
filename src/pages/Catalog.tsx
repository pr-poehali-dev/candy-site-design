import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { ChevronDown, Filter, Search, SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Торт 'Наполеон'",
    price: 1500,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    category: "cakes"
  },
  {
    id: 2,
    name: "Набор макарунов",
    price: 990,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    category: "macarons"
  },
  {
    id: 3,
    name: "Шоколадные эклеры",
    price: 750,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    category: "eclairs"
  },
  {
    id: 4,
    name: "Торт 'Красный бархат'",
    price: 1800,
    image: "https://images.unsplash.com/photo-1586788680434-30d324626f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 5.0,
    category: "cakes"
  },
  {
    id: 5,
    name: "Ягодный чизкейк",
    price: 1200,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    category: "cakes"
  },
  {
    id: 6,
    name: "Пирожное 'Картошка'",
    price: 180,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    category: "pastry"
  },
  {
    id: 7,
    name: "Фисташковые макаруны",
    price: 850,
    image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    category: "macarons"
  },
  {
    id: 8,
    name: "Ванильный эклер",
    price: 220,
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    category: "eclairs"
  }
];

const categories = [
  { id: "all", name: "Все" },
  { id: "cakes", name: "Торты" },
  { id: "eclairs", name: "Эклеры" },
  { id: "macarons", name: "Макаруны" },
  { id: "pastry", name: "Пирожные" }
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const filteredProducts = products.filter(product => {
    // Filter by category
    if (activeCategory !== "all" && product.category !== activeCategory) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Каталог десертов</h1>
          <p className="text-gray-700 mb-6">
            Выберите из нашего ассортимента вкуснейших десертов
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Поиск десертов..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200"
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2" />
                <span>Фильтры</span>
              </div>
              <ChevronDown size={18} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Sidebar Filters */}
          <div className={`md:w-1/4 ${showFilters || 'hidden md:block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Категории</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                        activeCategory === category.id 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Цена</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">От</label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">До</label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Рейтинг</h3>
                <div className="flex flex-col space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>{i < rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                      <span className="ml-2">и выше</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="md:w-3/4">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} товаров</p>
              
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Сортировка:</span>
                <select className="p-2 border border-gray-300 rounded-lg bg-white">
                  <option>По популярности</option>
                  <option>По возрастанию цены</option>
                  <option>По убыванию цены</option>
                  <option>По рейтингу</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Товары не найдены</p>
                <p className="text-gray-400">Попробуйте изменить параметры фильтра</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Сладкоежка</h3>
              <p className="text-gray-400">Изысканные десерты для любого случая</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Торты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Пирожные</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Эклеры</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Макаруны</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Доставка и оплата</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Возврат и обмен</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">📍</span>
                  <span className="text-gray-400">г. Москва, ул. Кондитерская, 123</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">📱</span>
                  <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition">+7 (495) 123-45-67</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">&copy; 2023 Сладкоежка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
