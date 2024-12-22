import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GravelCalculator from "./pages/GravelCalculator";
import SoilCalculator from "./pages/SoilCalculator";
import MulchCalculator from "./pages/MulchCalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gravel" element={<GravelCalculator />} />
        <Route path="/soil" element={<SoilCalculator />} />
        <Route path="/mulch" element={<MulchCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;