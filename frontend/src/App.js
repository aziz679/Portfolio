import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import EnhancedHeader from "./components/EnhancedHeader";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-slate-950 min-h-screen">
        <EnhancedHeader />
        <AppRoutes />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
