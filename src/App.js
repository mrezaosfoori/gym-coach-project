import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "../src/pages/Hero";
import Pasanger from "../src/pages/Pasanger";
import Drives from "../src/pages/Drives";
import AppLayout from "./components/AppLayout";
import Driver from "./pages/Driver";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";

function App() {
  return (
    <Routes>
    
      <Route element={<AppLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
        <Route path="/passngers" element={<Pasanger />} />
        <Route path="/driver" element={<Driver />} />
      </Route>
      <Route path="/drives" element={<Drives />} />

      {/* Catch-all route for 404 */}
    </Routes>
  );
}

export default App;
