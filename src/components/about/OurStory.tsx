
const OurStory = () => {
  return (
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
  );
};

export default OurStory;
