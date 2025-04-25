interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
  );
};

export default SectionHeading;
