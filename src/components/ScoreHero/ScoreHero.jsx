import React from "react";
import Card from "../ui/Card/Card";
import Meter from "../ui/Meter/Meter";
import { formatScore } from "../../constants/scoring";
import cx from "../../utils/cx";
import styles from "./ScoreHero.module.scss";

// 大字分數顯示：label、分數 / 滿分、進度條
export default function ScoreHero({ label, value, max, tone = "neutral", children }) {
  return (
    <Card className={cx(styles.hero, styles[tone])}>
      <p className={styles.label}>{label}</p>
      <p className={styles.score} aria-live="polite">
        {/* key 讓數字每次變動都重新播放動畫 */}
        <span key={value} className={styles.value}>
          {formatScore(value)}
        </span>
        <span className={styles.max}>/ {formatScore(max)}</span>
      </p>
      <Meter value={value} max={max} className={styles.meter} />
      {children}
    </Card>
  );
}
