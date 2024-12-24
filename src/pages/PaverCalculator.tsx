import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { useNavigate } from "react-router-dom";
import { convertToFeet } from "@/utils/unitConversions";
import { ShapeSelector } from "@/components/gravel/ShapeSelector";

const PaverCalculator = () => {
  const navigate = useNavigate();
  const [shape, setShape] = useState("rectangular");
  const [areaLength, setAreaLength] = useState("");
  const [areaWidth, setAreaWidth] = useState("");
  const [radius, setRadius] = useState("");
  const [paverLength, setPaverLength] = useState("");
  const [paverWidth, setPaverWidth] = useState("");
  const [areaLengthUnit, setAreaLengthUnit] = useState("feet");
  const [areaWidthUnit, setAreaWidthUnit] = useState("feet");
  const [radiusUnit, setRadiusUnit] = useState("feet");
  const [paverLengthUnit, setPaverLengthUnit] = useState("inches");
  const [paverWidthUnit, setPaverWidthUnit] = useState("inches");

  const calculateArea = () => {
    if (shape === "rectangular") {
      const l = convertToFeet(parseFloat(areaLength), areaLengthUnit as any);
      const w = convertToFeet(parseFloat(areaWidth), areaWidthUnit as any);
      return isNaN(l) || isNaN(w) ? 0 : l * w;
    } else {
      const r = convertToFeet(parseFloat(radius), radiusUnit as any);
      return isNaN(r) ? 0 : Math.PI * r * r;
    }
  };

  const calculatePaversNeeded = () => {
    const areaInSquareFeet = calculateArea();
    const paverL = convertToFeet(parseFloat(paverLength), paverLengthUnit as any);
    const paverW = convertToFeet(parseFloat(paverWidth), paverWidthUnit as any);
    
    if (isNaN(areaInSquareFeet) || isNaN(paverL) || isNaN(paverW)) return 0;
    if (paverL === 0 || paverW === 0) return 0;
    
    const paverAreaInSquareFeet = paverL * paverW;
    return Math.ceil(areaInSquareFeet / paverAreaInSquareFeet);
  };

  const calculateAreaInSquareFeet = () => {
    return calculateArea();
  };

  const calculateAreaInSquareMeters = () => {
    return calculateAreaInSquareFeet() * 0.092903;
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
                  d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"
                />
              </svg>
            </div>
            <CardTitle className="text-2xl font-bold">Paver Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Area Dimensions</h2>
              <div className="grid gap-4">
                <ShapeSelector value={shape} onValueChange={setShape} />
                {shape === "rectangular" ? (
                  <>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CalculatorResult
                label="Pavers Needed"
                value={calculatePaversNeeded()}
                unit="pieces"
              />
              <CalculatorResult
                label="Total Area (Square Feet)"
                value={calculateAreaInSquareFeet()}
                unit="ft²"
              />
              <CalculatorResult
                label="Total Area (Square Meters)"
                value={calculateAreaInSquareMeters()}
                unit="m²"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaverCalculator;