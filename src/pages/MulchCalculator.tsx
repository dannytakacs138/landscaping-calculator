import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { useNavigate } from "react-router-dom";
import { convertToFeet } from "@/utils/unitConversions";

const MulchCalculator = () => {
  const navigate = useNavigate();
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [lengthUnit, setLengthUnit] = useState("feet");
  const [widthUnit, setWidthUnit] = useState("feet");
  const [depthUnit, setDepthUnit] = useState("inches");

  const calculateCubicYards = () => {
    const l = convertToFeet(parseFloat(length), lengthUnit as any);
    const w = convertToFeet(parseFloat(width), widthUnit as any);
    const d = convertToFeet(parseFloat(depth), depthUnit as any);
    
    if (isNaN(l) || isNaN(w) || isNaN(d)) return 0;
    
    return (l * w * d) / 27;
  };

  const calculateCubicFeet = () => {
    const l = convertToFeet(parseFloat(length), lengthUnit as any);
    const w = convertToFeet(parseFloat(width), widthUnit as any);
    const d = convertToFeet(parseFloat(depth), depthUnit as any);
    
    if (isNaN(l) || isNaN(w) || isNaN(d)) return 0;
    
    return l * w * d;
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
                  d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16"
                />
              </svg>
            </div>
            <CardTitle className="text-2xl font-bold">Mulch Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CalculatorResult
                label="Mulch Needed (Cubic Yards)"
                value={calculateCubicYards()}
                unit="yd³"
              />
              <CalculatorResult
                label="Mulch Needed (Cubic Feet)"
                value={calculateCubicFeet()}
                unit="ft³"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MulchCalculator;