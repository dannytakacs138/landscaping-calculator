import { CalculatorInput } from "@/components/CalculatorInput";

interface VolumeInputsProps {
  shape: string;
  length: string;
  width: string;
  height: string;
  radius: string;
  unit: string;
  onLengthChange: (value: string) => void;
  onWidthChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onRadiusChange: (value: string) => void;
  onUnitChange: (value: string) => void;
}

export const VolumeInputs = ({
  shape,
  length,
  width,
  height,
  radius,
  unit,
  onLengthChange,
  onWidthChange,
  onHeightChange,
  onRadiusChange,
  onUnitChange,
}: VolumeInputsProps) => {
  if (shape === "cylinder") {
    return (
      <>
        <CalculatorInput
          label="Radius"
          value={radius}
          onChange={onRadiusChange}
          showUnitSelect
          selectedUnit={unit}
          onUnitChange={onUnitChange}
        />
        <CalculatorInput
          label="Height"
          value={height}
          onChange={onHeightChange}
          showUnitSelect
          selectedUnit={unit}
          onUnitChange={onUnitChange}
        />
      </>
    );
  }

  return (
    <>
      <CalculatorInput
        label={shape === "cube" ? "Side Length" : "Length"}
        value={length}
        onChange={onLengthChange}
        showUnitSelect
        selectedUnit={unit}
        onUnitChange={onUnitChange}
      />
      {shape === "rectangular" && (
        <>
          <CalculatorInput
            label="Width"
            value={width}
            onChange={onWidthChange}
            showUnitSelect
            selectedUnit={unit}
            onUnitChange={onUnitChange}
          />
          <CalculatorInput
            label="Height"
            value={height}
            onChange={onHeightChange}
            showUnitSelect
            selectedUnit={unit}
            onUnitChange={onUnitChange}
          />
        </>
      )}
    </>
  );
};