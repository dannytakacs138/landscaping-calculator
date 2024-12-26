import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { convertToFeet } from "@/utils/unitConversions";
import { SoilInputs } from "@/components/soil/SoilInputs";
import { SoilResults } from "@/components/soil/SoilResults";

const SoilCalculator = () => {
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

  const calculateCubicFeet = () => {
    const area = calculateArea();
    const d = convertToFeet(parseFloat(depth), depthUnit as any);
    return isNaN(d) ? 0 : area * d;
  };

  const calculateCubicYards = () => {
    return calculateCubicFeet() / 27;
  };

  const calculateCubicMeters = () => {
    return calculateCubicFeet() * 0.0283168;
  };

  const calculateBagsNeeded = () => {
    const cubicFeet = calculateCubicFeet();
    return Math.ceil(cubicFeet / 0.75); // Each bag contains 0.75 cubic feet
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
            <CardTitle className="text-2xl font-bold">Soil Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <SoilInputs
              shape={shape}
              setShape={setShape}
              length={length}
              setLength={setLength}
              width={width}
              setWidth={setWidth}
              radius={radius}
              setRadius={setRadius}
              depth={depth}
              setDepth={setDepth}
              lengthUnit={lengthUnit}
              setLengthUnit={setLengthUnit}
              widthUnit={widthUnit}
              setWidthUnit={setWidthUnit}
              radiusUnit={radiusUnit}
              setRadiusUnit={setRadiusUnit}
              depthUnit={depthUnit}
              setDepthUnit={setDepthUnit}
            />
            <SoilResults
              cubicYards={calculateCubicYards()}
              cubicFeet={calculateCubicFeet()}
              cubicMeters={calculateCubicMeters()}
              bagsNeeded={calculateBagsNeeded()}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SoilCalculator;