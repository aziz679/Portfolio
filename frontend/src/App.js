import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles/animations.css";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App bg-black min-h-screen">
          <AppRoutes />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
