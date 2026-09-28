import React from "react";
import { formatScore } from "../../constants/scoring";
import cx from "../../utils/cx";
import styles from "./ScoreSummary.module.scss";

// 正確 + 表現 = 總分 的一行摘要
export default function ScoreSummary({ accuracy, presentation, total, className }) {
  return (
    <div className={cx(styles.summary, className)}>
      <div className={styles.cell}>
        <span className={styles.label}>正確</span>
        <span className={styles.value}>{formatScore(accuracy)}</span>
      </div>
      <span className={styles.op} aria-hidden="true">+</span>
      <div className={styles.cell}>
        <span className={styles.label}>表現</span>
        <span className={styles.value}>{formatScore(presentation)}</span>
      </div>
      <span className={styles.op} aria-hidden="true">=</span>
      <div className={cx(styles.cell, styles.total)}>
        <span className={styles.label}>總分</span>
        <span className={styles.value}>{formatScore(total)}</span>
      </div>
    </div>
  );
}
