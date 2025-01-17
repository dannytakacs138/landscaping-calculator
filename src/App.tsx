import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GravelCalculator from "./pages/GravelCalculator";
import SoilCalculator from "./pages/SoilCalculator";
import MulchCalculator from "./pages/MulchCalculator";
import ConcreteCalculator from "./pages/ConcreteCalculator";
import PaverCalculator from "./pages/PaverCalculator";
import RetainingWallCalculator from "./pages/RetainingWallCalculator";
import GrassSeedCalculator from "./pages/GrassSeedCalculator";
import SodCalculator from "./pages/SodCalculator";
import AreaCalculator from "./pages/AreaCalculator";
import VolumeCalculator from "./pages/VolumeCalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gravel" element={<GravelCalculator />} />
        <Route path="/soil" element={<SoilCalculator />} />
        <Route path="/mulch" element={<MulchCalculator />} />
        <Route path="/concrete" element={<ConcreteCalculator />} />
        <Route path="/pavers" element={<PaverCalculator />} />
        <Route path="/wall" element={<RetainingWallCalculator />} />
        <Route path="/seed" element={<GrassSeedCalculator />} />
        <Route path="/sod" element={<SodCalculator />} />
        <Route path="/area" element={<AreaCalculator />} />
        <Route path="/volume" element={<VolumeCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;