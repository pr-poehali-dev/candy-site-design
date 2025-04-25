
interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className = "" }: SectionHeadingProps) => {
  return (
    <h2 className={`text-3xl font-bold text-center mb-12 ${className}`}>{title}</h2>
  );
};

export default SectionHeading;
