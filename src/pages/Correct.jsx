import React from "react";
import Page from "../components/layout/Page/Page";
import ScoreHero from "../components/ScoreHero/ScoreHero";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import DeductionPad from "../components/DeductionPad/DeductionPad";
import { useScore } from "../state/ScoreContext";
import { ACCURACY_MAX } from "../constants/scoring";
import styles from "./Correct.module.scss";

function Correct() {
  const { accuracy, adjustAccuracy, stopwatch, resetAll } = useScore();

  return (
    <Page title="正確性評分" className={styles.layout}>
      <div className={styles.status}>
        <ScoreHero label="正確性" value={accuracy} max={ACCURACY_MAX} />
        <Stopwatch stopwatch={stopwatch} onReset={resetAll} />
      </div>
      <DeductionPad onAdjust={adjustAccuracy} className={styles.pad} />
    </Page>
  );
}

export default Correct;
