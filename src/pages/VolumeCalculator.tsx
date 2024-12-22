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

const VolumeCalculator = () => {
  const navigate = useNavigate();
  const [shape, setShape] = useState("cube");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [radius, setRadius] = useState("");
  const [unit, setUnit] = useState("feet");

  const calculateVolume = () => {
    switch (shape) {
      case "cube": {
        if (!length) return 0;
        return Math.pow(parseFloat(length), 3);
      }
      case "rectangular": {
        if (!length || !width || !height) return 0;
        return parseFloat(length) * parseFloat(width) * parseFloat(height);
      }
      case "cylinder": {
        if (!radius || !height) return 0;
        return Math.PI * Math.pow(parseFloat(radius), 2) * parseFloat(height);
      }
      default:
        return 0;
    }
  };

  const getUnitCubed = () => {
    switch (unit) {
      case "feet":
        return "cu ft";
      case "yards":
        return "cu yd";
      case "meters":
        return "cu m";
      case "inches":
        return "cu in";
      case "centimeters":
        return "cu cm";
      default:
        return "units³";
    }
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
              <Calculator className="h-6 w-6 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Volume Calculator</CardTitle>
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
                  <SelectItem value="cube">Cube</SelectItem>
                  <SelectItem value="rectangular">Rectangular Prism</SelectItem>
                  <SelectItem value="cylinder">Cylinder</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {shape === "cylinder" ? (
                <>
                  <CalculatorInput
                    label="Radius"
                    value={radius}
                    onChange={setRadius}
                    showUnitSelect
                    selectedUnit={unit}
                    onUnitChange={setUnit}
                  />
                  <CalculatorInput
                    label="Height"
                    value={height}
                    onChange={setHeight}
                    showUnitSelect
                    selectedUnit={unit}
                    onUnitChange={setUnit}
                  />
                </>
              ) : (
                <>
                  <CalculatorInput
                    label={shape === "cube" ? "Side Length" : "Length"}
                    value={length}
                    onChange={setLength}
                    showUnitSelect
                    selectedUnit={unit}
                    onUnitChange={setUnit}
                  />
                  {shape === "rectangular" && (
                    <>
                      <CalculatorInput
                        label="Width"
                        value={width}
                        onChange={setWidth}
                        showUnitSelect
                        selectedUnit={unit}
                        onUnitChange={setUnit}
                      />
                      <CalculatorInput
                        label="Height"
                        value={height}
                        onChange={setHeight}
                        showUnitSelect
                        selectedUnit={unit}
                        onUnitChange={setUnit}
                      />
                    </>
                  )}
                </>
              )}
            </div>

            <CalculatorResult
              label="Volume"
              value={calculateVolume()}
              unit={getUnitCubed()}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolumeCalculator;