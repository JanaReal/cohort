import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";
import { Topbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/landing" Component={Landing}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
