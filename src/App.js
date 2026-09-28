import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import { ScoreProvider } from "./state/ScoreContext";
import AppShell from "./components/layout/AppShell/AppShell";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

function App() {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    } else {
      console.warn("Google Analytics Measurement ID is not defined.");
    }
  }, []);

  return (
    <ScoreProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App;
