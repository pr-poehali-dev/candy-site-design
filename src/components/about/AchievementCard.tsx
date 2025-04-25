interface AchievementCardProps {
  value: string;
  title: string;
  description: string;
}

const AchievementCard = ({ value, title, description }: AchievementCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="text-5xl font-bold text-primary mb-4">{value}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AchievementCard;
