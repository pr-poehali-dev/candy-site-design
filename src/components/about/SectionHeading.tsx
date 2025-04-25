interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
