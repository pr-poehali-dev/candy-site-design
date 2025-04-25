import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    alert('Форма отправлена!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-accent py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
          <div className="flex items-center text-muted-foreground">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <span className="mx-2">•</span>
            <span>Контакты</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Наши контакты</h2>
              <p className="text-muted-foreground mb-8">
                Мы всегда рады общению с клиентами! Свяжитесь с нами любым удобным способом, и мы поможем выбрать идеальный десерт для вашего праздника.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg hover-card">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                <p className="text-muted-foreground">+7 (495) 987-65-43</p>
              </div>
              
              <div className="p-6 border border-border rounded-lg hover-card">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@sweetshop.ru</p>
                <p className="text-muted-foreground">orders@sweetshop.ru</p>
              </div>
              
              <div className="p-6 border border-border rounded-lg hover-card">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Сладкая, д. 10</p>
                <p className="text-muted-foreground">м. Кондитерская, 5 мин пешком</p>
              </div>
              
              <div className="p-6 border border-border rounded-lg hover-card">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="font-semibold mb-2">Время работы</h3>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="bg-accent p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Ваш email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@mail.ru" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (___) ___-__-__" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Тема сообщения
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Заказ торта" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Ваше сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Напишите детали вашего запроса" 
                    rows={5} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Отправить сообщение</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: "0.3s"}}>
          <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
          <div className="h-96 bg-muted rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3779957533!2d37.61749901594627!3d55.75698098055461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1626784020111!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              loading="lazy"
              title="Карта расположения кондитерской"
            ></iframe>
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

export default Contacts;
