import Header from "@/components/Header";
import { Award, Clock, Heart, Star, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Заголовок страницы */}
      <div className="bg-secondary/50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">О нас</h1>
          <p className="text-muted-foreground mt-2">Узнайте больше о нашей кондитерской</p>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        {/* История компании */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Наша история</h2>
            <p className="mb-4 text-muted-foreground">
              Кондитерская "Сладкоежка" была основана в 2015 году с простой миссией — создавать изысканные 
              десерты, которые приносят радость и наслаждение каждому клиенту.
            </p>
            <p className="mb-4 text-muted-foreground">
              Мы начинали как небольшая семейная пекарня, но благодаря нашей страсти к кондитерскому 
              искусству и приверженности качеству, быстро завоевали любовь и признание наших клиентов.
            </p>
            <p className="text-muted-foreground">
              Сегодня "Сладкоежка" — это команда опытных кондитеров, использующих только натуральные 
              ингредиенты и проверенные временем рецепты, чтобы создавать неповторимые десерты для 
              любого случая жизни.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=3270&auto=format&fit=crop" 
              alt="Наша команда" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Ценности компании */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Мы используем только свежие и натуральные ингредиенты высочайшего качества для создания наших десертов.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Креативность</h3>
              <p className="text-muted-foreground">
                Мы постоянно экспериментируем с новыми вкусами и техниками, чтобы удивлять наших клиентов.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Забота</h3>
              <p className="text-muted-foreground">
                Мы заботимся о каждом клиенте и стремимся превзойти его ожидания от нашей продукции и сервиса.
              </p>
            </div>
          </div>
        </div>
        
        {/* Достижения */}
        <div className="mb-16 bg-secondary/30 py-10 px-4 md:px-10 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Наши достижения</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award size={30} className="text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">5+</p>
              <p className="text-muted-foreground">Лет опыта</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users size={30} className="text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">10,000+</p>
              <p className="text-muted-foreground">Счастливых клиентов</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock size={30} className="text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">25,000+</p>
              <p className="text-muted-foreground">Выполненных заказов</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star size={30} className="text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">4.9</p>
              <p className="text-muted-foreground">Средняя оценка</p>
            </div>
          </div>
        </div>
        
        {/* Команда */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=3270&auto=format&fit=crop" 
                  alt="Главный кондитер" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Анна Миронова</h3>
              <p className="text-primary mb-2">Главный кондитер</p>
              <p className="text-muted-foreground">
                С опытом работы более 10 лет, Анна — настоящий художник в мире десертов.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=3280&auto=format&fit=crop" 
                  alt="Шеф-кондитер" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Михаил Орлов</h3>
              <p className="text-primary mb-2">Шеф-кондитер</p>
              <p className="text-muted-foreground">
                Михаил специализируется на французских десертах и постоянно совершенствует своё мастерство.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3361&auto=format&fit=crop" 
                  alt="Кондитер-технолог" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Екатерина Соколова</h3>
              <p className="text-primary mb-2">Кондитер-технолог</p>
              <p className="text-muted-foreground">
                Екатерина отвечает за разработку новых рецептов и контроль качества всей продукции.
              </p>
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

export default About;
