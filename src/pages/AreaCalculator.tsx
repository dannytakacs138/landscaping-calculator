import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AreaCalculator = () => {
  const navigate = useNavigate();
  const [shape, setShape] = useState("rectangle");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [radius, setRadius] = useState("");
  const [unit, setUnit] = useState("feet");

  const calculateArea = () => {
    switch (shape) {
      case "rectangle": {
        if (!length || !width) return 0;
        return parseFloat(length) * parseFloat(width);
      }
      case "circle": {
        if (!radius) return 0;
        return Math.PI * Math.pow(parseFloat(radius), 2);
      }
      case "square": {
        if (!length) return 0;
        return Math.pow(parseFloat(length), 2);
      }
      default:
        return 0;
    }
  };

  const area = calculateArea();
  const areaInSquareFeet = area;
  const areaInSquareYards = area / 9; // Convert from sq ft to sq yd
  const areaInSquareMeters = area * 0.092903; // Convert from sq ft to sq m

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
              <Calculator className="h-6 w-6 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Area Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Shape
              </label>
              <Select value={shape} onValueChange={setShape}>
                <SelectTrigger>
                  <SelectValue placeholder="Select shape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rectangle">Rectangle</SelectItem>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="circle">Circle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {shape === "circle" ? (
                <CalculatorInput
                  label="Radius"
                  value={radius}
                  onChange={setRadius}
                  showUnitSelect
                  selectedUnit={unit}
                  onUnitChange={setUnit}
                />
              ) : (
                <>
                  <CalculatorInput
                    label={shape === "square" ? "Side Length" : "Length"}
                    value={length}
                    onChange={setLength}
                    showUnitSelect
                    selectedUnit={unit}
                    onUnitChange={setUnit}
                  />
                  {shape === "rectangle" && (
                    <CalculatorInput
                      label="Width"
                      value={width}
                      onChange={setWidth}
                      showUnitSelect
                      selectedUnit={unit}
                      onUnitChange={setUnit}
                    />
                  )}
                </>
              )}
            </div>

            <div className="grid gap-4">
              <CalculatorResult
                label="Area (Square Feet)"
                value={areaInSquareFeet}
                unit="sq ft"
              />
              <CalculatorResult
                label="Area (Square Yards)"
                value={areaInSquareYards}
                unit="sq yd"
              />
              <CalculatorResult
                label="Area (Square Meters)"
                value={areaInSquareMeters}
                unit="sq m"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AreaCalculator;