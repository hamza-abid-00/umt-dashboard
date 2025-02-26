import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage/SignInPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transcript from "./pages/Transcript/Transcript";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transcript" element={<Transcript />} />
        </Route>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
