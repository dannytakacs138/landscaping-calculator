import { useState } from "react";
import { ArrowLeft, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { useNavigate } from "react-router-dom";
import { convertToFeet } from "@/utils/unitConversions";
import { ShapeSelector } from "@/components/gravel/ShapeSelector";

const GravelCalculator = () => {
  const navigate = useNavigate();
  const [shape, setShape] = useState("rectangular");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [radius, setRadius] = useState("");
  const [depth, setDepth] = useState("");
  const [lengthUnit, setLengthUnit] = useState("feet");
  const [widthUnit, setWidthUnit] = useState("feet");
  const [radiusUnit, setRadiusUnit] = useState("feet");
  const [depthUnit, setDepthUnit] = useState("inches");

  const calculateArea = () => {
    if (shape === "rectangular") {
      const l = convertToFeet(parseFloat(length), lengthUnit as any);
      const w = convertToFeet(parseFloat(width), widthUnit as any);
      return isNaN(l) || isNaN(w) ? 0 : l * w;
    } else {
      const r = convertToFeet(parseFloat(radius), radiusUnit as any);
      return isNaN(r) ? 0 : Math.PI * r * r;
    }
  };

  const calculateCubicYards = () => {
    const area = calculateArea();
    const d = convertToFeet(parseFloat(depth), depthUnit as any);
    return isNaN(d) ? 0 : (area * d) / 27;
  };

  const calculateCubicFeet = () => {
    const area = calculateArea();
    const d = convertToFeet(parseFloat(depth), depthUnit as any);
    return isNaN(d) ? 0 : area * d;
  };

  const calculateCubicMeters = () => {
    return calculateCubicFeet() * 0.0283168; // Convert cubic feet to cubic meters
  };

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
              <Mountain className="h-6 w-6 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Gravel Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CalculatorResult
                label="Gravel Needed (Cubic Yards)"
                value={calculateCubicYards()}
                unit="yd³"
              />
              <CalculatorResult
                label="Gravel Needed (Cubic Feet)"
                value={calculateCubicFeet()}
                unit="ft³"
              />
              <CalculatorResult
                label="Gravel Needed (Cubic Meters)"
                value={calculateCubicMeters()}
                unit="m³"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GravelCalculator;