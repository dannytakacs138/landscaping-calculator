import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

export const CalculatorCard = ({ title, description, icon, path }: CalculatorCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
      onClick={() => navigate(path)}
    >
      <div className="flex items-center gap-4">
        <div className="text-emerald-600 w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Card>
  );
};