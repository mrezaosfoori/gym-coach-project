import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Drives from "../src/pages/Drives";
import AppLayout from "./components/AppLayout";

import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Excrcises from "./pages/Excrcises";
import Chats from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/excrcises" element={<Excrcises />} />

        <Route path="/chat" element={<Chats />} />
      </Route>
      <Route path="/drives" element={<Drives />} />

      {/* Catch-all route for 404 */}
    </Routes>
  );
}

export default App;
