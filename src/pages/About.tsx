import Header from "@/components/Header";
import { Heart, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-accent py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">О нас</h1>
          <div className="flex items-center text-muted-foreground">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <span className="mx-2">•</span>
            <span>О нас</span>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="container mx-auto px-4 mb-16 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Наша история</h2>
            <p className="mb-4 text-muted-foreground">
              Кондитерская "Сладкоежка" была основана в 2010 году с простой миссией: создавать неповторимые десерты, 
              которые дарят радость и делают особые моменты жизни еще более запоминающимися.
            </p>
            <p className="mb-4 text-muted-foreground">
              Мы начинали как маленькая семейная пекарня, где каждый торт создавался с любовью и вниманием к деталям. 
              Сегодня мы выросли, но наши ценности остались прежними - качество, натуральность и индивидуальный подход к каждому заказу.
            </p>
            <p className="text-muted-foreground">
              Наша команда профессиональных кондитеров постоянно совершенствует свое мастерство, 
              изучая новые техники и тренды в мире кондитерского искусства.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556910096-5cdca10542b9?q=80&w=3270&auto=format&fit=crop" 
              alt="Наша кондитерская" 
              className="rounded-lg shadow-md w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">13+ лет</p>
              <p>создаем сладкие шедевры</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-16 mb-16 animate-fade-in" style={{animationDelay: "0.1s"}}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm hover-card">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Любовь к делу</h3>
              <p className="text-muted-foreground">Мы искренне любим то, что делаем, и вкладываем частичку души в каждое изделие</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm hover-card">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">Только натуральные ингредиенты и строгий контроль на всех этапах производства</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm hover-card">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Свежесть</h3>
              <p className="text-muted-foreground">Мы готовим десерты непосредственно перед доставкой, чтобы вы получили их свежими</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm hover-card">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Клиенты</h3>
              <p className="text-muted-foreground">Мы ценим каждого клиента и стремимся превзойти ваши ожидания</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 mb-16 animate-fade-in" style={{animationDelay: "0.2s"}}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Наша команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-4 relative">
              <img 
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=3280&auto=format&fit=crop" 
                alt="Александр Петров" 
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-muted"
              />
            </div>
            <h3 className="text-lg font-semibold">Александр Петров</h3>
            <p className="text-primary">Шеф-кондитер</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?q=80&w=3000&auto=format&fit=crop" 
                alt="Мария Иванова" 
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-muted"
              />
            </div>
            <h3 className="text-lg font-semibold">Мария Иванова</h3>
            <p className="text-primary">Кондитер</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop" 
                alt="Дмитрий Сидоров" 
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-muted"
              />
            </div>
            <h3 className="text-lg font-semibold">Дмитрий Сидоров</h3>
            <p className="text-primary">Директор</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2461&auto=format&fit=crop" 
                alt="Анна Смирнова" 
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-muted"
              />
            </div>
            <h3 className="text-lg font-semibold">Анна Смирнова</h3>
            <p className="text-primary">Менеджер</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-accent py-16 mb-16 animate-fade-in" style={{animationDelay: "0.3s"}}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-lg">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10000+</div>
              <p className="text-lg">Изготовлено тортов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <p className="text-lg">Профессиональных наград</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <p className="text-lg">Уникальных рецептов</p>
            </div>
          </div>
        </div>
      </section>

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

export default About;
