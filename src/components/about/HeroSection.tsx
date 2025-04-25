
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
