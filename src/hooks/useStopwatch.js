import { useCallback, useEffect, useMemo, useState } from "react";

// 以時間戳計算經過時間，不會因 setInterval 延遲而累積誤差，
// 並放在 App 層級，切換頁面時計時不會中斷。
export default function useStopwatch() {
  const [accumulatedMs, setAccumulatedMs] = useState(0);
  const [startedAt, setStartedAt] = useState(null);
  const [now, setNow] = useState(() => Date.now());

  const running = startedAt !== null;

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [running]);

  const start = useCallback(() => {
    if (startedAt !== null) return;
    const t = Date.now();
    setNow(t);
    setStartedAt(t);
  }, [startedAt]);

  const pause = useCallback(() => {
    if (startedAt === null) return;
    setAccumulatedMs((ms) => ms + Date.now() - startedAt);
    setStartedAt(null);
  }, [startedAt]);

  const reset = useCallback(() => {
    setAccumulatedMs(0);
    setStartedAt(null);
  }, []);

  const elapsedMs = accumulatedMs + (running ? now - startedAt : 0);
  const seconds = Math.floor(Math.max(0, elapsedMs) / 1000);

  return useMemo(
    () => ({ seconds, running, start, pause, reset }),
    [seconds, running, start, pause, reset]
  );
}
