import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { ChevronRight, Smile, Truck, Medal } from "lucide-react";

const Index = () => {
  // Пример данных для категорий
  const categories = [
    { id: 1, name: "Торты", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2982&auto=format&fit=crop", count: 24 },
    { id: 2, name: "Эклеры", image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=3280&auto=format&fit=crop", count: 18 },
    { id: 3, name: "Макаруны", image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?q=80&w=3270&auto=format&fit=crop", count: 15 }
  ];

  // Пример данных для популярных товаров
  const popularProducts = [
    { id: 1, name: "Шоколадный торт 'Брауни'", price: 1500, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=3387&auto=format&fit=crop", category: "Торты" },
    { id: 2, name: "Эклеры с ванильным кремом", price: 180, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2982&auto=format&fit=crop", category: "Эклеры" },
    { id: 3, name: "Макаруны 'Малина'", price: 220, image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?q=80&w=3270&auto=format&fit=crop", category: "Макаруны" },
    { id: 4, name: "Торт 'Красный бархат'", price: 1800, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=3342&auto=format&fit=crop", category: "Торты" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative bg-accent mb-12">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Сладкие моменты для особых случаев</h1>
            <p className="text-lg mb-6 text-muted-foreground">Изысканные кондитерские изделия, приготовленные с любовью и вниманием к деталям</p>
            <div className="flex space-x-4">
              <Button size="lg" className="px-8">Заказать</Button>
              <Button size="lg" variant="secondary">Наш каталог</Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=3270&auto=format&fit=crop" 
            alt="Десерты" 
            className="object-cover h-full w-full"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Категории</h2>
          <Button variant="link" className="gap-1" asChild>
            <a href="/catalog">
              Смотреть все <ChevronRight size={16} />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard 
              key={category.id} 
              id={category.id} 
              name={category.name} 
              image={category.image} 
              count={category.count} 
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary py-12 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Medal size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
              <p className="text-secondary-foreground">Мы используем только натуральные ингредиенты в наших десертах</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-secondary-foreground">Доставим ваш заказ свежим в любую точку города</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Smile size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Довольные клиенты</h3>
              <p className="text-secondary-foreground">Тысячи положительных отзывов от наших постоянных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Популярные товары</h2>
          <Button variant="link" className="gap-1" asChild>
            <a href="/catalog">
              Смотреть все <ChevronRight size={16} />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularProducts.map(product => (
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
      </section>

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

export default Index;
