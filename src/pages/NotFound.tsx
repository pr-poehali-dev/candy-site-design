
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Страница не найдена</p>
        <Link 
          to="/" 
          className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg"
        >
          На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
