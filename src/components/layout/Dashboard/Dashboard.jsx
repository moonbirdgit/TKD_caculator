import React from "react";
import Correct from "../../../pages/Correct";
import Other from "../../../pages/Other";
import Total from "../../../pages/Total";
import styles from "./Dashboard.module.scss";

// 大螢幕：三個區塊同時顯示，任何網址都呈現同一個畫面
export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.column}>
        <Correct />
      </div>
      <div className={styles.column}>
        <Other showSummary={false} />
      </div>
      <div className={styles.column}>
        <Total />
      </div>
    </div>
  );
}
