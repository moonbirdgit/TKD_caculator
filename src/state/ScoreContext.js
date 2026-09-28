import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useStopwatch from "../hooks/useStopwatch";
import {
  ACCURACY_MAX,
  INITIAL_ACCURACY,
  INITIAL_PRESENTATION,
} from "../constants/scoring";

const ScoreContext = createContext(null);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function ScoreProvider({ children }) {
  const [accuracy, setAccuracy] = useState(INITIAL_ACCURACY);
  const [presentation, setPresentationState] = useState(INITIAL_PRESENTATION);
  const stopwatch = useStopwatch();
  const resetStopwatch = stopwatch.reset;

  const adjustAccuracy = useCallback((delta) => {
    setAccuracy((prev) => clamp(prev + delta, 0, ACCURACY_MAX));
  }, []);

  const setPresentation = useCallback((key, value) => {
    setPresentationState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetAll = useCallback(() => {
    setAccuracy(INITIAL_ACCURACY);
    setPresentationState(INITIAL_PRESENTATION);
    resetStopwatch();
  }, [resetStopwatch]);

  const presentationTotal = Object.values(presentation).reduce(
    (sum, value) => sum + value,
    0
  );

  const value = useMemo(
    () => ({
      accuracy,
      presentation,
      presentationTotal,
      total: accuracy + presentationTotal,
      stopwatch,
      adjustAccuracy,
      setPresentation,
      resetAll,
    }),
    [
      accuracy,
      presentation,
      presentationTotal,
      stopwatch,
      adjustAccuracy,
      setPresentation,
      resetAll,
    ]
  );

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);
  if (!context) throw new Error("useScore must be used inside ScoreProvider");
  return context;
}
