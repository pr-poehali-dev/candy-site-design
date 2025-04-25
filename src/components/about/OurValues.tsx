
import { Award, Heart, Leaf, Utensils } from "lucide-react";
import ValueCard from "./ValueCard";
import SectionHeading from "./SectionHeading";

const OurValues = () => {
  const values = [
    {
      icon: Leaf,
      title: "Натуральность",
      description: "Мы используем только натуральные ингредиенты без искусственных добавок"
    },
    {
      icon: Utensils,
      title: "Мастерство",
      description: "Наши кондитеры — настоящие мастера своего дела с многолетним опытом"
    },
    {
      icon: Heart,
      title: "Любовь к делу",
      description: "Мы вкладываем душу в каждый десерт, который создаем"
    },
    {
      icon: Award,
      title: "Качество",
      description: "Постоянный контроль качества на всех этапах производства"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Наши ценности" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
