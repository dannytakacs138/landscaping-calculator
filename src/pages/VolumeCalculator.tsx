import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorResult } from "@/components/CalculatorResult";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ShapeSelector } from "@/components/volume/ShapeSelector";
import { VolumeInputs } from "@/components/volume/VolumeInputs";
import { calculateCubeVolume, calculateRectangularVolume, calculateCylinderVolume, getUnitCubed } from "@/utils/volumeCalculations";

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
        return calculateCubeVolume(parseFloat(length));
      }
      case "rectangular": {
        if (!length || !width || !height) return 0;
        return calculateRectangularVolume(
          parseFloat(length),
          parseFloat(width),
          parseFloat(height)
        );
      }
      case "cylinder": {
        if (!radius || !height) return 0;
        return calculateCylinderVolume(parseFloat(radius), parseFloat(height));
      }
      default:
        return 0;
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
            <ShapeSelector value={shape} onValueChange={setShape} />
            <div className="grid gap-6">
              <VolumeInputs
                shape={shape}
                length={length}
                width={width}
                height={height}
                radius={radius}
                unit={unit}
                onLengthChange={setLength}
                onWidthChange={setWidth}
                onHeightChange={setHeight}
                onRadiusChange={setRadius}
                onUnitChange={setUnit}
              />
            </div>
            <CalculatorResult
              label="Volume"
              value={calculateVolume()}
              unit={getUnitCubed(unit)}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolumeCalculator;