import { CalculatorCard } from "@/components/CalculatorCard";
import { 
  Mountain,
  Shovel, 
  Trees, 
  Construction, 
  Grid,
  Blocks,
  Sprout,
  Leaf,
  Calculator,
  Box
} from "lucide-react";

const calculators = [
  {
    title: "Gravel Calculator",
    description: "Calculate gravel needed for your project",
    icon: <Mountain />,
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
    icon: <Blocks />,
    path: "/wall"
  },
  {
    title: "Grass Seed Calculator",
    description: "Calculate seed requirements",
    icon: <Sprout />,
    path: "/seed"
  },
  {
    title: "Sod Calculator",
    description: "Determine sod coverage",
    icon: <Leaf />,
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
    icon: <Box />,
    path: "/volume"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="container mx-auto py-12 px-4">
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