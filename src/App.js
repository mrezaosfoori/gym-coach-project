import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";

import Dashboard from "./pages/_root/Dashboard";
import Clients from "./pages/_root/Clients";
import Excrcises from "./pages/_root/Excrcises";
import Chats from "./pages/_root/Chat";
import AuthLayout from "./pages/_auth/AuthLayout";
import Signin from "./pages/_auth/forms/SigninForm";
import Signup from "./pages/_auth/forms/SignupForm";
import Profile from "./pages/_root/Profile";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/excrcises" element={<Excrcises />} />

        <Route path="/chat" element={<Chats />} />
      </Route>
      <Route path="/profile" element={<Profile />} />

      {/* Catch-all route for 404 */}
    </Routes>
  );
}

export default App;
