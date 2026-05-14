import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuilderPage from "./pages/BuilderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<BuilderPage />} />
    </Routes>
  );
}

export default App;