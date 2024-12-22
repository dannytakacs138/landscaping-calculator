import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { Blocks, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RetainingWallCalculator = () => {
  const navigate = useNavigate();
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [thickness, setThickness] = useState("");
  const [lengthUnit, setLengthUnit] = useState("feet");
  const [heightUnit, setHeightUnit] = useState("feet");
  const [thicknessUnit, setThicknessUnit] = useState("feet");

  const calculateWallBlocks = () => {
    // Convert all measurements to feet
    const lengthInFeet = convertToFeet(parseFloat(length), lengthUnit);
    const heightInFeet = convertToFeet(parseFloat(height), heightUnit);
    const thicknessInFeet = convertToFeet(parseFloat(thickness), thicknessUnit);

    // Standard concrete block size (typical 8x8x16 inches)
    const blockLengthInFeet = 16 / 12; // 16 inches to feet
    const blockHeightInFeet = 8 / 12; // 8 inches to feet
    const blockThicknessInFeet = 8 / 12; // 8 inches to feet

    // Calculate number of blocks needed
    const blocksPerRow = Math.ceil(lengthInFeet / blockLengthInFeet);
    const numberOfRows = Math.ceil(heightInFeet / blockHeightInFeet);
    const numberOfLayers = Math.ceil(thicknessInFeet / blockThicknessInFeet);

    return blocksPerRow * numberOfRows * numberOfLayers;
  };

  const convertToFeet = (value: number, unit: string): number => {
    switch (unit) {
      case "inches":
        return value / 12;
      case "feet":
        return value;
      case "yards":
        return value * 3;
      case "centimeters":
        return value / 30.48;
      case "meters":
        return value * 3.28084;
      default:
        return value;
    }
  };

  const totalBlocks = !isNaN(parseFloat(length)) && 
                     !isNaN(parseFloat(height)) && 
                     !isNaN(parseFloat(thickness)) 
                     ? calculateWallBlocks() 
                     : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Calculators
        </Button>
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Blocks className="w-6 h-6 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Retaining Wall Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <CalculatorInput
              label="Wall Length"
              value={length}
              onChange={setLength}
              placeholder="Enter length"
              showUnitSelect
              selectedUnit={lengthUnit}
              onUnitChange={setLengthUnit}
            />
            <CalculatorInput
              label="Wall Height"
              value={height}
              onChange={setHeight}
              placeholder="Enter height"
              showUnitSelect
              selectedUnit={heightUnit}
              onUnitChange={setHeightUnit}
            />
            <CalculatorInput
              label="Wall Thickness"
              value={thickness}
              onChange={setThickness}
              placeholder="Enter thickness"
              showUnitSelect
              selectedUnit={thicknessUnit}
              onUnitChange={setThicknessUnit}
            />
            <CalculatorResult
              label="Estimated Blocks Needed"
              value={totalBlocks}
              unit="blocks"
            />
            <div className="text-sm text-gray-500 mt-4">
              Note: This calculation assumes standard concrete blocks (8x8x16 inches). 
              Actual requirements may vary based on block size and design specifications.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RetainingWallCalculator;