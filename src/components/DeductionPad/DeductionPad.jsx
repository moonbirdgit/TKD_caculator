import React from "react";
import {
  ACCURACY_CORRECTIONS,
  ACCURACY_DEDUCTIONS,
  formatDelta,
  formatScore,
} from "../../constants/scoring";
import cx from "../../utils/cx";
import styles from "./DeductionPad.module.scss";

const vibrate = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(8);
};

// 正確性加減分鍵盤：扣分鍵放大、放在拇指容易按到的下半部
export default function DeductionPad({ onAdjust, className }) {
  const press = (delta) => {
    vibrate();
    onAdjust(delta);
  };

  return (
    <div className={cx(styles.pad, className)}>
      <div className={styles.deductions} role="group" aria-label="扣分">
        {ACCURACY_DEDUCTIONS.map((delta) => (
          <button
            key={delta}
            type="button"
            className={cx(styles.key, styles.deduct)}
            onClick={() => press(delta)}
            aria-label={`扣 ${formatScore(-delta)} 分`}
          >
            {formatDelta(delta)}
          </button>
        ))}
      </div>
      <div className={styles.corrections} role="group" aria-label="加回">
        <span className={styles.groupLabel} aria-hidden="true">
          加回
        </span>
        {ACCURACY_CORRECTIONS.map((delta) => (
          <button
            key={delta}
            type="button"
            className={cx(styles.key, styles.correct)}
            onClick={() => press(delta)}
            aria-label={`加回 ${formatScore(delta)} 分`}
          >
            {formatDelta(delta)}
          </button>
        ))}
      </div>
    </div>
  );
}
