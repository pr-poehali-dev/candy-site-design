
interface TeamMemberCardProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMemberCard = ({ name, role, imageSrc }: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-card">
      <img 
        src={imageSrc} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-primary">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
