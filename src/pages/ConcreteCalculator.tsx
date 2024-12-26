import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { useNavigate } from "react-router-dom";
import { convertToFeet } from "@/utils/unitConversions";
import { ShapeSelector } from "@/components/gravel/ShapeSelector";
import { ConcreteResults } from "@/components/concrete/ConcreteResults";

const ConcreteCalculator = () => {
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
    return calculateCubicFeet() * 0.0283168;
  };

  const calculate40lbBags = () => {
    return Math.ceil(calculateCubicFeet() / 0.3);
  };

  const calculate60lbBags = () => {
    return Math.ceil(calculateCubicFeet() / 0.45);
  };

  const calculate80lbBags = () => {
    return Math.ceil(calculateCubicFeet() / 0.6);
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
              <svg
                className="h-6 w-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <CardTitle className="text-2xl font-bold">Concrete Calculator</CardTitle>
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

            <ConcreteResults
              cubicYards={calculateCubicYards()}
              cubicFeet={calculateCubicFeet()}
              cubicMeters={calculateCubicMeters()}
              bags40lb={calculate40lbBags()}
              bags60lb={calculate60lbBags()}
              bags80lb={calculate80lbBags()}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConcreteCalculator;