import React from "react";
import Page from "../components/layout/Page/Page";
import ScoreHero from "../components/ScoreHero/ScoreHero";
import ResultBreakdown from "../components/ResultBreakdown/ResultBreakdown";
import ResetButton from "../components/ResetButton/ResetButton";
import { TimerIcon } from "../components/ui/Icons";
import { useScore } from "../state/ScoreContext";
import {
  ACCURACY_MAX,
  PRESENTATION_CRITERIA,
  PRESENTATION_ITEM_MAX,
  PRESENTATION_MAX,
  TOTAL_MAX,
  formatDuration,
} from "../constants/scoring";
import styles from "./Total.module.scss";

function Total() {
  const { accuracy, presentation, presentationTotal, total, stopwatch, resetAll } =
    useScore();

  const groups = [
    { label: "正確性", value: accuracy, max: ACCURACY_MAX },
    {
      label: "表現性",
      value: presentationTotal,
      max: PRESENTATION_MAX,
      items: PRESENTATION_CRITERIA.map((criterion) => ({
        key: criterion.key,
        label: criterion.label,
        value: presentation[criterion.key],
        max: PRESENTATION_ITEM_MAX,
      })),
    },
  ];

  return (
    <Page title="結果">
      <ScoreHero label="總分" value={total} max={TOTAL_MAX} tone="accent">
        <p className={styles.duration}>
          <TimerIcon size={16} />
          本次時長
          <span className={styles.durationValue}>
            {formatDuration(stopwatch.seconds)}
          </span>
        </p>
      </ScoreHero>
      <ResultBreakdown groups={groups} />
      <ResetButton
        label="重新評分"
        onConfirm={resetAll}
        block
        className={styles.reset}
      />
    </Page>
  );
}

export default Total;
