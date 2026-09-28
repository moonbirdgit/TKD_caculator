import React from "react";
import cx from "../../../utils/cx";
import styles from "./Page.module.scss";

// 每個頁面的共用外框：
// - 是 container query 的容器，內部元件可依「實際可用寬度」調整排版
// - 分頁模式下標題已顯示在 Header，這裡的 h2 只保留給螢幕閱讀器
export default function Page({ title, className, children }) {
  return (
    <section className={styles.page} aria-label={title}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={cx(styles.body, className)}>{children}</div>
    </section>
  );
}
