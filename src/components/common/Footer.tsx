
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition">Торты</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition">Пирожные</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition">Эклеры</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition">Макаруны</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">О нас</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white transition">Доставка и оплата</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white transition">Возврат и обмен</Link></li>
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
          <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} Сладкоежка. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
