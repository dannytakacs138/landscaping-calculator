import { Card } from "@/components/ui/card";

interface CalculatorResultProps {
  label: string;
  value: number;
  unit: string;
}

export const CalculatorResult = ({ label, value, unit }: CalculatorResultProps) => {
  return (
    <Card className="p-4 bg-emerald-50">
      <h4 className="text-sm font-medium text-emerald-900">{label}</h4>
      <div className="mt-1 flex items-baseline">
        <div className="text-2xl font-semibold text-emerald-600">
          {value.toFixed(2)}
        </div>
        <div className="ml-2 text-sm text-emerald-600">{unit}</div>
      </div>
    </Card>
  );
};