import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { useNavigate } from "react-router-dom";
import { convertToFeet } from "@/utils/unitConversions";

const PaverCalculator = () => {
  const navigate = useNavigate();
  const [areaLength, setAreaLength] = useState("");
  const [areaWidth, setAreaWidth] = useState("");
  const [paverLength, setPaverLength] = useState("");
  const [paverWidth, setPaverWidth] = useState("");
  const [areaLengthUnit, setAreaLengthUnit] = useState("feet");
  const [areaWidthUnit, setAreaWidthUnit] = useState("feet");
  const [paverLengthUnit, setPaverLengthUnit] = useState("inches");
  const [paverWidthUnit, setPaverWidthUnit] = useState("inches");

  const calculatePaversNeeded = () => {
    const areaL = convertToFeet(parseFloat(areaLength), areaLengthUnit as any);
    const areaW = convertToFeet(parseFloat(areaWidth), areaWidthUnit as any);
    const paverL = convertToFeet(parseFloat(paverLength), paverLengthUnit as any);
    const paverW = convertToFeet(parseFloat(paverWidth), paverWidthUnit as any);
    
    if (isNaN(areaL) || isNaN(areaW) || isNaN(paverL) || isNaN(paverW)) return 0;
    if (paverL === 0 || paverW === 0) return 0;
    
    const areaInSquareFeet = areaL * areaW;
    const paverAreaInSquareFeet = paverL * paverW;
    
    return Math.ceil(areaInSquareFeet / paverAreaInSquareFeet);
  };

  const calculateAreaInSquareFeet = () => {
    const areaL = convertToFeet(parseFloat(areaLength), areaLengthUnit as any);
    const areaW = convertToFeet(parseFloat(areaWidth), areaWidthUnit as any);
    
    if (isNaN(areaL) || isNaN(areaW)) return 0;
    
    return areaL * areaW;
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Paver Calculator</h1>
            <p className="text-gray-600">Calculate the number of pavers needed for your project</p>
          </div>

          <Card className="p-6 mb-6">
            <div className="grid gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Area Dimensions</h2>
                <div className="grid gap-4">
                  <CalculatorInput
                    label="Area Length"
                    value={areaLength}
                    onChange={setAreaLength}
                    placeholder="Enter area length"
                    showUnitSelect
                    selectedUnit={areaLengthUnit}
                    onUnitChange={setAreaLengthUnit}
                  />
                  <CalculatorInput
                    label="Area Width"
                    value={areaWidth}
                    onChange={setAreaWidth}
                    placeholder="Enter area width"
                    showUnitSelect
                    selectedUnit={areaWidthUnit}
                    onUnitChange={setAreaWidthUnit}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Paver Dimensions</h2>
                <div className="grid gap-4">
                  <CalculatorInput
                    label="Paver Length"
                    value={paverLength}
                    onChange={setPaverLength}
                    placeholder="Enter paver length"
                    showUnitSelect
                    selectedUnit={paverLengthUnit}
                    onUnitChange={setPaverLengthUnit}
                  />
                  <CalculatorInput
                    label="Paver Width"
                    value={paverWidth}
                    onChange={setPaverWidth}
                    placeholder="Enter paver width"
                    showUnitSelect
                    selectedUnit={paverWidthUnit}
                    onUnitChange={setPaverWidthUnit}
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CalculatorResult
              label="Pavers Needed"
              value={calculatePaversNeeded()}
              unit="pieces"
            />
            <CalculatorResult
              label="Total Area"
              value={calculateAreaInSquareFeet()}
              unit="ft²"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaverCalculator;