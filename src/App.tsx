import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import CodeEditor from "./pages/CodeEditor";
import JoinRoom from "./components/Room/JoinRoom";
import Home from "./pages/Home";
import GoogleSignInPage from "./pages/GoogleSignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join/:roomId/:roomPassword" element={<JoinRoom />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/codeeditor/:roomId" element={<CodeEditor />} />
      <Route path="/google/:token" element={<GoogleSignInPage />} />
    </Routes>
  );
}

export default App;
