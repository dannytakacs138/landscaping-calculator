import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GravelCalculator from "./pages/GravelCalculator";
import SoilCalculator from "./pages/SoilCalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gravel" element={<GravelCalculator />} />
        <Route path="/soil" element={<SoilCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;