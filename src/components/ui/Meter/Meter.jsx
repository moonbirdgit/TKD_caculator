import React from "react";
import cx from "../../../utils/cx";
import styles from "./Meter.module.scss";

// 純視覺的進度條；數值本身應由旁邊的文字提供給輔助技術
export default function Meter({ value, max, className }) {
  const ratio = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  return (
    <div className={cx(styles.track, className)} aria-hidden="true">
      <div className={styles.fill} style={{ transform: `scaleX(${ratio})` }} />
    </div>
  );
}
