import React from "react";
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";
import ResetButton from "../ResetButton/ResetButton";
import { PauseIcon, PlayIcon, TimerIcon } from "../ui/Icons";
import { formatDuration } from "../../constants/scoring";
import styles from "./Stopwatch.module.scss";

export default function Stopwatch({ stopwatch, onReset }) {
  const { seconds, running, start, pause } = stopwatch;
  const startLabel = seconds > 0 ? "繼續" : "開始";

  return (
    <Card className={styles.stopwatch}>
      <div className={styles.readout}>
        <TimerIcon size={20} className={styles.icon} />
        <span className="visually-hidden">計時</span>
        <time className={styles.time} data-running={running}>
          {formatDuration(seconds)}
        </time>
      </div>
      <div className={styles.actions}>
        <ResetButton onConfirm={onReset} size="md" className={styles.reset} />
        <Button
          variant={running ? "secondary" : "primary"}
          onClick={running ? pause : start}
          className={styles.toggle}
        >
          {running ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
          {running ? "暫停" : startLabel}
        </Button>
      </div>
    </Card>
  );
}
