import { CalculatorInput } from "@/components/CalculatorInput";
import { ShapeSelector } from "@/components/gravel/ShapeSelector";

interface SoilInputsProps {
  shape: string;
  setShape: (value: string) => void;
  length: string;
  setLength: (value: string) => void;
  width: string;
  setWidth: (value: string) => void;
  radius: string;
  setRadius: (value: string) => void;
  depth: string;
  setDepth: (value: string) => void;
  lengthUnit: string;
  setLengthUnit: (value: string) => void;
  widthUnit: string;
  setWidthUnit: (value: string) => void;
  radiusUnit: string;
  setRadiusUnit: (value: string) => void;
  depthUnit: string;
  setDepthUnit: (value: string) => void;
}

export const SoilInputs = ({
  shape,
  setShape,
  length,
  setLength,
  width,
  setWidth,
  radius,
  setRadius,
  depth,
  setDepth,
  lengthUnit,
  setLengthUnit,
  widthUnit,
  setWidthUnit,
  radiusUnit,
  setRadiusUnit,
  depthUnit,
  setDepthUnit,
}: SoilInputsProps) => {
  return (
    <div className="grid gap-4">
      <ShapeSelector value={shape} onValueChange={setShape} />
      {shape === "rectangular" ? (
        <>
          <CalculatorInput
            label="Length"
            value={length}
            onChange={setLength}
            placeholder="Enter length"
            showUnitSelect
            selectedUnit={lengthUnit}
            onUnitChange={setLengthUnit}
          />
          <CalculatorInput
            label="Width"
            value={width}
            onChange={setWidth}
            placeholder="Enter width"
            showUnitSelect
            selectedUnit={widthUnit}
            onUnitChange={setWidthUnit}
          />
        </>
      ) : (
        <CalculatorInput
          label="Radius"
          value={radius}
          onChange={setRadius}
          placeholder="Enter radius"
          showUnitSelect
          selectedUnit={radiusUnit}
          onUnitChange={setRadiusUnit}
        />
      )}
      <CalculatorInput
        label="Depth"
        value={depth}
        onChange={setDepth}
        placeholder="Enter depth"
        showUnitSelect
        selectedUnit={depthUnit}
        onUnitChange={setDepthUnit}
      />
    </div>
  );
};