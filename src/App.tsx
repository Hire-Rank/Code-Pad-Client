import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ReactDOM from "react-dom";
import Auth from "./pages/Auth";
import CodeEditor from "./pages/CodeEditor";
import JoinRoom from "./components/Room/JoinRoom";
import Home from "./pages/Home";
import GoogleSignInPage from "./pages/GoogleSignInPage";

const RouteWithTrailingSlash = ({ component: Component, ...rest }) => {
  const location = useLocation();
  if (location.pathname.substr(-1) !== "/") {
    return <Navigate to={`${location.pathname}/`} />;
  }
  return <Component />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/join/:roomId/:roomPassword"
        element={<RouteWithTrailingSlash component={<JoinRoom />} />}
      />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/codeeditor/:roomId"
        element={<RouteWithTrailingSlash component={<CodeEditor />} />}
      />
      <Route
        path="/google/:token"
        element={<RouteWithTrailingSlash component={<GoogleSignInPage />} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
