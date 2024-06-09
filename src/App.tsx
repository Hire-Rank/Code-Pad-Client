import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import CodeEditor from "./pages/CodeEditor";
import JoinRoom from "./components/Room/JoinRoom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join/:roomId/:roomPassword" element={<JoinRoom />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/codeeditor/:roomId" element={<CodeEditor />} />
    </Routes>
  );
}

export default App;
