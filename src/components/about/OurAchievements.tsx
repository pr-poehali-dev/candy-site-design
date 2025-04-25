
import AchievementCard from "./AchievementCard";
import SectionHeading from "./SectionHeading";

const OurAchievements = () => {
  const achievements = [
    {
      number: "13+",
      title: "Лет опыта",
      description: "Более 13 лет создаем неповторимые десерты"
    },
    {
      number: "10K+",
      title: "Довольных клиентов",
      description: "Тысячи благодарных отзывов от наших клиентов"
    },
    {
      number: "5",
      title: "Наград",
      description: "Победители городских конкурсов кондитерского мастерства"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Наши достижения" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index}
              number={achievement.number}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
