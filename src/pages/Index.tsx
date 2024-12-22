import { CalculatorCard } from "@/components/CalculatorCard";
import { 
  Shovel, 
  Trees, 
  Construction, 
  Grass, 
  Calculator, 
  Box,
  Ruler,
  Wall,
  Seedling,
  Grid
} from "lucide-react";

const calculators = [
  {
    title: "Gravel Calculator",
    description: "Calculate gravel needed for your project",
    icon: <Box />,
    path: "/gravel"
  },
  {
    title: "Soil Calculator",
    description: "Determine soil requirements",
    icon: <Shovel />,
    path: "/soil"
  },
  {
    title: "Mulch Calculator",
    description: "Calculate mulch coverage",
    icon: <Trees />,
    path: "/mulch"
  },
  {
    title: "Concrete Calculator",
    description: "Estimate concrete volume needed",
    icon: <Construction />,
    path: "/concrete"
  },
  {
    title: "Paver Calculator",
    description: "Calculate pavers needed",
    icon: <Grid />,
    path: "/pavers"
  },
  {
    title: "Retaining Wall Calculator",
    description: "Plan your retaining wall",
    icon: <Wall />,
    path: "/wall"
  },
  {
    title: "Grass Seed Calculator",
    description: "Calculate seed requirements",
    icon: <Seedling />,
    path: "/seed"
  },
  {
    title: "Sod Calculator",
    description: "Determine sod coverage",
    icon: <Grass />,
    path: "/sod"
  },
  {
    title: "Area Calculator",
    description: "Calculate area measurements",
    icon: <Calculator />,
    path: "/area"
  },
  {
    title: "Volume Calculator",
    description: "Calculate volume measurements",
    icon: <Ruler />,
    path: "/volume"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Landscaping Calculator</h1>
          <p className="text-lg text-gray-600">Choose a calculator to get started</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <CalculatorCard key={calc.path} {...calc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;