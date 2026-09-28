import React from "react";
import Card from "../ui/Card/Card";
import { GRADE_LEVELS, formatScore } from "../../constants/scoring";
import cx from "../../utils/cx";
import styles from "./GradeSelector.module.scss";

// 表現性單一項目：依等級分欄列出可選分數
export default function GradeSelector({ label, value, onChange }) {
  return (
    <Card className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.label}>{label}</h3>
        <span className={styles.value} aria-live="polite">
          {formatScore(value)}
        </span>
      </div>
      <div className={styles.levels} role="group" aria-label={label}>
        {GRADE_LEVELS.map((level) => (
          <div key={level.label} className={styles.level}>
            <span className={styles.levelLabel}>{level.label}</span>
            {level.values.map((option) => {
              const selected = option === value;
              return (
                <button
                  key={option}
                  type="button"
                  className={cx(styles.chip, selected && styles.selected)}
                  aria-pressed={selected}
                  onClick={() => onChange(option)}
                >
                  {formatScore(option)}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </Card>
  );
}
