import {
  Code,
  Laptop,
  Smartphone,
  Figma,
  Layout,
  Copy
} from "lucide-react";

const iconMap = {
  "Frontend Web Development": <Laptop size={28} />,
  "React App Development": <Code size={28} />,
  "Responsive Design": <Smartphone size={28} />,
  "UI Implementation": <Figma size={28} />,
  "Landing Page Development": <Layout size={28} />,
  "Website UI Cloning": <Copy size={28} />,
};

const ServiceCard = ({ title, desc }) => {
  return (
    <div
      className="
      bg-[#161717]
      p-6
      rounded-xl
      border border-gray-800
      hover:border-primary
      hover:shadow-lg
      hover:shadow-primary/20
      hover:-translate-y-2
      transition
      duration-300
    "
    >
      <div className="text-primary mb-4">
        {iconMap[title]}
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
