import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UnitSelect } from "./UnitSelect";

interface CalculatorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  unit?: string;
  showUnitSelect?: boolean;
  selectedUnit?: string;
  onUnitChange?: (unit: string) => void;
}

export const CalculatorInput = ({
  label,
  value,
  onChange,
  placeholder,
  unit,
  showUnitSelect = false,
  selectedUnit,
  onUnitChange,
}: CalculatorInputProps) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={showUnitSelect ? "" : "pr-12"}
          />
          {!showUnitSelect && unit && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              {unit}
            </div>
          )}
        </div>
        {showUnitSelect && selectedUnit && onUnitChange && (
          <UnitSelect value={selectedUnit} onValueChange={onUnitChange} />
        )}
      </div>
    </div>
  );
};