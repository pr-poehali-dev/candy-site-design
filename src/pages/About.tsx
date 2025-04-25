import Header from "../components/Header";
import { Award, Heart, Leaf, Utensils } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О кондитерской "Сладкоежка"</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Мы — команда влюбленных в свое дело кондитеров, которые создают не просто десерты, а настоящие произведения искусства с 2010 года.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-700 mb-4">
                История "Сладкоежки" началась в небольшой домашней кухне, где наш шеф-кондитер Мария экспериментировала с семейными рецептами. 
                Её страсть к созданию уникальных десертов быстро превратилась в любимое дело, а затем — в успешный бизнес.
              </p>
              <p className="text-gray-700 mb-4">
                Сегодня "Сладкоежка" — это современная кондитерская с собственным производством, командой профессионалов и сотнями довольных клиентов. 
                Мы сохраняем традиции классической кондитерской школы, но не боимся экспериментировать и создавать новые вкусы.
              </p>
              <p className="text-gray-700">
                Каждый день мы работаем над тем, чтобы наши десерты приносили радость и делали ваши особенные моменты еще более запоминающимися.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Наша команда за работой" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="font-semibold">Основано в 2010 году</p>
                <p className="text-sm text-gray-600">13 лет создаем сладкие шедевры</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Leaf size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Натуральность</h3>
              <p className="text-gray-600">Мы используем только натуральные ингредиенты без искусственных добавок</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Utensils size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Мастерство</h3>
              <p className="text-gray-600">Наши кондитеры — настоящие мастера своего дела с многолетним опытом</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Любовь к делу</h3>
              <p className="text-gray-600">Мы вкладываем душу в каждый десерт, который создаем</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">Постоянный контроль качества на всех этапах производства</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-4">13+</div>
              <h3 className="text-xl font-semibold mb-2">Лет опыта</h3>
              <p className="text-gray-600">Более 13 лет создаем неповторимые десерты</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-4">10K+</div>
              <h3 className="text-xl font-semibold mb-2">Довольных клиентов</h3>
              <p className="text-gray-600">Тысячи благодарных отзывов от наших клиентов</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-4">5</div>
              <h3 className="text-xl font-semibold mb-2">Наград</h3>
              <p className="text-gray-600">Победители городских конкурсов кондитерского мастерства</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-card">
              <img 
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Мария Иванова" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Мария Иванова</h3>
                <p className="text-primary">Шеф-кондитер</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-card">
              <img 
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Александр Петров" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Александр Петров</h3>
                <p className="text-primary">Кондитер-технолог</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-card">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Елена Сидорова" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Елена Сидорова</h3>
                <p className="text-primary">Декоратор</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-card">
              <img 
                src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Дмитрий Козлов" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Дмитрий Козлов</h3>
                <p className="text-primary">Менеджер</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Попробуйте наши десерты</h2>
          <p className="text-gray-700 mb-8">Закажите прямо сейчас или посетите нашу кондитерскую</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalog" 
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition shadow-lg shadow-primary/20"
            >
              Перейти в каталог
            </a>
            <a 
              href="/contacts" 
              className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition border border-gray-200"
            >
              Наши контакты
            </a>
          </div>
        </div>
      </section>
      
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

export default About;
