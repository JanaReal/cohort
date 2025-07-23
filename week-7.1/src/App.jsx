import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
import { Topbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Suspense>
          <Routes>
            <Route path="/landing" Component={Landing}></Route>
            <Route path="/dashboard" Component={Dashboard}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
