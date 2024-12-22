import { CalculatorInput } from "@/components/CalculatorInput";

interface WallInputsProps {
  length: string;
  height: string;
  thickness: string;
  lengthUnit: string;
  heightUnit: string;
  thicknessUnit: string;
  onLengthChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onThicknessChange: (value: string) => void;
  onLengthUnitChange: (value: string) => void;
  onHeightUnitChange: (value: string) => void;
  onThicknessUnitChange: (value: string) => void;
}

export const WallInputs = ({
  length,
  height,
  thickness,
  lengthUnit,
  heightUnit,
  thicknessUnit,
  onLengthChange,
  onHeightChange,
  onThicknessChange,
  onLengthUnitChange,
  onHeightUnitChange,
  onThicknessUnitChange,
}: WallInputsProps) => {
  return (
    <>
      <CalculatorInput
        label="Wall Length"
        value={length}
        onChange={onLengthChange}
        placeholder="Enter length"
        showUnitSelect
        selectedUnit={lengthUnit}
        onUnitChange={onLengthUnitChange}
      />
      <CalculatorInput
        label="Wall Height"
        value={height}
        onChange={onHeightChange}
        placeholder="Enter height"
        showUnitSelect
        selectedUnit={heightUnit}
        onUnitChange={onHeightUnitChange}
      />
      <CalculatorInput
        label="Wall Thickness"
        value={thickness}
        onChange={onThicknessChange}
        placeholder="Enter thickness"
        showUnitSelect
        selectedUnit={thicknessUnit}
        onUnitChange={onThicknessUnitChange}
      />
    </>
  );
};