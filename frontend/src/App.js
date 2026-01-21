import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MinimalistHeader from "./components/MinimalistHeader";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-black min-h-screen">
        <MinimalistHeader />
        <AppRoutes />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
