import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorResult } from "@/components/CalculatorResult";
import { Blocks, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WallInputs } from "@/components/wall/WallInputs";
import { calculateWallBlocks } from "@/utils/wallCalculations";

const RetainingWallCalculator = () => {
  const navigate = useNavigate();
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [thickness, setThickness] = useState("");
  const [lengthUnit, setLengthUnit] = useState("feet");
  const [heightUnit, setHeightUnit] = useState("feet");
  const [thicknessUnit, setThicknessUnit] = useState("inches");

  const totalBlocks = !isNaN(parseFloat(length)) && 
                     !isNaN(parseFloat(height)) && 
                     !isNaN(parseFloat(thickness)) 
                     ? calculateWallBlocks(
                         parseFloat(length),
                         parseFloat(height),
                         parseFloat(thickness),
                         lengthUnit,
                         heightUnit,
                         thicknessUnit
                       )
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
            <WallInputs
              length={length}
              height={height}
              thickness={thickness}
              lengthUnit={lengthUnit}
              heightUnit={heightUnit}
              thicknessUnit={thicknessUnit}
              onLengthChange={setLength}
              onHeightChange={setHeight}
              onThicknessChange={setThickness}
              onLengthUnitChange={setLengthUnit}
              onHeightUnitChange={setHeightUnit}
              onThicknessUnitChange={setThicknessUnit}
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