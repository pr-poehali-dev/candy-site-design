const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
