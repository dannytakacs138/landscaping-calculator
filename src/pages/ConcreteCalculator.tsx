import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { useNavigate } from "react-router-dom";
import { convertToFeet } from "@/utils/unitConversions";

const ConcreteCalculator = () => {
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
    
    // Convert to cubic yards (27 cubic feet = 1 cubic yard)
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="container mx-auto py-12 px-4">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-emerald-100"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Calculators
        </Button>
        
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Concrete Calculator</h1>
            <p className="text-gray-600">Calculate the amount of concrete needed for your project</p>
          </div>

          <Card className="p-6 mb-6">
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
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CalculatorResult
              label="Concrete Needed (Cubic Yards)"
              value={calculateCubicYards()}
              unit="yd³"
            />
            <CalculatorResult
              label="Concrete Needed (Cubic Feet)"
              value={calculateCubicFeet()}
              unit="ft³"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcreteCalculator;