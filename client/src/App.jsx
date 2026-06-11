import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import Compare from "./pages/Compare";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;