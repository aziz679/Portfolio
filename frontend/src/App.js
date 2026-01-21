import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-black min-h-screen">
        <AppRoutes />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
