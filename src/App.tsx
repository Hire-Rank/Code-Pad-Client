import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import CodeEditor from "./pages/CodeEditor";
import LandingPage from "./components/Landing/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/codeeditor/:roomid" element={<CodeEditor />} />
    </Routes>
  );
}

export default App;
