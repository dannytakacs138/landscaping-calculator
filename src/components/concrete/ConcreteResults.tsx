import { CalculatorResult } from "@/components/CalculatorResult";

interface ConcreteResultsProps {
  cubicYards: number;
  cubicFeet: number;
  cubicMeters: number;
  bags40lb: number;
  bags60lb: number;
  bags80lb: number;
}

export const ConcreteResults = ({
  cubicYards,
  cubicFeet,
  cubicMeters,
  bags40lb,
  bags60lb,
  bags80lb,
}: ConcreteResultsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CalculatorResult
        label="Concrete Needed (Cubic Yards)"
        value={cubicYards}
        unit="yd³"
      />
      <CalculatorResult
        label="Concrete Needed (Cubic Feet)"
        value={cubicFeet}
        unit="ft³"
      />
      <CalculatorResult
        label="Concrete Needed (Cubic Meters)"
        value={cubicMeters}
        unit="m³"
      />
      <CalculatorResult
        label="40lb Bags Needed (0.3 ft³ per bag)"
        value={bags40lb}
        unit="bags"
      />
      <CalculatorResult
        label="60lb Bags Needed (0.45 ft³ per bag)"
        value={bags60lb}
        unit="bags"
      />
      <CalculatorResult
        label="80lb Bags Needed (0.6 ft³ per bag)"
        value={bags80lb}
        unit="bags"
      />
    </div>
  );
};