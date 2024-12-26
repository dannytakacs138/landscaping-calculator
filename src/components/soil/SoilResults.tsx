import { CalculatorResult } from "@/components/CalculatorResult";

interface SoilResultsProps {
  cubicYards: number;
  cubicFeet: number;
  cubicMeters: number;
  bagsNeeded: number;
}

export const SoilResults = ({
  cubicYards,
  cubicFeet,
  cubicMeters,
  bagsNeeded,
}: SoilResultsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <CalculatorResult
        label="Soil Needed (Cubic Yards)"
        value={cubicYards}
        unit="yd³"
      />
      <CalculatorResult
        label="Soil Needed (Cubic Feet)"
        value={cubicFeet}
        unit="ft³"
      />
      <CalculatorResult
        label="Soil Needed (Cubic Meters)"
        value={cubicMeters}
        unit="m³"
      />
      <CalculatorResult
        label="Bags Needed (0.75 ft³ per bag)"
        value={bagsNeeded}
        unit="bags"
      />
    </div>
  );
};