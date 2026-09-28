import React from "react";
import Card from "../ui/Card/Card";
import Meter from "../ui/Meter/Meter";
import { formatScore } from "../../constants/scoring";
import styles from "./ResultBreakdown.module.scss";

/**
 * groups: [{ label, value, max, items?: [{ key, label, value, max }] }]
 */
export default function ResultBreakdown({ groups }) {
  return (
    <Card className={styles.card}>
      {groups.map((group) => (
        <section key={group.label} className={styles.group}>
          <Row label={group.label} value={group.value} max={group.max} strong />
          {group.items && (
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item.key}>
                  <Row label={item.label} value={item.value} max={item.max} />
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </Card>
  );
}

function Row({ label, value, max, strong = false }) {
  return (
    <div className={strong ? styles.rowStrong : styles.row}>
      <div className={styles.rowHead}>
        <span className={styles.rowLabel}>{label}</span>
        <span className={styles.rowValue}>
          {formatScore(value)}
          <span className={styles.rowMax}> / {formatScore(max)}</span>
        </span>
      </div>
      <Meter value={value} max={max} />
    </div>
  );
}
