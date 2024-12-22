import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CalculatorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  unit?: string;
}

export const CalculatorInput = ({ label, value, onChange, placeholder, unit }: CalculatorInputProps) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="relative">
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pr-12"
        />
        {unit && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
            {unit}
          </div>
        )}
      </div>
    </div>
  );
};