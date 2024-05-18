import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";
import { SocketProvider } from "./context/SocketProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <SocketProvider>
        <App />
        <Toaster />
      </SocketProvider>
    </React.StrictMode>
  </BrowserRouter>
);
